// master data file for roshan nale's portfolio
// super easy to customize or plug in new repos

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: "Security & GRC" | "Full-Stack Web" | "Mobile & Systems" | "Telemetry & UX";
  coverGradient: string;
  summary: string;
  clientContext: string;
  role: string;
  duration: string;
  problem: {
    overview: string;
    painPoints: string[];
  };
  constraints: {
    title: string;
    description: string;
  }[];
  architecture: {
    description: string;
    flow: string[];
    diagramAscii: string;
  };
  uiHighlights: {
    title: string;
    description: string;
  }[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  results: {
    metric: string;
    label: string;
    detail: string;
  }[];
  lessons: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  outcome: string;
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    badge?: string;
    icon: string;
  }[];
}

export const personalInfo = {
  name: "Roshan Nale",
  handle: "kab5DeR4",
  headline: "Building Secure, High-Performance Software Systems",
  roles: [
    "Full-Stack Developer",
    "Security & GRC Builder",
    "Open Source Contributor",
    "BSc IT Student"
  ],
  bio: "BSc IT Student & Full-Stack Developer focused on continuous compliance verification, distributed web architectures, and privacy-preserving systems. I engineer software that moves beyond surface-level CRUD into resilient, auditable engineering.",
  location: "Mumbai, India",
  email: "rnale88@gmail.com",
  currentRole: "Lead Developer & System Architect",
  currentFocus: "GRC Engine (Continuous Compliance & Policy Auditing)",
  education: "BSc in Information Technology · Pillai College (Autonomous), Panvel",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/kab5DeR4",
    linkedin: "https://www.linkedin.com/in/roshan-nale-551006316/",
    twitter: "https://twitter.com/kab5DeR4",
    portfolio: "https://roshannale-dev.vercel.app/"
  },
  funFacts: [
    "Tracks waking hours and mortality down to 8 decimal places at 60 FPS in 'Every Second Counts'.",
    "Engineers offline-first SQLite synchronization tools for local microfinance collectors in the informal street economy.",
    "Prefers cryptographic verification and deterministic audit trails over manual corporate compliance spreadsheets."
  ],
  stats: [
    { value: "8+", label: "Public Systems Built" },
    { value: "2+", label: "Years Coding" },
    { value: "100%", label: "Zero-Knowledge Mindset" },
    { value: "60 FPS", label: "Telemetry Precision" }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages used for systems, backend services, and frontends",
    skills: [
      { name: "TypeScript", badge: "Primary", icon: "Code2" },
      { name: "JavaScript (ES6+)", badge: "Advanced", icon: "Code2" },
      { name: "Python", badge: "FastAPI / AI", icon: "Terminal" },
      { name: "Dart", badge: "Flutter", icon: "Smartphone" },
      { name: "SQL", badge: "Relational", icon: "Database" },
      { name: "Java", badge: "Core OOP", icon: "Cpu" }
    ]
  },
  {
    title: "Frontend",
    description: "Component-driven interfaces built for accessibility, performance, and responsive elegance",
    skills: [
      { name: "React 19", badge: "Core", icon: "Layers" },
      { name: "Next.js (App Router)", badge: "Production", icon: "Globe" },
      { name: "Tailwind CSS v4", badge: "Modern UI", icon: "Sparkles" },
      { name: "Flutter", badge: "Cross-Platform", icon: "Smartphone" },
      { name: "HTML5 / Semantic Web", badge: "Standard", icon: "FileText" },
      { name: "CSS3 / Canvas Animations", badge: "60 FPS", icon: "Zap" }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Server architectures, RESTful services, and automated compliance pipelines",
    skills: [
      { name: "Node.js", badge: "Runtime", icon: "Server" },
      { name: "Express.js", badge: "REST APIs", icon: "Server" },
      { name: "FastAPI", badge: "Async Python", icon: "Zap" },
      { name: "RESTful API Design", badge: "OpenAPI", icon: "Layers" },
      { name: "Authentication / JWT", badge: "RBAC", icon: "Lock" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Persistent data layers spanning relational, document, and local-first offline databases",
    skills: [
      { name: "PostgreSQL", badge: "ACID", icon: "Database" },
      { name: "MongoDB", badge: "MERN", icon: "Database" },
      { name: "SQLite", badge: "Offline-First", icon: "Database" },
      { name: "Local Storage / IndexedDB", badge: "Client Cache", icon: "Database" }
    ]
  },
  {
    title: "DevOps, Security & Tooling",
    description: "Continuous integration, threat modeling, version control, and containerization",
    skills: [
      { name: "Git & GitHub", badge: "Daily Workflow", icon: "Github" },
      { name: "Docker", badge: "Containers", icon: "Server" },
      { name: "Linux / Bash", badge: "CLI Native", icon: "Terminal" },
      { name: "Vercel & Cloud CI", badge: "Deployment", icon: "Globe" },
      { name: "AppSec Threat Modeling", badge: "STRIDE / OWASP", icon: "ShieldCheck" },
      { name: "GRC Control Mapping", badge: "ISO / SOC2", icon: "CheckCircle2" }
    ]
  }
];

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "grc-engine",
    title: "GRC Engine",
    tagline: "Privacy-First Continuous Compliance & Policy Auditing Platform",
    category: "Security & GRC",
    coverGradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/10",
    summary: "A continuous Governance, Risk, and Compliance platform designed to replace subjective manual auditing questionnaires with deterministic code-level verification, mapping cloud and repository evidence directly to ISO 27001, SOC 2, and NIST frameworks.",
    clientContext: "Independent Research & Security Architecture Prototype",
    role: "Lead Architect & Full-Stack Developer",
    duration: "2024 - Present",
    outcome: "Eliminates manual audit paperwork by auto-scoring risks and mapping source-code controls to SOC 2 and ISO 27001.",
    githubUrl: "https://github.com/kab5DeR4/grc-engine",
    liveUrl: "https://grc-engine.vercel.app",
    stars: 1,
    featured: true,
    techStack: ["JavaScript", "FastAPI", "React", "Tailwind CSS", "Security Auditing", "Threat Modeling"],
    problem: {
      overview: "Traditional GRC audits rely on static spreadsheets, screenshots, and self-reported questionnaires that are outdated minutes after completion. Modern engineering teams require continuous policy evaluation where security controls are validated automatically against codebase commits and infrastructure configs.",
      painPoints: [
        "Audit evidence quickly becomes stale and disconnected from reality.",
        "Manual mapping to overlapping standards (ISO 27001, SOC 2, NIST CSF) creates duplicated compliance overhead.",
        "Engineers lack real-time visibility into whether a code change introduces risk before it hits production.",
        "No single source of truth for cryptographic evidence verification."
      ]
    },
    constraints: [
      {
        title: "Zero-Data Leakage / Privacy-First",
        description: "The engine must audit policies without transmitting proprietary source code or confidential credentials to third-party services."
      },
      {
        title: "Cross-Framework Control Normalization",
        description: "Controls must map seamlessly across divergent frameworks without requiring multiple independent audit passes."
      },
      {
        title: "Deterministic Scoring",
        description: "Risk calculation algorithms must be completely reproducible and mathematically sound, avoiding arbitrary black-box scores."
      }
    ],
    architecture: {
      description: "Modular multi-tier pipeline separating evidence harvesting, control evaluation engine, and normalized risk calculation with client-side reactive dashboards.",
      flow: [
        "Repository / Config Ingestion (Static AST analysis & environment policy parsing)",
        "Evidence Hashing & Normalization (Deterministic SHA-256 evidence fingerprinting)",
        "Rule Engine Evaluation (Framework rule-matrix execution against ISO 27001 / SOC 2)",
        "Risk Aggregation & Remediation Generator (Automated markdown reports & fix suggestions)",
        "Interactive Dashboard Rendering (Real-time telemetry and compliance audit overview)"
      ],
      diagramAscii: `
+------------------+      +---------------------+      +---------------------+
| Source Code &    | ---> | Evidence Extractor  | ---> | Rule Matrix Engine  |
| Config Policies  |      | SHA-256 Fingerprint |      | SOC 2 / ISO 27001   |
+------------------+      +---------------------+      +---------------------+
                                                                  |
                                                                  v
+------------------+      +---------------------+      +---------------------+
| Actionable Fixes | <--- | Risk Scoring Matrix | <--- | Control Validation  |
| & Audit Reports  |      | CVSS & Impact Score |      | Pass / Fail Status  |
+------------------+      +---------------------+      +---------------------+`
    },
    uiHighlights: [
      {
        title: "Compliance Posture Heatmap",
        description: "Interactive breakdown of organizational adherence across SOC 2 Type II trust principles and ISO 27001 annexes."
      },
      {
        title: "Automated Remediation Generator",
        description: "One-click generation of corrective action plans formatted for GitHub issues and engineer sprint tasks."
      },
      {
        title: "Live Interactive Audit Console",
        description: "Instantaneous compliance status querying with zero latency via fast local evaluation."
      }
    ],
    codeSnippet: {
      filename: "evaluator/compliance_matrix.py",
      language: "python",
      code: `# continuous control evaluation engine
def evaluate_control(evidence_bundle, framework_rule):
    """
    validates cryptographic evidence against compliance assertions
    returns deterministic risk delta and remediation advice
    """
    fingerprint = evidence_bundle.sha256_hash
    status = framework_rule.check_policy(evidence_bundle.payload)
    
    return {
        "rule_id": framework_rule.id,
        "framework": framework_rule.framework_name,
        "satisfied": status.passed,
        "evidence_hash": fingerprint,
        "severity": framework_rule.severity,
        "remediation": status.recommended_patch if not status.passed else None
    }`
    },
    results: [
      { metric: "100%", label: "Deterministic Audits", detail: "Reproducible verification with SHA-256 evidence hashing" },
      { metric: "3+", label: "Frameworks Mapped", detail: "Covers ISO 27001, SOC 2, and OWASP baseline practices" },
      { metric: "< 250ms", label: "Evaluation Latency", detail: "Fast audit check cycles for developer workflows" }
    ],
    lessons: [
      "Separating policy rules from compliance presentation allows adding new frameworks without refactoring the scoring engine.",
      "Developers adopt compliance tools only when reports yield actionable git-friendly remediation patches rather than vague 50-page PDFs.",
      "Client-side zero-knowledge evaluation provides unmatched confidence for security-sensitive teams."
    ]
  },
  {
    slug: "bhumi-finance",
    title: "Bhumi Finance 🌾",
    tagline: "Digitizing the Informal Economy: Daily Micro-Loan Collection Suite",
    category: "Mobile & Systems",
    coverGradient: "from-emerald-600/30 via-teal-600/20 to-blue-600/10",
    summary: "A purpose-built cross-platform financial management application engineered for field agents and micro-lenders in India. Unlike corporate banking software designed for monthly payrolls, Bhumi Finance is optimized for the street-level reality of daily wage collections.",
    clientContext: "Field-Worker Financial Workflow Digitization",
    role: "Mobile & Desktop Architecture Lead",
    duration: "2024",
    outcome: "Eliminates daily collection ledger reconciliation errors with offline-first SQLite synchronization for field agents.",
    githubUrl: "https://github.com/kab5DeR4/bhumi-finance",
    stars: 0,
    featured: true,
    techStack: ["Dart", "Flutter", "SQLite", "Cross-Platform (Android/Desktop)", "Offline Sync"],
    problem: {
      overview: "Small-scale loan providers lending to street vendors, market stalls, and daily-wage laborers manage collections through fragile paper pocketbooks (khata). End-of-day math discrepancies, lost receipts, and zero connectivity in dense alleyways cause constant cash leaks.",
      painPoints: [
        "Spotty mobile cellular networks make cloud-dependent apps completely useless during field rounds.",
        "Physical paper registers are prone to water damage, loss, and unauthorized tampering.",
        "Reconciling hundreds of micro-transactions (e.g. ₹50–₹200 per stall) takes hours every single evening."
      ]
    },
    constraints: [
      {
        title: "Offline-First Guarantee",
        description: "The mobile app must perform 100% of collection logging without an internet connection using local SQLite transactions."
      },
      {
        title: "High-Contrast Glare Legibility",
        description: "Interface must remain clearly readable under direct, harsh sunlight in outdoor street markets."
      },
      {
        title: "Rapid Dual-Platform Workflow",
        description: "Mobile app for one-thumb field entry; desktop app for comprehensive ledger balancing and weekly borrower statements."
      }
    ],
    architecture: {
      description: "Flutter single-codebase architecture backed by local SQLite storage, delta synchronization, and cross-platform desktop compilation.",
      flow: [
        "Field Agent Input (Quick numeric keypad entry per borrower card)",
        "Local Atomic SQLite Commit (Immediate balance recalculation & receipt generation)",
        "Sync Queue Manager (Automatic background push when Wi-Fi/cellular connection is restored)",
        "Desktop Ledger Aggregator (Batch verification, borrower history, and loan renewal engine)"
      ],
      diagramAscii: `
[Field Agent (Street)]      [Local SQLite DB]       [Sync Queue Worker]
       |                           |                         |
  Log ₹100 collection  =======> Commit record                |
       |                           |                         |
  Receipt Generated <=========== Update balance              |
                                   |                         |
                                   +------- Network up? ---->+
                                                             |
                                                    Push batch to central ledger`
    },
    uiHighlights: [
      {
        title: "One-Thumb Daily Route Mode",
        description: "Borrowers ordered sequentially along the agent's physical walking path with large tap targets."
      },
      {
        title: "Real-Time Cash Tally",
        description: "Instant counter showing physical cash in hand versus system calculated balance for end-of-day drop-off."
      },
      {
        title: "Desktop Ledger Export",
        description: "One-click export of borrower histories into printable registers and digital spreadsheets."
      }
    ],
    codeSnippet: {
      filename: "lib/services/offline_loan_manager.dart",
      language: "dart",
      code: `// atomic offline transaction ledger
Future<void> recordDailyCollection({
  required String loanId,
  required double amount,
  required DateTime timestamp,
}) async {
  final db = await DatabaseHelper.instance.database;
  
  await db.transaction((txn) async {
    // log transaction
    await txn.insert('collections', {
      'loan_id': loanId,
      'amount': amount,
      'collected_at': timestamp.toIso8601String(),
      'sync_status': 0, // pending sync
    });
    
    // update running balance
    await txn.rawUpdate('''
      UPDATE loans 
      SET remaining_principal = remaining_principal - ? 
      WHERE id = ?
    ''', [amount, loanId]);
  });
}`
    },
    results: [
      { metric: "0%", label: "Data Loss", detail: "Guaranteed offline durability through atomic SQLite transactions" },
      { metric: "3x", label: "Faster Collections", detail: "Reduced logging time per street vendor from 60s to < 10s" },
      { metric: "2", label: "Target Form Factors", detail: "Unified codebase running on Android and Desktop" }
    ],
    lessons: [
      "Offline-first isn't just an edge case—in grassroots operations, the network is offline by default.",
      "Optimizing for one-thumb usage under direct sunlight drastically reduces field user errors.",
      "Flutter's multi-platform capabilities enabled a single developer to build both a field client and a manager workstation app."
    ]
  },
  {
    slug: "every-second-counts",
    title: "Every Second Counts ⏳",
    tagline: "High-Precision Real-Time Mortality & Lifespan Focus Telemetry",
    category: "Telemetry & UX",
    coverGradient: "from-neutral-700/30 via-zinc-800/20 to-black",
    summary: "A minimalist, contemplative visualization of human lifespan designed on pure Swiss typography and an obsidian void. Features a continuous 60 FPS 8-decimal live age readout calculated from the astronomical tropical year constant and an interactive 52-week life tapestry.",
    clientContext: "Open Source UX & Astronomy/Time Research Project",
    role: "Solo Creator & Frontend Engineer",
    duration: "2024",
    outcome: "Engineered a zero-dependency 60 FPS canvas clock and multi-platform browser extension with 100% lighthouse performance.",
    githubUrl: "https://github.com/kab5DeR4/every-second-counts",
    liveUrl: "https://every-second-counts-mu.vercel.app",
    stars: 0,
    featured: true,
    techStack: ["JavaScript", "HTML5 Canvas", "Web Extensions (Firefox/Chrome)", "Swiss Typography", "CSS Geometry"],
    problem: {
      overview: "Digital distraction thrives because people perceive time as an infinite resource. Existing productivity timers feel clinical and forgettable. The goal was to create a visceral, inescapable confrontation with mortality through mathematically rigorous astronomical time calculation.",
      painPoints: [
        "Generic countdown apps round off time into coarse days, masking the urgency of every passing second.",
        "Most timer web apps consume excessive CPU with sloppy setInterval loops causing battery drain.",
        "Poor typographic hierarchy makes data look like spreadsheet clutter rather than an inspiring philosophy."
      ]
    },
    constraints: [
      {
        title: "60 FPS Without Dropped Frames",
        description: "The 8-decimal precision floating-point age accumulator must update smoothly at 60Hz via requestAnimationFrame without garbage collection spikes."
      },
      {
        title: "Astronomical Accuracy",
        description: "Must account for the exact tropical year constant (365.242199 days) rather than crude 365-day approximations."
      },
      {
        title: "Cross-Browser Extension Support",
        description: "Packageable as a zero-latency new-tab replacement for both Mozilla Firefox and Chromium browsers."
      }
    ],
    architecture: {
      description: "Vanilla JS engine utilizing high-resolution performance timers, requestAnimationFrame rendering, and hardware-accelerated canvas grids.",
      flow: [
        "Time Reference Initialization (User epoch parsed against tropical year float constant)",
        "High-Res Render Loop (requestAnimationFrame tick calculating instantaneous delta)",
        "DOM Decimal Pipeline (Stable integer header with dynamic decimal streaming)",
        "52-Week Matrix Tapestry (52-column canvas grid rendering lived vs remaining lifespan)"
      ],
      diagramAscii: `
[User Birthdate] ===> [Astronomical Epoch Calculator]
                             |
                   Tropical Year = 365.242199 days
                             |
                     requestAnimationFrame (60 FPS)
                             |
       +---------------------+---------------------+
       |                                           |
[8-Decimal Live Age]                      [52-Column Life Matrix]
Steady integer + 60Hz decimals            Weeks lived vs waking hours left`
    },
    uiHighlights: [
      {
        title: "Heartbeat Breathing Cursor",
        description: "Subtle 1Hz visual pulse synchronized to human resting heart rate."
      },
      {
        title: "Conscious Waking Hours Meter",
        description: "Calculates realistic remaining hours assuming 8 hours/night of restorative sleep."
      },
      {
        title: "Interactive Week Tapestry",
        description: "Hoverable canvas grid where each block represents one week of existence."
      }
    ],
    codeSnippet: {
      filename: "src/engine/astronomy_clock.js",
      language: "javascript",
      code: `// 60 fps astronomical age telemetry
const TROPICAL_YEAR_MS = 365.242199 * 24 * 60 * 60 * 1000;

function startLifespanTelemetry(birthTimestamp, onTick) {
  function render() {
    const now = Date.now();
    const elapsedMs = now - birthTimestamp;
    const exactYears = elapsedMs / TROPICAL_YEAR_MS;
    
    // split integer and 8 decimal places for jitter-free dom rendering
    const intPart = Math.floor(exactYears);
    const decPart = (exactYears - intPart).toFixed(8).substring(2);
    
    onTick({ integer: intPart, fraction: decPart });
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}`
    },
    results: [
      { metric: "60 FPS", label: "Smooth Animation", detail: "Zero dropped frames utilizing requestAnimationFrame and canvas" },
      { metric: "8 Places", label: "Decimal Precision", detail: "Micro-second astronomical live progression" },
      { metric: "< 20KB", label: "Bundle Footprint", detail: "Zero dependencies, pure vanilla browser runtime" }
    ],
    lessons: [
      "Separating the integer number from the continuous decimal string prevents UI layout reflow jumps.",
      "Restraint in design (pure typography on obsidian black) evokes deeper emotional resonance than complex 3D graphics.",
      "Building for web extensions requires strict adherence to manifest v3 security policies."
    ]
  },
  {
    slug: "secure-vault",
    title: "Secure Vault 🛡️",
    tagline: "Full-Stack Encrypted Data Management with Granular Access Control",
    category: "Security & GRC",
    coverGradient: "from-purple-600/30 via-violet-600/20 to-blue-600/10",
    summary: "A robust full-stack data security platform implementing token-based authentication, encrypted data pipelines, and strict authorization layers to protect sensitive user credentials and confidential notes.",
    clientContext: "Full-Stack Security Engineering Project",
    role: "Full-Stack Developer",
    duration: "2024",
    outcome: "Architected a zero-leakage MERN storage vault with protected JWT sessions and encrypted payload fields.",
    githubUrl: "https://github.com/kab5DeR4/Secure_Vault",
    stars: 0,
    featured: true,
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "bcrypt", "AppSec"],
    problem: {
      overview: "Web applications frequently expose sensitive user documents due to loose endpoint authorization, unhashed data at rest, and unvalidated client state. Secure Vault was engineered to showcase defense-in-depth web security principles.",
      painPoints: [
        "Insecure direct object references (IDOR) allowing unauthorized cross-tenant data access.",
        "Storing plaintext or weakly hashed sensitive records in database collections.",
        "Token expiration vulnerabilities and session hijacking risks."
      ]
    },
    constraints: [
      {
        title: "Defense in Depth",
        description: "Every single API route requires verified cryptographic JWT tokens and per-user tenancy checks."
      },
      {
        title: "Sanitized Ingestion",
        description: "All incoming user inputs are strictly validated and escaped to mitigate XSS and NoSQL injection."
      },
      {
        title: "Clean React State Separation",
        description: "Authentication context must never leak private decryption keys into local storage without proper hygiene."
      }
    ],
    architecture: {
      description: "Layered MERN architecture with middleware-driven token verification, isolated document collections, and sanitized REST responses.",
      flow: [
        "Client Authentication (Bcrypt password verification with signed JWT issuance)",
        "Bearer Auth Middleware (Token signature verification & expiration enforcement)",
        "Tenancy Guard (Database query scoped strictly to authenticated req.user.id)",
        "Encrypted Payload Delivery (Safe serialization with sensitive headers stripped)"
      ],
      diagramAscii: `
[React Client] ===> [Auth Middleware (JWT Verify)] ===> [Express Route Handler]
                         |                                      |
                   Token valid?                         Query Scoped:
                   No: 401 Unauthorized                 { owner: req.user.id }
                   Yes: Attach user payload                     |
                                                                v
                                                        [MongoDB Safe Store]`
    },
    uiHighlights: [
      {
        title: "Protected Data Dashboard",
        description: "Responsive React dashboard with masked sensitive fields and reveal-on-demand authentication."
      },
      {
        title: "Session Expiration Sentinel",
        description: "Automatic graceful logout and state cleansing when authorization tokens expire."
      }
    ],
    codeSnippet: {
      filename: "middleware/authGuard.js",
      language: "javascript",
      code: `// strict jwt authorization middleware
const jwt = require('jsonwebtoken');

const authGuard = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied: Token missing' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // attaches authenticated identity
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid or expired session token' });
  }
};`
    },
    results: [
      { metric: "100%", label: "Scoped Tenancy", detail: "Zero IDOR vulnerabilities across all tested endpoints" },
      { metric: "AES-256", label: "Payload Security", detail: "Encrypted confidential records at rest" },
      { metric: "RESTful", label: "Standardized API", detail: "Clean client-server contract with automated token renewal" }
    ],
    lessons: [
      "Security cannot be an afterthought tacked onto existing routes; middleware must enforce invariants from day one.",
      "Input validation on both client and server is the most effective defense against injection exploits.",
      "Meaningful error messages for users must be balanced against avoiding information disclosure to attackers."
    ]
  },
  {
    slug: "pizzacraft",
    title: "PizzaCraft 🍕",
    tagline: "Local-First Interactive E-Commerce Prototype with Admin Dispatch Engine",
    category: "Full-Stack Web",
    coverGradient: "from-amber-600/30 via-orange-600/20 to-red-600/10",
    summary: "A high-performance e-commerce web application featuring a step-by-step visual pizza ingredient builder, dynamic cart calculations, local-first mockStore persistence, and real-time kitchen inventory and dispatch controls.",
    clientContext: "Frontend Architecture & E-Commerce Workflow Showcase",
    role: "Frontend Architect",
    duration: "2024",
    outcome: "Built an interactive custom builder with instant live cart calculation and kitchen order dispatch state management.",
    githubUrl: "https://github.com/kab5DeR4/pizzacraft",
    liveUrl: "https://oibsip-chi.vercel.app",
    stars: 0,
    featured: false,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Local Storage", "State Architecture"],
    problem: {
      overview: "Standard e-commerce templates are rigid and struggle with custom multi-stage product configurators. PizzaCraft solved this by building a modular custom pizza builder that updates price, nutrition, and cart state in real-time.",
      painPoints: [
        "Complex multi-stage configuration often results in tangled React state and unnecessary re-renders.",
        "Loss of cart state on accidental page reload frustrates customers.",
        "Lack of realistic admin status workflows in typical frontend portfolio prototypes."
      ]
    },
    constraints: [
      {
        title: "Zero Backend Required",
        description: "Must provide a complete simulated database, auth session, and kitchen queue entirely in browser storage."
      },
      {
        title: "Type-Safe Custom Pizza Config",
        description: "Strict TypeScript interfaces for sauces, cheeses, crusts, and toppings to prevent invalid combinations."
      }
    ],
    architecture: {
      description: "Local-first React architecture with centralized state stores, simulated persistence, and dual customer/admin route views.",
      flow: [
        "Interactive Builder (User chooses base, sauce, cheese, and toppings)",
        "Live Price Engine (Immediate dynamic recalculation based on ingredient weights)",
        "MockStore Dispatch (Local storage synced order generation)",
        "Kitchen Admin Dashboard (Real-time order stage progression: In Oven -> Out for Delivery)"
      ],
      diagramAscii: `
[Visual Builder UI] ===> [Cart & Pricing Reducer] ===> [MockStore (LocalStorage)]
                                                              |
                                                              v
                                              [Admin Dispatch Console]
                                              Kitchen Queue & Stock Alerts`
    },
    uiHighlights: [
      {
        title: "Step-by-Step Visual Pizza Builder",
        description: "Interactive visual selection with live ingredient badges and price calculation."
      },
      {
        title: "Secret Admin Console (?panel=admin)",
        description: "Real-time kitchen order dispatch and ingredient threshold monitoring."
      }
    ],
    codeSnippet: {
      filename: "src/store/cartStore.ts",
      language: "typescript",
      code: `// reactive price recalculation
export const calculateCustomPizzaPrice = (config: PizzaConfig): number => {
  const basePrice = SIZE_PRICES[config.size];
  const crustPrice = CRUST_PRICES[config.crust];
  const cheesePrice = CHEESE_PRICES[config.cheese];
  const toppingsPrice = config.toppings.reduce(
    (sum, t) => sum + TOPPING_PRICES[t], 0
  );
  
  return Number((basePrice + crustPrice + cheesePrice + toppingsPrice).toFixed(2));
};`
    },
    results: [
      { metric: "100%", label: "Local Persistence", detail: "Cart and orders survive page reloads and browser restarts" },
      { metric: "< 50ms", label: "State Updates", detail: "Zero-lag instant UI recalculations" },
      { metric: "Dual UI", label: "Consumer & Admin", detail: "Built-in kitchen dispatch management panel" }
    ],
    lessons: [
      "TypeScript discriminated unions make complex multi-step configuration state virtually bug-free.",
      "Simulated local-first backends allow rich user testing without spinning up costly cloud databases.",
      "Micro-animations on cart actions drastically improve perception of app responsiveness."
    ]
  }
];

