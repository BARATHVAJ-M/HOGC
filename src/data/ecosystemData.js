/**
 * Official HOGC Universe Ecosystem Data
 * Source of Truth: https://www.hogc.in/
 * Optimized for Content Delivery — Sharp, Scannable, Zero Redundancy
 */

export const GALAXY_HERO_IMAGE = "/assets/real-space/galaxy-hero.jpg";

export const HOGC_CORE = {
  id: "hogc-enterprises",
  name: "HOGC Enterprises",
  shortName: "HOGC",
  orbitalDistance: "0.39 AU",
  tagline: "Built as individual worlds. Connected as one universe.",
  headline: "HOGC Universe — A Curated Ecosystem of Innovation",
  description: "Sovereign foundation providing strategic governance, shared capital architecture, and enterprise-grade infrastructure across every subsidiary.",
  accent: "#fea082",
  accentSecondary: "#f39041",
  texture: "./textures/mercury.jpg",
  realImage: "./assets/real-space/mercury-corona.jpg",
  imageCaption: "NASA Messenger / Real Mercury Solar Corona Silhouette",
  headquarters: "India",
  hoverSummary: "Sovereign foundation & strategic holding core providing governance, shared capital, and enterprise standards across all ventures.",
  keyDeliverables: ["Venture Governance", "Ecosystem Infrastructure", "Unified Standards", "Cross-Entity Synergies"],
  stats: [
    { label: "Core Worlds", value: "4 Specialized Enterprises" },
    { label: "Architecture", value: "Sovereign Ecosystem" },
    { label: "Central Anchor", value: "0.39 AU Core" },
    { label: "Headquarters", value: "India" }
  ]
};

