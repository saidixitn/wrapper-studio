# WRAPPER STUDIO — Design System & Aesthetic Architecture

> A master blueprint of the dark modernist visual language, typography scales, glassmorphic layout, component tokens, and motion physics inspired by [wrapper.framer.ai](https://wrapper.framer.ai/), rebuilt from the ground up for **WRAPPER STUDIO** (Web Design & Digital Product Agency).

---

## 1. Executive Aesthetic Philosophy

The visual philosophy of Wrapper is anchored in **Obsidian Modernism**:
- **Void-first Canvas**: Rather than standard gray or off-white, the primary backdrop is absolute void (`#000000` / `#0a0a0a`), creating high contrast that makes typography and UI mockups feel tactile and sculptural.
- **Glassmorphic Precision**: Elevated cards and containers use deep charcoal surfaces (`#121212`, `#161616`) combined with ultra-thin, low-opacity borders (`rgba(255, 255, 255, 0.08)` to `0.12`).
- **Physical Feedback & Micro-Motion**: Springs and transitions use calibrated mass and damping rather than linear ease-in-out curves. Every hover, click, and scroll responds with physical weight.

---

## 2. Color System & Surface Elevation

```css
:root {
  /* Surface Layers */
  --bg-canvas: #0a0a0a;          /* Deepest canvas */
  --bg-surface: #121314;         /* Floating panels & navigation */
  --bg-card: #16181b;            /* Bento feature containers */
  --bg-card-elevated: #1e2024;   /* Hover states & active chips */

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.14);
  --border-focus: #ffffff;

  /* Typography */
  --text-primary: #ffffff;       /* Pure white headlines */
  --text-secondary: #9ea0a6;     /* Muted body copy */
  --text-tertiary: #6b6d74;      /* Labels, breadcrumbs & captions */

  /* Brand Accents */
  --accent-orange: #fe5e37;      /* Primary energetic highlight */
  --accent-blue: #2563eb;        /* Treasury & data indicator */
  --accent-green: #10b981;       /* Operational status & live tags */
  --accent-slate: #1e293b;       /* Featured card gradient texture */
}
```

---

## 3. Typography Architecture

The typography is built around **Geist** and **Geist Mono** by Vercel:
- **Headlines (`h1`, `h2`)**: Tight negative letter-spacing (`-0.035em` to `-0.04em`), tight line-heights (`1.05` to `1.15`), and high font weight (`600` to `700`).
- **Body (`p`, `lead`)**: Open line-height (`1.6`), generous reading measure (`max-width: 680px`), set in `--text-secondary` (`#9ea0a6`) to reduce cognitive eye strain against pure black.
- **Technical Monospace (`mono`)**: Geist Mono used for all metadata, system statuses, breadcrumbs, prices, and telemetry tags with `0.04em` tracking.

---

## 4. Floating Navbar Architecture

The navbar is an iconic floating glass capsule pinned to the top of the viewport:

```
+----------------------------------------------------------------------------------------------------+
|  [●] Wrapper Studio     Platform   Pricing   About   Resources       [ Contact sales ]   [ Log in ] |
+----------------------------------------------------------------------------------------------------+
```

### Key Anatomy:
1. **Container**:
   - `height: 52px` to `56px`
   - `border-radius: 9999px` (pill)
   - `background: rgba(18, 19, 20, 0.75)`
   - `backdrop-filter: blur(20px)`
   - `border: 1px solid rgba(255, 255, 255, 0.1)`
   - `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4)`
2. **Brand Icon**:
   - Solid geometric circular badge + wordmark `Wrapper`
3. **Links Hierarchy**:
   - Navigation links centered in pill container with subtle white-on-hover glow
4. **Action Buttons**:
   - Secondary ghost pill: `Contact sales` (`background: rgba(255, 255, 255, 0.08)`)
   - Primary solid pill: `Log in` or `Start a Project` (`background: #ffffff; color: #0a0a0a`)

---

## 5. The Signature Hero Interactive Mockup Window

The hero section features a full desktop application simulation:
- **Window Header**:
  - macOS window buttons: Red (`#ff5f56`), Yellow (`#ffbd2e`), Green (`#27c93f`)
  - Centered URL capsule: `studio.wrapper.ai` with lock and share icons
- **Left Workspace Sidebar**:
  - Active team switcher: `Acme Studio` / `Wayne Corp`
  - Action items: `New Project`, `Library`, `Plugins`
  - Project list: `Ace Chemicals`, `Janus Cosmetics`, `Stagg Enterprises` (Interactive: click to change live canvas context)
- **Central Canvas**:
  - User greeting: `Hello, Bruce.` / `Hello, Founder.`
  - Model and security pill: `Full Access • Opus 5.5 • Project • Files`
  - Interactive prompt composer bar: user can click chips or type custom prompts with instant response

---

## 6. The 4 Bento Feature Cards

| Card | Theme | Architectural Details |
|---|---|---|
| **01. Wherever the work happens** | Slack & Workflows | Slack window simulation with `#janus-investigation` / `#design-sprint`, active members pill, real chat message bubbles with timestamps and avatar photos. |
| **02. Answers that show their work** | Financial & Telemetry | Live data card pulling numbers from Stripe, QuickBooks, Google Analytics with SVG chart visualizer right in the thread. |
| **03. Over 100+ plugins** | Ecosystem Matrix | High-density grid of modern tech icons: Figma, Framer, Next.js, Slack, Stripe, Supabase, Vercel, Notion, GitHub. |
| **04. Agents that act for you** | Automated Execution | Interactive prompt execution workflow with checking deposit and reinvestment logic. |

---

## 7. Motion & 60FPS Animation Guidelines

1. **Logo Marquee**:
   - Infinite horizontal CSS translation at `30s linear infinite` with seamless track cloning.
   - Pauses gracefully on `:hover`.
2. **FAQ Accordion**:
   - Dynamic height expansion with `max-height: 250px` transition and question highlight.
3. **Testimonial Carousel**:
   - Translates `translateX(-N * 380px)` with smooth cubic-bezier easing (`0.16, 1, 0.3, 1`).
4. **Interactive Toast Notifications**:
   - Bottom-right pill with green status indicator pulsing on user action.

---

## 8. Directory & Page Map

- [`/`](http://localhost:3000/) — Homepage with Hero, Mockup, Marquee, Bento, Testimonials, FAQ, Footer
- [`/platform`](http://localhost:3000/platform/) — Platform & 3D Isometric Diagrams
- [`/pricing`](http://localhost:3000/pricing/) — Transparent 4-Tier Pricing
- [`/about`](http://localhost:3000/about/) — Studio Story, Team Gallery & Culture
- [`/contact`](http://localhost:3000/contact/) — Project Intake Form
- [`/blog`](http://localhost:3000/blog/) — Journal & Categorized Resources
- [`/blog/design-is-an-act-of-clarity`](http://localhost:3000/blog/design-is-an-act-of-clarity.html) — Case Study Detail
- [`/blog/building-calm-into-complex-products`](http://localhost:3000/blog/building-calm-into-complex-products.html) — Engineering Article
- [`/blog/what-we-learned-shipping-the-api`](http://localhost:3000/blog/what-we-learned-shipping-the-api.html) — Architecture Article
- [`/integrations`](http://localhost:3000/integrations/) — Connected Tools & Ecosystem
- [`/compare/wrapper-vs-chatgpt`](http://localhost:3000/compare/wrapper-vs-chatgpt/) — Comparison Matrix 1
- [`/compare/wrapper-vs-claude`](http://localhost:3000/compare/wrapper-vs-claude/) — Comparison Matrix 2
- [`/legal/terms-of-service`](http://localhost:3000/legal/terms-of-service/) & [`/legal/privacy-policy`](http://localhost:3000/legal/privacy-policy/) — Legal
- [`/404`](http://localhost:3000/404.html) — Error Page
