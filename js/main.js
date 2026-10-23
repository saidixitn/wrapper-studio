/**
 * WRAPPER STUDIO - Core Interactive Engine
 * Seamless Framer-grade interactions, reactive canvas mockup, and dynamic UI
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroCanvas();
  initSpringPlayground();
  initViewportSwitcher();
  initFaqAccordion();
  initPricingToggle();
  initScrollReveal();
  initWorldClocks();
  initContactChips();
  initSpotlightEffect();
});

/* ==========================================================================
   1. NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });
  }
}

/* ==========================================================================
   2. SIGNATURE INTERACTIVE HERO CANVAS MOCKUP
   Modeled directly after wrapper.framer.ai's interactive app preview
   ========================================================================== */
function initHeroCanvas() {
  const stage = document.querySelector('.canvas-stage');
  const projectItems = document.querySelectorAll('.project-item');
  const stageTitle = document.querySelector('.stage-title');
  const stageDesc = document.querySelector('.stage-subtext');
  const metricConv = document.querySelector('.metric-conv');
  const metricSpeed = document.querySelector('.metric-speed');
  const metricAwwwards = document.querySelector('.metric-awards');
  const modeButtons = document.querySelectorAll('.canvas-btn-mode');
  const promptInput = document.querySelector('.prompt-text');
  const promptChips = document.querySelectorAll('.prompt-chip');

  const projectData = {
    kinetix: {
      title: "Kinetix • Autonomous AI Infrastructure",
      desc: "Designed and engineered a dark-mode, high-velocity digital flagship with real-time 3D telemetry and fluid micro-interactions.",
      conv: "+340%",
      speed: "0.38s",
      awards: "Site of the Day",
      bgClass: "kinetix-theme",
      prompt: "Generated high-converting enterprise onboarding flow & interactive 3D node network"
    },
    valo: {
      title: "Valo Pay • Modern Cross-Border Treasury",
      desc: "Architected a crystal-clear financial flagship with interactive ledger animations and instant multi-currency calculator.",
      conv: "+215%",
      speed: "0.42s",
      awards: "Developer Award",
      bgClass: "valo-theme",
      prompt: "Rendered interactive currency routing simulator with sub-second feedback"
    },
    monolith: {
      title: "Monolith • Spatial Audio Acoustics",
      desc: "Engineered an editorial luxury product showcase utilizing WebGL acoustics simulation and custom typography.",
      conv: "+180%",
      speed: "0.45s",
      awards: "FWA of the Month",
      bgClass: "monolith-theme",
      prompt: "Synthesized interactive soundwave mesh and spatial audio preview"
    },
    chrono: {
      title: "Chrono • Haute Horlogerie Digital Atelier",
      desc: "Crafted an ultra-refined Swiss horology digital boutique featuring 60FPS mechanical movement exploded views.",
      conv: "+290%",
      speed: "0.36s",
      awards: "Best UI System",
      bgClass: "chrono-theme",
      prompt: "Engineered 360-degree tourbillon escapement micro-interaction in Framer"
    }
  };

  // Switch Active Project
  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      projectItems.forEach(p => p.classList.remove('active'));
      item.classList.add('active');

      const key = item.getAttribute('data-project');
      const data = projectData[key];

      if (data && stageTitle) {
        // Subtle animate out and in
        stageTitle.style.opacity = '0';
        stageDesc.style.opacity = '0';
        
        setTimeout(() => {
          stageTitle.textContent = data.title;
          stageDesc.textContent = data.desc;
          if (metricConv) metricConv.textContent = data.conv;
          if (metricSpeed) metricSpeed.textContent = data.speed;
          if (metricAwwwards) metricAwwwards.textContent = data.awards;
          if (promptInput) promptInput.textContent = data.prompt;

          stageTitle.style.opacity = '1';
          stageDesc.style.opacity = '1';
        }, 150);
      }
    });
  });

  // Dark/Light Mode Switcher on Stage
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-mode');
      if (mode === 'dark') {
        stage?.classList.add('dark-mode');
      } else {
        stage?.classList.remove('dark-mode');
      }
    });
  });

  // Prompt Chips Click Action
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.getAttribute('data-prompt');
      if (promptInput) {
        promptInput.textContent = promptText;
        showToast(`Studio Engine: "${promptText}" activated!`);
      }
    });
  });
}

/* ==========================================================================
   3. BENTO INTERACTIVE SPRING PLAYGROUND
   ========================================================================== */