export const COMPANIES = [
  {
    id: "gc-tech",
    name: "GC Tech",
    category: "Digital Transformation & AI Solutions",
    subLabel: "AI · Custom Software · Cloud Infrastructure",
    orbitalDistance: "0.723 AU",
    tagline: "Where technology meets business evolution.",
    description: "Enterprise-grade software, AI systems, and cloud infrastructure. Built to scale. Built to last.",
    accent: "#06b6d4",
    orbitRadius: 260,
    orbitSpeed: 0.0028,
    texture: "./textures/venus.jpg",
    realImage: "./images/venus.jpg",
    imageCaption: "Real Venus Cloud Atmosphere / Magellan & Pioneer Venus Optical",
    externalUrl: "https://gctech.hogc.in/",
    hasRings: false,
    hoverSummary: "Enterprise software, autonomous AI platforms, high-performance cloud engines, and custom APIs built to scale.",
    keyDeliverables: ["Custom Web & Cloud Platforms", "Autonomous AI Workflows", "API Architecture", "DevOps & Infrastructure"],
    metrics: [
      { label: "Client Satisfaction", value: "100%" },
      { label: "Projects Delivered", value: "50+" },
      { label: "Support Coverage", value: "24/7" },
      { label: "Delivery Velocity", value: "3x Faster" }
    ],
    services: [
      { title: "Software Development" },
      { title: "Cloud & Infrastructure" },
      { title: "Artificial Intelligence" },
      { title: "Consulting & Strategy" },
      { title: "Integration & APIs" }
    ],
    projects: [
      {
        id: "proj-tech-catalyst",
        name: "Catalyst Workflow Engine",
        client: "Ecosystem Core",
        industry: "Infrastructure",
        tag: "Technology",
        desc: "High-throughput asynchronous task orchestrator.",
        metric: "12ms P99 latency",
        features: ["Task Queue", "Fault-tolerant"]
      },
      {
        id: "proj-tech-waf",
        name: "Enterprise WAF Gateway",
        client: "HOGC Security",
        industry: "Cybersecurity",
        tag: "Technology",
        desc: "Policy-driven role-based access control engine.",
        metric: "Zero-Trust Enforcement",
        features: ["Rate Limiting", "RBAC Auth"]
      }
    ]
  },
  {
    id: "sapiensync",
    name: "SapienSync",
    category: "Talent & Workforce Solutions",
    subLabel: "Talent · People Operations · Workforce",
    orbitalDistance: "1 AU",
    tagline: "Powering businesses with people and infrastructure.",
    description: "Bridging visionary enterprises with specialized global talent, managed HR pipelines, and workspace execution.",
    accent: "#facc15",
    orbitRadius: 350,
    orbitSpeed: 0.0022,
    texture: "./textures/earth.jpg",
    realImage: "./images/earth.jpg",
    imageCaption: "NASA Apollo / Authentic Earth Orbital Perspective",
    externalUrl: "https://sapiensync.hogc.in/",
    hasRings: false,
    hoverSummary: "Exceptional technical & executive talent matched with visionary companies, combining culture fit with intellectual rigor.",
    keyDeliverables: ["Executive Search & Talent Sourcing", "Managed Contract Teams", "HR Operations & Payroll", "Workspace Deployment"],
    metrics: [
      { label: "Turnaround Time", value: "< 30 Days" },
      { label: "Industries Served", value: "12 Verticals" },
      { label: "Network Scope", value: "Global Reach" },
      { label: "Hiring Alignment", value: "Heart + Mind" }
    ],
    services: [
      { title: "Strategic Placements" },
      { title: "Flexible Staffing" },
      { title: "Startup Acceleration" },
      { title: "Enterprise Volume" },
      { title: "Executive Search" }
    ],
    industries: [
      "Information Technology",
      "Manufacturing & Engineering",
      "Banking & Finance",
      "Healthcare",
      "Retail & E-commerce",
      "Education & EdTech",
      "Telecom",
      "Logistics",
      "Hospitality",
      "BPO / KPO",
      "Sales & Marketing",
      "Construction"
    ],
    projects: [
      {
        id: "proj-talent-squads",
        name: "Rapid Engineering Squads",
        client: "Enterprise Tech Unit",
        industry: "Augmentation",
        tag: "Talent & Workforce",
        desc: "Curated engineering pods deployed in under 30 days.",
        metric: "Accelerated Time-to-Hire",
        features: ["Tech Screening", "Pod Deployment"]
      },
      {
        id: "proj-talent-ops",
        name: "Distributed HR Infrastructure",
        client: "Ecosystem Ops",
        industry: "People Operations",
        tag: "Talent & Workforce",
        desc: "Unified contractor governance and compliance protocols.",
        metric: "Zero-Friction Compliance",
        features: ["Onboarding", "Governance"]
      }
    ]
  },
  {
    id: "gc-marketing",
    name: "GC Marketing",
    category: "Brand Strategy & Digital Marketing",
    subLabel: "Brand · Growth · Creative Storytelling",
    orbitalDistance: "1.524 AU",
    tagline: "Where businesses become brands.",
    description: "Timeless corporate identities, performance growth engines, and high-impact digital narratives that convert attention into revenue.",
    accent: "#ff7a5c",
    orbitRadius: 440,
    orbitSpeed: 0.0016,
    texture: "./textures/mars.jpg",
    realImage: "./assets/real-space/mars-hubble.jpg",
    imageCaption: "NASA Hubble Space Telescope / Real Mars Optical Capture",
    externalUrl: "https://nimble-paprenjak-692e82.netlify.app/",
    hasRings: false,
    hoverSummary: "High-intent lead generation funnels, category-defining brand strategy, and creative storytelling at scale.",
    keyDeliverables: ["Brand Strategy & Identity", "Performance Marketing", "Content & Digital Storytelling", "Customer Acquisition"],
    metrics: [
      { label: "Acquisition Focus", value: "High Intent" },
      { label: "Design Standards", value: "Sovereign Identity" },
      { label: "Funnel Conversion", value: "Data Driven" },
      { label: "Content Quality", value: "Cinematic" }
    ],
    services: [
      { title: "Brand Strategy" },
      { title: "Lead Generation" },
      { title: "Performance Marketing" },
      { title: "Content Creation" },
      { title: "Creative Storytelling" }
    ],
    projects: [
      {
        id: "proj-mkt-brand",
        name: "Enterprise Design Architecture",
        client: "Sovereign System",
        industry: "Brand Strategy",
        tag: "Brand & Marketing",
        desc: "Unified visual design system and strategic messaging.",
        metric: "Cohesive Identity",
        features: ["Design System", "Brand Guidelines"]
      },
      {
        id: "proj-mkt-funnels",
        name: "Performance Acquisition Engine",
        client: "Growth Ops",
        industry: "Performance",
        tag: "Brand & Marketing",
        desc: "Full-funnel digital acquisition architecture.",
        metric: "Pipeline Expansion",
        features: ["Conversion Optimization", "Attribution"]
      }
    ]
  },
  {
    id: "autotown",
    name: "Autotown",
    category: "Intelligent Mobility & EV Infrastructure",
    subLabel: "Mobility · EV Infrastructure · Smart Access",
    orbitalDistance: "5.203 AU",
    tagline: "Architects of intelligent mobility.",
    description: "Connected vehicle services, intelligent EV infrastructure, and next-generation mobility networks for the modern urban ecosystem.",
    accent: "#f97316",
    orbitRadius: 530,
    orbitSpeed: 0.0011,
    texture: "./textures/jupiter.jpg",
    realImage: "./assets/real-space/jupiter-aurora.jpg",
    imageCaption: "NASA Hubble / Real Jupiter with Ultraviolet Aurora Crown",
    externalUrl: "https://charming-genie-25f447.netlify.app/",
    hasRings: true,
    hoverSummary: "Residential EV charging hubs, on-demand doorstep vehicle care, and app-based smart access for modern mobility.",
    keyDeliverables: ["EV Charging Infrastructure", "Smart Fleet Management", "Digital Vehicle Care", "Access & Mobility Systems"],
    metrics: [
      { label: "Care Formula", value: "Waterless Eco" },
      { label: "EV Hubs", value: "Smart Grid Ready" },
      { label: "Scheduling", value: "App-Based Instant" },
      { label: "Execution", value: "Doorstep Precision" }
    ],
    services: [
      { title: "Vehicle Care Services" },
      { title: "EV Charging Infrastructure" },
      { title: "Smart Access Systems" },
      { title: "Mobility Solutions" }
    ],
    projects: [
      {
        id: "proj-auto-ev",
        name: "Residential EV Infrastructure",
        client: "Living Ecosystems",
        industry: "EV Networks",
        tag: "Intelligent Mobility",
        desc: "Smart charging hubs with automated load management.",
        metric: "Reliable Grid Architecture",
        features: ["Smart Grid", "Automated Billing"]
      },
      {
        id: "proj-auto-care",
        name: "Precision Vehicle Care",
        client: "Automotive Services",
        industry: "Smart Mobility",
        tag: "Intelligent Mobility",
        desc: "Digital reservation and waterless vehicle care.",
        metric: "Eco-Conscious Execution",
        features: ["Slot Booking", "Waterless Formula"]
      }
    ]
  }
];

