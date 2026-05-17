export const FILTERS = [
  'All',
  'Organization',
  'Union',
  'Construction',
  'Charity',
  'Campaign',
  'E-commerce',
];

export const PORTFOLIO = [
  {
    slug: 'apssp',
    title: 'APSSP',
    url: 'https://apssp.org',
    image: '/media/portfolio/apssp.png',
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
    tags: ['Union', 'Software', 'Brand'],
    description:
      'An all-in-one platform that puts secure online voting, mass email & SMS, a member portal, document storage and event RSVPs in a single dashboard for union executives.',
    featured: true,
  },
  {
    slug: 'signaturespan',
    title: 'Signature Span',
    url: 'https://signaturespan.com',
    image: '/media/portfolio/signaturespan.png',
    tags: ['Construction', 'Brand'],
    description:
      'A minimalist, photography-led showcase for an architectural glass studio — large-format windows, lift-and-slide doors and folding glass walls presented with the quiet polish their work demands.',
    featured: true,
  },
  {
    slug: 'camp321',
    title: 'Camp 3-21',
    url: 'https://camp321.ca',
    image: '/media/portfolio/camp321.png',
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
    tags: ['Brand', 'Organization', 'Charity'],
    description:
      'A simple, informative site explaining a charitable payment processing program that converts transaction fees into donations while offering tax-deductible benefits.',
    featured: false,
  },
];

export const STATS = [
  {
    value: 100,
    suffix: '+',
    title: 'Satisfied Clients',
    description: 'A track record of happy clients across a variety of sectors.',
    icon: 'thumbs-up',
  },
  {
    value: 65,
    suffix: '%',
    title: 'Increase in Traffic',
    description:
      'Experience a boost in your online presence to drive growth to your business.',
    icon: 'chart',
  },
  {
    value: 10,
    suffix: ' Days',
    title: 'Average Build Time',
    description:
      'Have an amazing fully functional website in as little as ten days.',
    icon: 'clock',
  },
];

export const SERVICES = [
  {
    title: 'Custom WordPress & React Builds',
    description:
      'Fast, accessible, fully bespoke sites — no cookie-cutter templates, no bloat.',
    icon: 'code',
  },
  {
    title: 'E-commerce & Booking',
    description:
      'Storefronts, shipping calculators, online registration and quote forms that actually convert.',
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
      'A clear visual identity wired into every page — typography, colour, motion, the works.',
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
      'Hosting, updates, backups and support — you focus on the business, we keep the site healthy.',
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
      'Wireframes and mockups so you can see — and steer — the direction before a single line of code.',
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
      'We ship it, train you on the CMS, and stick around for updates whenever you need them.',
  },
];
