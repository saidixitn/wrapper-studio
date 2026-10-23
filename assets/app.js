/**
 * WRAPPER STUDIO - Client Runtime
 * Provides seamless marquee looping, accordion interactions, carousel, and reactive mockup
 */

document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  initFaq();
  initTestimonialCarousel();
  initMockupInteractivity();
  initContactForm();
});

/* 1. Seamless Infinite Marquee Ticker */
function initTicker() {
  const tickerUl = document.querySelector('[data-framer-name="logos-ticker"] ul');
  if (tickerUl) {
    tickerUl.style.opacity = '1';
    // Clone children to ensure seamless infinite scroll
    const items = Array.from(tickerUl.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      tickerUl.appendChild(clone);
    });
  }
}

/* 2. Interactive FAQ Accordion */
function initFaq() {
  const faqItems = document.querySelectorAll('[data-framer-name="FAQ list"] .framer-1g3ps1d-container, [data-framer-name="Question trigger"]');
  
  const faqAnswers = {
    "What is your AI platform?": "Wrapper is a modern digital platform and design engineering studio. We build enterprise flagships, custom motion systems, and intelligent digital experiences tailored for high-growth tech companies and category leaders.",
    "What is the workspace used for?": "The workspace connects your team's design systems, repositories, staging environments, and customer telemetry into a single unified canvas for rapid design and code iteration.",
    "Can it connect to our existing tools?": "Yes. We integrate directly with Figma, Framer, Next.js, Slack, Linear, GitHub, Supabase, and Stripe, ensuring seamless workflows without disrupting your existing stack.",
    "Is the AI safe for business use?": "Every deployment conforms to SOC 2 Type II compliance, zero data retention policies on model providers, and full IP ownership transferred directly to your organization.",
    "Can we control usage across the organization?": "Yes. Comprehensive role-based access control (RBAC), SSO, SCIM, and team workspace segregation are built in natively.",
    "Are APIs available?": "We offer full REST and GraphQL APIs, Webhooks, and TypeScript SDKs to embed interactive capabilities and telemetry directly into your production application.",
    "Do you offer implementation support?": "Every client works directly with our founding creative directors and engineers with dedicated shared Slack channels, white-glove onboarding, and guaranteed response SLAs."
  };

  document.querySelectorAll('[data-framer-name="FAQ list"] > div').forEach(container => {
    const questionEl = container.querySelector('[data-framer-name="Question"], [data-framer-name="Closed"]');
    if (!questionEl) return;

    questionEl.style.cursor = 'pointer';
    
    // Create answer container
    const qText = questionEl.innerText.trim().split('\n')[0];
    const answerText = faqAnswers[qText] || "Our team works directly with yours to ensure rapid, flawless implementation and complete alignment with your brand standards.";
    
    const ansDiv = document.createElement('div');
    ansDiv.className = 'faq-answer-container';
    ansDiv.innerHTML = `<p style="padding: 16px 24px; color: var(--token-f08b84dc-ffb4-4009-93ed-69d7534a808d, #888); font-size: 15px; line-height: 1.6; font-family: 'Geist', sans-serif;">${answerText}</p>`;
    container.appendChild(ansDiv);

    questionEl.addEventListener('click', () => {
      const isOpen = ansDiv.classList.contains('open');
      
      // Close all others
      document.querySelectorAll('.faq-answer-container').forEach(a => a.classList.remove('open'));
      
      if (!isOpen) {
        ansDiv.classList.add('open');
      }
    });
  });
}

/* 3. Testimonial Carousel */
function initTestimonialCarousel() {
  const track = document.querySelector('[data-framer-name="Testimonial track"]');
  const prevBtn = document.querySelector('[data-framer-name="Previous testimonial"]');
  const nextBtn = document.querySelector('[data-framer-name="Next testimonial"]');

  if (!track || !nextBtn || !prevBtn) return;

  let currentIndex = 0;
  const cards = track.querySelectorAll('[data-framer-name="card"]');
  const totalCards = cards.length || 6;
  const cardWidth = 380; // approx width + gap

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

/* 4. Interactive Hero Mockup */
function initMockupInteractivity() {
  const projectItems = document.querySelectorAll('[data-framer-name="sidebar-projects"] [data-framer-name="project-row"]');
  const composerInput = document.querySelector('[data-framer-name="message-input"] p');
  const sendBtn = document.querySelector('[data-framer-name="composer"] svg, [data-framer-name="composer"] button');
  const heroHello = document.querySelector('[data-framer-name="chat-window"] h5');

  projectItems.forEach(item => {
    item.classList.add('sidebar-project-item');
    item.addEventListener('click', () => {
      projectItems.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      const projName = item.innerText.trim();
      if (heroHello) {
        heroHello.innerText = `Active Project: ${projName}`;
      }
      showToast(`Switched workspace context to: ${projName}`);
    });
  });

  // Prompt Composer Click Action
  const composerBox = document.querySelector('[data-framer-name="composer"]');
  if (composerBox) {
    composerBox.style.cursor = 'text';
    composerBox.addEventListener('click', () => {
      const prompts = [
        "Synthesizing 60FPS fluid spring physics and WebGL 3D showcase...",
        "Calibrating design tokens between Figma and Next.js 15...",
        "Running Google Lighthouse audit: Performance 100, Accessibility 100...",
        "Deploying flagship website to global edge CDN..."
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

/* 5. Contact Form Handler */
function initContactForm() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Thank you! Your project inquiry has been received. Our team will follow up within 24 hours.");
      form.reset();
    });
  });
}

/* Toast Helper */
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
  }, 3500);
}
