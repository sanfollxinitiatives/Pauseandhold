# Reference Website Audit & Animation Analysis

**Reference Site:** `https://bloom-and-glide-showcase.lovable.app/`  
**Brand:** Pause & Hold — Wedding Photography that Feels  
**Analysis Date:** 2026-10-16  
**Audited Source Artifacts:** Complete source package (`lovable.zip`), including `routes/index.tsx`, `routes/portfolio.tsx`, `routes/services.tsx`, `routes/journal.tsx`, `routes/contact.tsx`, `routes/about.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`, and `motion.tsx`.

---

## 1. Global Design System & Shared Elements

### 1.1 Color Palette & Theme Tokens
- **Background (`--background`)**: `#F8F6EF` / `oklch(0.97 0.012 85)` — Warm Ivory
- **Foreground (`--foreground`)**: `#292C25` / `oklch(0.3 0.005 150)` — Deep Charcoal
- **Primary Accent (`--primary`)**: `#53664B` / `#819568` / `oklch(0.6 0.07 135)` — Olive & Soft Sage
- **Secondary Surface (`--secondary`)**: `#292C25` / `oklch(0.22 0.008 150)` — Dark Slate Charcoal
- **Secondary Foreground (`--secondary-foreground`)**: `#F8F6EF` / `oklch(0.95 0.015 85)` — Ivory Text
- **Border (`--border`)**: `rgba(41, 44, 37, 0.15)` — Subtle Warm Border

### 1.2 Typography & Sizing
- **Primary Typeface**: Plus Jakarta Sans (Light 300, Regular 400, Medium 500, SemiBold 600)
- **Headings (`.font-display`)**: Tight letter spacing (`-0.035em` to `-0.04em`), font-weight 300 with italic emphasis
- **Body & Captions**: Clean, generous leading (`1.6` to `1.75`), subtle muted foreground colors (`#575A51`)

### 1.3 Global Interactive Physics & Motion Tokens
- **Smooth Inertial Scrolling**: Lenis with `duration: 1.3s`, `smoothWheel: true`, synchronized directly into GSAP's ticker.
- **Top Progress Bar**: Hairline fixed bar at `top-0 left-0 w-full h-[2px] origin-left bg-[#53664B]` driven by `ScrollTrigger` (`start: 0, end: "max", scrub: true`).
- **Follower Cursor**: Smooth 16px circular follower (`bg-[#53664B] mix-blend-difference`) using `gsap.quickTo` with `duration: 0.35s`, scaling `3.2x` on hover over clickable elements (`a`, `button`, `img`, `input`).
- **Magnetic Physics**: Any element with `.magnetic` tracks mouse displacement `(dx * 0.35, dy * 0.35)` and springs back with `elastic.out(1, 0.4)` on mouse leave.
- **35mm Film Grain Overlay**: Fixed 200% animated SVG noise filter jittering across 8 discrete steps.

---

## 2. Shared Header & Footer Audit

### 2.1 Shared Site Header
- **Layout**: Fixed floating rounded capsule (`rounded-full border border-border/80 backdrop-blur-xl px-5 sm:px-7 py-3`).
- **Scroll Behavior**:
  - Automatically adds shadow and solidifies background when scrolled past 40px (`scrolled: y > 40`).
  - Hides smoothly on downward scroll past 300px (`hidden: y > last && y > 300`) and reveals instantly on upward scroll.
- **Navigation Links**:
  - Double-line rolling text hover interaction: Default text slides up `group-hover:-translate-y-full` (duration 500ms ease-out) while an identical duplicate text rolls in from below `group-hover:translate-y-0`.
- **Right Action**:
  - Magnetic "Book your date" CTA pill button.
- **Mobile Menu**:
  - Fullscreen overlay with circular `clipPath` reveal (`circle(0% at 95% 4%)` to `circle(150% at 95% 4%)`, duration 1.0s, `ease: "expo.inOut"`).
  - Navigation links stagger upward (`.m-link: yPercent 120 -> 0, duration 1.0s, stagger: 0.06s`).

### 2.2 Shared Site Footer
- **Layout**: Full-width dark charcoal section (`bg-[#292C25] text-[#F8F6EF]`).
- **Hero Callout**: Giant headline *"Let's hold your story."* paired with an interactive 160px circular magnetic button (*"Check availability"*).
- **4-Column Content**:
  1. *Studio*: 14 Lighthouse Road, Fort Kochi, Kerala 682001, India (Mon–Sat 10am–7pm IST).
  2. *Explore*: Home, About, Portfolio, Services, Journal, Contact.
  3. *Say hello*: `hello@pauseandhold.com`, `+91 98000 00000`, social pill links (Instagram, Pinterest, YouTube, Vimeo).
  4. *Love letters*: Newsletter signup form with animated Heart confirmation state.
