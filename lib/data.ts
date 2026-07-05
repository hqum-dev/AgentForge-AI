import {
  Bot,
  Workflow,
  TrendingUp,
  Users,
  Briefcase,
  FileText,
  BookOpen,
  MessageSquare,
  Cpu,
  Compass,
  Building2,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Factory,
  Scale,
  Landmark,
  PiggyBank,
  Search,
  ClipboardList,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw,
  Clock,
  ShieldCheck,
  BarChart3,
  Sparkles,
  DollarSign,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Site ---------------------------------- */

export const site = {
  name: "AgentForge AI",
  tagline: "Enterprise AI Agents & Workflow Automation",
  description:
    "AgentForge AI helps businesses, nonprofits, educational institutions, healthcare organizations, professional service firms, and government agencies eliminate repetitive work with AI agents, workflow automation, dashboards, and custom AI solutions.",
  url: "https://hqum-dev.github.io/AgentForge-AI",
  email: "amaanah1@gmail.com",
};

/* -------------------------------- Services -------------------------------- */

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "ai-agents",
    title: "AI Agents",
    icon: Bot,
    summary:
      "Autonomous AI agents that research, decide, and act across your systems — handling multi-step work that used to require a full-time hire.",
    description:
      "We design and deploy production-grade AI agents that operate inside your existing tools: triaging inboxes, qualifying leads, reconciling records, monitoring operations, and escalating to humans only when judgment is required. Every agent ships with guardrails, audit logs, and human-in-the-loop controls.",
    outcomes: [
      "24/7 execution of multi-step workflows",
      "Human-in-the-loop approval gates for sensitive actions",
      "Full audit trail of every agent decision",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: Workflow,
    summary:
      "End-to-end automation of the repetitive processes that consume your team's week — intake, routing, approvals, reporting, and follow-ups.",
    description:
      "We map your workflows, identify the highest-leverage automation opportunities, and build reliable pipelines connecting the tools you already use. From simple triggers to complex multi-system orchestration, we automate the busywork so your team can focus on decisions.",
    outcomes: [
      "Hours of manual work eliminated every week",
      "Fewer handoff errors and dropped requests",
      "Consistent, measurable process execution",
    ],
  },
  {
    slug: "business-process-optimization",
    title: "Business Process Optimization",
    icon: TrendingUp,
    summary:
      "A rigorous, data-driven redesign of how work flows through your organization — before a single line of automation is built.",
    description:
      "Automating a broken process just produces mistakes faster. We analyze your operations end to end, quantify where time and money leak, redesign the process, and only then apply automation — so the gains compound instead of calcifying bad habits.",
    outcomes: [
      "Documented process maps and bottleneck analysis",
      "Quantified cost-of-delay and ROI models",
      "A prioritized automation roadmap",
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    icon: Users,
    summary:
      "Your CRM, finally kept up to date automatically — enriched records, instant follow-ups, and pipeline hygiene without the data entry.",
    description:
      "We connect your CRM to the rest of your stack so every call, email, form fill, and meeting updates records automatically. Leads get scored and routed in seconds, follow-up sequences trigger themselves, and your pipeline reports reflect reality.",
    outcomes: [
      "Lead response time cut from hours to minutes",
      "Automatic enrichment and deduplication",
      "Pipeline reporting your leadership can trust",
    ],
  },
  {
    slug: "executive-ai-assistants",
    title: "Executive AI Assistants",
    icon: Briefcase,
    summary:
      "A private AI chief of staff for your leadership team — briefings, scheduling, drafting, and inbox triage tuned to how each executive works.",
    description:
      "We build secure, personalized AI assistants that prepare daily briefings, draft correspondence in the executive's voice, manage scheduling conflicts, summarize long documents before meetings, and surface what actually needs attention.",
    outcomes: [
      "Daily briefings that replace an hour of reading",
      "Inbox triage with drafted responses ready for review",
      "Meeting prep summaries generated automatically",
    ],
  },
  {
    slug: "document-automation",
    title: "Document Automation",
    icon: FileText,
    summary:
      "Contracts, proposals, reports, and compliance paperwork generated, reviewed, and filed automatically — accurately and on brand.",
    description:
      "We automate the full document lifecycle: intelligent data extraction from incoming documents, template-driven generation of outgoing ones, AI-assisted review against your standards, and automatic filing and retention. PDFs, Word, spreadsheets, and scanned paper included.",
    outcomes: [
      "Document turnaround measured in minutes, not days",
      "Extraction accuracy validated with human review queues",
      "Consistent formatting and compliance on every document",
    ],
  },
  {
    slug: "knowledge-management",
    title: "Knowledge Management Systems",
    icon: BookOpen,
    summary:
      "Turn your scattered documents, wikis, and inboxes into a single AI-searchable knowledge base your whole team can question in plain English.",
    description:
      "We consolidate institutional knowledge from drives, wikis, email, and legacy systems into a governed knowledge platform with retrieval-augmented AI on top — so answers that used to live in one veteran employee's head are available to everyone, instantly and with citations.",
    outcomes: [
      "Instant answers with source citations",
      "Onboarding time for new hires cut dramatically",
      "Institutional knowledge preserved through turnover",
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    icon: MessageSquare,
    summary:
      "Customer-facing chatbots that actually resolve issues — grounded in your real policies and data, escalating gracefully when needed.",
    description:
      "We build AI chat experiences for support, sales, and internal help desks that answer from your verified knowledge base, complete transactions, book appointments, and hand off to humans with full context. No canned scripts, no hallucinated policies.",
    outcomes: [
      "Majority of routine inquiries resolved without staff",
      "24/7 coverage across web, SMS, and messaging apps",
      "Seamless human handoff with full conversation context",
    ],
  },
  {
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    icon: Cpu,
    summary:
      "When off-the-shelf tools can't do it, we design and build bespoke AI systems around your exact data, constraints, and workflows.",
    description:
      "Some problems don't fit a template: proprietary data formats, regulated environments, unusual workflows, legacy integrations. Our engineering team builds custom AI applications — from decision-support dashboards to full internal platforms — with enterprise security and maintainability from day one.",
    outcomes: [
      "Purpose-built software owned by you",
      "Enterprise-grade security and access controls",
      "Documentation and training for long-term independence",
    ],
  },
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy Consulting",
    icon: Compass,
    summary:
      "A clear, board-ready AI roadmap: where AI creates real value for your organization, what to build first, and what to ignore.",
    description:
      "We cut through the hype with a structured assessment of your operations, data readiness, and competitive landscape — then deliver a prioritized roadmap with business cases, governance guidance, and change-management planning your leadership can act on immediately.",
    outcomes: [
      "Board-ready AI opportunity assessment",
      "Prioritized roadmap with ROI projections",
      "Governance, risk, and adoption frameworks",
    ],
  },
];

/* ------------------------------- Industries ------------------------------- */

export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  useCases: string[];
};