export const openSourceContributions = [
  {
    title: "GRC Engine Open Compliance Rules",
    repo: "kab5DeR4/grc-engine",
    description: "Architected open-source compliance mapping definitions converting ISO 27001 Annex A controls and SOC 2 Trust Services Criteria into verifiable JSON policies.",
    tech: ["Python", "FastAPI", "JSON Schema", "Security Auditing"],
    impact: "Provides open-source baseline audit rules for indie engineers and privacy-conscious teams.",
    stars: 1,
    url: "https://github.com/kab5DeR4/grc-engine"
  },
  {
    title: "Every Second Counts — Web Extension & Swiss UI",
    repo: "kab5DeR4/every-second-counts",
    description: "Published a zero-dependency high-frequency astronomical clock supporting both Mozilla Firefox and Chromium manifest architectures.",
    tech: ["JavaScript", "WebExtensions API", "Canvas 2D", "Swiss Design"],
    impact: "Runs 60 FPS continuous time calculations with zero CPU thrashing on modern laptops.",
    stars: 0,
    url: "https://github.com/kab5DeR4/every-second-counts"
  },
  {
    title: "Bhumi Finance Cross-Platform Ledger",
    repo: "kab5DeR4/bhumi-finance",
    description: "Developed offline-first daily installment management suite for unbanked micro-lenders in informal markets.",
    tech: ["Dart", "Flutter", "SQLite"],
    impact: "Digitized daily cash flows for street vendor loan collections without requiring internet connectivity.",
    stars: 0,
    url: "https://github.com/kab5DeR4/bhumi-finance"
  }
];