- **Ambient Marquee**: Infinite smooth 35s marquee watermark (*"Pause & Hold ·"*) scaled to 16vw.
- **Bottom Bar**: Copyright, Privacy Policy link, and smooth scroll "Back to top ↑" trigger.

---

## 3. Page-by-Page Audit

### 3.1 Homepage (`/`)
1. **Preloader**:
   - 4 dark vertical panels (`.pre-panel`)
   - Centered heartbeat SVG + *"pause… and hold this moment"* + numeric counter `0% -> 100%` + expanding hairline
   - Exit: Text fades/lifts (`y: -40, opacity: 0`), panels stagger upwards (`yPercent: -100, stagger: 0.07`), Lenis smooth scroll starts.
2. **Hero Section**:
   - Image `/images/hero.jpg` zooms from `scale: 1.25 -> 1` (duration 2.2s).
   - Headline *"Some moments deserve forever."* enters with word-by-word reveal (`yPercent: 110 -> 0, stagger: 0.06`).
   - Radiant text shimmer gradient across *"deserve forever."*
   - Spinning circular typography badge (`pause · and · hold · forever · `) with centered pulsing heart.
   - Scroll-driven parallax scrub sinks the background image (`yPercent: 18`).
3. **Marquee Ribbon**:
   - Infinite horizontal loop of emotive keywords (*laughter*, *tears*, *vows*, *first dance*, *forever*, *home*) with pulsing hearts.
4. **Story / Brand Statement (`.story`)**:
   - Eyebrow: `OUR WAY OF SEEING`
   - Floating heart accent (`animate-floaty`)
   - Narrative quote where words start dim (`opacity: 0.14`) and illuminate on scroll (`opacity: 1, scrub: true`).
5. **Split Stats & 3D Tilt**:
   - Left: `/images/hands.jpg` inside a 3D tilt container (`rotate: -3.5° -> 2.5°, y: 60 -> -60`) and clip-path mask reveal (`inset(100% 0 0 0) -> inset(0)`).
   - Right: Headline *"Not posed. Felt."* and 3 animated live counters (**420+** Weddings, **12** Years, **98%** Happy tears).
6. **Services Showcase (`.svc`)**:
   - 3 Column cards with aspect-[3/4]: *Wedding Day*, *Pre-Wedding*, *Wedding Films*.
   - Staggered entrance on scroll (`y: 80, opacity: 0, stagger: 0.14`).
   - Hover: Image scales up to `1.1x`, hidden description expands in height (`max-h-0 -> max-h-28`) with smooth opacity.
7. **Pinned Horizontal Moments Track (`.h-wrap`, `.h-track`)**:
   - Section pins on scroll while horizontal track scrolls sideways (`x: -(track.scrollWidth - window.innerWidth)`).
   - Dynamic velocity skew (`skewX: -7° to +7°`) responsive to scroll speed.
   - 4 Chapter moments with alternating vertical offsets (Ooty, Kochi, Goa, Munnar).
8. **Process Journey (`.process`)**:
   - Sticky left headline: *"How it unfolds"*.
   - Right timeline steps (Hello, Plan, Hold, Relive) with animated vertical line fill (`scaleY: 0 -> 1` scrub).
9. **Pinned Dance Mask Reveal (`.dance`)**:
   - Fullscreen pinned section (`h-screen`).
   - `/images/dance.jpg` expands from a rounded pill mask (`clipPath: inset(18% 22% round 300px)`) to full bleed (`inset(0%)`).
   - Staggered word reveal during pin: *"And for one song, the world disappeared."*
10. **Testimonial Section**:
    - Pulsing heart icon with word-split quotation reveal on scroll.
11. **Mosaic Portfolio Grid (`.mosaic`)**:
    - 8-photo masonry layout with random rotation scatter-in (`scale: 0.75, rotate: -6° to 6° -> scale: 1, rotate: 0°`).
12. **FAQ Accordion**:
    - 4 Interactive accordions with smooth CSS grid expansion (`grid-rows-[0fr] -> grid-rows-[1fr]`) and 45° rotating indicator.

---

### 3.2 Portfolio Page (`/portfolio`)
- **Hero (`PageHero`)**:
  - Eyebrow: `PORTFOLIO`
  - Headline: *"Love stories,"* <br /> *"kept forever."*
  - Background image with subtle parallax scrub (`yPercent: -15` to `15`).
- **Interactive Category Filter Tabs**:
  - Categories: `All`, `Wedding`, `Pre-Wedding`, `Film`.
  - Active tab styling: Filled olive pill (`bg-[#53664B] text-[#F8F6EF]`), inactive: subtle border hover.
  - Client-side instant filtering with smooth fade-in and slide-up animation.