export const industries: Industry[] = [
  {
    slug: "small-businesses",
    title: "Small Businesses",
    icon: Building2,
    summary:
      "Enterprise-grade automation scaled to small-business budgets — so a team of ten can operate like a team of thirty.",
    description:
      "Small businesses feel repetitive work most acutely: the owner is the bottleneck. We automate scheduling, invoicing, customer follow-up, and marketing operations so growth stops depending on working nights and weekends.",
    useCases: [
      "Automated quoting, invoicing, and payment follow-up",
      "Customer review and referral engines",
      "Appointment scheduling and no-show reduction",
    ],
  },
  {
    slug: "nonprofits",
    title: "Nonprofits",
    icon: HeartHandshake,
    summary:
      "More mission, less administration — donor management, grant writing support, and volunteer coordination on autopilot.",
    description:
      "Every hour spent on data entry is an hour not spent on your mission. We help nonprofits automate donor communications, grant application drafting, impact reporting, and volunteer scheduling — often at discounted nonprofit rates.",
    useCases: [
      "Donor segmentation and personalized stewardship",
      "AI-assisted grant research and drafting",
      "Automated impact reports for funders",
    ],
  },
  {
    slug: "education",
    title: "Educational Institutions",
    icon: GraduationCap,
    summary:
      "From admissions to alumni relations — automation that lets educators teach instead of push paperwork.",
    description:
      "Schools, districts, and universities run on repetitive administrative processes. We automate admissions pipelines, student communications, transcript processing, and reporting while meeting FERPA and student-privacy requirements.",
    useCases: [
      "Admissions inquiry triage and application processing",
      "Automated parent and student communications",
      "Compliance reporting and records management",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    summary:
      "HIPAA-conscious automation for intake, scheduling, documentation, and billing — giving clinicians their time back.",
    description:
      "Administrative burden is the leading driver of clinician burnout. We build privacy-first automation for patient intake, appointment reminders, prior authorization paperwork, clinical documentation support, and revenue-cycle workflows.",
    useCases: [
      "Patient intake and insurance verification",
      "No-show reduction via intelligent reminders",
      "Prior authorization and claims documentation",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    summary:
      "Connect the shop floor to the front office — automated reporting, quality documentation, and supply-chain visibility.",
    description:
      "We help manufacturers digitize paper-driven processes: production reporting, quality-control documentation, maintenance scheduling, supplier communications, and inventory alerts — integrated with your ERP rather than replacing it.",
    useCases: [
      "Automated production and downtime reporting",
      "Quality documentation and audit readiness",
      "Supplier onboarding and PO follow-up",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    icon: Scale,
    summary:
      "For law, accounting, consulting, and agencies — automate the non-billable work that erodes your margins.",
    description:
      "Professional service firms sell time, and non-billable administration consumes it. We automate client intake, engagement letters, document assembly, time-entry hygiene, and status reporting so more of every week is billable.",
    useCases: [
      "Client intake and conflict-check automation",
      "Document assembly and review acceleration",
      "Automated client status updates and reporting",
    ],
  },
  {
    slug: "government",
    title: "Government",
    icon: Landmark,
    summary:
      "Modern constituent services and internal efficiency for agencies — with the security, transparency, and audit trails the public sector requires.",
    description:
      "We help government agencies automate permit processing, records requests, constituent communications, and inter-department workflows — designed for procurement rules, accessibility standards, and public-records obligations from the start.",
    useCases: [
      "Permit and license application processing",
      "Public records request triage and fulfillment",
      "Constituent inquiry routing and response",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    icon: PiggyBank,
    summary:
      "Compliance-aware automation for banks, advisors, and insurers — faster operations without regulatory shortcuts.",
    description:
      "In financial services, automation must be as auditable as it is fast. We build controlled AI workflows for client onboarding, KYC documentation, report generation, and client communications — with logging and review gates built in.",
    useCases: [
      "Client onboarding and KYC document processing",
      "Automated portfolio and compliance reporting",
      "Meeting-note capture and CRM synchronization",
    ],
  },
];

/* --------------------------------- Process -------------------------------- */

export type ProcessStep = {
  step: number;
  title: string;
  icon: LucideIcon;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    icon: Search,
    description:
      "We learn your organization: goals, systems, team structure, and the friction points costing you the most time and money.",
  },
  {
    step: 2,
    title: "Workflow Audit",
    icon: ClipboardList,
    description:
      "We map your workflows end to end and quantify exactly where hours are lost — producing a prioritized list of automation opportunities.",
  },
  {
    step: 3,
    title: "Solution Design",
    icon: PenTool,
    description:
      "We architect the right solution for each opportunity — AI agent, automation, dashboard, or custom build — with clear ROI projections.",
  },
  {
    step: 4,
    title: "AI Development",
    icon: Code2,
    description:
      "Our engineers build your solution with production-grade code, enterprise security practices, and integration into your existing tools.",
  },
  {
    step: 5,
    title: "Testing",
    icon: TestTube2,
    description:
      "Every workflow is validated against real scenarios with your team in the loop — accuracy, edge cases, and failure handling included.",
  },
  {
    step: 6,
    title: "Deployment",
    icon: Rocket,
    description:
      "We launch carefully with training, documentation, and rollback plans — so adoption is smooth and nothing critical is disrupted.",
  },
  {
    step: 7,
    title: "Ongoing Optimization",
    icon: RefreshCw,
    description:
      "We monitor performance, refine prompts and workflows as your business evolves, and keep expanding what your automation can do.",
  },
];

/* -------------------------------- Benefits -------------------------------- */

export type Benefit = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const benefits: Benefit[] = [
  {
    title: "Reclaim Hundreds of Hours",
    icon: Clock,
    description:
      "Teams typically recover 15–30 hours per employee per month by automating repetitive intake, data entry, reporting, and follow-up work.",
  },
  {
    title: "Reduce Operating Costs",
    icon: DollarSign,
    description:
      "Automation performs high-volume work at a fraction of the cost of manual processing — and it never needs overtime.",
  },
  {
    title: "Eliminate Human Error",
    icon: ShieldCheck,
    description:
      "Automated workflows execute the same way every time, with validation and audit logs that catch exceptions before they become problems.",
  },
  {
    title: "Respond in Minutes, Not Days",
    icon: Zap,
    description:
      "Leads, patients, constituents, and customers get answers immediately — which directly improves conversion, satisfaction, and trust.",
  },
  {
    title: "Make Better Decisions",
    icon: BarChart3,
    description:
      "Live dashboards replace stale spreadsheets, giving leadership a real-time view of operations instead of last month's snapshot.",
  },
  {
    title: "Scale Without Headcount",
    icon: Sparkles,
    description:
      "Handle 2–10x the volume with your current team. Growth stops requiring a proportional increase in administrative staff.",
  },
];

/* ------------------------------ Case Studies ------------------------------ */

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-healthcare-network",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    title: "Automating patient intake across 12 clinics",
    challenge:
      "A multi-site outpatient network was losing 40+ staff hours per week to manual patient intake, insurance verification, and appointment reminders — with a 19% no-show rate draining revenue.",
    solution:
      "We deployed an AI-powered intake system with automated insurance verification, intelligent appointment reminders via SMS and voice, and a HIPAA-conscious document pipeline feeding their EHR.",
    results: [
      { metric: "42 hrs", label: "staff time saved weekly" },
      { metric: "63%", label: "reduction in no-shows" },
      { metric: "9 mo", label: "full payback period" },
    ],
    services: ["Workflow Automation", "Document Automation", "AI Chatbots"],
  },
  {
    slug: "national-nonprofit",
    client: "National Nonprofit Organization",
    industry: "Nonprofits",
    title: "Scaling donor stewardship without scaling staff",
    challenge:
      "A development team of four was managing 30,000+ donors. Thank-you letters lagged by weeks, lapsed donors went uncontacted, and grant reporting consumed entire quarters.",
    solution:
      "We built donor-segmentation automation with personalized stewardship sequences, an AI grant-drafting assistant grounded in their program data, and automated funder impact reports.",
    results: [
      { metric: "3.2x", label: "increase in donor touchpoints" },
      { metric: "28%", label: "lift in lapsed-donor recovery" },
      { metric: "120 hrs", label: "saved per grant cycle" },
    ],
    services: ["CRM Automation", "Document Automation", "AI Agents"],
  },
  {
    slug: "midwest-manufacturer",
    client: "Midwest Precision Manufacturer",
    industry: "Manufacturing",
    title: "From paper travelers to real-time production visibility",
    challenge:
      "A 140-employee manufacturer ran production tracking on paper and spreadsheets. Leadership learned about problems days late, and quality audits took weeks to prepare.",
    solution:
      "We digitized production reporting with automated data capture, built live operations dashboards for leadership, and automated quality documentation to maintain continuous audit readiness.",
    results: [
      { metric: "97%", label: "faster daily reporting" },
      { metric: "2 wks → 2 days", label: "audit prep time" },
      { metric: "$380K", label: "annual savings identified" },
    ],
    services: ["Custom AI Solutions", "Workflow Automation", "Business Process Optimization"],
  },
  {
    slug: "law-firm",
    client: "Mid-Size Law Firm",
    industry: "Professional Services",
    title: "Turning non-billable admin into billable hours",
    challenge:
      "Attorneys at a 25-lawyer firm were spending 11+ hours per week on intake, conflict checks, engagement letters, and status updates — none of it billable.",
    solution:
      "We automated client intake with AI-assisted conflict checking, document assembly for engagement letters and routine filings, and automatic client status updates drawn from matter-management data.",
    results: [
      { metric: "9.5 hrs", label: "recovered per attorney weekly" },
      { metric: "71%", label: "faster client onboarding" },
      { metric: "22%", label: "increase in billable utilization" },
    ],
    services: ["Document Automation", "Workflow Automation", "Executive AI Assistants"],
  },
  {
    slug: "city-government",
    client: "Municipal Government",
    industry: "Government",
    title: "Modernizing permit processing for a growing city",
    challenge:
      "A city permit office faced a 6-week backlog. Applications arrived by email and paper, staff re-keyed data into three systems, and constituents called daily for status updates.",
    solution:
      "We built an automated permit-intake pipeline with document extraction, cross-system data sync, automatic status notifications, and a constituent chatbot answering questions from official city policy.",
    results: [
      { metric: "6 wks → 8 days", label: "average processing time" },
      { metric: "74%", label: "fewer status-inquiry calls" },
      { metric: "0", label: "added headcount required" },
    ],
    services: ["Workflow Automation", "AI Chatbots", "Document Automation"],
  },
  {
    slug: "wealth-advisory",
    client: "Independent Wealth Advisory",
    industry: "Financial Services",
    title: "Compliance-ready client operations at twice the speed",
    challenge:
      "A 12-advisor RIA spent days per quarter assembling client review decks and struggled to keep meeting notes, tasks, and CRM records consistent for compliance.",
    solution:
      "We automated quarterly review deck generation from portfolio data, deployed AI meeting-note capture synced to their CRM with review gates, and built a compliance-ready audit trail across the workflow.",
    results: [
      { metric: "85%", label: "faster review-deck preparation" },
      { metric: "100%", label: "meeting-to-CRM capture rate" },
      { metric: "3 days", label: "saved per advisor per quarter" },
    ],
    services: ["Document Automation", "CRM Automation", "AI Agents"],
  },
];

/* ------------------------------ Testimonials ------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "AgentForge didn't lead with technology — they led with our workflows. The audit alone paid for itself before we automated anything. Six months in, my team spends its time on patients, not paperwork.",
    name: "Sarah M.",
    role: "Chief Operating Officer",
    org: "Regional Healthcare Network",
  },
  {
    quote:
      "I was skeptical that AI could work within government constraints. They designed everything around our records-retention and transparency requirements from day one. Our permit backlog is gone.",
    name: "David R.",
    role: "Director of Community Development",
    org: "Municipal Government",
  },
  {
    quote:
      "As a nonprofit, we can't hire our way out of workload. AgentForge tripled our donor touchpoints with the same four-person team. Our funders have noticed the difference in our reporting.",
    name: "Angela T.",
    role: "Executive Director",
    org: "National Nonprofit Organization",
  },
  {
    quote:
      "The ROI model they presented in the proposal turned out to be conservative. We recovered more attorney hours than projected, and their team was responsive through every iteration.",
    name: "Michael K.",
    role: "Managing Partner",
    org: "Mid-Size Law Firm",
  },
];

/* ---------------------------------- Stats --------------------------------- */

export type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Workflows automated for clients" },
  { value: 40, suffix: "K+", label: "Staff hours saved annually" },
  { value: 94, suffix: "%", label: "Client retention rate" },
  { value: 6, suffix: " mo", prefix: "<", label: "Typical payback period" },
];

