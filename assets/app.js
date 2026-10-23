/**
 * WRAPPER STUDIO - Client Runtime Engine
 * Pure vanilla JavaScript with zero external Framer dependencies.
 * Powers seamless 60FPS marquee, reactive studio mockup, FAQ accordion,
 * testimonial carousel, and interactive contact intake.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  initFaq();
  initTestimonialCarousel();
  initMockupInteractivity();
  initContactForm();
});

/* ==========================================================================
   1. SEAMLESS INFINITE 60FPS MARQUEE TICKER
   ========================================================================== */
function initTicker() {
  const tickerUl = document.querySelector('[data-framer-name="logos-ticker"] ul');
  if (tickerUl) {
    tickerUl.style.opacity = '1';
    // Clone children to ensure continuous seamless loop without gap
    const items = Array.from(tickerUl.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      tickerUl.appendChild(clone);
    });
  }
}

/* ==========================================================================
   2. INTERACTIVE AGENCY FAQ ACCORDION
   ========================================================================== */
function initFaq() {
  const faqAnswers = {
    "How fast can Wrapper Studio design and launch our website?": 
      "Our Launch Sprints typically deliver in 10 business days. A comprehensive multi-page Flagship Website takes between 3 to 4 weeks from strategic kickoff to production deployment. Because we eliminate layers of bureaucracy and work directly in Figma and code, we move at venture velocity.",
    
    "Why Framer and Next.js 15 instead of WordPress or Webflow?": 
      "Framer and Next.js 15 provide modern web ergonomics that traditional site builders cannot match. Framer allows rapid visual development with native 60FPS spring animations, incredible typography control, and an intuitive CMS. Next.js 15 enables unlimited full-stack engineering, custom WebGL/3D integrations, and guaranteed 100/100 Lighthouse performance.",
    
    "Do we own 100% of the design files and source code?": 
      "100% yes. Upon project completion, we hand over full, unencumbered ownership of all Figma source files, Framer remix links, Next.js Git repositories, and living design tokens. There are no licensing chains or proprietary lock-ins.",
    
    "How does the monthly Studio Retainer work?": 
      "Our Studio Retainer gives you an on-demand senior design and engineering squad without the overhead of full-time hires. You submit requests into your dedicated Slack/Linear board. We work through them sequentially, shipping deliverables every 48-72 hours. You can pause or cancel anytime with zero penalties.",
    
    "Can you help our marketing team update copy and CMS content?": 
      "Yes. Every flagship includes an intuitive CMS setup and a personalized 15-minute video walkthrough showing your marketing team how to edit text, publish blog posts, and add new case studies without touching a single line of code.",
    
    "What design and engineering deliverables do we receive?": 
      "You receive atomic Figma design component kits, living design tokens, responsive desktop and mobile production builds, custom micro-interactions, OpenGraph social preview assets, SEO schema markup, and complete developer documentation.",
    
    "How do we get started with Wrapper Studio?": 
      "Book a direct 20-minute alignment call with our founding partners. We'll audit your current web presence, discuss your roadmap, and provide a fixed-scope proposal with exact pricing and guaranteed launch dates within 24 hours."
  };

  const faqContainers = document.querySelectorAll('[data-framer-name="FAQ list"] > div');
  
  faqContainers.forEach(container => {
    const questionEl = container.querySelector('[data-framer-name="Question"], [data-framer-name="Closed"]');
    if (!questionEl) return;

    questionEl.style.cursor = 'pointer';
    
    const qText = questionEl.innerText.trim().split('\n')[0];
    const answerText = faqAnswers[qText] || "Our founding directors work directly with your executive team to ensure rapid, flawless delivery aligned with your brand standards.";
    
    const ansDiv = document.createElement('div');
    ansDiv.className = 'faq-answer-container';
    ansDiv.innerHTML = `<p style="padding: 18px 24px 22px 24px; color: #9ea0a6; font-size: 15px; line-height: 1.65; font-family: 'Geist', sans-serif; border-left: 2px solid #fe5e37; margin: 8px 16px 16px 16px; background: rgba(255, 255, 255, 0.02); border-radius: 0 8px 8px 0;">${answerText}</p>`;
    container.appendChild(ansDiv);

    questionEl.addEventListener('click', () => {
      const isOpen = ansDiv.classList.contains('open');
      
      // Close all other open answers
      document.querySelectorAll('.faq-answer-container').forEach(a => a.classList.remove('open'));
      
      if (!isOpen) {
        ansDiv.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   3. CLIENT TESTIMONIALS SLIDING CAROUSEL
   ========================================================================== */
function initTestimonialCarousel() {
  const track = document.querySelector('[data-framer-name="Testimonial track"]');
  const prevBtn = document.querySelector('[data-framer-name="Previous testimonial"]');
  const nextBtn = document.querySelector('[data-framer-name="Next testimonial"]');

  if (!track || !nextBtn || !prevBtn) return;

  let currentIndex = 0;
  const cards = track.querySelectorAll('[data-framer-name="card"]');
  const totalCards = cards.length || 6;
  const cardWidth = 400; // approximate card width + margin

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else {
      currentIndex = 0;
      track.style.transform = `translateX(0px)`;
    }
  });

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });
}

/* ==========================================================================
   4. INTERACTIVE HERO APP MOCKUP & CLIENT PORTAL
   ========================================================================== */
function initMockupInteractivity() {
  const projectItems = document.querySelectorAll('[data-framer-name="sidebar-projects"] [data-framer-name="project-row"]');
  const composerInput = document.querySelector('[data-framer-name="message-input"] p');
  const heroHello = document.querySelector('[data-framer-name="chat-window"] h5');

  const projectDetails = {
    "Kinetix AI • Infrastructure": "Active: Kinetix AI GPU Orchestration Flagship • +340% Demo Signups",
    "Valo Pay • Fintech": "Active: Valo Pay Cross-Border Treasury • 0.38s LCP Edge Build",
    "Monolith • Spatial Audio": "Active: Monolith Audiophile 3D Hardware • Awwwards Site of the Day"
  };

  projectItems.forEach(item => {
    item.classList.add('sidebar-project-item');
    item.addEventListener('click', () => {
      projectItems.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      const projName = item.innerText.trim();
      if (heroHello) {
        heroHello.innerText = projectDetails[projName] || `Active Project: ${projName}`;
      }
      showToast(`Switched client design canvas to: ${projName}`);
    });
  });

  // Prompt Composer Click Action
  const composerBox = document.querySelector('[data-framer-name="composer"]');
  if (composerBox) {
    composerBox.style.cursor = 'pointer';
    composerBox.addEventListener('click', () => {
      const prompts = [
        "Calibrating 60FPS fluid spring physics and 3D WebGL tourbillon movement...",
        "Synchronizing living design tokens between Figma and Next.js 15...",
        "Google Lighthouse Core Web Vitals audit verified: 100/100 across all metrics...",
        "Deploying production flagship website to global Vercel Edge CDN..."
      ];
      const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      if (composerInput) {
        composerInput.innerText = randomPrompt;
        composerInput.style.color = "#ffffff";
      }
      showToast(randomPrompt);
    });
  }
}

/* ==========================================================================
   5. INTERACTIVE PROJECT INTAKE FORM
   ========================================================================== */
function initContactForm() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Thank you! Your project inquiry has been received. Our creative directors will follow up within 24 hours.");
      form.reset();
    });
  });
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(msg) {
  let toast = document.querySelector('.wrapper-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'wrapper-toast';
    toast.innerHTML = `<span class="wrapper-toast-dot"></span><span class="wrapper-toast-text">${msg}</span>`;
    document.body.appendChild(toast);
  } else {
    toast.querySelector('.wrapper-toast-text').innerText = msg;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
