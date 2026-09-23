/**
 * Official HOGC Universe Ecosystem Data
 * Source of Truth: https://www.hogc.in/
 * Optimized for Content Delivery — Executive Corporate Motives & Sharp Commercial Value
 */

export const GALAXY_HERO_IMAGE = "/assets/real-space/galaxy-hero.jpg";

export const HOGC_CORE = {
  id: "hogc-enterprises",
  name: "HOGC Enterprises",
  shortName: "HOGC",
  orbitalDistance: "0.39 AU",
  tagline: "Strategic stewardship, centralized capital allocation, and enterprise governance.",
  headline: "HOGC Enterprises — Strategic Venture Core & Enterprise Governance",
  description: "HOGC serves as the sovereign holding core, providing strategic governance, shared compliance frameworks, and investment capital. We empower our operating companies to scale with speed, financial resilience, and unified quality benchmarks.",
  accent: "#fea082",
  accentSecondary: "#f39041",
  texture: "./textures/mercury.jpg",
  realImage: "./assets/real-space/mercury-corona.jpg",
  imageCaption: "NASA Messenger / Real Mercury Solar Corona Silhouette",
  headquarters: "India",
  hoverSummary: "Sovereign foundation & strategic holding core providing governance, shared capital, and enterprise standards across all ventures.",
  keyDeliverables: ["Venture Governance", "Capital Architecture", "Enterprise Compliance", "Cross-Entity Integration"],
  stats: [
    { label: "Core Worlds", value: "4 Specialized Enterprises" },
    { label: "Architecture", value: "Sovereign Ecosystem" },
    { label: "Central Anchor", value: "0.39 AU Core" },
    { label: "Headquarters", value: "India" }
  ],
  services: [
    {
      title: "Venture Governance & Stewardship",
      tagline: "Strategic board leadership and operational oversight",
      desc: "Institutional governance frameworks and sovereign compliance standards ensuring unified performance across all operating companies.",
      deliverable: "Standardized governance charter, compliance protocols, and executive board advisory.",
      impact: "Zero-Friction Cross-Entity Alignment"
    },
    {
      title: "Capital Architecture & Allocation",
      tagline: "Centralized treasury and growth financing",
      desc: "Structured capital planning, treasury optimization, and disciplined funding to scale high-conviction enterprise initiatives.",
      deliverable: "Multi-entity capital models, treasury risk controls, and automated cash management.",
      impact: "Resilient Long-Term Balance Sheet"
    },
    {
      title: "Enterprise Infrastructure Standards",
      tagline: "Unified cybersecurity and operational protocols",
      desc: "Enterprise-grade SOC2/ISO compliance baselines, centralized cloud procurement, and zero-trust IT security frameworks.",
      deliverable: "Ecosystem-wide compliance audits, procurement synergies, and unified security baselines.",
      impact: "100% Security & Audit Readiness"
    },
    {
      title: "Cross-Entity Synergistic Execution",
      tagline: "Multi-disciplinary enterprise delivery",
      desc: "Orchestrating technology, talent, brand, and mobility into seamless turnkey solutions without vendor fragmentation.",
      deliverable: "Unified master service agreements (MSAs) and single-point accountability for clients.",
      impact: "40% Faster Multi-Discipline Deployment"
    }
  ]
};