/* ----------------------------------- FAQ ---------------------------------- */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "We're not technical. Can we still use AI automation?",
    answer:
      "Absolutely — most of our clients have no technical staff. We handle everything: strategy, design, development, deployment, and training. Your team interacts with simple, familiar interfaces; the complexity stays on our side. We also provide plain-English documentation and live training so your staff is confident from day one.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A free workflow audit takes about a week. Focused automations typically launch in 2–4 weeks. Larger engagements — AI agents, custom platforms, multi-department rollouts — usually run 6–12 weeks. We deliver in phases, so you see working results within the first month rather than waiting for a big-bang launch.",
  },
  {
    question: "What does it cost, and what's the ROI?",
    answer:
      "Every engagement starts with the free audit, which produces a concrete ROI model: hours saved, error reduction, and payback period for each opportunity. Projects are fixed-scope with transparent pricing — no surprise invoices. Most clients see full payback within 3–9 months, and we won't recommend a project whose numbers don't work.",
  },
  {
    question: "Is our data safe? What about compliance (HIPAA, FERPA, etc.)?",
    answer:
      "Security is foundational, not an add-on. We follow least-privilege access, encrypt data in transit and at rest, and design around your regulatory obligations — HIPAA for healthcare, FERPA for education, records-retention rules for government, and industry regulations for financial services. Your data is never used to train public AI models.",
  },
  {
    question: "Will AI automation replace our employees?",
    answer:
      "Our clients almost never reduce headcount — they redirect it. Automation absorbs the repetitive work nobody wants (data entry, chasing follow-ups, formatting reports), which frees your existing team for the judgment, relationships, and creative work that actually grow the organization. It's how a team of ten does the work of thirty.",
  },
  {
    question: "What happens after launch? Are we on our own?",
    answer:
      "No. Every project includes a stabilization period, and most clients continue with an optimization plan: we monitor performance, adapt workflows as your business changes, and continuously identify new automation opportunities. If you'd rather run things in-house, we hand over documentation and train your team for full independence.",
  },
  {
    question: "We already use tools like Zapier or ChatGPT. How is this different?",
    answer:
      "Those are excellent ingredients — and we often build with them. The difference is engineering and accountability: we design complete systems with error handling, security, audit trails, and maintenance, tailored to your exact processes. DIY automation tends to break silently; ours is monitored, documented, and guaranteed.",
  },
  {
    question: "What does the free AI Workflow Audit include?",
    answer:
      "A structured review of your key workflows: we interview your team, map where time is actually going, and deliver a written report identifying your top automation opportunities with estimated hours saved, cost impact, and a recommended roadmap. It's genuinely free, takes about a week, and there's no obligation to continue.",
  },
];

