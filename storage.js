// Vizous Interio - Client Database & LocalStorage Engine
// Pre-structured for seamless drop-in integration with MongoDB Atlas / Mongoose

/**
 * Generate a valid 24-character hex ObjectId compatible with MongoDB / BSON
 */
function generateObjectId() {
  const timestamp = Math.floor(Date.now() / 1000).toString(16).padStart(8, '0');
  const machine = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  const pid = Math.floor(Math.random() * 0xffff).toString(16).padStart(4, '0');
  const counter = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return timestamp + machine + pid + counter;
}

export const VizousDB = {
  COLLECTIONS: {
    LEADS: 'vizous_leads',
    ESTIMATES: 'vizous_estimates',
    CHAT_HISTORY: 'vizous_chat_history',
    PINCODES: 'vizous_pincode_checks'
  },

  /**
   * Save a new lead / consultation booking (MongoDB Document Schema)
   */
  saveLead(data) {
    try {
      const leads = this.getLeads();
      const newLead = {
        _id: generateObjectId(),
        fullName: data.name || data.fullName || 'Anonymous Visitor',
        phone: data.phone || '',
        service: data.service || 'Turnkey Interior Design',
        location: data.city || data.location || 'Bhubaneswar, Odisha',
        subject: data.subject || 'Design Consultation Request',
        notes: data.notes || '',
        source: data.source || 'website_modal',
        status: 'new', // new | contacted | in_review | closed
        syncedToAtlas: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      leads.unshift(newLead);
      localStorage.setItem(this.COLLECTIONS.LEADS, JSON.stringify(leads));
      console.log('✅ [VizousDB] Lead saved locally (MongoDB format):', newLead);
      return newLead;
    } catch (e) {
      console.error('❌ [VizousDB] Error saving lead:', e);
      return null;
    }
  },

  getLeads() {
    try {
      const raw = localStorage.getItem(this.COLLECTIONS.LEADS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  /**
   * Save a calculated cost estimate (MongoDB Document Schema)
   */
  saveEstimate(data) {
    try {
      const estimates = this.getEstimates();
      const newEstimate = {
        _id: generateObjectId(),
        config: data.config || '2bhk',
        tier: data.tier || 'premium',
        priceRange: data.priceRange || '',
        details: data.details || '',
        syncedToAtlas: false,
        createdAt: new Date().toISOString()
      };

      estimates.unshift(newEstimate);
      // Keep last 25 estimates
      if (estimates.length > 25) estimates.length = 25;
      localStorage.setItem(this.COLLECTIONS.ESTIMATES, JSON.stringify(estimates));
      return newEstimate;
    } catch (e) {
      console.error('❌ [VizousDB] Error saving estimate:', e);
      return null;
    }
  },

  getEstimates() {
    try {
      const raw = localStorage.getItem(this.COLLECTIONS.ESTIMATES);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  /**
   * Chat conversation persistence
   */
  saveChatMessage(sender, text, meta = {}) {
    try {
      const history = this.getChatHistory();
      const msg = {
        _id: generateObjectId(),
        sender, // 'user' | 'bot'
        text,
        meta,
        timestamp: new Date().toISOString()
      };
      history.push(msg);
      // Keep last 50 messages
      if (history.length > 50) history.shift();
      localStorage.setItem(this.COLLECTIONS.CHAT_HISTORY, JSON.stringify(history));
      return msg;
    } catch (e) {
      return null;
    }
  },

  getChatHistory() {
    try {
      const raw = localStorage.getItem(this.COLLECTIONS.CHAT_HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  clearChatHistory() {
    localStorage.removeItem(this.COLLECTIONS.CHAT_HISTORY);
  },

  /**
   * Pincode verification query logger
   */
  savePincodeCheck(pincode, city, available) {
    try {
      const raw = localStorage.getItem(this.COLLECTIONS.PINCODES);
      const list = raw ? JSON.parse(raw) : [];
      list.unshift({
        _id: generateObjectId(),
        pincode,
        city,
        available,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem(this.COLLECTIONS.PINCODES, JSON.stringify(list.slice(0, 30)));
    } catch (e) {
      // noop
    }
  },

  /**
   * Export collection as JSON string ready for mongoimport into MongoDB Atlas
   * Example: mongoimport --uri "mongodb+srv://..." --collection leads --file vizous_leads.json --jsonArray
   */
  exportToMongoDBJSON(collectionName) {
    let data = [];
    if (collectionName === 'leads') data = this.getLeads();
    else if (collectionName === 'estimates') data = this.getEstimates();
    else if (collectionName === 'chats') data = this.getChatHistory();
    else {
      data = {
        leads: this.getLeads(),
        estimates: this.getEstimates(),
        chatHistory: this.getChatHistory()
      };
    }
    return JSON.stringify(data, null, 2);
  },

  /**
   * Download JSON file directly to user's computer
   */
  downloadMongoDBExport(collectionName = 'leads') {
    const jsonStr = this.exportToMongoDBJSON(collectionName);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vizous_${collectionName}_atlas_ready_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  /**
   * Toast notification system
   */
  showToast(title, message, type = 'success') {
    let container = document.getElementById('vizousToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'vizousToastContainer';
      container.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        z-index: 100000;
        display: flex;
        flex-direction: column;
        gap: 12px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `vizous-toast vizous-toast-${type}`;
    toast.style.cssText = `
      background: #171411;
      color: #FFFFFF;
      border: 1px solid ${type === 'success' ? '#22c55e' : '#A98252'};
      border-left: 4px solid ${type === 'success' ? '#22c55e' : '#A98252'};
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
      border-radius: 6px;
      padding: 14px 18px;
      min-width: 300px;
      max-width: 420px;
      pointer-events: auto;
      font-family: var(--font-sans, -apple-system, sans-serif);
      transform: translateX(30px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    `;

    toast.innerHTML = `
      <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:10px;">
        <div>
          <div style="font-weight:700; font-size:0.9rem; margin-bottom:3px; color:#FFFFFF; display:flex; align-items:center; gap:6px;">
            ${type === 'success' ? '<span style="color:#22c55e;">✔</span>' : '<span style="color:#A98252;">ℹ</span>'}
            ${title}
          </div>
          <div style="font-size:0.8rem; color:#D8C2A0; line-height:1.45;">${message}</div>
        </div>
        <button type="button" style="background:none; border:none; color:#9C9188; font-size:1.1rem; cursor:pointer; line-height:1; padding:0 4px;" aria-label="Close notification">&times;</button>
      </div>
    `;

    const closeBtn = toast.querySelector('button');
    const removeToast = () => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      setTimeout(() => toast.remove(), 300);
    };
    closeBtn.addEventListener('click', removeToast);

    container.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    });

    setTimeout(removeToast, 5000);
  }
};

// Expose globally for developer inspection & console verification
if (typeof window !== 'undefined') {
  window.VizousDB = VizousDB;
}
