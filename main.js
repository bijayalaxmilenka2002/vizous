// Vizous Interio - Flagship Architecture, Client Database & AI Assistant Engine
import { 
  COMPANY_INFO, 
  VALUE_PROPOSITIONS, 
  CATEGORIES, 
  PRODUCTS, 
  GOOGLE_REVIEWS, 
  TRUSTED_PARTNERS, 
  FAQS 
} from './data.js';
import { VizousDB } from './storage.js';

// Expose DB globally for debugging and future MongoDB Atlas integration
window.VizousDB = VizousDB;
window.exportLeadsAsJSON = () => VizousDB.downloadMongoDBExport('leads');
window.getVizousLeads = () => VizousDB.getLeads();

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroLightbox();
  initEstimatorEngine();
  initKitchenTabs();
  initBeforeAfterSlider();
  initReviewsToggle();
  initFaqAccordion();
  initConsultationModal();
  initPincodeChecker();
  initContactPageForm();
  initAIChatbot();
  initVideoModal();
  initImageLightbox();
  initMediaFilter();
  initProjectFilter();
  initBlogFilter();
  initBlogReader();
});

/* ==========================================================================
   1. HEADER & MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initHeader() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('mobileDrawerClose');
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');

  const openDrawer = () => {
    if (drawer) {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (drawer) {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Close when clicking any drawer link
  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeDrawer());
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeDrawer();
      }
    });
  });
}

/* ==========================================================================
   2. HERO MASTER PHOTOGRAPH LIGHTBOX (UNCROPPED FULL-RESOLUTION VIEW)
   ========================================================================== */
function initHeroLightbox() {
  // Hero image is static and non-clickable as per design specifications
}

/* ==========================================================================
   3. INTERIOR COST ESTIMATOR ENGINE (WITH LOCAL DATABASE PERSISTENCE)
   ========================================================================== */
const INR = '\u20B9'; // Safe Unicode Indian Rupee (U+20B9)

const ESTIMATOR_MATRIX = {
  '1bhk': {
    'essential': [`${INR} 1.80 L – ${INR} 2.40 L`, 'Includes Straight Modular Kitchen, 1 Floor-to-Ceiling Wardrobe, Floating TV Console & Shoe Rack'],
    'premium': [`${INR} 2.50 L – ${INR} 3.40 L`, 'Includes Anti-Fingerprint Acrylic Kitchen, Soft-Close Sliding Wardrobe, Fluted TV Panel & LED Profile Lighting'],
    'luxury': [`${INR} 3.50 L – ${INR} 4.80 L`, 'Includes Italian PU Lacquer Kitchen, Master Walk-in Dressing Suite, Saint-Gobain Ceiling & Full Bedroom Suite']
  },
  '2bhk': {
    'essential': [`${INR} 2.50 L – ${INR} 3.50 L`, 'Includes L-Shaped Kitchen with Baskets, 2 Hinged Wardrobes, Living TV Unit, Shoe Rack & 5-Yr Warranty'],
    'premium': [`${INR} 3.20 L – ${INR} 4.80 L`, 'Includes High-Gloss Acrylic Kitchen with Tandem Drawers, 2 Sliding Wardrobes, TV Fluted Panel & False Ceiling'],
    'luxury': [`${INR} 5.00 L – ${INR} 7.20 L`, 'Includes German PU Kitchen, Master Walk-in Wardrobe, Hydraulic Storage Beds & Profile Cove Lighting']
  },
  '3bhk': {
    'essential': [`${INR} 3.80 L – ${INR} 5.20 L`, 'Includes Modular Kitchen, 3 Wardrobes, Living TV Console, Entry Shoe Rack & Traditional Puja Mandir'],
    'premium': [`${INR} 5.50 L – ${INR} 7.80 L`, 'Includes Island/U-Shape Acrylic Kitchen, 3 Sliding Wardrobes, CNC Jali Mandir & 10-Year Comprehensive Warranty'],
    'luxury': [`${INR} 8.50 L – ${INR} 12.50 L`, 'Includes Turnkey Italian PU Kitchen, 3 Walk-in Dressing Suites, Natural Veneer Panelling & False Ceilings']
  },
  '4bhk': {
    'essential': [`${INR} 5.50 L – ${INR} 7.50 L`, 'Includes Modular Kitchen, 4 Wardrobes, Double Living Room Units, Puja Room & Foyer Storage'],
    'premium': [`${INR} 8.00 L – ${INR} 12.00 L`, 'Includes Island Kitchen with Pantry, 4 Designer Wardrobes, Bar Unit, Fluted Panelling & Dual Study Desks'],
    'luxury': [`${INR} 13.00 L – ${INR} 20.00 L`, 'Complete Bespoke Architectural Villa Fit-out with Imported Blum Hardware, Quartz Tops & Acoustic Wall Panelling']
  },
  'kitchen': {
    'essential': [`${INR} 1.20 L – ${INR} 1.80 L`, 'Straight / L-Shape Kitchen with High-Pressure Laminates, Soft-Close Hinges & Stainless Steel Baskets'],
    'premium': [`${INR} 1.90 L – ${INR} 3.20 L`, 'L-Shape / Island Kitchen with Anti-Fingerprint Acrylic Shutters, Hettich Tandem Drawers & Tall Pantry'],
    'luxury': [`${INR} 3.50 L – ${INR} 6.00 L`, 'Italian PU Lacquer / Tinted Glass Kitchen with Blum Aventos Bi-fold Lift-Ups & Kalinga Quartz Tops']
  },
  'commercial': {
    'essential': [`${INR} 850 / sq.ft`, 'Modular Linear Workstations, Wire Management Raceways, Pedestals & Standard Filing Storage'],
    'premium': [`${INR} 1,450 / sq.ft`, 'Acoustic Pinnable Screen Workstations, Managing Director Cabin, Credenzas & Boardroom Table'],
    'luxury': [`${INR} 2,200 / sq.ft`, 'Turnkey Corporate Headquarter Fit-out with Glazed Partitions, Executive Suites & Cafeteria']
  }
};

window.calculateInteriorEstimate = function() {
  const cfgElem = document.getElementById('estConfig');
  const tierElem = document.getElementById('estTier');
  const priceDisplay = document.getElementById('estPriceDisplay');
  const descDisplay = document.getElementById('estDetailsDisplay');

  if (!cfgElem || !tierElem || !priceDisplay || !descDisplay) return null;

  const cfg = cfgElem.value || '2bhk';
  const tier = tierElem.value || 'premium';
  const match = ESTIMATOR_MATRIX[cfg] ? ESTIMATOR_MATRIX[cfg][tier] : null;

  if (match) {
    priceDisplay.textContent = match[0];
    descDisplay.textContent = match[1];

    // Auto-update Lock-in button subject
    const lockInBtn = document.getElementById('estimatorLockInBtn');
    if (lockInBtn) {
      const cfgLabel = cfgElem.options[cfgElem.selectedIndex]?.text || cfg;
      const tierLabel = tierElem.options[tierElem.selectedIndex]?.text || tier;
      lockInBtn.setAttribute('data-subject', `Cost Estimate: ${cfgLabel} (${tierLabel}) - ${match[0]}`);
    }

    return { config: cfg, tier, priceRange: match[0], details: match[1] };
  }
  return null;
};

function initEstimatorEngine() {
  const cfgElem = document.getElementById('estConfig');
  const tierElem = document.getElementById('estTier');
  const saveBtn = document.getElementById('estimatorSaveBtn');
  const waBtn = document.getElementById('estimatorWhatsappQuoteBtn');

  // Interactive Card Selection: Step 1 (Configuration)
  const configCards = document.querySelectorAll('#estConfigGrid .est-config-card');
  configCards.forEach(card => {
    card.addEventListener('click', function() {
      configCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      const val = this.getAttribute('data-val');
      if (cfgElem) {
        cfgElem.value = val;
      }
      window.calculateInteriorEstimate();
    });
  });

  // Interactive Card Selection: Step 2 (Material & Finish Tier)
  const tierCards = document.querySelectorAll('#estTierGrid .est-tier-card');
  tierCards.forEach(card => {
    card.addEventListener('click', function() {
      tierCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      const val = this.getAttribute('data-val');
      if (tierElem) {
        tierElem.value = val;
      }
      window.calculateInteriorEstimate();
    });
  });

  if (cfgElem) cfgElem.addEventListener('change', window.calculateInteriorEstimate);
  if (tierElem) tierElem.addEventListener('change', window.calculateInteriorEstimate);

  // Initial calculation on page load
  window.calculateInteriorEstimate();

  // Save Estimate to Local Database (MongoDB Schema format)
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const estimate = window.calculateInteriorEstimate();
      if (estimate) {
        VizousDB.saveEstimate(estimate);
        VizousDB.showToast(
          'Estimate Saved!',
          `Your estimate of ${estimate.priceRange} has been saved to your local session database.`,
          'success'
        );
      }
    });
  }

  // Send Estimate to WhatsApp
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const cfgElem = document.getElementById('estConfig');
      const tierElem = document.getElementById('estTier');
      const priceDisplay = document.getElementById('estPriceDisplay');

      const cfgName = cfgElem?.options[cfgElem.selectedIndex]?.text || 'Selected Space';
      const tierName = tierElem?.options[tierElem.selectedIndex]?.text || 'Selected Tier';
      const price = priceDisplay ? priceDisplay.textContent : '';

      // Save estimate locally before redirecting
      VizousDB.saveEstimate({ config: cfgElem?.value, tier: tierElem?.value, priceRange: price, details: cfgName });

      const msg = encodeURIComponent(`Hello Vizous Interio, I used your online cost estimator:
- Space: ${cfgName}
- Tier: ${tierName}
- Estimated Range: ${price}
Please schedule a free 3D design consultation and site visit for my home.`);

      window.open(`https://api.whatsapp.com/send?phone=919040087614&text=${msg}`, '_blank');
    });
  }
}

