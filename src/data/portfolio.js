// Discipline categories drive the gallery filter. An item can belong to more
// than one (e.g. a rebrand that shipped with a new website).
export const CATEGORIES = ['Web', 'Graphics', 'Social & Marketing', 'Branding'];

export const FILTERS = ['All', ...CATEGORIES];

export const PORTFOLIO = [
  {
    slug: 'apssp',
    title: 'APSSP',
    url: 'https://apssp.org',
    image: '/media/portfolio/apssp.png',
    categories: ['Web'],
    tags: ['Organization', 'Union'],
    description:
      'A modernized web platform for a professional education union representing 850+ members, highlighting advocacy, leadership, and resources for student services professionals.',
    featured: false,
  },
  {
    slug: 'downsyndrome-canada',
    title: 'Down Syndrome Canada',
    url: 'https://downsyndrome.ca',
    image: '/media/portfolio/downsyndrome-canada.png',
    categories: ['Web'],
    tags: ['Organization', 'Charity'],
    description:
      'A custom-built WordPress & React JS website for a national non-profit, featuring donations, educational resources, and an integrated Help321 platform supporting the Down Syndrome community.',
    featured: true,
    collection: {
      label: 'A connected family of sites built around one brand.',
      sites: [
        {
          title: 'Down Syndrome Canada',
          domain: 'downsyndrome.ca',
          url: 'https://downsyndrome.ca/',
          initials: 'DSC',
          role: 'Main hub',
          gradient: 'from-brand-500 to-brand-700',
        },
        {
          title: 'Down Syndrome Foundation',
          domain: 'downsyndromefoundation.ca',
          url: 'https://downsyndromefoundation.ca/en/',
          initials: 'DSF',
          role: 'Foundation',
          gradient: 'from-accent-500 to-brand-600',
        },
        {
          title: 'Skills Development',
          domain: 'skillsdevelopment.ca',
          url: 'https://skillsdevelopment.ca/',
          initials: 'SD',
          role: 'Programs',
          gradient: 'from-brand-400 to-accent-500',
        },
      ],
    },
  },
  {
    slug: 'uniontab',
    title: 'UnionTab',
    url: 'https://uniontab.com',
    image: '/media/portfolio/uniontab.png',
    categories: ['Web'],
    tags: ['Union', 'Software', 'Brand'],
    description:
      'An all-in-one platform that puts secure online voting, mass email & SMS, a member portal, document storage and event RSVPs in a single dashboard for union executives.',
    featured: true,
    caseStudy: {
      // Remove `draft` to publish: the card then links here in production too.
      // Still needed first: the [SCREENSHOT] images and the [COPY NEEDED] notes.
      draft: true,
      tagline: 'A complete operating system for labour unions',
      summary:
        'A bilingual, all-in-one SaaS platform that gives labour unions everything they need to run a local (members, communications, elections, grievances, meetings, and finances) in a single branded dashboard.',
      role: 'Founder, full-stack developer and designer. Solo build covering product, design, copy, and marketing.',
      // TODO(max): confirm this stack. It was an "e.g." list in the brief.
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Postgres / Supabase', 'Vercel'],
      metrics: [
        { value: '55% → 89%', label: 'Election turnout at ATU Local 1587' },
        { value: '< 10 min', label: 'Member outreach each week, down from 2 to 5 hours' },
        { value: '$0', label: 'Free base plan, replacing a $200 to $1,000 per month site manager' },
      ],
      hero: {
        src: '/media/portfolio/uniontab.png',
        alt: 'UnionTab homepage: the headline "Cut Costs. Drive Engagement. Lead Better." over a photo of union members in a meeting, with Start Free Today and View Live Demo buttons.',
      },
      sections: [
        {
          id: 'overview',
          label: 'Overview',
          heading: 'The problem',
          blocks: [
            {
              type: 'p',
              text: 'Most union locals, especially small and mid-sized ones, run on a patchwork of disconnected tools: a spreadsheet for the member list, a personal email account for blasts, a separate service for votes, paper or PDF forms for grievances, and a group chat for everything else.',
            },
            {
              type: 'p',
              text: 'Information gets siloed, member data lives in too many places, and the volunteer executives running the local spend hours on admin that should take minutes. Many locals also pay $200 to $1,000 a month to an outside site manager just to keep a basic web presence alive.',
            },
            {
              type: 'quote',
              text: 'There was no single, affordable, purpose-built platform designed around how a Canadian labour local actually operates: bilingual, compliance-aware, and simple enough for a volunteer board to run without training.',
            },
          ],
        },
        {
          id: 'strategy',
          label: 'Strategy',
          heading: 'The approach',
          blocks: [
            {
              type: 'p',
              text: 'I built UnionTab to consolidate the entire operation into one place, guided by three principles:',
            },
            {
              type: 'list',
              items: [
                {
                  lead: 'Bilingual from day one.',
                  text: 'English and French are built into the product, not bolted on, which is essential for the Canadian labour market and a genuine differentiator versus generic US tools.',
                },
                {
                  lead: 'Branded per local.',
                  text: 'Each union gets its own logo and colours applied automatically across the dashboard and every member-facing email, so communications look professional with zero design work from the executive.',
                },
                {
                  lead: 'Data-informed and mobile-ready.',
                  text: 'Real usage data (see below) showed a meaningful share of members access the platform on phones, so I prioritized a fast, fully responsive experience across devices.',
                },
              ],
            },
            {
              type: 'images',
              items: [
                {
                  src: '/media/portfolio/uniontab/bilingual-toggle.png',
                  placeholder: '[SCREENSHOT: member dashboard with the EN / FR toggle]',
                  alt: 'The UnionTab member dashboard shown in English and in French.',
                  label: 'Bilingual by default',
                  caption:
                    'French isn’t a translation layer added later. Every screen and email ships in both languages, which generic US tools don’t offer Canadian locals.',
                },
                {
                  src: '/media/portfolio/uniontab/per-local-branding.png',
                  placeholder: '[SCREENSHOT: the same dashboard branded for two different locals]',
                  alt: 'The same UnionTab dashboard styled in two different unions’ logos and colours.',
                  label: 'Branded per local',
                  caption:
                    'A local uploads its logo and colours once and they carry through the dashboard and every email, so a volunteer executive gets professional output with zero design work.',
                },
              ],
            },
          ],
        },
        {
          id: 'execution',
          label: 'Execution',
          heading: 'What’s built',
          blocks: [
            {
              type: 'p',
              text: 'UnionTab ships 15+ integrated modules, organized the way a local actually works.',
            },
            {
              type: 'image',
              src: '/media/portfolio/uniontab/tools-mega-menu.png',
              placeholder: '[SCREENSHOT: the Tools mega-menu showing the full module set]',
              alt: 'UnionTab’s Tools menu listing every module, grouped into members, communications, member tools, finance and settings.',
              label: 'The Tools menu',
              caption:
                'Every module sits in one menu, grouped by how a local actually runs rather than by feature type, so an executive finds any tool in one click instead of remembering which of five services it lives in.',
            },
            { type: 'h3', text: 'Members and outreach' },
            {
              type: 'p',
              text: 'A full member database with approval workflows (approved, pending, rejected statuses), member invitations, and role management for the executive board.',
            },
            { type: 'h3', text: 'Communications' },
            { type: 'p', text: 'This is where a lot of the depth lives:' },
            {
              type: 'list',
              items: [
                {
                  lead: 'Mass Email',
                  text: 'with recipient filtering (all members, approved only, admins, pending, or a hand-picked custom selection), a rich-text composer, file attachments (up to 10 files, 50MB each), automatic branded templates, monthly usage tracking, recipient preview, and per-send delivery confirmation.',
                },
                { lead: 'Mass SMS', text: 'for time-sensitive alerts like vote reminders or picket schedules.' },
                {
                  lead: 'Auto-share:',
                  text: 'creating a news post or scheduling a meeting offers to email members automatically, pre-filling the content.',
                },
              ],
            },
            {
              type: 'image',
              src: '/media/portfolio/uniontab/mass-email-composer.png',
              placeholder: '[SCREENSHOT: the Mass Email composer with recipient filter, rich text editor, attachments]',
              alt: 'The Mass Email composer with a recipient filter, a rich-text editor and a list of attached files.',
              label: 'Mass Email composer',
              caption:
                'Filtering, writing, attachments and a recipient preview share one screen, so an executive can target exactly the right members and check what they’ll receive before sending, all without a separate mailing tool.',
            },
            { type: 'h3', text: 'Member tools' },
            { type: 'p', text: 'The operational core of running a local:' },
            {
              type: 'list',
              items: [
                {
                  lead: 'Elections',
                  text: 'with draft, active, and closed states, plus an Election Committee module for managing voter rolls and recording in-person votes alongside digital ones, built for fair, transparent, compliant elections.',
                },
                { lead: 'Grievances', text: 'with a full submission-to-resolution workflow and status tracking.' },
                { lead: 'Meetings', text: 'with Zoom scheduling and automatic promotional poster generation.' },
                { lead: 'Strikes', text: 'for organizing and communicating strike activities and schedules.' },
              ],
            },
            {
              type: 'image',
              src: '/media/portfolio/uniontab/online-ballot-mobile.png',
              placeholder: '[SCREENSHOT: an online ballot on a phone]',
              alt: 'A UnionTab election ballot on a phone, with candidates listed and a submit vote button.',
              label: 'Online voting',
              caption:
                'Ballots are built phone-first because a meaningful share of members use UnionTab on mobile. Voting takes about a minute wherever a member is, instead of a trip to a multi-day paper ballot.',
            },
            { type: 'h3', text: 'Finance and announcements' },
            {
              type: 'p',
              text: 'Dues management and payment tracking, plus an announcements system for pinned, high-visibility updates.',
            },
            { type: 'h3', text: 'Settings and insights' },
            {
              type: 'p',
              text: 'Per-local branding configuration, subscription and billing management, and a comprehensive Analytics dashboard giving executives at-a-glance insight into membership growth, communication history, election turnout, grievance status, dues collection, and engagement.',
            },
            {
              type: 'embed',
              component: 'uniontab-analytics',
              label: 'Analytics dashboard · illustrative sample data',
              caption:
                'Membership, communications, elections and dues on one screen, so board meetings start from shared numbers instead of someone’s spreadsheet. The figures are sample data for a demo local, not client results.',
            },
            { type: 'h3', text: 'Public and private content' },
            {
              type: 'p',
              text: 'A file and posts system that distinguishes public content (visible to prospective members and the public) from private, members-only material, so a local can run its public presence and its internal operations from the same place.',
            },
            { type: 'h3', text: 'Getting locals on board' },
            {
              type: 'note',
              text: '[COPY NEEDED: how you acquired locals and which channels worked (e.g. direct outreach to executives, labour council events, word of mouth between locals, the free plan as a foot in the door), plus any sign-up or conversion numbers you have.]',
            },
          ],
        },
        {
          id: 'results',
          label: 'Results',
          heading: 'Impact',
          blocks: [
            {
              type: 'stats',
              items: [
                {
                  label: 'Elections',
                  value: '89%',
                  headline: 'Higher turnout, less overhead',
                  compare: {
                    caption: 'Election turnout at ATU Local 1587',
                    max: 100,
                    rows: [
                      { label: 'Multi-day paper ballot', value: 55, display: '55%' },
                      { label: 'UnionTab online voting', value: 89, display: '89%', highlight: true },
                    ],
                  },
                  text: 'At ATU Local 1587, replacing a multi-day paper ballot with UnionTab’s online voting took turnout from 55% to 89%, a 34 point increase. Votes are secure, tracked in real time, and automatically archived for the record.',
                },
                {
                  label: 'Communications',
                  value: '90%+',
                  headline: 'Hours to minutes',
                  compare: {
                    caption: 'Time spent reaching the whole membership each week',
                    max: 300,
                    rows: [
                      { label: 'Phone and email', min: 120, value: 300, display: '2 to 5 hrs' },
                      { label: 'UnionTab bulk email & SMS', min: 5, value: 10, display: '5 to 10 min', highlight: true },
                    ],
                  },
                  text: 'Union executives used to spend 2 to 5 hours a week reaching members by phone and email. With bulk email and SMS, the same outreach to the entire membership now takes 5 to 10 minutes, a reduction of over 90%.',
                },
                {
                  label: 'Engagement',
                  value: '~10%',
                  headline: 'Getting the whole local online',
                  compare: {
                    caption: 'Share of members actively engaging with posts',
                    max: 12,
                    rows: [
                      { label: 'Typical social media', min: 1, value: 5, display: '1 to 5%' },
                      { label: 'UnionTab posts', value: 10, display: '~10%', highlight: true },
                    ],
                  },
                  text: 'One local went from roughly 50 engaged members to near-full participation after adopting UnionTab’s simple sign-up flow. Built-in view and like tracking shows posts averaging around 100 views, with roughly 10% of members actively engaging, a rate that sits well above typical social media benchmarks of 1 to 5%.',
                },
                {
                  label: 'Cost',
                  value: '$0',
                  headline: 'From four figures to free',
                  compare: {
                    caption: 'Monthly cost of a web presence',
                    max: 1000,
                    rows: [
                      { label: 'Outside site manager', min: 200, value: 1000, display: '$200 to $1,000/mo' },
                      { label: 'UnionTab base plan', value: 0, display: '$0', highlight: true },
                    ],
                  },
                  text: 'Locals that used to pay $200 to $1,000 a month for an outside site manager can now run a professional, branded presence on UnionTab’s free base plan, with an optional paid tier for higher-volume needs.',
                },
              ],
            },
            { type: 'h3', text: 'Traffic and reach' },
            {
              type: 'p',
              text: 'During a busy season the marketing site saw visitors climb 54% (to 331) and page views climb 218% (to 1,006), while bounce rate fell 43% (to 34%). Traffic skews Canadian (82%) and splits 64% desktop to 36% mobile, data I used directly to prioritize a fast, responsive build.',
            },
            {
              type: 'embed',
              component: 'uniontab-traffic',
              label: 'Marketing site · Vercel Analytics',
              caption:
                'More than a third of visitors arrived on a phone, which is why the build treats mobile as a first-class experience rather than a scaled-down desktop.',
            },
          ],
        },
        {
          id: 'next',
          label: 'Next',
          heading: 'What I’d do next',
          blocks: [
            {
              type: 'note',
              text: '[COPY NEEDED: 2 to 4 short forward-looking points, e.g. the next module on the roadmap, a growth channel you’d double down on, or what you’d build differently a second time.]',
            },
          ],
        },
      ],
    },
  },
  {
    slug: 'signaturespan',
    title: 'Signature Span',
    url: 'https://signaturespan.com',
    image: '/media/portfolio/signaturespan.png',
    categories: ['Web'],
    tags: ['Construction', 'Brand'],
    description:
      'A minimalist, photography-led showcase for an architectural glass studio: large-format windows, lift-and-slide doors and folding glass walls presented with the quiet polish their work demands.',
    featured: true,
  },
  {
    slug: 'camp321',
    title: 'Camp 3-21',
    url: 'https://camp321.ca',
    image: '/media/portfolio/camp321.png',
    categories: ['Web'],
    tags: ['Organization', 'Charity', 'E-commerce'],
    description:
      "A bright and playful site for a Down Syndrome foundation's summer camp, including online registration, resources, and program information.",
    featured: false,
  },
  {
    slug: 'peel-transition',
    title: 'Peel Transition',
    url: 'https://peeltransition.ca',
    image: '/media/portfolio/peel-transition.png',
    categories: ['Web'],
    tags: ['Union', 'Campaign'],
    description:
      'A fast-deployed, informative campaign website opposing the dissolution of Peel Region, designed to engage and inform the public.',
    featured: false,
  },
  {
    slug: 'atu1573',
    title: 'ATU 1573',
    url: 'https://atu1573.ca',
    image: '/media/portfolio/atu1573.png',
    categories: ['Web'],
    tags: ['Union'],
    description:
      'A robust union website for over 1,000 members, featuring secure 2FA login, user approval systems, private member access, news updates, and real-time notifications.',
    featured: false,
  },
  {
    slug: 'teachers-union',
    title: "Teacher's Union",
    url: 'https://reelectcindygage.ca/',
    image: '/media/portfolio/teachers-union.png',
    categories: ['Web'],
    tags: ['Campaign'],
    description:
      "A visually engaging campaign website for a teacher's union election, balancing clear messaging with impactful graphics and accessible information.",
    featured: false,
  },
  {
    slug: 'guri-stone',
    title: 'Guri Stone',
    url: 'https://guristone.com/',
    image: '/media/portfolio/guri-stone.png',
    categories: ['Web'],
    tags: ['Construction'],
    description:
      'A sleek contractor portfolio site focused on interlocking services, with strong calls-to-action and seamless quote booking functionality.',
    featured: false,
  },
  {
    slug: 'maple-valley-contracting',
    title: 'Maple Valley Contracting',
    url: 'https://maplevalleycontracting.ca/',
    image: '/media/portfolio/maple-valley-contracting.png',
    categories: ['Web'],
    tags: ['Construction'],
    description:
      'A clean, animated showcase website for a home renovation company, featuring kitchen, bathroom, and tile projects in an interactive portfolio.',
    featured: false,
  },
  {
    slug: 'wedding-website',
    title: 'Wedding Website',
    url: 'https://andrew-iesha.ca/',
    image: '/media/portfolio/wedding.png',
    categories: ['Web'],
    tags: ['Creative', 'Personal'],
    description:
      "A personalized, elegant wedding site featuring RSVP forms, event details, galleries, and contact options to bring the couple's vision to life.",
    featured: false,
  },
  {
    slug: 'salvatores',
    title: "Salvatore's Gourmet Foods",
    url: 'https://salvatoresgourmetfoods.com/',
    image: '/media/portfolio/salvatores.png',
    categories: ['Web'],
    tags: ['Brand', 'E-commerce'],
    description:
      'An online store for premium Italian foods and sauces with a built-in shipping calculator, free local delivery, and engaging blog content for food lovers.',
    featured: false,
  },
  {
    slug: 'pay321',
    title: 'Pay 321',
    url: 'http://pay321.ca/',
    image: '/media/portfolio/pay321.png',
    categories: ['Web'],
    tags: ['Brand', 'Organization', 'Charity'],
    description:
      'A simple, informative site explaining a charitable payment processing program that converts transaction fees into donations while offering tax-deductible benefits.',
    featured: false,
  },

  // --- PLACEHOLDERS -------------------------------------------------------
  // `draft: true` items only render in `npm run dev`, never in a production
  // build. Replace them with real projects (and delete `draft`) to publish.
  {
    slug: 'placeholder-graphics',
    title: 'Graphics project (placeholder)',
    url: null,
    image: '/media/portfolio/placeholder-graphics.png',
    categories: ['Graphics'],
    tags: ['Print', 'Illustration'],
    description:
      'Placeholder for a graphics piece: posters, print collateral, infographics or illustration. No live URL and no case study, so the card is not a link.',
    featured: false,
    draft: true,
  },
  {
    slug: 'placeholder-social',
    title: 'Social campaign (placeholder)',
    url: null,
    image: '/media/portfolio/placeholder-social.png',
    categories: ['Social & Marketing'],
    tags: ['Campaign', 'Social'],
    description:
      'Placeholder for a social or marketing campaign: post templates, ad sets, email design or a launch kit.',
    featured: false,
    draft: true,
  },
  {
    slug: 'placeholder-branding',
    title: 'Brand identity (placeholder)',
    url: null,
    image: '/media/portfolio/placeholder-branding.png',
    categories: ['Branding', 'Graphics'],
    tags: ['Brand', 'Identity'],
    description:
      'Placeholder brand identity with a full case study, showing how a card links through to its detail page.',
    featured: false,
    draft: true,
    // Optional. When present, the gallery card links to /work/<slug>.
    caseStudy: {
      summary:
        'One or two sentences on the problem, the audience and what changed. This is the intro that sits under the page title.',
      client: 'Client name',
      year: '2026',
      role: 'Brand strategy, identity design',
      services: ['Logo', 'Colour & type', 'Brand guidelines'],
      // Defaults to the card image; override for a wider hero shot.
      hero: {
        src: '/media/portfolio/placeholder-branding-hero.png',
        alt: 'Placeholder: brand identity shown across stationery and signage',
      },
      sections: [
        {
          heading: 'The brief',
          body: [
            'What the client came in with: the problem, the constraints and who the work needed to reach.',
          ],
        },
        {
          heading: 'The approach',
          body: [
            'How the work took shape: research, early directions and the decisions that stuck.',
            'Add as many paragraphs as needed. Each string renders as its own paragraph.',
          ],
          image: {
            src: '/media/portfolio/placeholder-branding-process.png',
            alt: 'Placeholder: early logo sketches alongside the final mark',
            caption: 'Optional caption for a section image.',
          },
        },
        {
          heading: 'The result',
          body: ['What shipped, and how it performed or was received.'],
        },
      ],
      outcomes: [
        { value: '00%', label: 'Placeholder metric' },
        { value: '0×', label: 'Placeholder metric' },
        { value: '00', label: 'Placeholder metric' },
      ],
      gallery: [
        {
          src: '/media/portfolio/placeholder-branding-1.png',
          alt: 'Placeholder: primary logo on a light background',
          caption: 'Primary mark',
        },
        {
          src: '/media/portfolio/placeholder-branding-2.png',
          alt: 'Placeholder: colour palette swatches',
          caption: 'Palette',
        },
      ],
    },
  },
];

