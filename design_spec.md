# Syncwave Media — Premium Visual Design System
## High-End Visual Design & Interactive System Architecture

Syncwave Media operates at the intersection of venture capital, artificial intelligence, and premium technology. Our clients are high-profile founders, investors, and innovators. The visual design system must reflect an elite, forward-looking, and high-fidelity agency aesthetic: **ultra-clean spacing, deep space backgrounds, subtle glassmorphism, responsive mathematical grid structures, and sharp neon glows.**

---

## 1. Core Visual Tokens & CSS Variables

Below is the design system's CSS variable token list. These should be defined in the global `:root` scope of `src/index.css` to govern all styles.

```css
:root {
  /* --- Brand Color Palette --- */
  --bg-deep-space: #05050A;          /* Absolute premium deep dark background */
  --bg-dark-card: rgba(10, 10, 20, 0.6); /* Translucent glass card fill */
  --bg-dark-solid: #0A0A14;         /* Solid card/section fallback */
  
  /* Vibrant Neon Accent Glows */
  --accent-indigo: #6366F1;          /* Neon Indigo - Primary Brand Tone */
  --accent-magenta: #D946EF;         /* Electric Magenta - Accent/Highlights */
  --accent-cyan: #06B6D4;            /* Soundwave Cyan - Sub-Accents & Stats */
  
  /* Text Hierarchy Colors */
  --text-primary: #F8FAFC;           /* Slate 50 - Crisp off-white */
  --text-secondary: #94A3B8;         /* Slate 400 - High-end muted blue-grey */
  --text-muted: #475569;             /* Slate 600 - Low-contrast text/labels */
  --text-gradient-white: linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%);
  --text-gradient-electric: linear-gradient(135deg, #6366F1 0%, #D946EF 50%, #06B6D4 100%);

  /* --- Typography --- */
  --font-heading: 'Syne', 'Clash Display', 'Inter', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;

  /* --- Spacing & Grids (Mathematical System) --- */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --spacing-giant: 128px;
  --max-width-container: 1400px;

  /* --- Borders & Outlines --- */
  --border-glass: 1px solid rgba(255, 255, 255, 0.05);
  --border-glass-glow: 1px solid rgba(99, 102, 241, 0.3);
  --border-radius-sm: 8px;
  --border-radius-md: 16px;
  --border-radius-lg: 24px;
  --border-radius-pill: 50px;

  /* --- Blurs & Glows --- */
  --backdrop-blur: blur(16px);
  --glow-indigo: 0 0 40px rgba(99, 102, 241, 0.25);
  --glow-magenta: 0 0 40px rgba(217, 70, 239, 0.25);
  --glow-cyan: 0 0 40px rgba(6, 182, 212, 0.25);
  
  /* --- Animation Physics --- */
  --ease-premium: cubic-bezier(0.16, 1, 0.3, 1); /* Custom ultra-smooth ease-out */
  --transition-fast: all 0.2s var(--ease-premium);
  --transition-medium: all 0.4s var(--ease-premium);
  --transition-slow: all 0.8s var(--ease-premium);
}
```

---

## 2. Premium Typography System

To ensure premium typographic rendering, we combine a wide, modern display font with a clean, legibility-first geometric body font.