/* ==========================================================================
   4. MODULAR KITCHEN LAYOUT TABS
   ========================================================================== */
window.switchKitchenTab = function(tabId, btn) {
  document.querySelectorAll('.kitchen-tab-pane').forEach(pane => {
    pane.style.display = 'none';
  });
  const target = document.getElementById('ktab-' + tabId);
  if (target) {
    target.style.display = 'block';
  }

  document.querySelectorAll('#kitchenShowcaseSection .tab-btn').forEach(b => {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
};

function initKitchenTabs() {
  const tabs = document.querySelectorAll('#kitchenShowcaseSection .tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
      if (tabId) {
        window.switchKitchenTab(tabId, this);
      }
    });
  });
}

/* ==========================================================================
   5. BEFORE & AFTER TRANSFORMATION SLIDER
   ========================================================================== */
const BA_ROOM_DATA = {
  living: {
    title: 'Living Room & Entertainment Lounge',
    heading: '42-Day Turnkey Handover in Nayapalli, Bhubaneswar',
    desc: 'Transformed from a dusty concrete shell with dangling conduits into a warm, contemporary living sanctuary. Engineered with acoustic fluted oak panelling, zero-glare magnetic track lighting, and a floating Italian marble TV console.',
    beforeImg: '/assets/images/transform_living_before.jpg',
    afterImg: '/assets/images/transform_living_after.jpg',
    timeline: '38 Days Handover',
    material: 'IS:710 Marine Grade BWP',
    lighting: 'Concealed Warm COB LEDs',
    warranty: '10-Year Comprehensive'
  },
  kitchen: {
    title: 'Precision Modular Kitchen Suite',
    heading: 'Boiling-Water Proof Acrylic Kitchen in Patia, Bhubaneswar',
    desc: 'Converted from an unplastered brick shell with bare plumbing outlets into an ergonomic chef culinary haven. Features Calacatta quartz countertops, Blum soft-close pullouts, and dual-tone matte graphite and fluted oak cabinetry.',
    beforeImg: '/assets/images/transform_kitchen_before.jpg',
    afterImg: '/assets/images/transform_kitchen_after.jpg',
    timeline: '42 Days Handover',
    material: '100% BWP Marine Ply',
    lighting: 'Under-Cabinet Profile LEDs',
    warranty: '10-Year Comprehensive'
  },
  bedroom: {
    title: 'Luxury Master Bedroom Suite',
    heading: 'Acoustic Sanctuary Handover at Cuttack Road, Bhubaneswar',
    desc: 'Upgraded from raw unpainted cement and dangling junction boxes into a 5-star master suite. Incorporates a custom velvet upholstered headboard, 1200N German hydraulic platform storage bed, and double-glazed acoustic UPVC window suite.',
    beforeImg: '/assets/images/transform_bedroom_before.jpg',
    afterImg: '/assets/images/transform_bedroom_after.jpg',
    timeline: '35 Days Handover',
    material: 'Acoustic Fluted Oak & Velvet',
    lighting: 'Architectural Bedside Pendants',
    warranty: '10-Year Comprehensive'
  }
};

window.switchBATransformation = function(roomKey, btn) {
  const data = BA_ROOM_DATA[roomKey];
  if (!data) return;

  document.querySelectorAll('.ba-tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }

  const beforeImg = document.getElementById('baBeforeImg');
  const afterImg = document.getElementById('baAfterImg');
  if (beforeImg) {
    beforeImg.style.transition = 'opacity 0.2s ease';
    beforeImg.style.opacity = '0.3';
    setTimeout(() => {
      beforeImg.src = data.beforeImg;
      beforeImg.style.opacity = '1';
    }, 120);
  }
  if (afterImg) {
    afterImg.style.transition = 'opacity 0.2s ease';
    afterImg.style.opacity = '0.3';
    setTimeout(() => {
      afterImg.src = data.afterImg;
      afterImg.style.opacity = '1';
    }, 120);
  }

  const titleElem = document.getElementById('baSpaceTitle');
  const headingElem = document.getElementById('baSpaceHeading');
  const descElem = document.getElementById('baSpaceDesc');
  const timelineElem = document.getElementById('baSpecTimeline');
  const materialElem = document.getElementById('baSpecMaterial');
  const lightingElem = document.getElementById('baSpecLighting');
  const warrantyElem = document.getElementById('baSpecWarranty');

  if (titleElem) titleElem.textContent = data.title;
  if (headingElem) headingElem.textContent = data.heading;
  if (descElem) descElem.textContent = data.desc;
  if (timelineElem) timelineElem.textContent = data.timeline;
  if (materialElem) materialElem.textContent = data.material;
  if (lightingElem) lightingElem.textContent = data.lighting;
  if (warrantyElem) warrantyElem.textContent = data.warranty;

  window.setBASliderPercentage(50);
};

window.setBASliderPercentage = function(pct) {
  const slider = document.getElementById('baContainer');
  const rangeInput = document.getElementById('baRangeInput');
  const afterWrap = document.getElementById('afterImgWrap');
  const handle = document.getElementById('baDivider');

  if (!slider) return;
  const clamped = Math.max(2, Math.min(98, parseFloat(pct)));
  slider.style.setProperty('--slider-pos', `${clamped}%`);
  if (afterWrap) afterWrap.style.width = `${clamped}%`;
  if (handle) handle.style.left = `${clamped}%`;
  if (rangeInput && Math.abs(parseFloat(rangeInput.value) - clamped) > 0.5) {
    rangeInput.value = clamped;
  }
};

function initBeforeAfterSlider() {
  const slider = document.getElementById('baContainer');
  const rangeInput = document.getElementById('baRangeInput');
  if (!slider) return;

  // Initialize at 50%
  window.setBASliderPercentage(50);

  if (rangeInput) {
    rangeInput.addEventListener('input', (e) => {
      window.setBASliderPercentage(e.target.value);
    });
  }

  let isDragging = false;
  const handlePointer = (clientX) => {
    const rect = slider.getBoundingClientRect();
    if (!rect.width) return;
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    window.setBASliderPercentage(pct);
  };

  slider.addEventListener('pointerdown', (e) => {
    isDragging = true;
    slider.setPointerCapture?.(e.pointerId);
    handlePointer(e.clientX);
  });

  window.addEventListener('pointerup', (e) => {
    if (isDragging) {
      isDragging = false;
      try { slider.releasePointerCapture?.(e.pointerId); } catch (_) {}
    }
  });

  window.addEventListener('pointercancel', () => { isDragging = false; });

  slider.addEventListener('pointermove', (e) => {
    if (isDragging) {
      e.preventDefault();
      handlePointer(e.clientX);
    }
  });
}

/* ==========================================================================
   6. VERIFIED GOOGLE REVIEWS TOGGLE
   ========================================================================== */
window.toggleMoreReviews = function() {
  const row = document.getElementById('moreReviewsRow');
  const btnText = document.getElementById('toggleReviewsBtnText');
  const btn = document.getElementById('toggleReviewsBtn');
  if (!row) return;

  const isActive = row.classList.toggle('active');
  if (btnText) {
    btnText.textContent = isActive ? 'Show Fewer Reviews' : 'View More Verified Google Reviews';
  }
  if (btn) {
    const icon = btn.querySelector('svg');
    if (icon) {
      icon.style.transform = isActive ? 'rotate(180deg)' : 'none';
      icon.style.transition = 'transform 0.25s ease';
    }
  }
};

function initReviewsToggle() {
  const btn = document.getElementById('toggleReviewsBtn');
  if (btn && !btn.hasAttribute('data-bound')) {
    btn.setAttribute('data-bound', 'true');
    btn.addEventListener('click', window.toggleMoreReviews);
  }
}

/* ==========================================================================
   7. FAQ ACCORDION ENGINE
   ========================================================================== */
window.toggleFaq = function(el) {
  const item = el.closest('.faq-item');
  if (!item) return;
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(fi => {
    fi.classList.remove('active');
    const ans = fi.querySelector('.faq-answer');
    if (ans) ans.style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    const ans = item.querySelector('.faq-answer');
    if (ans) ans.style.maxHeight = (ans.scrollHeight + 30) + 'px';
  }
};

function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    if (!btn.hasAttribute('data-faq-bound')) {
      btn.setAttribute('data-faq-bound', 'true');
      btn.addEventListener('click', function() {
        window.toggleFaq(this);
      });
    }
  });
}

/* ==========================================================================
   8. CONSULTATION MODAL & ACTION HANDLERS (LOCAL STORAGE & WHATSAPP)
   ========================================================================== */