export const WORK_PROJECTS = COMPANIES.flatMap(c => c.projects);

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Understand",
    desc: "We diagnose the organization's core challenges, strategic goals, and technical landscape."
  },
  {
    step: "02",
    title: "Strategize",
    desc: "Cross-ecosystem architects formulate a cohesive blueprint spanning technology, talent, and brand."
  },
  {
    step: "03",
    title: "Build",
    desc: "Specialized companies execute in lockstep — engineers develop, recruiters staff, marketers position."
  },
  {
    step: "04",
    title: "Deploy",
    desc: "Turnkey solutions are deployed into production with end-to-end monitoring and governance."
  },
  {
    step: "05",
    title: "Grow",
    desc: "Continuous refinement, telemetry, and compounding ecosystem synergies drive long-term expansion."
  }
];

export const ABOUT_HOGC = {
  headline: "House of Giovanni Corsi",
  subhead: "A curated ecosystem of ventures. Built as individual worlds, connected as one universe.",
  vision: "Built as individual worlds. Connected as one universe.",
  mission: "To eliminate fragmented outsourcing by delivering specialized, interconnected enterprise capabilities under a unified standard of craftsmanship, excellence, and speed.",
  description: "HOGC Universe is a curated enterprise ecosystem that unifies technology, talent, brand strategy, and intelligent mobility solutions under one interconnected platform."
};
