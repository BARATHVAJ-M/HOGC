/**
 * Official HOGC Universe Ecosystem Data
 * Source of Truth: https://www.hogc.in/
 * Augmented with Authentic Real Space Photography & Content-First Telemetry
 */

export const GALAXY_HERO_IMAGE = "/assets/real-space/galaxy-hero.jpg";

export const HOGC_CORE = {
  id: "hogc-enterprises",
  name: "HOGC Enterprises",
  shortName: "HOGC",
  orbitalDistance: "0.39 AU",
  tagline: "Built as individual worlds. Connected as one universe.",
  headline: "HOGC Universe — A Curated Ecosystem of Innovation",
  description: "Parent organization and founding pillar of the HOGC Universe ecosystem. HOGC Enterprises provides the strategic direction, shared values, and common infrastructure that unites all brands in the ecosystem.",
  accent: "#fea082",
  accentSecondary: "#f39041",
  texture: "/textures/mercury.jpg",
  realImage: "/assets/real-space/mercury-corona.jpg",
  imageCaption: "NASA Messenger / Real Mercury Solar Corona Silhouette",
  headquarters: "India",
  hoverSummary: "Sovereign foundation & strategic holding core providing governance, shared capital, and enterprise standards across all ventures.",
  keyDeliverables: ["Venture Governance", "Ecosystem Infrastructure", "Unified Standards", "Cross-Entity Synergies"],
  stats: [
    { label: "Core Worlds", value: "4 Specialized Enterprises" },
    { label: "Architecture", value: "Sovereign Ecosystem" },
    { label: "Central Anchor", value: "0.39 AU Core" },
    { label: "Headquarters", value: "India" }
  ],
  capabilities: [
    { title: "Velocity-grade infrastructure", desc: "Shared enterprise infrastructure with zero single points of failure." },
    { title: "AI-powered decision engine", desc: "Algorithmic resource allocation and cross-ecosystem analytics." },
    { title: "Real-time market signals", desc: "Continuous competitive intelligence and growth telemetry." },
    { title: "Zero-latency data pipeline", desc: "Unified secure data exchange across sovereign business units." }
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
    description: "GC Tech partners with enterprises to modernize operations, automate workflows, and build intelligent digital ecosystems. Delivering custom software, high-throughput APIs, AI intelligence, and resilient cloud architecture.",
    accent: "#06b6d4",
    orbitRadius: 260,
    orbitSpeed: 0.0028,
    texture: "/textures/venus.jpg",
    realImage: "/images/venus.jpg",
    imageCaption: "Real Venus Cloud Atmosphere / Magellan & Pioneer Venus Optical",
    externalUrl: "https://gctech.hogc.in/",
    hasRings: false,
    hoverSummary: "We architect enterprise software, autonomous AI platforms, high-performance cloud engines, and custom APIs built to scale.",
    keyDeliverables: ["Custom Web & Microservices", "Autonomous AI Inference", "Cloud & DevOps Automation", "Enterprise API Gateways"],
    metrics: [
      { label: "Client Satisfaction", value: "100%" },
      { label: "Projects Delivered", value: "50+" },
      { label: "Support Coverage", value: "24/7" },
      { label: "Delivery Velocity", value: "3x Faster" }
    ],
    services: [
      {
        title: "Software Development",
        desc: "Custom applications and platforms built with modern stacks, scalable architecture, and clean code."
      },
      {
        title: "Cloud & Infrastructure",
        desc: "Reliable, secure cloud setup and DevOps practices so your systems run smoothly at any scale."
      },
      {
        title: "Artificial Intelligence",
        desc: "Autonomous inference systems, predictive machine learning models, and production-grade LLM integrations."
      },
      {
        title: "Consulting & Strategy",
        desc: "Technical roadmaps, architecture reviews, and best practices to align technology with your goals."
      },
      {
        title: "Integration & APIs",
        desc: "Connect your tools and data with robust APIs, middleware, and integrations that just work."
      }
    ],
    capabilities: [
      { title: "AI & Decision Intelligence", desc: "Predictive algorithms and automated workflow inference." },
      { title: "Custom Web & Microservices", desc: "Fault-tolerant architectures built for high concurrency." },
      { title: "Cloud & DevOps Reliability", desc: "Automated scaling, containerization, and disaster recovery." },
      { title: "Enterprise API Gateways", desc: "High-performance protocol translation and policy enforcement." }
    ],
    whatWeBuild: "We architect zero-latency business platforms, sovereign AI workflows, and high-performance cloud engines designed to modernize organizational operations and scale seamlessly.",
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
    description: "SapienSync powers businesses with people and infrastructure. Our services include talent sourcing, HR operations, contract workforce management, payroll administration, and workspace setup.",
    accent: "#facc15",
    orbitRadius: 350,
    orbitSpeed: 0.0022,
    texture: "/textures/earth.jpg",
    realImage: "/images/earth.jpg",
    imageCaption: "NASA Apollo / Authentic Earth Orbital Perspective",
    externalUrl: "https://sapiensync.hogc.in/",
    hasRings: false,
    hoverSummary: "We bridge exceptional technical & executive talent with visionary companies, combining emotional culture fit with intellectual rigor.",
    keyDeliverables: ["Specialized Tech Squads", "Contract Workforce Ops", "Executive Headhunting", "12 Industry Verticals"],
    metrics: [
      { label: "Turnaround Time", value: "< 30 Days" },
      { label: "Industries Served", value: "12 Verticals" },
      { label: "Network Scope", value: "Global Reach" },
      { label: "Hiring Alignment", value: "Heart + Mind" }
    ],
    services: [
      {
        title: "Strategic Placements",
        desc: "Long-term talent acquisition that aligns with your company's vision and future growth trajectory."
      },
      {
        title: "Flexible Staffing",
        desc: "Agile contract and temporary staffing solutions to meet fluctuating business demands with ease."
      },
      {
        title: "Startup Acceleration",
        desc: "Specialized recruitment for high-growth startups looking to build their core founding teams."
      },
      {
        title: "Enterprise Volume",
        desc: "Scalable bulk recruitment capabilities handling large-volume hiring without compromising quality."
      },
      {
        title: "Global Search & Executive Search",
        desc: "Access to a worldwide talent pool and discreet headhunting for C-suite leadership."
      }
    ],
    capabilities: [
      { title: "Specialized Tech Squads", desc: "Turnkey engineering squads assembled for rapid delivery." },
      { title: "Leadership & Executive Headhunting", desc: "Confidential search for C-suite and leadership visionaries." },
      { title: "Global Compliance Governance", desc: "Adherence to cross-border labor regulations and contracts." },
      { title: "People Ops Automation", desc: "Streamlined digital onboarding and employee management portals." }
    ],
    industries: [
      "Information Technology (IT & ITES)",
      "Manufacturing & Engineering",
      "Banking, Finance & Insurance",
      "Healthcare & Life Sciences",
      "Retail & E-commerce",
      "Education & EdTech",
      "Telecom",
      "Logistics & Supply Chain",
      "Hospitality & Travel",
      "BPO / KPO / Customer Support",
      "Sales & Marketing",
      "Construction & Infrastructure"
    ],
    whatWeBuild: "We bridge exceptional talent and forward-thinking enterprises, constructing resilient workforce infrastructures that empower teams to thrive.",
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
    description: "GC Marketing helps companies build recognizable identities and generate measurable growth through integrated marketing campaigns, lead generation, performance marketing, and creative storytelling.",
    accent: "#ff7a5c",
    orbitRadius: 440,
    orbitSpeed: 0.0016,
    texture: "/textures/mars.jpg",
    realImage: "/assets/real-space/mars-hubble.jpg",
    imageCaption: "NASA Hubble Space Telescope / Real Mars Optical Capture",
    externalUrl: "https://nimble-paprenjak-692e82.netlify.app/",
    hasRings: false,
    hoverSummary: "We scale ambitious businesses through high-intent lead generation funnels, category-defining brand strategy, and creative storytelling.",
    keyDeliverables: ["Brand Identity Systems", "High-Intent Inbound Funnels", "Performance Ad Architecture", "Executive Storytelling"],
    metrics: [
      { label: "Acquisition Focus", value: "High Intent" },
      { label: "Design Standards", value: "Sovereign Identity" },
      { label: "Funnel Conversion", value: "Data Driven" },
      { label: "Content Quality", value: "Cinematic" }
    ],
    services: [
      {
        title: "Brand Strategy",
        desc: "Strategic market positioning, brand architecture, value proposition formulation, and visual identity systems."
      },
      {
        title: "Lead Generation",
        desc: "High-intent acquisition funnels, B2B pipeline engineering, and systematic conversion rate optimization."
      },
      {
        title: "Digital Performance Marketing",
        desc: "Data-driven multi-channel advertising campaigns designed for compounding commercial ROI and customer retention."
      },
      {
        title: "Content Creation",
        desc: "High-fidelity digital assets, copy architectures, whitepapers, and editorial media that establish category authority."
      },
      {
        title: "Creative Storytelling",
        desc: "Cinematic digital storytelling and narrative design that connects deeply with modern audiences and decision-makers."
      }
    ],
    capabilities: [
      { title: "Brand Identity Design", desc: "Design systems, typography scales, and cohesive guidelines." },
      { title: "Algorithmic Growth Funnels", desc: "Continuous A/B testing and attribution modeling." },
      { title: "Omnichannel Storytelling", desc: "Narratives tailored across video, social, and web platforms." },
      { title: "High-Intent B2B Prospecting", desc: "Targeted account-based marketing workflows." }
    ],
    whatWeBuild: "We elevate innovative companies into category-defining brands, building robust growth engines that convert attention into sustainable commercial value.",
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
    description: "Autotown is building the roads and networks of tomorrow's connected transportation ecosystem. Offerings include vehicle care services, EV charging infrastructure, smart access systems, and innovative mobility solutions.",
    accent: "#f97316",
    orbitRadius: 530,
    orbitSpeed: 0.0011,
    texture: "/textures/jupiter.jpg",
    realImage: "/assets/real-space/jupiter-aurora.jpg",
    imageCaption: "NASA Hubble / Real Jupiter with Ultraviolet Aurora Crown",
    externalUrl: "https://charming-genie-25f447.netlify.app/",
    hasRings: true,
    hoverSummary: "We architect tomorrow's mobility with residential EV charging hubs, on-demand doorstep vehicle care, and app-based smart access.",
    keyDeliverables: ["Residential EV Charging Grids", "Waterless Doorstep Detailing", "Mobile App Smart Access", "Connected Fleet Care"],
    metrics: [
      { label: "Care Formula", value: "Waterless Eco" },
      { label: "EV Hubs", value: "Smart Grid Ready" },
      { label: "Scheduling", value: "App-Based Instant" },
      { label: "Execution", value: "Doorstep Precision" }
    ],
    services: [
      {
        title: "Vehicle Care Services",
        desc: "Precision on-demand interior and exterior vehicle care delivered directly within residential and corporate ecosystems."
      },
      {
        title: "EV Charging Infrastructure",
        desc: "Integrated smart charging stations with automated power load balancing and seamless digital payment access."
      },
      {
        title: "Smart Access Systems",
        desc: "Mobile app-based scheduling, automated gate/bay credentials, and real-time service tracking."
      },
      {
        title: "Innovative Mobility Solutions",
        desc: "Connected transportation platforms, on-demand fleet assistance, and extended vehicle lifecycle support."
      }
    ],
    capabilities: [
      { title: "Residential EV Hubs", desc: "Turnkey charging grids integrated into residential high-rises." },
      { title: "Precision Doorstep Detailing", desc: "Eco-conscious waterless vehicle care subscriptions." },
      { title: "Connected Automotive Telematics", desc: "Live vehicle diagnostics and preventive service alerts." },
      { title: "Smart Fleet Management", desc: "Shared mobility infrastructure and reservation engines." }
    ],
    whatWeBuild: "We construct smart, eco-friendly mobility networks that eliminate friction from vehicle ownership and pave the way for electric transportation.",
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
  description: "HOGC Universe is a curated enterprise ecosystem that unifies technology, talent, brand strategy, and intelligent mobility solutions under one interconnected platform. Each company operates with vertical mastery as an individual world, while collaborating harmoniously as one connected universe."
};