export const COMPANIES = [
  {
    id: "gc-tech",
    name: "GC Tech",
    category: "Enterprise Digital Engineering & Applied AI",
    subLabel: "AI · Custom Software · Cloud Infrastructure",
    orbitalDistance: "0.723 AU",
    tagline: "Architecting high-throughput software and autonomous AI systems built for scale.",
    description: "GC Tech partners with mid-market and enterprise organizations to modernize legacy systems, build proprietary AI platforms, and engineer resilient cloud infrastructure. We deliver production-grade software that accelerates operational efficiency and drives recurring top-line revenue.",
    accent: "#06b6d4",
    orbitRadius: 260,
    orbitSpeed: 0.0028,
    texture: "./textures/venus.jpg",
    realImage: "./images/venus.jpg",
    imageCaption: "Real Venus Cloud Atmosphere / Magellan & Pioneer Venus Optical",
    externalUrl: "https://gctech.hogc.in/",
    hasRings: false,
    hoverSummary: "Enterprise software, autonomous AI platforms, high-performance cloud engines, and custom APIs built to scale.",
    keyDeliverables: ["Custom Enterprise Platforms", "Autonomous AI Workflows", "Cloud & DevOps Infrastructure", "High-Throughput API Architecture"],
    metrics: [
      { label: "Client Satisfaction", value: "100%" },
      { label: "Projects Delivered", value: "50+" },
      { label: "Support Coverage", value: "24/7" },
      { label: "Delivery Velocity", value: "3x Faster" }
    ],
    services: [
      {
        title: "Custom Enterprise Platforms",
        tagline: "Cloud-native applications engineered for high concurrency",
        desc: "Bespoke SaaS architectures and web platforms engineered with fault-tolerant microservices, modern frontends, and automated CI/CD.",
        deliverable: "Production-ready architectures with 99.99% SLA and automated testing pipelines.",
        impact: "3x Faster Feature Delivery"
      },
      {
        title: "Autonomous AI & Intelligent Agents",
        tagline: "Proprietary AI workflows and decision pipelines",
        desc: "Domain-adapted LLMs, automated retrieval-augmented generation (RAG), and autonomous agents that streamline core business operations.",
        deliverable: "Sub-15ms inference latency, enterprise vector stores, and automated process pipelines.",
        impact: "60% Reduction in Manual Operations"
      },
      {
        title: "Cloud & DevOps Infrastructure",
        tagline: "Multi-cloud resilience and container orchestration",
        desc: "Production Kubernetes deployments, infrastructure-as-code (Terraform), and zero-downtime continuous deployment environments.",
        deliverable: "Automated scaling policies, disaster recovery blueprints, and cost-optimized cloud footprints.",
        impact: "Zero-Downtime High Availability"
      },
      {
        title: "High-Throughput API Gateways",
        tagline: "Resilient microservices and event-driven data streaming",
        desc: "High-performance REST/GraphQL/gRPC API architectures designed for massive concurrency, rate limiting, and zero-trust authentication.",
        deliverable: "Enterprise API documentation, developer portal, and sub-12ms P99 latency gateways.",
        impact: "<12ms P99 Response Latency"
      },
      {
        title: "Legacy Systems Modernization",
        tagline: "Deconstruct monoliths without operational downtime",
        desc: "Stepwise decoupling of legacy architectures into agile, cloud-native services with seamless data migration and zero data loss.",
        deliverable: "Modernized microservices stack, backward-compatible API layers, and data validation suites.",
        impact: "40% Lower Maintenance Costs"
      }
    ],
    projects: [
      {
        id: "proj-tech-catalyst",
        name: "Catalyst Workflow Engine",
        title: "Catalyst Workflow Engine",
        client: "Ecosystem Core",
        industry: "Infrastructure",
        tag: "Technology",
        status: "LIVE PRODUCTION",
        desc: "Enterprise asynchronous microservices orchestrator with sub-15ms execution latency and automated failover.",
        metric: "12ms P99 Latency",
        features: ["Task Queue", "Fault-Tolerant", "Sub-15ms Latency", "Event-Driven"]
      },
      {
        id: "proj-tech-waf",
        name: "Enterprise WAF Gateway",
        title: "Enterprise WAF Gateway",
        client: "HOGC Security",
        industry: "Cybersecurity",
        tag: "Technology",
        status: "ENTERPRISE DEPLOYED",
        desc: "Zero-trust edge security gateway enforcing role-based access control across multi-cloud production clusters.",
        metric: "Zero-Trust Enforcement",
        features: ["Rate Limiting", "RBAC Auth", "DDoS Mitigation", "Audit Telemetry"]
      }
    ]
  },
  {
    id: "sapiensync",
    name: "SapienSync",
    category: "Global Talent Sourcing & People Operations",
    subLabel: "Talent · People Operations · Workforce",
    orbitalDistance: "1 AU",
    tagline: "Deploying high-impact executive leadership and specialized engineering teams.",
    description: "SapienSync solves complex talent bottlenecks for high-growth enterprises and tech organizations. From rapid-deployment technical pods to C-suite executive placements and compliant global payroll, we build high-performance workforces that execute with speed and precision.",
    accent: "#facc15",
    orbitRadius: 350,
    orbitSpeed: 0.0022,
    texture: "./textures/earth.jpg",
    realImage: "./images/earth.jpg",
    imageCaption: "NASA Apollo / Authentic Earth Orbital Perspective",
    externalUrl: "https://sapiensync.hogc.in/",
    hasRings: false,
    hoverSummary: "Exceptional technical & executive talent matched with visionary companies, combining culture fit with intellectual rigor.",
    keyDeliverables: ["Executive Search & Leadership", "Dedicated Engineering Squads", "Global Workforce Compliance", "Managed Staffing Pipelines"],
    metrics: [
      { label: "Turnaround Time", value: "< 30 Days" },
      { label: "Industries Served", value: "12 Verticals" },
      { label: "Network Scope", value: "Global Reach" },
      { label: "Hiring Alignment", value: "Heart + Mind" }
    ],
    services: [
      {
        title: "Executive Search & C-Suite Placements",
        tagline: "Retained search for mission-critical leaders",
        desc: "Rigorous search and evaluation of CEOs, CTOs, and VPs combining domain mastery, executive presence, and cultural alignment.",
        deliverable: "Confidential candidate dossiers, competency scorecards, and executive onboarding frameworks.",
        impact: "95% Executive Retention Rate"
      },
      {
        title: "Dedicated Engineering Pods",
        tagline: "Pre-vetted technical squads ready in under 30 days",
        desc: "Turnkey engineering pods (Full-Stack, DevOps, AI) integrated directly into your agile sprints with zero hiring friction.",
        deliverable: "Pre-screened technical talent, immediate code contribution, and dedicated delivery management.",
        impact: "<30 Days Time-to-Deploy"
      },
      {
        title: "Global Compliance & Cross-Border Payroll",
        tagline: "Frictionless international workforce infrastructure",
        desc: "Multi-country payroll processing, localized tax compliance, benefits administration, and IP protection for remote teams.",
        deliverable: "100% compliant contractor agreements, automated tax filings, and unified multi-currency payout systems.",
        impact: "Zero Compliance Liabilities"
      },
      {
        title: "Managed Talent Operations (RPO)",
        tagline: "End-to-end talent acquisition infrastructure",
        desc: "Outsourced recruiting function for high-growth enterprises needing to scale hiring volume while cutting agency commissions.",
        deliverable: "Dedicated recruiting teams, automated ATS pipeline setup, and weekly conversion metrics.",
        impact: "50% Lower Cost-per-Hire"
      },
      {
        title: "Specialized Technical Sourcing",
        tagline: "Niche engineering and research talent on demand",
        desc: "Targeted sourcing for scarce technical roles including ML engineers, systems architects, and cybersecurity specialists.",
        deliverable: "Deep-bench candidate shortlists within 10 business days.",
        impact: "3x Higher Candidate Quality"
      }
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
        name: "Rapid Engineering Pods",
        title: "Rapid Engineering Pods",
        client: "Enterprise Tech Unit",
        industry: "Augmentation",
        tag: "Talent & Workforce",
        status: "SCALE DEPLOYED",
        desc: "Turnkey full-stack and DevOps engineering squads deployed into enterprise roadmaps within 30 days.",
        metric: "Sub-30 Day Pod Deployment",
        features: ["Tech Screening", "Pod Deployment", "Agile Integration", "Immediate Output"]
      },
      {
        id: "proj-talent-ops",
        name: "Global Workforce Infrastructure",
        title: "Global Workforce Infrastructure",
        client: "Ecosystem Ops",
        industry: "People Operations",
        tag: "Talent & Workforce",
        status: "GLOBAL PRODUCTION",
        desc: "Compliant international contractor payroll, tax structuring, and onboarding infrastructure across multiple countries.",
        metric: "Zero-Friction Compliance",
        features: ["Global Onboarding", "Tax Structuring", "Multi-Currency", "IP Protection"]
      }
    ]
  },
  {
    id: "gc-marketing",
    name: "GC Marketing",
    category: "Strategic Brand Advisory & Performance Acquisition",
    subLabel: "Brand · Growth · Creative Storytelling",
    orbitalDistance: "1.524 AU",
    tagline: "Transforming emerging enterprises into dominant, category-defining market leaders.",
    description: "GC Marketing engineers end-to-end commercial growth engines. We combine institutional brand positioning, premium visual identity systems, and multi-channel acquisition funnels to turn market attention into high-retention enterprise customers.",
    accent: "#ff7a5c",
    orbitRadius: 440,
    orbitSpeed: 0.0016,
    texture: "./textures/mars.jpg",
    realImage: "./assets/real-space/mars-hubble.jpg",
    imageCaption: "NASA Hubble Space Telescope / Real Mars Optical Capture",
    externalUrl: "https://nimble-paprenjak-692e82.netlify.app/",
    hasRings: false,
    hoverSummary: "High-intent lead generation funnels, category-defining brand strategy, and creative storytelling at scale.",
    keyDeliverables: ["Corporate Brand Strategy", "High-Intent Lead Funnels", "Multi-Channel Performance Growth", "Executive Narrative & PR"],
    metrics: [
      { label: "Acquisition Focus", value: "High Intent" },
      { label: "Design Standards", value: "Sovereign Identity" },
      { label: "Funnel Conversion", value: "Data Driven" },
      { label: "Content Quality", value: "Cinematic" }
    ],
    services: [
      {
        title: "Institutional Brand Strategy",
        tagline: "Category-defining corporate positioning and identity",
        desc: "Strategic brand audits, competitive moat identification, and institutional identity systems designed to command premium pricing.",
        deliverable: "Comprehensive brand guideline book, executive message architecture, and complete visual identity suite.",
        impact: "Premium Market Positioning"
      },
      {
        title: "B2B Performance Lead Generation",
        tagline: "High-intent pipeline acquisition engines",
        desc: "Targeted account-based marketing (ABM), programmatic paid campaigns, and multi-touch lead nurturing architectures.",
        deliverable: "Predictable sales-qualified lead (SQL) funnels, automated CRM routing, and attribution analytics.",
        impact: "3.5x Pipeline Acceleration"
      },
      {
        title: "Content Strategy & Cinematic Media",
        tagline: "High-production narratives that convert attention",
        desc: "Cinematic corporate video, technical case studies, and thought leadership articles that establish undeniable market authority.",
        deliverable: "Quarterly content calendars, high-resolution multimedia assets, and distribution syndication.",
        impact: "4x Audience Engagement"
      },
      {
        title: "Full-Funnel Conversion Optimization",
        tagline: "Data-driven conversion rate enhancement",
        desc: "Continuous A/B testing of high-intent landing pages, user behavioral heatmaps, and frictionless checkout/demo booking flows.",
        deliverable: "Optimized landing page variants, heat-map telemetry reports, and conversion uplift roadmaps.",
        impact: "+45% Funnel Conversion Lift"
      },
      {
        title: "Corporate Narrative & Executive PR",
        tagline: "Strategic media coverage and thought leadership",
        desc: "Securing tier-1 business publication coverage, podcast appearances, and keynotes for enterprise founders and C-suite leaders.",
        deliverable: "Press release syndication, media kit architecture, and targeted journalist outreach.",
        impact: "Top-Tier Media Recognition"
      }
    ],
    projects: [
      {
        id: "proj-mkt-brand",
        name: "Enterprise Identity Architecture",
        title: "Enterprise Identity Architecture",
        client: "Sovereign System",
        industry: "Brand Strategy",
        tag: "Brand & Marketing",
        status: "LIVE PRODUCTION",
        desc: "Comprehensive brand re-positioning, visual systems, and institutional messaging driving corporate valuation.",
        metric: "Cohesive Identity Benchmark",
        features: ["Design System", "Brand Guidelines", "Executive Voice", "Asset Library"]
      },
      {
        id: "proj-mkt-funnels",
        name: "B2B Performance Acquisition Engine",
        title: "B2B Performance Acquisition Engine",
        client: "Growth Ops",
        industry: "Performance",
        tag: "Brand & Marketing",
        status: "SCALE DEPLOYED",
        desc: "High-intent lead generation funnels and attribution modeling driving enterprise qualified sales pipeline.",
        metric: "3.5x Pipeline Velocity",
        features: ["ABM Funnel", "Lead Attribution", "Multi-Channel Paid", "CRM Automation"]
      }
    ]
  },
  {
    id: "autotown",
    name: "Autotown",
    category: "Connected Fleet Operations & EV Infrastructure",
    subLabel: "Mobility · EV Infrastructure · Smart Access",
    orbitalDistance: "5.203 AU",
    tagline: "Decarbonizing and modernizing enterprise mobility through intelligent infrastructure.",
    description: "Autotown develops and manages commercial-grade EV charging networks, smart access platforms, and on-demand precision fleet care. We help commercial developers, corporate campuses, and logistics operators future-proof their mobility ecosystems.",
    accent: "#f97316",
    orbitRadius: 530,
    orbitSpeed: 0.0011,
    texture: "./textures/jupiter.jpg",
    realImage: "./assets/real-space/jupiter-aurora.jpg",
    imageCaption: "NASA Hubble / Real Jupiter with Ultraviolet Aurora Crown",
    externalUrl: "https://charming-genie-25f447.netlify.app/",
    hasRings: true,
    hoverSummary: "Residential EV charging hubs, on-demand doorstep vehicle care, and app-based smart access for modern mobility.",
    keyDeliverables: ["Turnkey EV Charging Hubs", "Smart Fleet Management", "On-Demand Precision Care", "Automated Billing & Access Systems"],
    metrics: [
      { label: "Care Formula", value: "Waterless Eco" },
      { label: "EV Hubs", value: "Smart Grid Ready" },
      { label: "Scheduling", value: "App-Based Instant" },
      { label: "Execution", value: "Doorstep Precision" }
    ],
    services: [
      {
        title: "Turnkey Commercial EV Infrastructure",
        tagline: "End-to-end charging hubs for enterprise campuses",
        desc: "Site feasibility, smart charger hardware deployment, dynamic electrical load balancing, and automated revenue billing software.",
        deliverable: "Level 2 and DC Fast Charging hubs, automated OCPP 2.0 software, and 24/7 remote station monitoring.",
        impact: "99.8% Charging Uptime"
      },
      {
        title: "Connected Fleet Telematics & Analytics",
        tagline: "Real-time fleet optimization and battery health",
        desc: "IoT telematics sensors monitoring fleet vehicle status, driver habits, route efficiency, and preventative battery diagnostics.",
        deliverable: "Centralized fleet management dashboard, automated maintenance alerts, and driver safety reports.",
        impact: "25% Reduction in Fleet TCO"
      },
      {
        title: "On-Demand Precision Fleet Care",
        tagline: "Zero-water doorstep vehicle maintenance",
        desc: "Professional on-site vehicle care using eco-certified waterless formulas, scheduled seamlessly through digital reservations.",
        deliverable: "Corporate fleet service contracts, digital scheduling app, and certified mobile technician crews.",
        impact: "100% Water Conservation"
      },
      {
        title: "Smart Access & Automated Billing Systems",
        tagline: "Seamless gate access and RFID integration",
        desc: "Integrated license-plate recognition (ANPR) and RFID access control systems enabling automated billing without manual ticketing.",
        deliverable: "Cloud-connected access gates, mobile authorization app, and real-time occupancy tracking.",
        impact: "Frictionless Campus Mobility"
      },
      {
        title: "Campus Energy & Grid Load Balancing",
        tagline: "Peak-shaving and energy storage software",
        desc: "Intelligent energy management integrating solar panels and battery storage to avoid peak utility demand charges during fleet charging.",
        deliverable: "Dynamic power distribution software, grid integration reports, and utility cost dashboards.",
        impact: "30% Energy Cost Savings"
      }
    ],
    projects: [
      {
        id: "proj-auto-ev",
        name: "Turnkey EV Charging Infrastructure",
        title: "Turnkey EV Charging Infrastructure",
        client: "Living Ecosystems",
        industry: "EV Networks",
        tag: "Intelligent Mobility",
        status: "LIVE PRODUCTION",
        desc: "Scalable commercial charging stations with dynamic grid load balancing, RFID access, and automated billing.",
        metric: "99.8% Charging Station Uptime",
        features: ["Smart Grid Ready", "Automated Billing", "RFID Access", "Dynamic Balancing"]
      },
      {
        id: "proj-auto-care",
        name: "Enterprise Fleet Care Operations",
        title: "Enterprise Fleet Care Operations",
        client: "Automotive Services",
        industry: "Smart Mobility",
        tag: "Intelligent Mobility",
        status: "SCALE DEPLOYED",
        desc: "App-scheduled waterless vehicle care and preventive maintenance for corporate mobility fleets.",
        metric: "Eco-Conscious Zero-Water Execution",
        features: ["Slot Booking", "Waterless Formula", "Fleet Contracts", "Mobile Squads"]
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