/* ------------------------------- Trusted By -------------------------------- */

export const trustedBy = [
  "Regional Healthcare Network",
  "National Nonprofit Org",
  "Midwest Precision Mfg.",
  "Metro School District",
  "Summit Legal Group",
  "Municipal Government",
  "Harbor Financial Advisors",
  "Northline Logistics",
];

/* ------------------------------- Navigation -------------------------------- */

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

/* -------------------------------- Solutions -------------------------------- */

export type Solution = {
  slug: string;
  title: string;
  icon: LucideIcon;
  problem: string;
  outcome: string;
  includes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "front-office",
    title: "Front Office & Customer Experience",
    icon: MessageSquare,
    problem:
      "Inquiries pile up in inboxes and voicemail. Response times stretch to days, and prospective customers quietly go elsewhere.",
    outcome:
      "Every inquiry answered in minutes, around the clock — qualified, routed, and booked without a human touching it.",
    includes: [
      "AI chatbots grounded in your real policies",
      "Lead qualification and routing agents",
      "Appointment scheduling and reminder automation",
      "Instant follow-up sequences",
    ],
  },
  {
    slug: "back-office",
    title: "Back Office & Operations",
    icon: Workflow,
    problem:
      "Your team re-keys the same data into multiple systems, chases approvals by email, and assembles the same reports every week by hand.",
    outcome:
      "Data flows between systems automatically, approvals route themselves, and reports build themselves overnight.",
    includes: [
      "Cross-system data synchronization",
      "Approval and handoff workflow automation",
      "Automated report generation and distribution",
      "Exception queues with human review",
    ],
  },
  {
    slug: "documents-knowledge",
    title: "Documents & Knowledge",
    icon: FileText,
    problem:
      "Critical knowledge is scattered across drives, inboxes, and veteran employees' heads. Documents take days to produce and minutes to lose.",
    outcome:
      "One searchable source of truth, with documents generated, reviewed, and filed automatically.",
    includes: [
      "AI-searchable knowledge base with citations",
      "Template-driven document generation",
      "Intelligent extraction from incoming documents",
      "Retention and filing automation",
    ],
  },
  {
    slug: "leadership-insight",
    title: "Leadership Insight & Decision Support",
    icon: BarChart3,
    problem:
      "Leadership decisions run on stale spreadsheets and gut feel because assembling real numbers takes someone two days.",
    outcome:
      "Live dashboards and AI briefings that put current, accurate operational truth in front of decision-makers daily.",
    includes: [
      "Real-time operational dashboards",
      "Executive AI assistants and daily briefings",
      "Automated KPI tracking and alerting",
      "Board and funder reporting automation",
    ],
  },
];