function initSpringPlayground() {
  const box = document.querySelector('.interactive-spring-box');
  const springBtns = document.querySelectorAll('.spring-btn');

  if (!box) return;

  let isHovered = false;

  box.addEventListener('mouseenter', () => {
    isHovered = true;
    box.style.transform = 'scale(1.15) rotate(6deg)';
  });

  box.addEventListener('mouseleave', () => {
    isHovered = false;
    box.style.transform = 'scale(1) rotate(0deg)';
  });

  springBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      springBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tension = btn.getAttribute('data-tension');

      if (tension === 'stiff') {
        box.style.transition = 'transform 0.2s cubic-bezier(0, 0, 0.2, 1)';
        box.style.transform = 'scale(1.2) rotate(-8deg)';
      } else if (tension === 'bouncy') {
        box.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.8, 0.64, 1)';
        box.style.transform = 'scale(1.25) rotate(12deg)';
      } else {
        box.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        box.style.transform = 'scale(1.15) rotate(4deg)';
      }

      setTimeout(() => {
        box.style.transform = 'scale(1) rotate(0deg)';
      }, 400);
    });
  });
}

/* ==========================================================================
   4. BENTO VIEWPORT SWITCHER
   ========================================================================== */
function initViewportSwitcher() {
  const vpBtns = document.querySelectorAll('.viewport-btn');
  const vpFrame = document.querySelector('.viewport-frame');

  if (!vpFrame) return;

  vpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vpBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const vp = btn.getAttribute('data-vp');
      if (vp === 'desktop') {
        vpFrame.style.width = '100%';
      } else if (vp === 'tablet') {
        vpFrame.style.width = '70%';
      } else if (vp === 'mobile') {
        vpFrame.style.width = '40%';
      }
    });
  });
}

/* ==========================================================================
   5. ACCORDION / FAQ
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      // Toggle clicked item
      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ==========================================================================
   6. PRICING TOGGLE (ONE-TIME SPRINT vs MONTHLY RETAINER)
   ========================================================================== */
function initPricingToggle() {
  const toggle = document.querySelector('.toggle-container');
  const options = document.querySelectorAll('.toggle-option');
  const amounts = document.querySelectorAll('.price-amount');
  const periods = document.querySelectorAll('.price-period');

  if (!toggle) return;

  const prices = {
    sprint: {
      tier1: "5,500",
      tier2: "12,500",
      tier3: "8,500",
      period1: "per project",
      period2: "per project",
      period3: "per month"
    },
    retainer: {
      tier1: "4,800",
      tier2: "10,800",
      tier3: "7,200",
      period1: "per sprint / mo",
      period2: "per sprint / mo",
      period3: "billed annually"
    }
  };

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      const mode = opt.getAttribute('data-billing');
      updatePricing(mode);
    });
  });

  toggle.addEventListener('click', () => {
    const active = document.querySelector('.toggle-option.active');
    const isSprint = active?.getAttribute('data-billing') === 'sprint';
    const nextMode = isSprint ? 'retainer' : 'sprint';

    options.forEach(o => o.classList.toggle('active', o.getAttribute('data-billing') === nextMode));
    updatePricing(nextMode);
  });

  function updatePricing(mode) {
    if (amounts.length >= 3) {
      amounts[0].textContent = prices[mode].tier1;
      amounts[1].textContent = prices[mode].tier2;
      amounts[2].textContent = prices[mode].tier3;
      periods[0].textContent = prices[mode].period1;
      periods[1].textContent = prices[mode].period2;
      periods[2].textContent = prices[mode].period3;
    }
  }
}

/* ==========================================================================
   7. REVEAL ON SCROLL
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   8. WORLD CLOCKS (FOOTER)
   ========================================================================== */
function initWorldClocks() {
  const clockEl = document.querySelector('.footer-tz');
  if (!clockEl) return;

  function updateTimes() {
    const now = new Date();
    
    const sfTime = now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: false });
    const londonTime = now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false });
    const tokyoTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false });

    clockEl.innerHTML = `SF: <strong>${sfTime}</strong> • London: <strong>${londonTime}</strong> • Tokyo: <strong>${tokyoTime}</strong>`;
  }

  updateTimes();
  setInterval(updateTimes, 30000);
}

/* ==========================================================================
   9. INTERACTIVE CONTACT CHIPS
   ========================================================================== */
function initContactChips() {
  const chipGroups = document.querySelectorAll('.chip-selector');

  chipGroups.forEach(group => {
    const chips = group.querySelectorAll('.chip-option');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        // Check if multi or single select
        if (group.classList.contains('single-select')) {
          chips.forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
        } else {
          chip.classList.toggle('selected');
        }
      });
    });
  });

  // Handle contact form submission
  const contactForm = document.getElementById('projectForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'there';
      showToast(`Thank you, ${name}! Your inquiry has been dispatched to our design team.`);
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   10. SPOTLIGHT HOVER EFFECT
   ========================================================================== */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.spotlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="color: #10b981; font-weight: 700;">✓</span>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