window.openConsultationModal = function(subject = '') {
  const modal = document.getElementById('consultationModal');
  if (!modal) return;

  const subjInput = document.getElementById('modalSubjectInput');
  if (subjInput) {
    subjInput.value = subject || 'General Design Consultation';
  }

  // Pre-select service dropdown if subject matches a known category
  const serviceSelect = document.getElementById('formService');
  if (serviceSelect && subject) {
    const sLower = subject.toLowerCase();
    if (sLower.includes('kitchen')) serviceSelect.value = 'Modular Kitchen';
    else if (sLower.includes('wardrobe')) serviceSelect.value = 'Bespoke Wardrobes';
    else if (sLower.includes('bed')) serviceSelect.value = 'Luxury Bedroom Suite';
    else if (sLower.includes('office')) serviceSelect.value = 'Commercial Office Furniture';
    else if (sLower.includes('decor') || sLower.includes('panelling') || sLower.includes('floor')) serviceSelect.value = 'Flooring & Wall Panelling';
    else if (sLower.includes('villa') || sLower.includes('home') || sLower.includes('flat')) serviceSelect.value = 'Full Home Interior (2BHK/3BHK/Villa)';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  const nameInput = document.getElementById('formName');
  if (nameInput) setTimeout(() => nameInput.focus(), 150);
};

window.closeConsultationModal = function() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initConsultationModal() {
  const modal = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const form = document.getElementById('consultationForm');

  // Bind all trigger buttons with [data-action="consult"]
  document.querySelectorAll('[data-action="consult"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const subject = this.getAttribute('data-subject') || this.getAttribute('title') || this.innerText.trim();
      window.openConsultationModal(subject);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeConsultationModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeConsultationModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      window.closeConsultationModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || '';
      const phone = document.getElementById('formPhone')?.value.trim() || '';
      const service = document.getElementById('formService')?.value || 'Interior Design';
      const city = document.getElementById('formCity')?.value.trim() || 'Bhubaneswar';
      const subject = document.getElementById('modalSubjectInput')?.value || 'Consultation Request';

      if (!name || !phone) {
        alert('Please enter your Name and Mobile Number.');
        return;
      }

      // 1. Save Lead into Local Database (MongoDB Schema compliant)
      const savedLead = VizousDB.saveLead({
        name,
        phone,
        service,
        city,
        subject,
        source: 'consultation_modal'
      });

      // 2. Dispatch notification Toast
      VizousDB.showToast(
        'Consultation Confirmed!',
        `Thank you ${name}. Your request for ${service} has been logged in our database. Our architect will contact you shortly.`,
        'success'
      );

      // 3. Format WhatsApp Dispatch Message
      const waMsg = encodeURIComponent(`*New Consultation Request from Vizous Website:*
• *Name:* ${name}
• *Phone:* ${phone}
• *Service:* ${service}
• *Location:* ${city}
• *Scope/Subject:* ${subject}
• *Ref ID:* ${savedLead?._id || 'N/A'}`);

      window.open(`https://api.whatsapp.com/send?phone=919040087614&text=${waMsg}`, '_blank');

      // 4. Reset & Close
      form.reset();
      window.closeConsultationModal();
    });
  }
}

/* ==========================================================================
   9. PINCODE COVERAGE VERIFICATION KEY
   ========================================================================== */
function initPincodeChecker() {
  document.querySelectorAll('.pincode-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const entered = prompt(
        'Enter your 6-digit Pincode to check Vizous Factory Direct Service coverage in Odisha & Chhattisgarh:\n(e.g., 751006 for Laxmisagar, 751024 for Patia, 753001 for Cuttack, 492001 for Raipur)',
        '751006'
      );

      if (!entered) return;
      const clean = entered.trim();

      // Service rules: Odisha pincodes (75xxxx, 76xxxx) and Chhattisgarh (49xxxx)
      const isOdisha = /^7[5-6]\d{4}$/.test(clean);
      const isRaipur = /^49\d{4}$/.test(clean);
      const isAvailable = isOdisha || isRaipur;

      VizousDB.savePincodeCheck(clean, isOdisha ? 'Bhubaneswar / Odisha' : (isRaipur ? 'Raipur' : 'Other'), isAvailable);

      if (isAvailable) {
        VizousDB.showToast(
          'Service Available! ✔',
          `Pincode ${clean} is fully covered with free 3D site measurement, in-house factory fabrication, and 45-day guaranteed handover!`,
          'success'
        );
        window.openConsultationModal(`Pincode Verified: ${clean}`);
      } else {
        VizousDB.showToast(
          'Outstation Inquiry Logged',
          `Pincode ${clean} is outside our direct delivery zone, but our turnkey architectural team handles villa projects across Eastern India.`,
          'info'
        );
        window.openConsultationModal(`Outstation Pincode Inquiry: ${clean}`);
      }
    });
  });
}

/* ==========================================================================
   10. CONTACT PAGE FORM HANDLER (WITH LOCAL STORAGE DATABASE)
   ========================================================================== */
function initContactPageForm() {
  const contactForm = document.getElementById('pageContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const service = document.getElementById('contactService')?.value || 'Interior Design';
    const loc = document.getElementById('contactLocation')?.value.trim() || 'Bhubaneswar';
    const msg = document.getElementById('contactMessage')?.value.trim() || '';

    // Save lead into Local Database
    const saved = VizousDB.saveLead({
      name,
      phone,
      service,
      city: loc,
      notes: msg,
      subject: 'Contact Us Page Inquiry',
      source: 'contact_page'
    });

    const successElem = document.getElementById('contactSuccessMsg');
    if (successElem) {
      successElem.style.display = 'block';
      successElem.innerHTML = `<strong>Thank you, ${name}!</strong> Your consultation request for <em>${loc}</em> has been safely logged in our database (Ref ID: <code>${saved?._id}</code>). Our team will call you at ${phone} within 2 hours.`;
    }

    VizousDB.showToast(
      'Message Received!',
      `Thank you ${name}. Your message has been stored in local database and dispatched.`,
      'success'
    );

    const waMsg = encodeURIComponent(`*New Inquiry from Vizous Contact Page:*
• *Name:* ${name}
• *Phone:* ${phone}
• *Service:* ${service}
• *Location:* ${loc}
• *Message:* ${msg}`);

    window.open(`https://api.whatsapp.com/send?phone=919040087614&text=${waMsg}`, '_blank');
    contactForm.reset();
  });
}

/* ==========================================================================
   11. AI CHATBOT ENGINE ("VIZOUS DESIGN ASSISTANT") WITH DATABASE PERSISTENCE
   ========================================================================== */
let chatSessionMessages = [];

function initAIChatbot() {
  const launcher = document.getElementById('chatbotLauncher');
  const panel = document.getElementById('chatbotPanel');
  const closeBtn = document.getElementById('chatCloseBtn');
  const resetBtn = document.getElementById('chatResetBtn');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  const stream = document.getElementById('chatMessagesStream');

  if (!launcher || !panel) return;

  // Restore past chat history from local database
  const pastHistory = VizousDB.getChatHistory();
  if (pastHistory && pastHistory.length > 0 && stream) {
    pastHistory.forEach(msg => {
      if (msg.sender === 'user') {
        renderUserBubble(msg.text);
      } else {
        renderBotBubble(msg.text, msg.meta?.suggested || [], msg.meta?.actions || (msg.meta?.action ? [msg.meta.action] : []));
      }
    });
  }

  // Welcome greeting helper
  const showWelcomeGreeting = () => {
    const welcomeText = "Hello! Welcome to Vizous Interio. I am your architectural design assistant. I can help you explore modular kitchens, custom wardrobes, estimate interior costs, or arrange a free 3D design consultation in Bhubaneswar. How can I assist you today?";
    const welcomePills = [
      'Modular kitchen designs',
      'Custom wardrobe designs',
      'Calculate interior cost',
      'Showroom address in Bhubaneswar',
      'Book free design session'
    ];
    appendBotMessage(welcomeText, welcomePills);
  };

  // Toggle Launcher
  launcher.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = panel.classList.toggle('active');
    launcher.setAttribute('aria-expanded', String(isActive));
    if (isActive) {
      if (stream && stream.children.length === 0) {
        showWelcomeGreeting();
      }
      setTimeout(() => input?.focus(), 120);
    }
  });

  // Close Button
  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.remove('active');
    launcher.setAttribute('aria-expanded', 'false');
  });

  // Reset / Clear Conversation Button
  resetBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (stream) stream.innerHTML = '';
    VizousDB.clearChatHistory();
    chatSessionMessages = [];
    showWelcomeGreeting();
    VizousDB.showToast('Conversation reset. How can we help you?', 'info');
  });

  // Close when clicking outside panel and launcher
  document.addEventListener('click', (e) => {
    if (panel.classList.contains('active') && !panel.contains(e.target) && !launcher.contains(e.target)) {
      panel.classList.remove('active');
      launcher.setAttribute('aria-expanded', 'false');
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('active')) {
      panel.classList.remove('active');
      launcher.setAttribute('aria-expanded', 'false');
    }
  });

  const handleSend = () => {
    const text = (input.value || '').trim();
    if (!text) return;
    input.value = '';

    // Render User Message & Save to DB
    appendUserMessage(text);
    VizousDB.saveChatMessage('user', text);
    chatSessionMessages.push({ sender: 'user', text });

    // Show Typing Indicator
    const typingElem = showTypingIndicator();

    // Natural simulated architectural response delay (400ms - 550ms)
    setTimeout(() => {
      if (typingElem) typingElem.remove();

      // Check if message contains a phone number for automatic lead registration
      const phoneRegex = /(?:\+?91[\s.-]?)?[6-9]\d{9}\b/;
      const match = text.match(phoneRegex);

      let botResponse;

      if (match) {
        const cleanedPhone = match[0].replace(/[\s.-]/g, '');
        // Persist Lead Document into MongoDB Atlas-ready localStorage
        VizousDB.saveLead({
          name: 'Chat Lead',
          phone: cleanedPhone,
          service: 'Interior Consultation Request',
          location: 'Bhubaneswar',
          notes: `Contact captured via Vizous Design Assistant Chat: "${text}"`,
          source: 'Vizous Assistant'
        });

        VizousDB.showToast(`Consultation request saved for ${cleanedPhone}!`, 'success');

        botResponse = {
          text: `Thank you! We've registered your consultation request with our senior architectural design team in Bhubaneswar. An interior architect will contact you shortly at ${cleanedPhone} to review your layout and share 3D visual concepts.`,
          suggested: ['View Modular Kitchens', 'Calculate interior cost', 'Showroom directions'],
          actions: [
            { type: 'modal', subject: `Priority Consultation Callback (${cleanedPhone})`, label: 'Pick Preferred Time Slot' },
            { type: 'whatsapp', text: `Hi Vizous Interio, I requested a consultation via your website assistant. My contact is ${cleanedPhone}.`, label: 'WhatsApp Us Now' },
            { type: 'call', phone: '+919040087614', label: 'Call Studio (+91 90400 87614)' }
          ]
        };
      } else {
        botResponse = getArchitecturalAssistantResponse(text);
      }

      const actionsList = botResponse.actions || (botResponse.action ? [botResponse.action] : []);
      appendBotMessage(botResponse.text, botResponse.suggested || [], actionsList);
      VizousDB.saveChatMessage('bot', botResponse.text, { suggested: botResponse.suggested, actions: actionsList });
      chatSessionMessages.push({ sender: 'bot', text: botResponse.text });
    }, 450);
  };

  sendBtn?.addEventListener('click', handleSend);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