// Drafts are visible while developing locally, hidden from production builds.
export const PUBLISHED = PORTFOLIO.filter((p) => !p.draft || import.meta.env.DEV);

// A case study can be drafted on a live project: with `caseStudy.draft`, the
// card keeps its external link in production until the draft flag is removed.
export function hasCaseStudy(item) {
  const study = item?.caseStudy;
  return Boolean(study) && (!study.draft || import.meta.env.DEV);
}

export function getProject(slug) {
  return PUBLISHED.find((p) => p.slug === slug);
}

export const SERVICES = [
  {
    title: 'Custom WordPress & React Builds',
    description:
      'Fast, accessible sites built from scratch. No cookie-cutter templates, no bloat.',
    icon: 'code',
  },
  {
    title: 'E-commerce & Booking',
    description:
      'Storefronts, shipping calculators, online registration and quote forms that make buying and booking easy.',
    icon: 'cart',
  },
  {
    title: 'Membership & Secure Portals',
    description:
      '2FA logins, member approvals, private content and real-time notifications for unions & organizations.',
    icon: 'shield',
  },
  {
    title: 'Branding & Design Systems',
    description:
      'A clear visual identity across every page: typography, colour and motion that hold together.',
    icon: 'palette',
  },
  {
    title: 'Performance & SEO',
    description:
      'Core Web Vitals tuned, semantic HTML, structured data and content built to rank.',
    icon: 'gauge',
  },
  {
    title: 'Ongoing Care',
    description:
      'Hosting, updates, backups and support. You run the business, I keep the site healthy.',
    icon: 'heart',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'A quick call to understand your goals, audience and what success looks like.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Wireframes and mockups so you can see and steer the direction before a single line of code.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'A modern, hand-built React/WordPress site, polished and tested across every device.',
  },
  {
    step: '04',
    title: 'Launch & Care',
    description:
      'I ship it, train you on the CMS, and stick around for updates whenever you need them.',
  },
];