### Font Imports
Ensure the following imports are placed at the absolute top of the global stylesheet (`src/index.css`):
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Syne:wght@500;600;700;800&display=swap');
```

### Typography Application Rules

1. **Display Headings (`h1`, `.hero-title`)**
   - Font Family: `Syne`
   - Weight: `800` (Extra Bold) or `700`
   - Treatment: Uppercase with slight tight tracking (`letter-spacing: -0.03em`).
   - Fill: Solid off-white or overlayed with `--text-gradient-white`.

2. **Section Titles (`h2`)**
   - Font Family: `Syne`
   - Weight: `700`
   - Treatment: Capitalized, tracking `letter-spacing: -0.02em`.
   - Line height: `1.15`.

3. **Sub-headings / Group Labels (`h3`, `h4`)**
   - Font Family: `Plus Jakarta Sans`
   - Weight: `600` (Semi-Bold) or `700` (Bold)
   - Treatment: Mixed case, clean scaling.

4. **Kicker / Over-title Badges (`.badge`, `.kicker`)**
   - Font Family: `Plus Jakarta Sans`
   - Weight: `600`
   - Treatment: Uppercase, spacing `letter-spacing: 0.15em`, small font size (`11px` to `13px`).
   - Accent color: `--accent-indigo` or `--accent-magenta`.

5. **Body Text (`p`, `span`, `li`)**
   - Font Family: `Plus Jakarta Sans`
   - Weights: `400` (Regular) / `500` (Medium)
   - Treatment: Muted color (`--text-secondary`), high line-height (`1.65` to `1.75`) for ultimate readability.

---

## 3. Structural Specifications & Micro-Textures

To escape a flat, boring layout, we apply three layers of background texture and micro-details:

```
[Absolute Background: #05050A]
         │
         ▼
[Layer 1: Subtle Dotted Matrix Grid]
         │
         ▼
[Layer 2: Vertical Wireframe Columns]
         │
         ▼
[Layer 3: Abstract Radial Blur Glows]
         │
         ▼
[Foreground Content: Glass Cards & Text]
```

### A. Dotted Matrix Background
A repeating grid pattern that overlays the deep black page background to add high-fidelity depth.
```css
.bg-dots {
  background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### B. Vertical Grid Lines (The Wireframe Overlay)
A fixed-column structural layout that mimics a developer's drafting canvas.
- Apply a full-viewport container overlay containing 4 or 5 vertical lines absolute positioned across the width:
```css
.grid-lines-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width-container);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.grid-line {
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.0) 0%,
    rgba(255, 255, 255, 0.02) 20%,
    rgba(255, 255, 255, 0.02) 80%,
    rgba(255, 255, 255, 0.0) 100%
  );
}
```

### C. Glassmorphism & Adaptive Card Borders
Our standard card style features a highly refined drop shadow, backdrop blur, and dual border gradient hover transition.
```css
.premium-card {
  background: var(--bg-dark-card);
  backdrop-filter: var(--backdrop-blur);
  -webkit-backdrop-filter: var(--backdrop-blur);
  border: var(--border-glass);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  transition: var(--transition-medium);
  position: relative;
  overflow: hidden;
}

.premium-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px; /* border thickness */
  background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.premium-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.3); /* Accent Indigo Border Glow */
  box-shadow: 0 20px 40px rgba(5, 5, 10, 0.8), 0 0 30px rgba(99, 102, 241, 0.08);
}
```

### D. Ambient Neon Glow Details
Blurred colorful ellipses acting as background backlights behind components.
```css
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}
.glow-indigo-orb {
  background: var(--accent-indigo);
  width: 600px;
  height: 600px;
}
.glow-magenta-orb {
  background: var(--accent-magenta);
  width: 400px;
  height: 400px;
}
```

---

## 4. Section-by-Section Mock Layouts & Structural Placements

This blueprint details exactly how each screen section is constructed, where key elements are placed, and how the interactive structure operates.

---

### Section A: Hero (The Command Center)
The Hero layout uses a left-heavy, asymmetrical composition. The left column contains key text hierarchy, and the right holds floating, highly interactive status indicators that move dynamically with scroll parallax.

```
+---------------------------------------------------------------------------------------+
|  LOGO                   Home   Process   Why Us   Story   FAQ             [Book Call]  | Navbar
+---------------------------------------------------------------------------------------+
|                                                                                       |
|  [Badge: NEXT-GEN PODCASTING ENGINE]                                                  |
|                                                                                       |
|  <h1>                                              +--------------------------------+ |
|  SCALING PODCAST                                   | [Widget A: Live Engagement]    | | Parallax
|  ENGINES FOR VCs                                   | 24K Likes                      | | Floating
|  & AI LEADERS.                                     | +------------------------------+ | Cards
|  </h1>                                             |                                | |
|                                                    | [Widget B: Waveform Visualizer]| |
|  <p>                                               | (GSAP Canvas Animation)        | |
|  We handle script writing, studio edits, micro-    |                                | |
|  content cutdowns, and multi-channel syndicate.    |                                | |
|  </p>                                              +--------------------------------+ |
|                                                                                       |
|  [CTA: Book Consultation]   [Secondary: Watch Reel]                                   |
|                                                                                       |
+---------------------------------------------------------------------------------------+
```

*   **Layout Structure:**
    *   **Background:** Dynamic interactive soundwave canvas (`WaveCanvas.jsx`) flowing at 15% opacity behind content. Underlaid with one Indigo Glow Orb (top-left) and one Cyan Glow Orb (middle-right).
    *   **Hero Container (`.hero-container`):** Flex-grid split into a `2-column` composition on desktops.
        *   **Left Column (60%):** Large Badge tag -> Main Header (h1) with gradient text -> Description Paragraph -> Dual button actions (Magnetic buttons).
        *   **Right Column (40%):** Floating widget cardstack:
            *   *Widget A (Likes Tracker):* Translucent container showing custom incrementing stats with a tiny heart heartbeat animation.
            *   *Widget B (Performance Bar Chart):* Clean, glowing vertical bar charts representing audience metrics that rise sequentially on page load using Framer Motion.
            *   *Widget C (Platform syndicate icons):* Icons for Spotify, YouTube, Apple Podcasts, LinkedIn, Twitter floating on their own orbital axes.
    *   **Interactive Hook:** Parallax mapping (Lenis/Framer Motion) where the right-hand stack floats upwards faster than the left-side text as the user scrolls.

---

### Section B: IntroducingUs (High-Fidelity Showcase)
Focuses on the high-quality outputs Syncwave produces. The section is dominated by an immersive video showcase with a sleek grid layout.

```
+---------------------------------------------------------------------------------------+
|                                    INTRODUCING US                                     |
|                              Watch Our Production Engine                              |
|                                                                                       |
|  +---------------------------------------------------------------------------------+  |
|  |                              [Center Video Playback]                            |  |
|  |                     (Interactive 16:9 Glassmorphic Player)                      |  |
|  +---------------------------------------------------------------------------------+  |
|                                                                                       |
|  +--------------+  +--------------+  +------------------------+  +-----------------+  |
|  | Vertical A   |  | Vertical B   |  | Vertical C             |  | Vertical D      |  |
|  | AI Podcast   |  | VC Roundtable|  | Tech CEO Spotlight     |  | Founder Pitch   |  |
|  | [120K Views] |  | [98K Views]  |  | [340K Views]           |  | [77K Views]     |  |
|  +--------------+  +--------------+  +------------------------+  +-----------------+  |
+---------------------------------------------------------------------------------------+
```

*   **Layout Structure:**
    *   **Header:** Standard section title centered (`h2` + paragraph).
    *   **Main Feature (The Player):** A large 16:9 widescreen video showcase box.
        *   *Styles:* Wrapped in a `.premium-card` with an outer magenta neon ring glow. Has a custom floating circular Play button (`--bg: var(--accent-magenta)`) with a persistent breath scale animation.
        *   *Action:* Clicking expands the video container inline to overlay the background, launching clean HTML5/Wistia video with smooth custom controls.
    *   **Sub-Grid (9:16 Shorts Engine):** A horizontal list of 4 vertical video cards representing short-form vertical cutdowns (TikTok, YouTube Shorts, Reels).
        *   *Styles:* Standard aspects (`9:16`), overlays displaying views count (accented in Cyan), video title, and platform logo badge.
        *   *Hover Pattern:* Hovering over a vertical card scales the thumbnail by `1.08`, dims the background opacity, and starts playing a silent `.mp4` loop overlay inside the card.

---

### Section C: Process (The Soundwave Timeline)
A premium horizontal process line that leads the client through our production workflow.

```
+---------------------------------------------------------------------------------------+
|                                  THE PRODUCTION PIPELINE                              |
|                                                                                       |
|   (Step 01: Setup)             (Step 02: Launch)             (Step 03: Scale)         |
|   +-----------------------+    +-----------------------+    +-----------------------+ |
|   | 01                    |    | 02                    |    | 03                    | |
|   |                       |    |                       |    |                       | |
|   | [Icon: Mic]           |====| [Icon: Cut]           |====| [Icon: Chart]         | |
|   | Creative Setup        |    | Rapid Editing         |    | Multi-Channel Growth  | |
|   | Hardware & Branding   |    | 48h turnaround time   |    | Syndicated reach      | |
|   +-----------------------+    +-----------------------+    +-----------------------+ |
+---------------------------------------------------------------------------------------+
```

*   **Layout Structure:**
    *   **Workflow Pathway:** 3 or 4 step card grid arranged horizontally.
    *   **Card Composition:**
        *   Giant translucent step number (`01`, `02`, `03`) in the background using `--font-heading` at `96px` height with a muted `opacity: 0.05`.
        *   Small glowing indicator dot connected to a horizontal CSS animated dash-line that flows between cards.
        *   SVG custom outline icon representing the action.
        *   Header text + descriptive text.
    *   **Hover Pattern:** On card hover, the background number glows vibrant violet, the connector dash line accelerates its animation speed, and the card background scales slightly.

---

### Section D: WhyWorkWithUs (The Bento Grid)
A multi-dimensional bento layout highlighting key brand differentiators.

```
+---------------------------------------------------------------------------------------+
|                                   WHY SYNCWAVE MEDIA                                  |
|                                                                                       |
|  +------------------------------------------+  +-----------------------------------+  |
|  | Bento Card 1 (Col-span 2)                |  | Bento Card 2 (Col-span 1)         |  |
|  | [Metric: 4.8M Views Delivered]           |  | [Feature: 48h SLA]                |  |
|  | Real-time graphic showing growth curve   |  | Muted clock graphic               |  |
|  +------------------------------------------+  +-----------------------------------+  |
|  +-----------------------------------+  +------------------------------------------+  |
|  | Bento Card 3 (Col-span 1)         |  | Bento Card 4 (Col-span 2)                |  |
|  | [Tag: VC Network Syndicate]       |  | [Metric: 10X ROI]                        |  |
|  | List of venture firm partners     |  | Growth bars glowing in Cyan              |  |
|  +-----------------------------------+  +------------------------------------------+  |
+---------------------------------------------------------------------------------------+
```

*   **Layout Structure:**
    *   **Bento Grid Container:** CSS Grid (`grid-template-columns: repeat(3, 1fr)`).
    *   **Card Distribution:**
        *   *Card 1 (2 cols wide):* Focuses on heavy visual data (e.g. line chart of engagement).
        *   *Card 2 (1 col wide):* Bullet SLA points (Speed focus) with a circular SVG timer showing a gradient trail.
        *   *Card 3 (1 col wide):* Platform badge logos cloud.
        *   *Card 4 (2 cols wide):* Custom soundwave comparison timeline (Raw Audio vs Syncwave Produced Audio) with dynamic audio playback wave assets.
    *   **Interaction Hook:** Cursor position lighting up. Each card uses a CSS listener to cast a radial gradient spot highlight pointing exactly at the user's cursor as it hovers (`.bento-hover-glow`).

---

### Section E: CustomerStory (Dynamic Metric Splitting)
An editorial section featuring high-end validation from key tech partners.

```
+---------------------------------------------------------------------------------------+
|                                    CUSTOMER STORIES                                   |
|                                                                                       |
|  +------------------------------------------+  +-----------------------------------+  |
|  | Left: Client Testimonial Card            |  | Right: Case Study Chart           |  |
|  |                                          |  |                                   |  |
|  | "Syncwave scaled our podcast from zero   |  |  Listeners Growth (Millions)      |  |
|  |  to 100K monthly listeners in 3 months.  |  |  1.0M -                 __--*     |  |
|  |  Our investment flow is up 40%."         |  |  0.5M -            __--*          |  |
|  |                                          |  |  0.1M -     _----**               |  |
|  |  -- Partner, General Catalyst            |  |  0.0M +---**--------------------  |  |
|  |                                          |  |      Month 1   Month 2   Month 3  |  |
|  +------------------------------------------+  +-----------------------------------+  |
+---------------------------------------------------------------------------------------+
```

*   **Layout Structure:**
    *   **Container Layout:** `50/50` flex-grid layout.
    *   **Left Column (The Editorial Voice):**
        *   Large custom typography quote block using `Syne` with a glowing double quote background graphic.
        *   Underpinned by author profile: clean circular avatar, author name, sub-label identifying their VC or Tech Firm (accented color).
        *   Company Logo: Muted grey monochrome SVGs of the company partner.
    *   **Right Column (The Growth Metric):**
        *   Interactive Chart. Uses SVG paths animated on viewport visibility to draw a glowing colored trendline representing audio/video growth metrics.
        *   Hovering over data nodes on the chart reveals a glass card overlay containing specific milestone annotations (e.g., *“Episode 12: Viral YouTube Shorts Clip”*).

---

### Section F: FAQ (Accordion Grid)
Sparsely spaced, minimalist, clean rows that expand to answer common questions.

```
+---------------------------------------------------------------------------------------+
|                                          FAQ                                          |
|                                                                                       |
|  +---------------------------------------------------------------------------------+  |
|  | How long is the onboarding process?                                         [+] |  | Row 1
|  +---------------------------------------------------------------------------------+  |
|  | What equipment do we need on our end?                                       [-] |  | Row 2
|  |   --> Onboarding guide description detailing our hardware package delivery.     |  | Expanded
|  +---------------------------------------------------------------------------------+  |
|  | Do you handle distribution to all channels?                                 [+] |  | Row 3
|  +---------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------+
```

*   **Layout Structure:**
    *   **Accordion Stack:** Placed within a centered container (`max-width: 800px`).
    *   **Individual Accordion Rows:**
        *   Header button containing the question (Plus Jakarta Sans, `18px`, Weight `500`) and a custom rotating Plus/Minus SVG icon.
        *   Content container absolute-clipped until toggle activated.
    *   **Interactive Hook:** On activation, height expands using Framer Motion (`animate={{ height: "auto" }}`) with an ease transition. The active card border changes from `--border-glass` to `--border-glass-glow` and adds a subtle horizontal neon shadow along the top edge.

---

### Section G: Footer (The Brand Anchor)
A clean, premium terminal area that acts as the final call to action.

```
+---------------------------------------------------------------------------------------+
|   [Footer Branding: SYNCWAVE]                      READY TO SCALE?                    |
|   Premium Podcast Engines.                         [Button CTA: Partner With Us]      |
|                                                                                       |
|   [Grid: Links Stack]       [Grid: Links Stack]          [Social Stack]               |
|   * Case Studies            * How It Works               * LinkedIn                   |
|   * Pricing Plans           * Contact Us                 * YouTube                    |
|   * Client Portal           * Careers                    * Twitter/X                  |
|                                                                                       |
|   ---------------------------------------------------------------------------------   |
|   (C) 2026 Syncwave Media. All rights reserved.                      [Back to Top]    |
+---------------------------------------------------------------------------------------+
```

*   **Layout Structure:**
    *   **Top Half:** High-impact callout box. Left displays massive brand marquee text; right shows a glowing, high-contrast button.
    *   **Bottom Half:** A `3-column` directory structure containing links and contact coordinates, plus dynamic social hover interactions.
    *   **Visual Highlights:** Separator lines using a CSS vertical gradient. A neon purple soundwave footer boundary (`height: 3px`) running along the absolute bottom edge of the browser window.

---

## 5. Premium Interaction Patterns

To reinforce the premium design system, developers and animators should execute the following micro-interactions:

### 1. Magnetic CTA Hover Pattern
All primary CTA buttons should implement a magnetic mouse-follow script. Using lightweight JavaScript, the button translates toward the cursor when hover distance is < `60px`.
*   *Implementation Method:* GSAP `quickTo()` mapping mouse delta coordinates (`x` and `y`) to target transforms.

### 2. Custom Cursor Fluid Trail
The cursor is customized as a clean neon ring trail:
*   A dot tracker that snaps to the exact cursor coordinate.
*   A delayed outer ring tracker (`width: 32px; height: 32px; border: 1.5px solid var(--accent-indigo)`) that follows the mouse path with a slight lag (elastic ease).
*   *Interaction:* When hovering over buttons, cards, or video elements, the outer ring scales up (`scale: 1.8`) and turns into the accent tone, showing a text label (e.g. `"PLAY"` or `"VIEW"`).

### 3. Smooth Scroll Architecture
The layout must implement **Lenis Smooth Scroll** to prevent standard browser mechanical scrolling.
*   Damping factor: `0.1`
*   Ease model: `easeOutQuad`

### 4. Noise Texture Overlay
To give the digital workspace an analogue, high-end design paper feel, a subtle full-screen fixed film-grain noise PNG layer should overlay all sections at `opacity: 0.015`, set to `pointer-events: none`.

---

## 6. Implementation Checklist for Developer & Animator Subagents

- [ ] Declare core HSL/Hex variables in `:root` of `src/index.css`.
- [ ] Connect Google Font styles for `Syne` and `Plus Jakarta Sans` inside `index.html` or `index.css`.
- [ ] Implement the `bg-dots` class background utility and the fixed `.grid-lines-overlay`.
- [ ] Set up global card style templates using `.premium-card` with gradient hover triggers.
- [ ] Structure the section layouts according to the grid dimensions specified in **Section 4**.
- [ ] Add Framer Motion scroll indicators and GSAP custom cursor trackers for interaction hooks.