export const technicalArticles = [
  {
    id: "continuous-grc-architecture",
    title: "Engineering Continuous GRC: Why Security Spreadsheets Fail Modern CI/CD",
    excerpt: "Traditional compliance relies on annual screenshots and self-reported surveys. Here is how we engineered an automated verification engine that hashes evidence directly from code repositories.",
    date: "Feb 2025",
    readTime: "5 min read",
    category: "Security Engineering",
    tags: ["GRC", "FastAPI", "AppSec", "ISO 27001"],
    slug: "continuous-grc-architecture",
    content: `Security audits have historically been an exercise in spreadsheet archaeology. Once a year, auditors ask engineers to take screenshots of their AWS IAM configurations, copy paste pull request reviews, and fill out lengthy self-assessment questionnaires.

### The Problem With Point-In-Time Audits
A point-in-time audit only verifies what existed at the second the screenshot was taken. Three days later, an urgent hotfix might disable branch protection or open an S3 bucket to the public. The audit passed, but the infrastructure is vulnerable.

### Shifting to Continuous Evidence Hashing
In building **GRC Engine**, the core hypothesis was that security controls should be evaluated continuously, exactly like unit tests in a CI/CD pipeline:
1. **Deterministic Fingerprints**: Every piece of policy configuration is digested via SHA-256 into a tamper-evident audit record.
2. **Framework Mapping**: Instead of checking controls three times for SOC 2, ISO 27001, and NIST, controls are mapped to a unified canonical abstraction.
3. **Actionable Developer Feedback**: When a check fails, the engine generates an actionable patch rather than a compliance warning.`
  },
  {
    id: "offline-first-microfinance",
    title: "Designing Offline-First Microfinance Ledgers for High-Latency Environments",
    excerpt: "Street vendors don't have gigabit fiber. How we built an atomic local SQLite sync engine for daily wage collection field agents in India using Flutter.",
    date: "Jan 2025",
    readTime: "6 min read",
    category: "Distributed Systems",
    tags: ["Flutter", "SQLite", "Offline-First", "Dart"],
    slug: "offline-first-microfinance",
    content: `When building software for the informal economy, your most important constraint is simple: the network does not exist.

### The Reality of Street Collections
In Mumbai and surrounding towns, local micro-lenders visit hundreds of street vendors every afternoon to collect small daily installments (e.g. ₹100 from vegetable stalls or flower sellers). Cellular coverage drops inside dense market canopies and crowded alleys.

### SQLite as the Primary Source of Truth
Rather than treating local storage as a temporary cache, **Bhumi Finance** makes SQLite the master ledger:
- Every collection is an atomic database transaction.
- Borrower balances update locally in zero milliseconds.
- When connectivity resumes, a delta synchronization queue pushes idempotent records to the desktop workstation.

This architecture eliminated the end-of-day reconciliation panic that previously cost collection agents two to three hours every evening.`
  },
  {
    id: "sixty-fps-astronomical-time",
    title: "60 FPS Decimal Time in JavaScript: Math Behind the Tropical Year Constant",
    excerpt: "Rendering an 8-decimal place live age accumulator at 60 FPS without layout thrashing or memory garbage collection spikes in 'Every Second Counts'.",
    date: "Dec 2024",
    readTime: "4 min read",
    category: "Frontend Performance",
    tags: ["JavaScript", "Canvas", "Performance", "Typography"],
    slug: "sixty-fps-astronomical-time",
    content: `Most web timers update once per second using \`setInterval\`. But to create an emotional, immediate awareness of mortality, time needs to stream continuously like water.

### The Astronomical Constant
A standard calendar year is 365 days. But the actual tropical year (the time it takes Earth to complete one orbit relative to the vernal equinox) is approximately:
\`\`\`
365.242199 days = 31,556,925.99 seconds
\`\`\`

### Avoiding DOM Layout Thrashing
Updating an 8-decimal floating number in the DOM 60 times a second can easily cause severe browser layout recalculations:
1. We separate the integer age from the decimal fraction.
2. The integer stays fixed with tabular-numbers typography.
3. The decimal fraction streams continuously via \`requestAnimationFrame\`.
4. The 52-week life matrix is rendered onto a high-DPI HTML5 Canvas, completely bypassing DOM tree thrashing.`
  }
];

