import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: 5173,
      host: true
    },
    plugins: [
      {
        name: 'vizous-ai-chat-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url.split('?')[0];
            if (url !== '/api/chat') {
              return next();
            }

            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}');
                const userMessage = (data.message || '').trim();
                const history = data.history || [];

                const KNOWLEDGE_BASE = `
Vizous Interio Private Limited is Bhubaneswar's premier bespoke interior design and modular furniture manufacturer with 15+ years of craft excellence and 3,000+ completed client homes.
Corporate Showroom: 1st Floor, Laxmi Sagar Square, Plot 301/1516, Cuttack Rd, Laxmisagar, Bhubaneswar, Odisha 751006. Hours: Mon-Sat 10 AM - 8 PM (Only 3rd Sunday Closed).
Modern Factory: Plot #12, Bhagabanpur Industrial Estate, Patrapada, Bhubaneswar-751019. Equipped with automated German CNC panel saws and edgebanders.
Branch Studio: Khasara # 801/8, Bhawna Nagar Kachna Road, Raipur, Chhattisgarh 492007.
Contact: +91 90400 87614, +91 95892 77465, email info@vizous.in.
Key Guarantees: 10-Year Comprehensive Warranty on BWP Grade 710 Marine Ply & hardware, 45-Day Handover guarantee, 100% In-house manufacturing (zero middlemen markups), 100% Customization, and Zero-Cost EMI milestone payment plans.
Services & Product Categories:
1. Modular Kitchens: L-shaped (₹1.45L - ₹3.8L), U-shaped (₹2.1L - ₹4.5L), Island (₹2.8L - ₹5.5L), Straight (₹95K - ₹2.2L), Parallel (₹1.6L - ₹3.4L), Peninsular kitchens with Hettich/Hafele hardware and acrylic/PU finishes.
2. Wardrobes: Walk-in closets, Openable hinged wardrobes, Folding and Sliding wardrobes with smart organizers (₹65K - ₹3.2L).
3. Luxury Beds: King/Queen size hydraulic storage beds, non-storage beds, single beds, bunk beds (₹32K - ₹95K).
4. Office Furniture: Executive director desks, modular workstations, conference tables, ergonomic seating.
5. Modular Furniture: Floating TV entertainment units, Sacred Puja Mandirs, shoe consoles, study desks.
6. Home Décor: Custom decorative wall panelling, modern false ceilings, wooden & vinyl flooring.
Portfolio projects: Marigold, Millet Bhavan, Laxmisagar luxury penthouses.
Process: 1. Initial Consultation -> 2. Free Site Measurement & 3D Design Session -> 3. Factory Manufacturing at Bhagabanpur -> 4. White-Glove Installation & Handover.
`;

                const apiKey = env.GEMINI_API_KEY || env.OPENAI_API_KEY;

                if (apiKey && env.GEMINI_API_KEY) {
                  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`;
                  
                  const systemPrompt = `You are the Vizous Design Assistant, an elegant, warm, and highly knowledgeable interior design consultant for Vizous Interio Private Limited in Bhubaneswar.
Answer visitor questions strictly using the company knowledge base below.
Guide visitors toward suitable services, explain warranty and factory manufacturing capabilities, and help qualify customer requirements (room type, approximate size, city/area in Bhubaneswar, budget range, timeline).
Never fabricate prices, warranties, or non-existent services. If something is unknown, politely direct them to the Laxmisagar showroom (+91 90400 87614).
Always keep answers concise, polite, and helpful (2-4 sentences).

COMPANY KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`;

                  const contents = [
                    { role: 'user', parts: [{ text: systemPrompt }] },
                    { role: 'model', parts: [{ text: 'Understood. I am the Vizous Design Assistant and will provide grounded, professional assistance to all visitors.' }] },
                    ...history.map(h => ({
                      role: h.sender === 'user' ? 'user' : 'model',
                      parts: [{ text: h.text }]
                    })),
                    { role: 'user', parts: [{ text: userMessage }] }
                  ];

                  const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      contents,
                      generationConfig: { temperature: 0.2, maxOutputTokens: 350 }
                    })
                  });

                  if (response.ok) {
                    const result = await response.json();
                    const replyText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({
                      reply: replyText,
                      source: 'gemini-live',
                      suggested: getSuggestedQuestions(userMessage)
                    }));
                    return;
                  }
                }

                // Grounded Local Retrieval Fallback Engine
                const fallbackReply = generateGroundedReply(userMessage);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  reply: fallbackReply.text,
                  source: 'grounded-knowledge-base',
                  suggested: fallbackReply.suggested,
                  action: fallbackReply.action
                }));

              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Internal processing error', details: err.message }));
              }
            });
          });
        }
      }
    ],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          whyUs: resolve(__dirname, 'why-us.html'),
          about: resolve(__dirname, 'about.html'),
          kitchen: resolve(__dirname, 'modular-kitchen.html'),
          livingRooms: resolve(__dirname, 'living-rooms.html'),
          bedrooms: resolve(__dirname, 'bedrooms.html'),
          doorsWindows: resolve(__dirname, 'doors-windows.html'),
          office: resolve(__dirname, 'office-furniture.html'),
          healthcare: resolve(__dirname, 'healthcare.html'),
          educational: resolve(__dirname, 'educational.html'),
          wardrobes: resolve(__dirname, 'wardrobes.html'),
          beds: resolve(__dirname, 'beds.html'),
          modular: resolve(__dirname, 'modular-furniture.html'),
          decor: resolve(__dirname, 'home-decor.html'),
          work: resolve(__dirname, 'our-work.html'),
          contact: resolve(__dirname, 'contact.html'),
          blog: resolve(__dirname, 'blog.html'),
          media: resolve(__dirname, 'media.html')
        }
      }
    }
  };
});

function getSuggestedQuestions(query) {
  const q = query.toLowerCase();
  if (q.includes('kitchen')) {
    return ['What materials do you use?', 'Calculate kitchen cost', 'Book showroom visit'];
  }
  if (q.includes('wardrobe')) {
    return ['Show sliding vs hinged options', 'Do you make walk-in closets?', 'Check warranty details'];
  }
  if (q.includes('cost') || q.includes('price')) {
    return ['Modular kitchen price range', 'Full 3BHK interior estimate', 'Talk to an architect on WhatsApp'];
  }
  return ['I need a modular kitchen', 'Custom wardrobe options', 'Where is your showroom?', 'Calculate interior cost'];
}

function generateGroundedReply(query) {
  const q = query.toLowerCase();

  if (q.includes('kitchen')) {
    return {
      text: "At Vizous Interio, we manufacture custom Modular Kitchens in 6 layouts: L-Shaped, U-Shaped, Island, Straight, Parallel, and Peninsular. Every kitchen is built with IS:710 Marine Grade BWP Plywood and certified German soft-close hardware (Hettich / Blum) with a 10-Year Warranty. Would you like to explore layouts, or calculate an estimate for your kitchen dimensions?",
      suggested: ['Show L-shaped kitchens', 'Show Island kitchens', 'Calculate kitchen cost', 'Book free site measurement'],
      action: { type: 'navigate', url: 'modular-kitchen.html', label: 'Explore Modular Kitchens' }
    };
  }

  if (q.includes('wardrobe') || q.includes('closet') || q.includes('cupboard')) {
    return {
      text: "We craft custom wardrobes tailored to your bedroom floorplan, including Walk-in Closets, Sliding Door wardrobes, and Classic Openable/Hinged designs with custom drawer dividers and sensor LED lighting. Everything is manufactured at our Bhagabanpur plant. What type of wardrobe are you planning?",
      suggested: ['Sliding wardrobes', 'Walk-in closets', 'Openable wardrobes', 'Get wardrobe quote'],
      action: { type: 'navigate', url: 'wardrobes.html', label: 'Explore Wardrobes' }
    };
  }

  if (q.includes('bed') || q.includes('bedroom')) {
    return {
      text: "Our bedroom collection features King and Queen size beds with heavy-duty German hydraulic storage, upholstered headboards, single beds, and modular bunk beds built with termite-treated marine ply. Would you like to view our bed collection?",
      suggested: ['Hydraulic storage beds', 'King size options', 'Queen size options', 'Book consultation'],
      action: { type: 'navigate', url: 'beds.html', label: 'Explore Beds' }
    };
  }

  if (q.includes('office') || q.includes('commercial') || q.includes('workstation')) {
    return {
      text: "Vizous manufactures commercial-grade office furniture, including Executive Director Cabins, Modular Workstations, Boardroom Tables, and Ergonomic Seating for IT hubs and corporate offices across Bhubaneswar. We recently delivered the Millet Bhavan project.",
      suggested: ['Office workstations', 'Executive desks', 'Conference tables', 'Commercial quote'],
      action: { type: 'navigate', url: 'office-furniture.html', label: 'Explore Office Furniture' }
    };
  }

  if (q.includes('warranty') || q.includes('guarantee')) {
    return {
      text: "All Vizous modular kitchens and bespoke wardrobes include our 10-Year Comprehensive Warranty. We use 100% BWP (Boiling Water Proof) Marine Grade 710 Plywood and certified anti-rust hardware from German brands like Hettich and Hafele.",
      suggested: ['Visit showroom', 'See materials used', 'Get a quote'],
      action: { type: 'scroll', target: '#whyChooseSection', label: 'View Warranty Details' }
    };
  }

  if (q.includes('factory') || q.includes('manufactur') || q.includes('where is') || q.includes('location') || q.includes('showroom') || q.includes('address')) {
    return {
      text: "We invite you to visit us! Our Experience Centre is located at 1st Floor, Laxmi Sagar Square, Cuttack Rd, Bhubaneswar (Mon-Sat 10 AM - 8 PM). Our 15,000+ sq.ft manufacturing plant is at Plot #12, Bhagabanpur Industrial Estate, Patrapada. We also have a Chhattisgarh studio in Raipur.",
      suggested: ['Get showroom directions', 'Call +91 90400 87614', 'Book factory walkthrough'],
      action: { type: 'navigate', url: 'contact.html', label: 'View Locations & Maps' }
    };
  }

  if (q.includes('quote') || q.includes('price') || q.includes('cost') || q.includes('estimate') || q.includes('budget')) {
    return {
      text: "Because we manufacture in our own factory with zero middlemen, you get transparent direct-from-factory pricing. Share your floorplan on WhatsApp (+91 90400 87614) or book a complimentary 3D design consultation with our senior architects in Bhubaneswar.",
      suggested: ['Book 3D Design Session', 'WhatsApp Quote', 'Visit Laxmisagar Showroom'],
      action: { type: 'modal', subject: 'Custom Quote & 3D Session', label: 'Book 3D Design Session' }
    };
  }

  return {
    text: "Welcome to Vizous Interio! I can help you explore our modular kitchens, custom wardrobes, luxury beds, office furniture, or book a free 3D design session with our senior architects in Bhubaneswar. What are you planning for your space?",
    suggested: ['I need a modular kitchen', 'Custom wardrobe options', 'Explore Project Gallery', 'Visit Laxmisagar showroom']
  };
}