function renderUserBubble(text) {
  const stream = document.getElementById('chatMessagesStream');
  if (!stream) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg chat-msg-user';
  msgDiv.innerHTML = `<div class="chat-bubble">${escapeHtml(text)}</div>`;
  stream.appendChild(msgDiv);
  stream.scrollTop = stream.scrollHeight;
}

function appendUserMessage(text) {
  renderUserBubble(text);
}

function formatBotMessageHtml(text) {
  if (!text) return '';
  let escaped = escapeHtml(text);
  // Support **bold** markdown tags
  escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return escaped;
}

function renderBotBubble(text, suggested = [], actions = []) {
  const stream = document.getElementById('chatMessagesStream');
  if (!stream) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg chat-msg-bot';

  let actionsHtml = '';
  if (actions && actions.length > 0) {
    const actionBtns = actions.map(act => {
      if (act.type === 'navigate') {
        return `<a href="${act.url}" class="chat-action-btn">${escapeHtml(act.label)} →</a>`;
      }
      if (act.type === 'modal') {
        return `<button type="button" class="chat-action-btn" onclick="window.openConsultationModal('${escapeHtml(act.subject || 'Design Consultation')}')">${escapeHtml(act.label)} →</button>`;
      }
      if (act.type === 'scroll') {
        return `<a href="${act.target}" class="chat-action-btn secondary" onclick="document.querySelector('${act.target}')?.scrollIntoView({behavior:'smooth'}); return false;">${escapeHtml(act.label)} ↓</a>`;
      }
      if (act.type === 'map') {
        return `<a href="${act.url}" target="_blank" rel="noopener noreferrer" class="chat-action-btn secondary">${escapeHtml(act.label)} ↗</a>`;
      }
      if (act.type === 'whatsapp') {
        const encoded = encodeURIComponent(act.text || 'Hi Vizous Interio');
        return `<a href="https://api.whatsapp.com/send?phone=919040087614&text=${encoded}" target="_blank" rel="noopener noreferrer" class="chat-action-btn whatsapp-action">${escapeHtml(act.label)}</a>`;
      }
      if (act.type === 'call') {
        return `<a href="tel:${act.phone || '+919040087614'}" class="chat-action-btn secondary">${escapeHtml(act.label)}</a>`;
      }
      return '';
    }).filter(Boolean).join('');

    if (actionBtns) {
      actionsHtml = `<div class="chat-actions-group">${actionBtns}</div>`;
    }
  }

  let pillsHtml = '';
  if (suggested && suggested.length > 0) {
    pillsHtml = `
      <div class="chat-suggested-pills">
        ${suggested.map(s => `<button type="button" class="suggested-pill" onclick="window.sendSuggestedChat('${escapeHtml(s)}')">${escapeHtml(s)}</button>`).join('')}
      </div>
    `;
  }

  msgDiv.innerHTML = `
    <div class="chat-bubble">
      ${formatBotMessageHtml(text)}
      ${actionsHtml}
    </div>
    ${pillsHtml}
  `;
  stream.appendChild(msgDiv);
  stream.scrollTop = stream.scrollHeight;
}

function appendBotMessage(text, suggested = [], actions = []) {
  renderBotBubble(text, suggested, actions);
}

window.sendSuggestedChat = function(query) {
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  if (input && sendBtn) {
    input.value = query;
    sendBtn.click();
  }
};

function showTypingIndicator() {
  const stream = document.getElementById('chatMessagesStream');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  if (stream) {
    stream.appendChild(typingDiv);
    stream.scrollTop = stream.scrollHeight;
  }
  return typingDiv;
}

/**
 * Intelligent Grounded Architectural Assistant Knowledge Engine
 */