- **Masonry Story Grid**:
  - Columns: 1 on mobile, 2 on tablet, 3 on desktop (`columns-1 sm:columns-2 lg:columns-3`).
  - Dynamic aspect ratios: Alternating `aspect-square` and `aspect-[3/4]`.
  - Hover interaction: Image scales to `1.1x` (duration 1.4s), dark gradient overlay reveals *"View story →"* sliding up (`translate-y-4 -> translate-y-0`).
  - Figcaption: Couple names (`font-display text-2xl`) and location/category tag (`text-xs uppercase tracking-widest`).

---

### 3.3 Services Page (`/services`)
- **Hero (`PageHero`)**:
  - Eyebrow: `SERVICES`
  - Headline: *"Made for"* <br /> *"the way you love."*
  - Parallax background image.
- **Alternating Service Feature Sections**:
  - Alternating 2-column layout (Image on left/right with `md:[&>*:first-child]:order-2`).
  - `img-reveal` clip-path mask (`clipPath: inset(100% 0 0 0) -> inset(0)`).
  - 3 Core offerings:
    1. *01 Wedding Day Photography* (`/images/bride.jpg`)
    2. *02 Pre-Wedding Sessions* (`/images/hero.jpg`)
    3. *03 Cinematic Wedding Films* (`/images/dance.jpg`)
- **Collections Pricing Grid**:
  - Section background: Dark secondary surface (`bg-[#292C25] text-[#F8F6EF]`).
  - 3 Tiered collection cards:
    - **Intimate** (₹1,20,000)
    - **Classic** (₹2,40,000) — Highlighted with primary olive accent (`bg-[#53664B]`), "Most loved" badge with pulsating heart, and elevated depth.
    - **Forever** (₹4,50,000)
  - Hover interaction: Cards lift vertically (`hover:-translate-y-3` duration 500ms).
  - Each card includes bulleted deliverables and an *"Enquire"* CTA button linking to `/contact`.

---

### 3.4 Journal Page (`/journal`)
- **Hero (`PageHero`)**:
  - Eyebrow: `JOURNAL`
  - Headline: *"Notes from"* <br /> *"the in-between."*
  - Parallax background image (`/images/hands.jpg`).
- **Featured Lead Article**:
  - Asymmetric grid (1.4fr : 1fr) with wide 16/10 aspect ratio and `img-reveal` mask.
  - Category pill, publication date, large editorial headline, teaser copy, and arrow link (*"Read story →"* with hover slide `group-hover:translate-x-2`).
- **Article Grid (4 items)**:
  - 2-Column responsive cards with `aspect-[4/3]` photography.
  - Image zooms smoothly on hover (`scale: 1.1x`, duration 1.2s).
  - Category tag and date header.
  - Headline transitions color to olive green on hover (`group-hover:text-[#53664B]`).

---

### 3.5 Contact Page (`/contact`)
- **Hero (`PageHero`)**:
  - Eyebrow: `CONTACT`
  - Headline: *"Tell us"* <br /> *"your story."*
  - Background image (`/images/hero.jpg`).
- **2-Column Layout**:
  - **Left Column (Studio Details)**:
    - Staggered upward entrance for contact channels:
      - *Email*: `hello@pauseandhold.com`
      - *Phone*: `+91 98000 00000`
      - *Studio*: 14 Lighthouse Road, Fort Kochi
      - *Hours*: Mon – Sat · 10am – 7pm
  - **Right Column (Interactive Enquiry Form)**:
    - Minimalist underline fields (`border-b border-[#E4E2D8] bg-transparent py-4 text-lg outline-none focus:border-[#53664B]`):
      - Your names
      - Email address
      - Wedding / Event date picker
      - Venue / City location
      - Dreaming of service selector (Wedding photography, Pre-wedding session, Photo + film)
      - Personal message textarea
    - Magnetic submit button: *"Send with love"* + Heart icon with hover scale.
    - **Success Confirmation State**:
      - Animated container (`animate-in fade-in zoom-in-95 duration-700`) with pulsing heart, *"Thank you."*, and confirmation message.

---

### 3.6 About Page (`/about`)
- **Hero (`PageHero`)**:
  - Eyebrow: `ABOUT US`
  - Headline: *"Quiet hearts,"* <br /> *"steady hands."*
- **Origin Section**:
  - Left: `/images/hands.jpg` inside `img-reveal` container.
  - Right: *"Since 2014 It began with one borrowed camera."* + 3 live animated counters (**420+** Weddings, **18** Countries, **9** Awards).
- **Core Values Matrix**:
  - 4-grid with dark surface: *Presence*, *Honesty*, *Craft*, *Kindness*.
  - Hover state: Card inverts background to primary olive (`hover:bg-[#53664B] hover:text-[#F8F6EF]`).
- **Creative Team**:
  - 3 members: *Arjun Menon* (Lead photographer), *Meera Nair* (Filmmaker), *Kabir Das* (Second shooter & editor).
  - Middle profile vertically offset (`md:mt-24`) for dynamic cadence.
- **Closing Promise**:
  - Pulsating heart + *"“We don't take photos. We keep promises.”"*