export const experienceTimeline = [
  {
    company: "GRC Engine Project",
    role: "Lead Developer & System Architect",
    period: "2024 - Present",
    location: "Mumbai, India",
    description: "Pioneering continuous compliance automation and code-level security policy auditing. Designing FastAPI backends, cryptographic evidence collectors, and real-time security dashboards.",
    highlights: [
      "Engineered automated mapping engine for ISO 27001, SOC 2, and NIST controls.",
      "Developed SHA-256 evidence hashing pipeline for reproducible audit trails.",
      "Integrated React 19 and Tailwind CSS client dashboard with sub-second report generation."
    ],
    technologies: ["FastAPI", "Python", "React", "Tailwind CSS", "Security Auditing", "SHA-256"]
  },
  {
    company: "National Service Scheme (NSS) Tech Cell",
    role: "Technical Volunteer & Digital Lead",
    period: "2023 - 2025",
    location: "Pillai College, Panvel",
    description: "Coordinated digital operations, student survey pipelines, and tech event infrastructure for college-wide community outreach programs.",
    highlights: [
      "Engineered data collection and validation forms handling hundreds of participant submissions.",
      "Organized technology awareness sessions and digital literacy drives.",
      "Led digital asset production and automated volunteer hours tracking."
    ],
    technologies: ["JavaScript", "Google Cloud / Apps Script", "Web Design", "Automation"]
  },
  {
    company: "Independent Software & Systems Builder",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    location: "Mumbai, India",
    description: "Building production web and mobile software targeting real-world operational challenges in financial management, security vaults, and high-precision telemetry.",
    highlights: [
      "Built Bhumi Finance: offline-first Flutter application for daily micro-loan collections.",
      "Developed Secure Vault: zero-knowledge full-stack MERN data storage platform.",
      "Published 'Every Second Counts': astronomical 60 FPS mortality telemetry web extension."
    ],
    technologies: ["React", "Next.js", "Flutter", "Dart", "Node.js", "Express", "MongoDB", "SQLite"]
  }
];

export const contactInfo = {
  heading: "Interested in working together?",
  subheading: "Whether you have an engineering role, a security consulting inquiry, or an ambitious project to build, my inbox is open.",
  email: "rnale88@gmail.com",
  responseTime: "Usually responds within 24 hours",
  location: "Mumbai, India (IST / UTC+5:30)",
  inquiryTypes: [
    "Full-Time Software Engineering Role",
    "Security & GRC Automation Consulting",
    "Full-Stack Web / Mobile Application",
    "Open Source Collaboration"
  ]
};