function getArchitecturalAssistantResponse(text) {
  const q = text.toLowerCase().trim();

  // 1. SPECIFIC DIRECTIONS & MAP QUERY
  if (q.includes('direction') || q.includes('how to reach') || q.includes('map') || q.includes('route') || q.includes('landmark') || q.includes('near sunshine')) {
    return {
      text: "📍 **Directions to Vizous Experience Centre**:\n\n• **Address**: 1st Floor, Laxmi Sagar Square, Plot 301/1516, Cuttack Road, Bhubaneswar - 751006.\n• **Landmark**: Situated directly at Laxmi Sagar Square, near Sunshine Hospital (Budheswari Colony).\n• **Timings**: 10:00 AM – 8:30 PM (Open all 7 days).\n• **Parking**: Dedicated customer parking available right in front.",
      suggested: ['Book showroom visit', 'Call showroom at +91 90400 87614', 'Factory address at Bhagabanpur'],
      actions: [
        { type: 'map', url: 'https://maps.google.com/?q=Vizous+Interio+Laxmi+Sagar+Bhubaneswar', label: 'Open in Google Maps' },
        { type: 'whatsapp', text: 'Hi Vizous Interio, please send Google Maps live location for your Laxmisagar showroom.', label: 'Get Location on WhatsApp' },
        { type: 'modal', subject: 'Showroom Visit Booking', label: 'Reserve Visit Slot' }
      ]
    };
  }

  // 2. SHOWROOM VISIT & APPOINTMENT BOOKING
  if (q.includes('book showroom') || q.includes('schedule visit') || q.includes('book visit') || q.includes('appointment') || q.includes('come today') || q.includes('visit today') || q.includes('visit tomorrow')) {
    return {
      text: "🏛️ **Book Your Showroom Experience**:\n\nYou are warmly invited to visit our Flagship Experience Centre at Laxmi Sagar Square! Our senior architects will give you a personalized walkthrough of:\n\n• 6 Real Modular Kitchen configurations\n• Walk-in closets with sensor LED lighting\n• 100+ shutter finish samples (Acrylic, PU, Glass)\n• 3D architectural review of your floor plan",
      suggested: ['Get directions to showroom', 'Calculate interior cost', 'Modular kitchen designs'],
      actions: [
        { type: 'modal', subject: 'Experience Centre Walkthrough & 3D Session', label: 'Pick Preferred Time Slot' },
        { type: 'call', phone: '+919040087614', label: 'Call Studio (+91 90400 87614)' }
      ]
    };
  }

  // 3. SHOWROOM TIMINGS & OPENING HOURS
  if (q.includes('timing') || q.includes('hours') || q.includes('open today') || q.includes('sunday') || q.includes('closing time')) {
    return {
      text: "🕒 **Vizous Operating Timings**:\n\n• **Laxmi Sagar Experience Centre**: 10:00 AM – 8:30 PM (All 7 Days, including Sundays).\n• **Bhagabanpur Factory Plant**: 9:00 AM – 6:30 PM (Monday through Saturday).\n• **Raipur Branch Studio**: 10:00 AM – 7:30 PM (Monday through Saturday).\n\nWalk-ins are always welcome!",
      suggested: ['Get directions to showroom', 'Book showroom visit', 'Call showroom at +91 90400 87614'],
      actions: [
        { type: 'map', url: 'https://maps.google.com/?q=Vizous+Interio+Laxmi+Sagar+Bhubaneswar', label: 'Open in Google Maps' },
        { type: 'call', phone: '+919040087614', label: 'Call +91 90400 87614' }
      ]
    };
  }

  // 4. DIRECT CALL / PHONE NUMBER REQUEST
  if ((q.includes('call') && !q.includes('calculate')) || q.includes('phone') || q.includes('mobile') || q.includes('hotline') || q.includes('number')) {
    return {
      text: "📞 **Vizous Senior Design Hotlines**:\n\n• **Bhubaneswar Studio**: +91 90400 87614 (10:00 AM – 8:30 PM)\n• **Customer Care**: +91 95892 77465\n• **Raipur Branch**: +91 98932 18906\n• **Official Email**: info@vizous.in\n\nClick below to call our design desk right away or leave your contact number in this chat for an immediate callback.",
      suggested: ['Showroom address in Bhubaneswar', 'Calculate interior cost', 'Book free design session'],
      actions: [
        { type: 'call', phone: '+919040087614', label: 'Call +91 90400 87614' },
        { type: 'whatsapp', text: 'Hi Vizous Interio, I would like to speak with an interior architect.', label: 'WhatsApp Us' },
        { type: 'modal', subject: 'Priority Callback Request', label: 'Request Architect Callback' }
      ]
    };
  }

  // 5. FACTORY & IN-HOUSE MANUFACTURING (BHAGABANPUR)
  if (q.includes('factory') || q.includes('bhagabanpur') || q.includes('plant') || q.includes('patrapada') || q.includes('cnc') || q.includes('machinery') || q.includes('manufacturing')) {
    return {
      text: "🏭 **Vizous In-House Manufacturing Facility**:\n\n• **Location**: Plot #12, Bhagabanpur Industrial Estate, Patrapada, Bhubaneswar - 751019.\n• **Capacity**: 15,000+ sq.ft automated manufacturing unit.\n• **Technology**: German Homag CNC beam saws, automated edgebanders & multi-spindle boring machines.\n• **Benefit**: Zero middleman markups (saves 20-30%) and zero on-site carpenter delays or dust.",
      suggested: ['Schedule a factory visit', 'Showroom address in Bhubaneswar', '10-Year Warranty & Materials'],
      actions: [
        { type: 'navigate', url: 'about.html#factoryTourSection', label: 'Explore Factory Plant' },
        { type: 'modal', subject: 'Guided Factory Tour Request', label: 'Book Factory Walkthrough' }
      ]
    };
  }

  // 6. PRICING & COST ESTIMATES
  if (q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('per sq') || q.includes('sqft') || q.includes('sq.ft') || q.includes('budget') || q.includes('how much') || q.includes('estimate') || q.includes('quote') || q.includes('package') || q.includes('bhk')) {
    if (q.includes('kitchen')) {
      return {
        text: "🍳 **Modular Kitchen Factory-Direct Pricing**:\n\n• **Straight Layout**: ₹95,000 – ₹1,80,000\n• **L-Shaped Layout**: ₹1,45,000 – ₹3,20,000\n• **Parallel Layout**: ₹1,60,000 – ₹3,40,000\n• **U-Shaped Layout**: ₹2,10,000 – ₹4,20,000\n• **Island / Peninsular**: ₹2,80,000 – ₹5,50,000+\n\n*Built with 100% IS:710 Marine Grade BWP Plywood and soft-close German hardware with a 10-Year Written Warranty.*",
        suggested: ['View 6 kitchen layouts', 'Acrylic vs Laminate finish', 'Book free site measurement'],
        actions: [
          { type: 'modal', subject: 'Kitchen Quote Request', label: 'Get Itemized 3D Quote' },
          { type: 'navigate', url: 'modular-kitchen.html', label: 'View 6 Kitchen Layouts' },
          { type: 'whatsapp', text: 'Hi Vizous Interio, I would like to get a quote for a modular kitchen.', label: 'WhatsApp for Quote' }
        ]
      };
    }

    if (q.includes('wardrobe')) {
      return {
        text: "🚪 **Custom Wardrobe Pricing**:\n\n• **2-Shutter Sliding**: ₹65,000 – ₹1,10,000\n• **3-Shutter Sliding**: ₹1,15,000 – ₹1,85,000\n• **Floor-to-Ceiling 4-Shutter**: ₹1,90,000 – ₹2,60,000+\n• **Walk-in Closets**: ₹1,40,000 – ₹3,50,000+\n\n*Includes anti-termite marine ply carcass, German sliding channels, and sensor profile LED illumination.*",
        suggested: ['Walk-in wardrobes', 'Sliding wardrobes', 'Book designer consultation'],
        actions: [
          { type: 'navigate', url: 'wardrobes.html', label: 'View Wardrobes' },
          { type: 'modal', subject: 'Wardrobe Pricing Request', label: 'Get Wardrobe 3D Quote' }
        ]
      };
    }

    if (q.includes('sqft') || q.includes('sq.ft') || q.includes('per sq')) {
      return {
        text: "📐 **Turnkey Pricing Per Square Foot**:\n\n• **Essential Craft**: ₹1,200 – ₹1,450 / sq.ft (BWP plywood, scratch-resistant laminates, soft-close hinges)\n• **Premium Contemporary**: ₹1,550 – ₹1,950 / sq.ft (Anti-fingerprint acrylic, Hafele hardware, designer lighting)\n• **Luxury Elite**: ₹2,100 – ₹2,600+ / sq.ft (PU lacquer, fluted panels, sintered stone, motorized Blum fittings)\n\n*Direct factory pricing saves you 20-30% compared to typical design agencies.*",
        suggested: ['2BHK interior design', '3BHK interior design', 'Book free design session'],
        actions: [
          { type: 'modal', subject: 'Sq.Ft Rate Consultation', label: 'Get Detailed Estimate' },
          { type: 'call', phone: '+919040087614', label: 'Call Studio (+91 90400 87614)' }
        ]
      };
    }

    return {
      text: "🏠 **Complete Home Interior Turnkey Estimates**:\n\n• **1BHK**: ₹1.80L – ₹2.80L\n• **2BHK**: ₹3.20L – ₹4.80L\n• **3BHK**: ₹5.50L – ₹7.80L\n• **4BHK / Villa**: ₹9.00L – ₹15.00L+\n\n*Package includes custom modular kitchen, bedroom wardrobes, TV unit, false ceiling, and lighting backed by a 45-day handover guarantee.*",
      suggested: ['2BHK interior package', '3BHK interior package', 'Book free site measurement'],
      actions: [
        { type: 'modal', subject: 'Full Home Budget Consultation', label: 'Get Itemized 3D Quote' },
        { type: 'call', phone: '+919040087614', label: 'Speak with Designer' }
      ]
    };
  }

  // 7. MODULAR KITCHENS
  if (q.includes('kitchen') || q.includes('cook') || q.includes('island') || q.includes('chimney') || q.includes('countertop')) {
    return {
      text: "🍳 **Vizous Bespoke Modular Kitchens**:\n\nEngineered specifically for Indian culinary habits — turmeric resistance, heavy spices, and continuous wet grinding.\n\n• **6 Layouts**: L-Shape, U-Shape, Island, Parallel, Straight, Peninsular\n• **Carcass**: 100% Certified IS:710 Marine Grade BWP Plywood\n• **Hardware**: German Hettich & Blum soft-close fittings\n• **Warranty**: 10-Year Comprehensive Written Warranty",
      suggested: ['Explore Kitchen Layouts', 'Acrylic vs Laminate finish', 'Book free site measurement', 'Showroom address in Bhubaneswar'],
      actions: [
        { type: 'navigate', url: 'modular-kitchen.html', label: 'Explore 6 Kitchen Layouts' },
        { type: 'modal', subject: 'Modular Kitchen Consultation', label: 'Book 3D Design Session' }
      ]
    };
  }

  // 8. WARDROBES & CLOSETS
  if (q.includes('wardrobe') || q.includes('closet') || q.includes('almirah') || q.includes('sliding') || q.includes('dressing')) {
    return {
      text: "🚪 **Custom Wardrobe Architecture**:\n\nMaximized storage crafted for your exact ceiling height and bedroom dimensions.\n\n• **Configurations**: Floor-to-Ceiling Sliding, Walk-in Closets, Hinged Openable\n• **Finishes**: Anti-fingerprint acrylic, tinted lacquered glass, PU lacquer\n• **Accessories**: Pull-out trouser organizers, jewelry drawers, sensor LED profiles\n• **Hardware**: German soft-close sliding channels",
      suggested: ['Walk-in wardrobes', 'Calculate wardrobe cost', 'Book designer consultation'],
      actions: [
        { type: 'navigate', url: 'wardrobes.html', label: 'Explore Wardrobes' },
        { type: 'modal', subject: 'Custom Wardrobe Consultation', label: 'Book Designer Consultation' }
      ]
    };
  }

  // 9. LUXURY BEDS & BEDROOM FURNITURE
  if (q.includes('bed') || q.includes('bedroom') || q.includes('hydraulic') || q.includes('storage bed') || q.includes('mattress')) {
    return {
      text: "🛏️ **Luxury Bed Collection**:\n\n• **Hydraulic Storage Beds**: Heavy-duty German gas-lift cylinders for effortless lifting with dust-sealed under-bed storage.\n• **Designer Headboards**: Velvet, leatherette, and fluted acoustic wooden paneling.\n• **Configurations**: King (72x78), Queen (60x78), Single, and custom mattress sizes.\n• **Carcass**: 100% IS:710 Marine Grade BWP Plywood with 10-Year Warranty.",
      suggested: ['View Bed Collection', 'Calculate interior cost', 'Book free design session'],
      actions: [
        { type: 'navigate', url: 'beds.html', label: 'View Bed Collection' },
        { type: 'modal', subject: 'Luxury Bed Inquiry', label: 'Request Custom Size' }
      ]
    };
  }

  // 10. LIVING ROOM, TV UNITS & MANDIR
  if (q.includes('living') || q.includes('tv') || q.includes('mandir') || q.includes('puja') || q.includes('pooja') || q.includes('temple') || q.includes('louver') || q.includes('fluted') || q.includes('sofa')) {
    return {
      text: "🛋️ **Living Room & Sacred Spaces Architecture**:\n\n• **Floating TV Consoles**: Sintered stone marble cladding, fluted acoustic louvers, concealed wire channels.\n• **Sacred Puja Mandirs**: Custom CNC jaali carving, backlit onyx marble sanctum, brass bell fittings.\n• **Partitions & Foyer**: Open wooden screen dividers and shoe consoles.",
      suggested: ['View completed projects', 'Calculate 2BHK interior cost', 'Book free design session'],
      actions: [
        { type: 'navigate', url: 'modular-furniture.html', label: 'View Living & Mandirs' },
        { type: 'navigate', url: 'our-work.html', label: 'Explore Portfolio' },
        { type: 'modal', subject: 'Living Room Consultation', label: 'Request 3D Layout' }
      ]
    };
  }

  // 11. COMMERCIAL & OFFICE FURNITURE
  if (q.includes('office') || q.includes('commercial') || q.includes('workstation') || q.includes('boardroom') || q.includes('conference') || q.includes('director') || q.includes('millet bhavan')) {
    return {
      text: "🏢 **Commercial & Corporate Interiors**:\n\n• **Executive Suites**: Monumental director desks and credenzas.\n• **Workstation Clusters**: Aluminum cable raceways and pinnable acoustic screen partitions.\n• **Boardroom Suites**: Racetrack conference tables with integrated pop-up AV connectivity.\n• **Landmark Trust**: Executed prominent institutional projects including Millet Bhavan in Bhubaneswar.",
      suggested: ['View Milestone Case Study', 'Calculate commercial quote', 'Book consultation'],
      actions: [
        { type: 'navigate', url: 'office-furniture.html', label: 'Office Furniture' },
        { type: 'navigate', url: 'our-work.html#featuredCaseStudy', label: 'Millet Bhavan Case Study' },
        { type: 'modal', subject: 'Commercial RFP Inquiry', label: 'Request Commercial RFP' }
      ]
    };
  }

  // 12. HOME DÉCOR, CEILINGS & FLOORING
  if (q.includes('decor') || q.includes('flooring') || q.includes('false ceiling') || q.includes('ceiling') || q.includes('panelling') || q.includes('wallpaper')) {
    return {
      text: "🎨 **Home Décor & Architectural Finishes**:\n\n• **False Ceilings**: Saint-Gobain gypsum boards with recessed COB spotlights and magnetic track lights.\n• **Wall Panelling**: Charcoal louvers, wooden fluting, and acoustic stone panels.\n• **Flooring**: German wooden laminates, luxury SPC waterproof vinyl, and Italian marble restoration.",
      suggested: ['Explore Home Décor', 'Calculate interior cost', 'Book consultation'],
      actions: [
        { type: 'navigate', url: 'home-decor.html', label: 'Explore Home Décor' },
        { type: 'modal', subject: 'Home Decor Consultation', label: 'Book 3D Design Session' }
      ]
    };
  }

  // 13. WARRANTY & MATERIALS
  if (q.includes('warranty') || q.includes('guarantee') || q.includes('plywood') || q.includes('bwp') || q.includes('termite') || q.includes('borer') || q.includes('waterproof') || q.includes('quality') || q.includes('hettich') || q.includes('hafele') || q.includes('blum')) {
    return {
      text: "🛡️ **10-Year Written Warranty & Material Standards**:\n\n• **Carcass**: 100% Certified IS:710 Marine Grade BWP Plywood (Boiling Water Proof for 72+ continuous hours).\n• **Protection**: Lifetime anti-termite and anti-borer immunity.\n• **Hardware**: 100% German Hettich, Hafele & Blum soft-close fittings.\n• **Guarantee**: Official stamped company warranty certificate handed over with your keys.",
      suggested: ['Modular kitchen designs', 'Custom wardrobe designs', 'Book consultation'],
      actions: [
        { type: 'modal', subject: 'Warranty & Material Inquiry', label: 'Verify Warranty Details' },
        { type: 'navigate', url: 'about.html', label: 'About Our Quality' }
      ]
    };
  }

  // 14. 45-DAY HANDOVER & PROCESS
  if (q.includes('delivery') || q.includes('handover') || q.includes('time') || q.includes('how long') || q.includes('duration') || q.includes('process') || q.includes('days') || q.includes('step')) {
    return {
      text: "⏱️ **Guaranteed 45-Day Handover Commitment**:\n\nOur structured 4-step execution:\n1. **Day 1–7**: Free site measurement & 3D design approval.\n2. **Day 8–30**: Precision German CNC cutting & edgebanding at our Bhagabanpur factory.\n3. **Day 31–40**: Flat-pack dispatch to site & clean, dust-free modular assembly (3-5 days on site).\n4. **Day 41–45**: 52-point quality audit, deep clean, and keys handover backed by penalty clauses.",
      suggested: ['Book free design session', 'Calculate interior cost', 'Showroom address in Bhubaneswar'],
      actions: [
        { type: 'modal', subject: '45-Day Handover Consultation', label: 'Plan Your 45-Day Project' }
      ]
    };
  }

  // 15. FREE 3D DESIGN & SITE MEASUREMENT
  if (q.includes('3d') || q.includes('free') || q.includes('site visit') || q.includes('measurement') || q.includes('design charge') || q.includes('floor plan')) {
    return {
      text: "📐 **100% Free Initial Design Consultation**:\n\n• **Free Site Measurement**: An interior architect visits your site in Bhubaneswar, Cuttack, or Khordha.\n• **Free 3D Photorealistic Design**: Custom 3D visuals of your exact floor plan before you commit a single rupee.\n• **Transparent Line-Item Quote**: Clear pricing with zero hidden charges or surprises.",
      suggested: ['Book free design session', 'Calculate interior cost', 'Showroom address in Bhubaneswar'],
      actions: [
        { type: 'modal', subject: 'Free 3D Design Session Booking', label: 'Book Free 3D Session' },
        { type: 'call', phone: '+919040087614', label: 'Call +91 90400 87614' }
      ]
    };
  }

  // 16. PAYMENT TERMS & ZERO-COST EMI
  if (q.includes('emi') || q.includes('loan') || q.includes('finance') || q.includes('financing') || q.includes('installment') || q.includes('payment') || q.includes('advance')) {
    return {
      text: "💳 **Transparent Milestone Payments & EMI**:\n\n• 10% on Initial 3D Design Finalization\n• 40% on Production Release at Factory\n• 40% on Flat-Pack Delivery at Site\n• 10% on Final Quality Handover & Inspection\n• **Zero-Cost EMI**: Available across 3 to 12-month tenures with leading partner banks.",
      suggested: ['Calculate interior cost', 'Book free design session', 'Call studio'],
      actions: [
        { type: 'modal', subject: 'EMI & Payment Consultation', label: 'Check EMI Eligibility' },
        { type: 'call', phone: '+919040087614', label: 'Speak with Finance Desk' }
      ]
    };
  }

  // 17. LOCATIONS SERVED (CUTTACK, PURI, KHORDHA, RAIPUR)
  if (q.includes('cuttack') || q.includes('puri') || q.includes('khordha') || q.includes('raipur') || q.includes('rourkela') || q.includes('sambalpur') || q.includes('outside') || q.includes('area') || q.includes('city') || q.includes('location')) {
    return {
      text: "📍 **Areas & Cities We Serve**:\n\n• **Bhubaneswar**: Patia, Nayapalli, Khandagiri, Saheed Nagar, Sundarpada, Chandrasekharpur, etc.\n• **Greater Odisha**: Cuttack, Puri, Khordha, and nearby districts.\n• **Chhattisgarh**: Branch Studio at Bhawna Nagar, Kachna Road, Raipur (+91 98932 18906).\n\nWe provide full turnkey design, factory delivery, and white-glove installation across these regions.",
      suggested: ['Showroom address in Bhubaneswar', 'Book free site measurement', 'Call +91 90400 87614'],
      actions: [
        { type: 'navigate', url: 'contact.html', label: 'View All Locations' },
        { type: 'call', phone: '+919040087614', label: 'Call Hotline' }
      ]
    };
  }

  // 18. GREETINGS
  if (q === 'hi' || q === 'hello' || q === 'hey' || q.startsWith('hi ') || q.startsWith('hello ') || q.includes('namaste') || q.includes('good morning') || q.includes('good afternoon') || q.includes('good evening') || q === 'help') {
    return {
      text: "Namaste! Welcome to Vizous Interio. I am your architectural design assistant in Bhubaneswar.\n\nI can help you explore modular kitchens, custom wardrobes, transparent pricing, 3D floor plans, or arrange a showroom visit. How can I assist you today?",
      suggested: ['Modular kitchen designs', 'Custom wardrobe designs', 'Explore project gallery', 'Showroom address in Bhubaneswar'],
      actions: [
        { type: 'modal', subject: 'Introductory Consultation', label: 'Book Free 3D Session' },
        { type: 'navigate', url: 'modular-kitchen.html', label: 'Explore Modular Kitchens' }
      ]
    };
  }

  // 19. GRATITUDE & CLOSING
  if (q.includes('thank') || q.includes('thx') || q.includes('okay') || q.includes('ok') || q.includes('great') || q.includes('awesome') || q.includes('good') || q.includes('bye') || q.includes('sure')) {
    return {
      text: "You are very welcome! If you would like to see live modular kitchen layouts or review material samples, visit our Laxmi Sagar showroom or call us directly at +91 90400 87614. Have a wonderful day!",
      suggested: ['Showroom address in Bhubaneswar', 'Book free design session', 'Explore Portfolio'],
      actions: [
        { type: 'call', phone: '+919040087614', label: 'Call Studio (+91 90400 87614)' },
        { type: 'whatsapp', text: 'Hi Vizous Interio, thank you for the information.', label: 'WhatsApp Us' }
      ]
    };
  }

  // 20. INTELLIGENT GENERAL FALLBACK
  return {
    text: "Thank you for reaching out to Vizous Interio! We are Bhubaneswar's leading interior infrastructure studio with an in-house 15,000+ sq.ft factory at Bhagabanpur.\n\nTo assist you immediately, please choose an option below or leave your contact number in this chat for a callback from our senior architect:",
    suggested: ['Modular kitchen designs', 'Custom wardrobe designs', 'Explore project gallery', 'Showroom address in Bhubaneswar', 'Book free design session'],
    actions: [
      { type: 'modal', subject: 'Design Assistant Consultation', label: 'Book 3D Design Session' },
      { type: 'whatsapp', text: 'Hi Vizous Interio, I would like to speak with an interior designer.', label: 'WhatsApp Us' },
      { type: 'call', phone: '+919040087614', label: 'Call Studio (+91 90400 87614)' }
    ]
  };
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   VIDEO MODAL & LIGHTBOX ENGINE
   ========================================================================== */
function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoModalIframe');
  const closeBtn = document.getElementById('videoModalClose');
  const modalBox = modal ? modal.querySelector('.video-modal-box') : null;

  window.openVideoModal = function(videoSource, title, isVertical) {
    if (!modal || !iframe) return;

    const srcStr = String(videoSource || '').trim();
    const titleStr = String(title || '').toLowerCase();
    const isReel = isVertical === true || 
                   srcStr.includes('reel') || 
                   srcStr.includes('shorts') || 
                   titleStr.includes('reel') || 
                   titleStr.includes('short');

    if (modalBox) {
      if (isReel) {
        modalBox.classList.add('is-vertical');
      } else {
        modalBox.classList.remove('is-vertical');
      }
    }

    let embedUrl = '';
    if (srcStr.includes('instagram.com/reel/') || srcStr.includes('instagram.com/p/')) {
      const match = srcStr.match(/instagram\.com\/(?:reel|p)\/([^/?#&]+)/);
      const reelId = match ? match[1] : '';
      if (reelId) {
        embedUrl = `https://www.instagram.com/reel/${reelId}/embed/?autoplay=1`;
      } else {
        embedUrl = `https://www.instagram.com/reel/${srcStr}/embed/?autoplay=1`;
      }
    } else {
      // YouTube video or Shorts (supports full URLs or raw IDs)
      let cleanId = srcStr;
      if (cleanId.includes('youtu.be/')) {
        cleanId = cleanId.split('youtu.be/')[1].split(/[?#&]/)[0];
      } else if (cleanId.includes('youtube.com/shorts/')) {
        cleanId = cleanId.split('youtube.com/shorts/')[1].split(/[?#&]/)[0];
      } else if (cleanId.includes('watch?v=')) {
        cleanId = cleanId.split('watch?v=')[1].split(/[?#&]/)[0];
      } else if (cleanId.includes('embed/')) {
        cleanId = cleanId.split('embed/')[1].split(/[?#&]/)[0];
      } else {
        cleanId = cleanId.replace(/.*[?&]v=/, '').replace(/.*\//, '').split(/[?#&]/)[0];
      }

      embedUrl = `https://www.youtube-nocookie.com/embed/${cleanId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    }

    iframe.src = embedUrl;
    iframe.title = title || 'Vizous Video Player';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.openReelModal = function(reelSource, title) {
    window.openVideoModal(reelSource, title, true);
  };

  window.closeVideoModal = function() {
    if (!modal || !iframe) return;
    iframe.src = '';
    modal.classList.remove('active');
    if (modalBox) modalBox.classList.remove('is-vertical');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeVideoModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeVideoModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      window.closeVideoModal();
    }
  });
}

function initImageLightbox() {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  window.openLightbox = function(src, cap) {
    if (!modal || !img) return;
    img.src = src;
    if (caption) caption.textContent = cap || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    if (!modal || !img) return;
    img.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeLightbox);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      window.closeLightbox();
    }
  });
}

function initMediaFilter() {
  const filterBtns = document.querySelectorAll('.media-filter-btn');
  const mediaCards = document.querySelectorAll('.media-item-card');

  window.filterMedia = function(category, btn) {
    if (btn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    mediaCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  window.filterOfficeMedia = function(category, btn) {
    const parent = btn ? btn.parentElement : null;
    if (parent) {
      parent.querySelectorAll('.media-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    const cards = document.querySelectorAll('.office-media-card');
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-gallery-card');

  window.filterProjects = function(category, btn) {
    if (btn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    projectCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };
}

/* ==========================================================================
   BLOG CATEGORY FILTER & RICH ARTICLE READER MODAL
   ========================================================================== */
const BLOG_ARTICLES = {
  'company-trust': {
    category: 'Company & Trust',
    title: 'Best Interior Design Company in Bhubaneswar: 4 Things to Check Before You Decide',
    readTime: '5 min read',
    date: 'October 2026',
    image: '/assets/images/hero_luxury_spaces_clean.jpg',
    content: `
      <p>Selecting an interior partner for your home in Bhubaneswar—whether in Patia, Khandagiri, Nayapalli, or Sundarpada—is one of the most critical financial and lifestyle decisions you will make. While glossy 3D renders look stunning on Instagram, execution reality is where dreams succeed or crumble.</p>
      
      <h3>1. Ask to Tour Their Physical Manufacturing Plant</h3>
      <p>Over 80% of local "interior designers" are middle-tier brokers. They create renderings on laptops, subcontract the woodwork to unregistered road-side carpenter squads, and tack on heavy commissions. Always ask: <em>"Can I physically visit the factory where my kitchen and wardrobes will be manufactured?"</em></p>
      <p>At Vizous Interio, we actively welcome homeowners to tour our <strong>15,000+ sq.ft automated factory at Plot #12, Bhagabanpur Industrial Estate</strong>. You can watch German CNC panel saws and automated PUR edge-banders produce your carcasses with millimeter precision.</p>

      <h3>2. Verify IS:710 Marine Grade BWP Plywood Certification</h3>
      <p>Odisha's humid tropical weather, combined with everyday Indian wet cooking, causes ordinary commercial ply or MDF to swell, warp, and host fungus within 18 months. Insist on 100% Boiling Water Proof (IS:710) Marine Plywood for all wet areas and under-sink units.</p>

      <h3>3. Look for Written Handover Guarantees</h3>
      <p>Unorganized contractors notoriously turn 2-month schedules into 9-month nightmares. Ensure your contract guarantees a strict <strong>45-Day Handover</strong> with formal project management and milestone tracker updates.</p>

      <div class="blog-reader-callout">
        <strong>Vizous Recommendation:</strong> Never pay 100% upfront. Work with studios offering verified 10-Year Comprehensive Warranties and milestone-based approvals before dispatch.
      </div>
    `
  },
  'wardrobe-planning': {
    category: 'Wardrobe Guide',
    title: 'Wardrobe Design in Bhubaneswar: Making Every Inch of Your Bedroom Count',
    readTime: '6 min read',
    date: 'October 2026',
    image: '/assets/images/wardrobes_1.jpg',
    content: `
      <p>Bedroom space in modern duplexes and apartments is premium real estate. A poorly planned wardrobe creates dead zones, cluttered floors, and wasted vertical ceiling space.</p>

      <h3>The 3 Critical Storage Zones Every Master Wardrobe Needs</h3>
      <ul>
        <li><strong>Primary Zone (Eye-Level):</strong> Daily office wear, formal shirts, sarees, and suits. Utilize heavy-duty chrome oval hanging rods and soft-close pull-out trouser racks.</li>
        <li><strong>Secondary Zone (Waist to Floor):</strong> Underwear organizers, jewelry drawers with velvet flocking, and bottom wire baskets for folded linens.</li>
        <li><strong>Top Loft Zone:</strong> Suitcases, winter blankets, and seasonal festival attire sealed against dust with full-height overhead loft shutters.</li>
      </ul>

      <h3>Sliding Doors vs Hinged Shutters</h3>
      <p>If you have less than 3.5 feet of clearance between your bed edge and the wardrobe wall, <strong>sliding door systems</strong> are mandatory. They eliminate door swing clearance entirely while offering floor-to-ceiling panoramic glass or tinted acrylic aesthetic appeal.</p>

      <div class="blog-reader-callout">
        <strong>Pro Tip:</strong> Integrated warm-white (3000K) sensor profile LEDs not only look ultra-luxurious—they also allow you to dress early in the morning without turning on bright ceiling lights and waking your partner.
      </div>
    `
  },
  'straight-kitchen': {
    category: 'Modular Kitchens',
    title: "Is a Straight Modular Kitchen Right for Your Bhubaneswar Home? Here's How to Tell",
    readTime: '4 min read',
    date: 'October 2026',
    image: '/assets/images/modular_kitchen_3.jpg',
    content: `
      <p>Straight (linear single-wall) kitchens are frequently misunderstood as "budget" layouts. In reality, modern European architecture embraces linear kitchens as the cleanest, most space-efficient solution for open-plan studio apartments, compact duplexes, and contemporary row houses.</p>

      <h3>When to Choose a Straight Kitchen</h3>
      <ul>
        <li>Your cooking area width is under 7 feet, making parallel or L-shaped counters cramped.</li>
        <li>You want an integrated dining table or breakfast island directly facing the counter.</li>
        <li>You prefer uninterrupted, continuous sightlines without blind corner dead zones.</li>
      </ul>

      <h3>Maximizing Linear Ergonomics</h3>
      <p>Sequence your appliances logically from left to right: <strong>Refrigerator &rarr; Prep Sink &rarr; Cutting Zone &rarr; Hob &amp; Chimney</strong>. Incorporate hydraulic bi-fold overhead cabinets to access spices effortlessly while cooking.</p>
    `
  },
  'company-signs': {
    category: 'Company & Trust',
    title: "5 Signs You've Found the Right Interior Design Company in Bhubaneswar",
    readTime: '5 min read',
    date: 'October 2026',
    image: '/assets/images/about_7.png',
    content: `
      <p>With dozens of new interior firms popping up across Odisha, how do you separate seasoned master craftsmen from temporary marketing agencies? Look for these 5 unmistakable signs:</p>

      <h3>1. Transparent Bill of Materials (BOM)</h3>
      <p>Reliable firms specify the exact plywood brand (Century, Greenply), grade (BWP IS:710), laminate thickness (1mm - 1.5mm), and hardware model (Hettich Sensys, Häfele) on paper before accepting a single rupee.</p>

      <h3>2. Dedicated Factory Machinery</h3>
      <p>Carpenters cutting sheets on site with hand-saws leave chipped laminate edges and inconsistent gaps. Automated CNC saws and PUR edge-banders produce glass-smooth, moisture-sealed edges that last decades.</p>

      <h3>3. Experienced In-House Project Managers</h3>
      <p>You should have a single designated Point of Contact (SPOC) who sends weekly photo updates and coordinates electricians, plumbers, and installers.</p>

      <h3>4. Real Homeowner Video Testimonials</h3>
      <p>Written 5-star Google reviews can be easily requested from friends. Genuine homeowner video walkthroughs show real living spaces and authentic client satisfaction.</p>

      <h3>5. Written 10-Year Warranty Card</h3>
      <p>A legitimate company stands behind their joinery with a formal warranty document covering termite resistance, delamination, and hardware performance.</p>
    `
  },
  'u-shape-kitchen': {
    category: 'Modular Kitchens',
    title: 'U-Shape Modular Kitchen in Bhubaneswar: The Ultimate Golden Triangle Layout',
    readTime: '6 min read',
    date: 'October 2026',
    image: '/assets/images/modular_kitchen_4.jpg',
    content: `
      <p>For passionate cooks and large joint families in Odisha, the U-shaped kitchen remains the absolute gold standard of culinary efficiency.</p>

      <h3>The Golden Work Triangle Perfected</h3>
      <p>In a U-shape layout, the refrigerator, cooking range, and washing sink occupy three distinct walls. The walking distance between each apex is between 4 and 9 feet, allowing two cooks to prepare festive meals simultaneously without bumping into each other.</p>

      <h3>Conquering Corner Dead Zones</h3>
      <p>Traditional kitchens waste up to 40% of their storage space in deep, dark corners. At Vizous, we engineer corner units with <strong>German LeMans pull-out trays</strong> and <strong>Magic Corner carousels</strong> that glide outward with a fingertip touch.</p>
    `
  },
  'wardrobe-systems': {
    category: 'Wardrobe Guide',
    title: 'Custom Wardrobe Design Services: Hinged vs Sliding Systems',
    readTime: '5 min read',
    date: 'October 2026',
    image: '/assets/images/wardrobes_3.jpg',
    content: `
      <p>One of the most frequent questions our showroom architects answer is: <em>"Should I build hinged doors or sliding doors for my bedroom?"</em> Here is the comprehensive breakdown:</p>

      <h3>Hinged (Openable) Wardrobes</h3>
      <ul>
        <li><strong>Pros:</strong> Full 100% visibility of the interior at once; inside of doors can mount full-length mirrors and tie/belt racks.</li>
        <li><strong>Cons:</strong> Requires at least 3 feet of empty clearance in front of the wardrobe for doors to swing open freely.</li>
        <li><strong>Best for:</strong> Large master bedrooms and children's rooms.</li>
      </ul>

      <h3>Sliding Track Wardrobes</h3>
      <ul>
        <li><strong>Pros:</strong> Zero floor space required for door swing; accommodates dramatic 8-to-9 foot tinted glass or lacquer profile shutters.</li>
        <li><strong>Cons:</strong> Only 50% of the interior is accessible at any one moment.</li>
        <li><strong>Best for:</strong> Compact bedrooms, modern guest rooms, and master suites.</li>
      </ul>
    `
  },
  'open-kitchen': {
    category: 'Modular Kitchens',
    title: 'Modular Kitchen in Bhubaneswar: Modern Open Kitchen Ideas for Families',
    readTime: '7 min read',
    date: 'October 2026',
    image: '/assets/images/modular_kitchen_1.jpg',
    content: `
      <p>The traditional concept of cooking in a dark, isolated back room is officially obsolete. Modern families want kitchens integrated seamlessly with living and dining lounges.</p>

      <h3>Island Breakfast Counters</h3>
      <p>An island serves as a morning breakfast station, homework desk for kids, and party cocktail bar when entertaining guests. Choose quartz or sintered stone countertops for zero-porosity stain resistance against turmeric and curry oils.</p>

      <h3>Fluted Glass Partitions</h3>
      <p>If you want open-plan aesthetics but wish to contain heavy mustard or fish frying aromas, install sleek aluminum-profile sliding glass partitions. They allow light to flood through while isolating aromas during intense cooking.</p>
    `
  },
  'project-timeline': {
    category: 'Planning & Handover',
    title: 'Home Interiors in Bhubaneswar: Process, Quality Checkpoints & Handover',
    readTime: '6 min read',
    date: 'October 2026',
    image: '/assets/images/about_3.png',
    content: `
      <p>At Vizous Interio, we believe transparency eliminates stress. Here is exactly what happens from the moment you step into our Laxmisagar showroom to the day you receive your house keys:</p>

      <h3>Step 1: Consultation & 3D Visualization (Days 1–7)</h3>
      <p>Our architects take exact laser site measurements, understand your family's routines, and render photorealistic 3D room visualizations with exact color schemes and lighting.</p>

      <h3>Step 2: Material Finalization & BOM Sign-Off (Days 8–12)</h3>
      <p>Inspect physical laminate, acrylic, and quartz samples at our Experience Centre. Every hardware hinge and drawer runner is finalized in writing.</p>

      <h3>Step 3: In-House Factory Manufacturing (Days 13–35)</h3>
      <p>All cabinets, wardrobes, and modular components are precision-cut at our Bhagabanpur plant, edge-banded, pre-drilled, and flat-packed.</p>

      <h3>Step 4: White-Glove Installation & 45-Day Handover (Days 36–45)</h3>
      <p>Our certified site technicians assemble everything on-site without dust, noise, or messy timber sawing. Full deep cleaning and formal warranty handover.</p>
    `
  },
  'kitchen-home': {
    category: 'Modular Kitchens',
    title: 'Designing a Modular Kitchen in Bhubaneswar That Truly Feels Like Home',
    readTime: '5 min read',
    date: 'October 2026',
    image: '/assets/images/modular_kitchen_2.jpg',
    content: `
      <p>European catalogs show pristine white kitchens where people only brew espresso. But an authentic home in Odisha needs to handle heavy wet grinding, hot mustard oil tadka, massive spice collections, and multi-generational cooking.</p>

      <h3>Heavy-Duty Hardware Built for Daily Use</h3>
      <p>Soft-close tandem boxes must be rated for at least 45kg to support heavy brass utensils, cast-iron pans, and rice sacks. We specify authentic German Hettich and Blum drawer runners tested to 100,000 opening cycles.</p>

      <h3>Turmeric-Resistant Acrylic & PU Finishes</h3>
      <p>Avoid porous budget laminates that permanently absorb yellow curry splashes. High-gloss European acrylic and PU lacquers wipe clean with a single microfiber cloth swipe.</p>
    `
  },
  'factory-vs-carpenter': {
    category: 'Craftsmanship',
    title: 'Factory-Built Modulars vs Carpenter Carpentry: The 10-Year Test',
    readTime: '8 min read',
    date: 'October 2026',
    image: '/assets/images/about_5.png',
    content: `
      <p>Many homeowners initially contemplate hiring a neighborhood carpenter to save a few thousand rupees. But what does that furniture look like after 3, 5, and 10 years in Odisha's humid monsoon climate?</p>

      <h3>1. Edge Banding Adhesion</h3>
      <p>Carpenters manually apply contact adhesive (Fevicol) and press PVC tape with a wooden block. Within 2 years, humidity breaks down the glue bond, causing edge strips to peel and expose raw core ply to moisture. In our Bhagabanpur plant, automated German edge-banders apply <strong>PUR hot-melt glue at 200°C under 6 bars of pneumatic pressure</strong>, creating a seamless, lifetime waterproof hermetic seal.</p>

      <h3>2. Joinery Strength</h3>
      <p>Carpenters hammer nails into plywood edges, creating microscopic internal cracks. Factory modulars utilize <strong>pre-bored CNC cam-and-dowel lock fittings</strong> that can be disassembled and reassembled multiple times if you relocate homes.</p>

      <h3>3. Dust, Health, and Timeline</h3>
      <p>On-site carpentry fills your apartment with toxic sawdust, chemical adhesive fumes, and deafening circular saw noise for 3 to 6 months. Factory modulars arrive 100% pre-finished and install cleanly in 3 to 5 days.</p>
    `
  }
};

function initBlogFilter() {
  const filterBtns = document.querySelectorAll('.media-filter-bar .media-filter-btn');
  const blogCards = document.querySelectorAll('.blog-card');
  if (!blogCards.length) return;

  window.filterBlog = function(category, btn) {
    if (btn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    blogCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (category === 'all' || cat === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter') || 'all';
      window.filterBlog(cat, btn);
    });
  });
}

function initBlogReader() {
  const modal = document.getElementById('blogReaderModal');
  const closeBtn = document.getElementById('blogReaderClose');
  const modalBadge = document.getElementById('blogReaderBadge');
  const modalMeta = document.getElementById('blogReaderMeta');
  const modalTitle = document.getElementById('blogReaderTitle');
  const modalImg = document.getElementById('blogReaderImg');
  const modalText = document.getElementById('blogReaderText');

  window.openBlogReader = function(articleId) {
    const article = BLOG_ARTICLES[articleId];
    if (!article || !modal) return;

    if (modalBadge) modalBadge.textContent = article.category;
    if (modalMeta) modalMeta.textContent = `${article.date} • ${article.readTime} • By Vizous Editorial`;
    if (modalTitle) modalTitle.textContent = article.title;
    if (modalImg) {
      modalImg.src = article.image;
      modalImg.alt = article.title;
    }
    if (modalText) modalText.innerHTML = article.content;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeBlogReader = function() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', window.closeBlogReader);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) window.closeBlogReader();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      window.closeBlogReader();
    }
  });

  // Attach click listeners to all blog card elements
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicking consultation modal trigger, don't open reader
      if (e.target.closest('.btn-primary-consult')) return;
      const articleId = card.getAttribute('data-article-id');
      if (articleId && BLOG_ARTICLES[articleId]) {
        e.preventDefault();
        window.openBlogReader(articleId);
      }
    });
  });
}

// INLINE PLAYABLE TRUST SECTION MAIN OFFICE VIDEO
window.playTrustVideoInline = function() {
  const frame = document.getElementById('trustVideoFrame');
  if (frame) {
    frame.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube-nocookie.com/embed/Gc-_NirqGrI?autoplay=1&rel=0&modestbranding=1" 
        title="Vizous Interio Main Office & Showroom Tour" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        style="position:absolute; inset:0; width:100%; height:100%; border:none; border-radius:inherit;"
      ></iframe>
    `;
  }
};

// REFERENCE SHOWCASE CAROUSEL NAVIGATION
window.slideRefCarousel = function(carouselId, direction) {
  const track = document.getElementById(carouselId);
  if (!track) return;
  const firstCard = track.querySelector('.ref-card');
  const scrollAmount = firstCard ? (firstCard.offsetWidth + 24) * direction : 380 * direction;
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

// MEET A DESIGNER BANNER FORM HANDLER
window.handleDesignerBannerSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const card = form.closest('.designer-form-card');
  const name = (form.querySelector('[name="name"]')?.value || '').trim();
  const phone = (form.querySelector('[name="phone"]')?.value || '').trim();
  const city = (form.querySelector('[name="city"]')?.value || 'Bhubaneswar').trim();

  if (!name || !phone) return;

  const safeName = name.replace(/[<>&"']/g, '');
  const safePhone = phone.replace(/[<>&"']/g, '');

  if (card) {
    card.innerHTML = `
      <div class="designer-form-success">
        <div class="designer-success-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 class="designer-success-title">Design Session Reserved!</h3>
        <p class="designer-success-desc">Thank you <strong>${safeName}</strong>! Our design consultant for <strong>${city}</strong> will connect with you on <strong>+91 ${safePhone}</strong> shortly.</p>
      </div>
    `;
  }
};




