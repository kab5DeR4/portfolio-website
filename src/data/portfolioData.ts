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
  headline: "Full-Stack Developer · Security-Focused Engineer · BSc IT Student",
  roles: [
    "Full-Stack Developer",
    "Security-Focused Engineer",
    "BSc IT Student",
    "Open Source Builder"
  ],
  bio: "Third-year BSc IT student building practical software across full-stack development, backend engineering, security, automation, and AI/ML. Open to internships, graduate roles, and software engineering opportunities.",
  location: "Mumbai, India",
  email: "rnale88@gmail.com",
  currentRole: "Solo Developer",
  currentFocus: "GRC Engine — Continuous Compliance & Security Verification Platform",
  education: "BSc in Information Technology · Pillai College (Autonomous), Panvel",
  resumeUrl: "/resume.pdf",
  availability: "Open to internships, graduate roles, and software engineering opportunities.",
  socials: {
    github: "https://github.com/kab5DeR4",
    linkedin: "https://www.linkedin.com/in/roshan-nale-551006316/",
    twitter: "https://twitter.com/kab5DeR4",
    portfolio: "https://roshannale-dev.vercel.app/"
  },
  // concrete evidence-based facts about the actual projects
  funFacts: [
    "Built an offline-first SQLite sync tool because field agents in street markets often have no network — the app keeps working regardless.",
    "GRC Engine started because manual compliance spreadsheets break the moment an engineer pushes a hotfix — so I automated the audit trail instead.",
    "Every Second Counts uses the tropical year constant (365.242199 days) for 8-decimal precision because rounding to 365 days loses 6 hours of your life per year."
  ],
  stats: [
    { value: "5+", label: "Projects Built" },
    { value: "3rd Year", label: "BSc IT Student" },
    { value: "60 FPS", label: "Telemetry Precision" },
    { value: "Aug 2026", label: "GRC Engine Started" }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "Core Languages",
    description: "Languages I use regularly across projects",
    skills: [
      { name: "Python", badge: "FastAPI / scripting", icon: "Terminal" },
      { name: "JavaScript (ES6+)", badge: "Frontend & Node", icon: "Code2" },
      { name: "TypeScript", badge: "Type-safe JS", icon: "Code2" },
      { name: "SQL", badge: "Relational DBs", icon: "Database" },
      { name: "Dart", badge: "Flutter apps", icon: "Smartphone" }
    ]
  },
  {
    title: "Frontend",
    description: "Component-driven UI, responsive layout, accessibility",
    skills: [
      { name: "React", badge: "Core", icon: "Layers" },
      { name: "Next.js", badge: "App Router", icon: "Globe" },
      { name: "Tailwind CSS", badge: "Utility-first", icon: "Sparkles" },
      { name: "Flutter", badge: "Cross-platform", icon: "Smartphone" },
      { name: "HTML5 / Canvas", badge: "Semantic", icon: "FileText" }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Server-side logic, REST APIs, authentication",
    skills: [
      { name: "FastAPI", badge: "Python async", icon: "Zap" },
      { name: "Node.js", badge: "Runtime", icon: "Server" },
      { name: "Express.js", badge: "REST APIs", icon: "Server" },
      { name: "JWT / RBAC", badge: "Auth patterns", icon: "Lock" },
      { name: "RESTful API Design", badge: "OpenAPI", icon: "Layers" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational, document, and offline-first local databases",
    skills: [
      { name: "PostgreSQL", badge: "ACID / relational", icon: "Database" },
      { name: "MongoDB", badge: "Document store", icon: "Database" },
      { name: "SQLite", badge: "Offline-first", icon: "Database" }
    ]
  },
  {
    title: "Security & GRC",
    description: "Application security practices and compliance automation",
    skills: [
      { name: "OWASP Top 10", badge: "AppSec baseline", icon: "ShieldCheck" },
      { name: "Threat Modeling", badge: "STRIDE", icon: "ShieldCheck" },
      { name: "Secure API Design", badge: "Auth / authz", icon: "Lock" },
      { name: "GRC / Compliance", badge: "ISO 27001 / SOC 2", icon: "CheckCircle2" },
      { name: "bcrypt / hashing", badge: "Data at rest", icon: "ShieldCheck" }
    ]
  },
  {
    title: "Tooling & DevOps",
    description: "Version control, containers, deployment, automation",
    skills: [
      { name: "Git & GitHub", badge: "Daily workflow", icon: "Github" },
      { name: "Docker", badge: "Containers", icon: "Server" },
      { name: "Linux / Bash", badge: "CLI", icon: "Terminal" },
      { name: "Vercel", badge: "Deployment", icon: "Globe" }
    ]
  }
];

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "grc-engine",
    title: "GRC Engine",
    tagline: "Continuous Compliance & Security Verification Platform",
    category: "Security & GRC",
    coverGradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/10",
    summary: "A personal security engineering project to build a continuous Governance, Risk, and Compliance platform. Replaces manual audit spreadsheets with code-level verification — mapping repository and config evidence to ISO 27001, SOC 2, and NIST control frameworks. Status: active development.",
    clientContext: "Personal Security Engineering Project",
    role: "Solo Developer",
    duration: "Aug 2026 – Present",
    outcome: "Automates mapping of source-code evidence to SOC 2 and ISO 27001 controls, replacing manual audit questionnaires.",
    githubUrl: "https://github.com/kab5DeR4/grc-engine",
    liveUrl: "https://grc-engine.vercel.app",
    stars: 1,
    featured: true,
    techStack: ["Python", "FastAPI", "React", "Tailwind CSS", "JavaScript", "SHA-256"],
    problem: {
      overview: "Traditional GRC audits rely on static spreadsheets, screenshots, and self-reported questionnaires that are outdated the moment a code change ships. I wanted to build a tool where security controls are verified against actual code — not just self-reported answers.",
      painPoints: [
        "Audit evidence becomes stale immediately — a screenshot from Tuesday doesn't reflect what shipped on Thursday.",
        "Mapping overlapping standards (ISO 27001, SOC 2, NIST CSF) manually creates duplicated work with no automation.",
        "Engineers have no real-time signal about whether a change introduces a compliance gap before it reaches production.",
        "Most compliance tooling requires uploading source code to third-party SaaS — a non-starter for security-sensitive teams."
      ]
    },
    constraints: [
      {
        title: "Local Evaluation — No Code Upload",
        description: "Policy checks run locally. Proprietary source code and credentials are never sent to external services."
      },
      {
        title: "Cross-Framework Control Mapping",
        description: "Controls map to a unified internal representation so ISO 27001 and SOC 2 can be evaluated in a single pass."
      },
      {
        title: "Deterministic Scoring",
        description: "The same evidence bundle always produces the same result — no black-box or probabilistic scoring."
      }
    ],
    architecture: {
      description: "Modular pipeline: evidence collected from repos and configs is hashed with SHA-256, evaluated against framework rule definitions, and rendered in a React dashboard. Dashboard supports demo mode (sample data) and live mode (configured integrations).",
      flow: [
        "Evidence Collection — reads repo configs, policy files, and environment settings",
        "SHA-256 Fingerprinting — produces tamper-evident hashes for each evidence artifact",
        "Rule Matrix Evaluation — checks evidence against ISO 27001 / SOC 2 control definitions",
        "Risk Aggregation — combines pass/fail results with severity weighting",
        "Dashboard Rendering — displays per-control compliance status with fix suggestions"
      ],
      diagramAscii: `
+------------------+      +---------------------+      +---------------------+
| Source Code &    | ---> | Evidence Extractor  | ---> | Rule Matrix Engine  |
| Config Policies  |      | SHA-256 Fingerprint |      | SOC 2 / ISO 27001   |
+------------------+      +---------------------+      +---------------------+
                                                                 |
                                                                 v
+------------------+      +---------------------+      +---------------------+
| Fix Suggestions  | <--- | Risk Scoring Matrix | <--- | Control Validation  |
| & Audit Reports  |      | Severity weighting  |      | Pass / Fail Status  |
+------------------+      +---------------------+      +---------------------+`
    },
    uiHighlights: [
      {
        title: "Compliance Posture Dashboard",
        description: "Per-control breakdown showing pass/fail across SOC 2 trust principles and ISO 27001 annexes. Implemented."
      },
      {
        title: "Demo Mode / Live Mode",
        description: "Demo mode uses controlled sample data so the platform can be explored without real credentials. Live mode connects to configured integrations. Demo mode: implemented. Live connectors: in progress."
      },
      {
        title: "Fix Suggestion Generator",
        description: "When a control fails, the engine outputs a plain-language remediation suggestion. Implemented for the core control set."
      }
    ],
    codeSnippet: {
      filename: "evaluator/compliance_matrix.py",
      language: "python",
      code: `# core control evaluation — deterministic pass/fail
def evaluate_control(evidence_bundle, framework_rule):
    """
    checks evidence against a compliance rule definition
    returns reproducible result with fix suggestion if failed
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
      { metric: "SHA-256", label: "Evidence Hashing", detail: "Deterministic fingerprinting — same input always produces the same audit result" },
      { metric: "3+", label: "Frameworks Mapped", detail: "ISO 27001 Annex A, SOC 2 Trust Services Criteria, OWASP baseline controls" },
      { metric: "Target", label: "Sub-250ms Evaluation", detail: "Local-first design — latency target, not yet formally benchmarked" }
    ],
    lessons: [
      "Separating policy rule definitions from the evaluation engine makes adding new frameworks easy — rules are just data, not code changes.",
      "Developers act on compliance results when the output is a specific actionable fix, not a generic compliance warning.",
      "Running evaluation locally removes the biggest adoption barrier for security-sensitive projects — no code ever leaves the machine."
    ]
  },
  {
    slug: "bhumi-finance",
    title: "Bhumi Finance 🌾",
    tagline: "Offline-First Daily Micro-Loan Collection App",
    category: "Mobile & Systems",
    coverGradient: "from-emerald-600/30 via-teal-600/20 to-blue-600/10",
    summary: "A cross-platform Flutter application for field agents managing daily micro-loan collections in India's informal economy. Built offline-first because field agents often work in areas with no reliable mobile network. Data stays in local SQLite and syncs when connectivity resumes.",
    clientContext: "Personal project — offline-first field tool",
    role: "Solo Developer",
    duration: "2024",
    outcome: "Eliminates paper-ledger reconciliation errors with atomic SQLite transactions and a dual mobile/desktop workflow.",
    githubUrl: "https://github.com/kab5DeR4/bhumi-finance",
    stars: 0,
    featured: true,
    techStack: ["Dart", "Flutter", "SQLite", "Android", "Desktop (Flutter)"],
    problem: {
      overview: "Small-scale loan providers lending to street vendors and daily-wage laborers manage collections through paper pocketbooks (khata). End-of-day math errors, lost receipts, and no network connectivity in dense alleyways are real problems in these workflows.",
      painPoints: [
        "Cellular coverage drops inside dense market areas — cloud-dependent apps stop working exactly when agents need them.",
        "Paper registers get damaged, lost, or tampered with — there's no audit trail.",
        "Reconciling hundreds of small transactions (₹50–₹200 per stall) at the end of the day takes significant time."
      ]
    },
    constraints: [
      {
        title: "Offline-First — No Network Required",
        description: "All collection logging works entirely on local SQLite. The app doesn't need an internet connection to function."
      },
      {
        title: "Readable in Sunlight",
        description: "Interface uses high-contrast design to stay legible in direct outdoor sunlight during street market routes."
      },
      {
        title: "Dual Platform — Mobile + Desktop",
        description: "Same Flutter codebase compiles to Android (field collection) and Desktop (end-of-day ledger review and export)."
      }
    ],
    architecture: {
      description: "Flutter single-codebase app with SQLite as the primary data store. All writes are atomic transactions. A sync queue pushes records to the desktop ledger when connectivity is available.",
      flow: [
        "Field agent taps in a collection on their phone — borrower, amount, timestamp",
        "Atomic SQLite transaction commits the record and updates the running loan balance locally",
        "Receipt is generated immediately — no network needed",
        "When Wi-Fi or data resumes, a sync queue pushes pending records to the desktop",
        "Desktop app aggregates all records for end-of-day balancing and export"
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
                                                    Push batch to desktop ledger`
    },
    uiHighlights: [
      {
        title: "One-Thumb Daily Route Mode",
        description: "Borrowers listed in the agent's walking order with large tap targets — optimised for single-hand use while walking."
      },
      {
        title: "Real-Time Cash Tally",
        description: "Running counter of cash collected vs system balance — shows any discrepancy immediately before end-of-day drop-off."
      },
      {
        title: "Desktop Ledger Export",
        description: "Export borrower histories and daily totals to printable formats from the desktop app."
      }
    ],
    codeSnippet: {
      filename: "lib/services/offline_loan_manager.dart",
      language: "dart",
      code: `// atomic offline transaction — no network needed
Future<void> recordDailyCollection({
  required String loanId,
  required double amount,
  required DateTime timestamp,
}) async {
  final db = await DatabaseHelper.instance.database;
  
  await db.transaction((txn) async {
    // log the collection
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
      { metric: "Atomic", label: "SQLite Transactions", detail: "Every collection is an all-or-nothing transaction — partial writes don't happen" },
      { metric: "Android + Desktop", label: "One Codebase", detail: "Flutter compiles to both platforms from the same Dart codebase" },
      { metric: "Offline", label: "No Network Needed", detail: "App works fully without any internet connection — syncs when available" }
    ],
    lessons: [
      "Offline-first isn't an edge case in this context — the network being absent is the default assumption, not a fallback.",
      "Optimising tap targets and contrast for outdoor sunlight noticeably reduces entry errors in noisy field environments.",
      "Flutter's multi-platform support let me build both the field app and the desktop ledger tool from a single codebase."
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
    outcome: "Zero-dependency 60 FPS canvas clock packaged as a browser extension for Firefox and Chrome.",
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
    outcome: "Full-stack MERN application demonstrating defence-in-depth security: JWT auth, per-user data scoping, bcrypt password hashing, and input sanitisation.",
    githubUrl: "https://github.com/kab5DeR4/Secure_Vault",
    stars: 0,
    featured: true,
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "bcrypt", "AppSec"],
    problem: {
      overview: "Web applications frequently expose sensitive user documents due to loose endpoint authorization, unhashed credentials at rest, and unvalidated client state. Secure Vault was built to practice and demonstrate defence-in-depth security principles in a full-stack MERN application.",
      painPoints: [
        "Insecure direct object references (IDOR) — endpoints return data based on user-supplied IDs without ownership checks.",
        "Credentials stored as plaintext or with weak hashing in database collections.",
        "Tokens without expiry or rotation create session hijacking opportunities."
      ]
    },
    constraints: [
      {
        title: "Per-User Data Scoping",
        description: "Every API query is scoped to the authenticated user's ID — no route returns data belonging to another user."
      },
      {
        title: "Input Sanitisation",
        description: "All incoming inputs are validated and escaped on both client and server to prevent XSS and NoSQL injection."
      },
      {
        title: "Secure Session Handling",
        description: "JWT tokens are signed with a server secret, have short expiry, and trigger automatic logout on the client when expired."
      }
    ],
    architecture: {
      description: "Layered MERN architecture with JWT middleware enforcing auth on every route, MongoDB queries scoped to the authenticated user, and bcrypt hashing for passwords.",
      flow: [
        "Client Authentication — bcrypt password verification, signed JWT issued on success",
        "Bearer Auth Middleware — verifies token signature and expiry on every protected route",
        "Ownership Guard — every DB query includes { owner: req.user.id } to prevent cross-user access",
        "Safe Response — sensitive fields stripped before serialisation"
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
        description: "React dashboard with masked sensitive fields and reveal-on-demand — fields stay hidden until the user explicitly requests them."
      },
      {
        title: "Session Expiry Handling",
        description: "Automatic graceful logout and React state cleanup when the JWT token expires."
      }
    ],
    codeSnippet: {
      filename: "middleware/authGuard.js",
      language: "javascript",
      code: `// jwt auth middleware — runs on every protected route
const jwt = require('jsonwebtoken');

const authGuard = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied: Token missing' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // attach identity for downstream route handlers
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid or expired session token' });
  }
};`
    },
    results: [
      { metric: "Per-User", label: "Data Scoping", detail: "All DB queries scoped to req.user.id — tested manually across all routes" },
      { metric: "bcrypt", label: "Password Hashing", detail: "Passwords hashed with bcrypt before storage — plaintext never written to the database" },
      { metric: "JWT", label: "Stateless Auth", detail: "Signed tokens with expiry — expired tokens trigger automatic client-side logout" }
    ],
    lessons: [
      "Security middleware needs to be applied from day one, not retrofitted — adding it later breaks route assumptions.",
      "Input validation on both client and server is the most effective first line against injection attacks.",
      "Error messages for users need to be helpful without leaking information that would help an attacker."
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
      { metric: "Local", label: "Persistence", detail: "Cart and orders stored in localStorage — survive page reloads" },
      { metric: "Live", label: "Price Updates", detail: "Cart price recalculates on every ingredient change with no debounce" },
      { metric: "Dual UI", label: "Customer & Admin", detail: "Separate customer builder and admin kitchen dispatch panel" }
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
    title: "GRC Engine — Compliance Verification Platform",
    repo: "kab5DeR4/grc-engine",
    description: "Building an open-source continuous compliance platform that maps code-level evidence to ISO 27001, SOC 2, and OWASP controls using SHA-256 fingerprinting and a local rule evaluation engine.",
    tech: ["Python", "FastAPI", "React", "Tailwind CSS"],
    impact: "Open-source compliance rules anyone can use — no SaaS account or code upload required.",
    stars: 1,
    url: "https://github.com/kab5DeR4/grc-engine"
  },
  {
    title: "Every Second Counts — Web Extension",
    repo: "kab5DeR4/every-second-counts",
    description: "Zero-dependency 60 FPS astronomical age clock using the tropical year constant. Packages as a new-tab browser extension for Firefox and Chrome.",
    tech: ["JavaScript", "WebExtensions API", "HTML5 Canvas"],
    impact: "Runs continuous 8-decimal precision time calculations without setInterval or heavy dependencies.",
    stars: 0,
    url: "https://github.com/kab5DeR4/every-second-counts"
  },
  {
    title: "Bhumi Finance — Offline-First Field Ledger",
    repo: "kab5DeR4/bhumi-finance",
    description: "Flutter app for daily micro-loan collection management. Works fully offline with SQLite as the primary data store — designed for field agents in areas with no mobile coverage.",
    tech: ["Dart", "Flutter", "SQLite"],
    impact: "Digitises daily cash flow tracking for street vendor loan collections without requiring any internet connection.",
    stars: 0,
    url: "https://github.com/kab5DeR4/bhumi-finance"
  }
];

// write-ups based on actual project work — not historical publications
export const technicalArticles = [
  {
    id: "continuous-grc-architecture",
    title: "Engineering Continuous GRC: Why Security Spreadsheets Fail Modern CI/CD",
    excerpt: "Traditional compliance relies on annual screenshots and self-reported surveys. Here's how I approached building an automated verification engine that hashes evidence directly from code repositories.",
    date: "Sep 2026",
    readTime: "5 min read",
    category: "Engineering Write-up",
    tags: ["GRC", "FastAPI", "AppSec", "ISO 27001"],
    slug: "continuous-grc-architecture",
    content: `Security audits have historically been an exercise in spreadsheet archaeology. Once a year, auditors ask engineers to take screenshots of their AWS IAM configurations, copy-paste pull request reviews, and fill out lengthy self-assessment questionnaires.

### The Problem With Point-In-Time Audits
A point-in-time audit only verifies what existed at the second the screenshot was taken. Three days later, an urgent hotfix might disable branch protection or open an S3 bucket to the public. The audit passed, but the infrastructure is now vulnerable.

### Shifting to Continuous Evidence Hashing
In building **GRC Engine**, the core idea was that security controls should be evaluated continuously — the same way unit tests run in a CI/CD pipeline:
1. **Deterministic Fingerprints**: Every policy configuration is hashed via SHA-256 into a tamper-evident audit record.
2. **Framework Mapping**: Instead of checking controls separately for SOC 2, ISO 27001, and NIST, controls map to a shared internal representation.
3. **Actionable Feedback**: When a check fails, the engine outputs a specific fix suggestion rather than a generic compliance warning.`
  },
  {
    id: "offline-first-microfinance",
    title: "Designing Offline-First Ledgers for Street-Level Finance",
    excerpt: "Street vendors don't have gigabit fibre. How I built an atomic local SQLite sync engine for daily micro-loan collection field agents in India using Flutter.",
    date: "Sep 2026",
    readTime: "6 min read",
    category: "Engineering Write-up",
    tags: ["Flutter", "SQLite", "Offline-First", "Dart"],
    slug: "offline-first-microfinance",
    content: `When building software for the informal economy, your most important constraint is simple: the network does not exist.

### The Reality of Street Collections
In Mumbai and surrounding towns, local micro-lenders visit hundreds of street vendors every afternoon to collect small daily instalments (e.g. ₹100 from vegetable stalls or flower sellers). Cellular coverage drops inside dense market canopies and crowded alleys.

### SQLite as the Primary Source of Truth
Rather than treating local storage as a temporary cache, **Bhumi Finance** makes SQLite the master ledger:
- Every collection is an atomic database transaction.
- Borrower balances update locally immediately — no round-trip to a server.
- When connectivity resumes, a delta queue pushes idempotent records to the desktop workstation.

This approach removes the end-of-day reconciliation problem that otherwise takes agents significant time every evening.`
  },
  {
    id: "sixty-fps-astronomical-time",
    title: "60 FPS Decimal Time in JavaScript: The Tropical Year Constant",
    excerpt: "Rendering an 8-decimal place live age accumulator at 60 FPS without layout thrashing or garbage collection spikes — the implementation behind 'Every Second Counts'.",
    date: "Sep 2026",
    readTime: "4 min read",
    category: "Engineering Write-up",
    tags: ["JavaScript", "Canvas", "Performance", "Typography"],
    slug: "sixty-fps-astronomical-time",
    content: `Most web timers update once per second using \`setInterval\`. But for a visceral sense of time passing, the counter needs to stream continuously.

### The Astronomical Constant
A standard calendar year is 365 days. The actual tropical year (Earth's orbit relative to the vernal equinox) is:
\`\`\`
365.242199 days = 31,556,925.99 seconds
\`\`\`
Using 365 days loses about 6 hours of precision per year.

### Avoiding DOM Layout Thrashing
Updating an 8-decimal float in the DOM 60 times a second causes browser layout recalculations:
1. Separate the integer age from the decimal fraction.
2. The integer part stays fixed — stable, no reflow.
3. The decimal streams continuously via \`requestAnimationFrame\`.
4. The 52-week matrix renders to HTML5 Canvas — bypasses the DOM tree entirely.`
  }
];

export const experienceTimeline = [
  {
    company: "GRC Engine",
    role: "Solo Developer",
    period: "Aug 2026 – Present",
    location: "Mumbai, India",
    description: "Building a continuous compliance and security verification platform as a personal engineering project. FastAPI backend, SHA-256 evidence hashing pipeline, React dashboard, and a framework rule evaluation engine.",
    highlights: [
      "Built rule evaluation engine mapping code-level evidence to ISO 27001, SOC 2, and OWASP controls.",
      "Implemented SHA-256 fingerprinting for deterministic, reproducible audit records.",
      "Built React dashboard with demo mode (sample data) and live mode (configured integrations)."
    ],
    technologies: ["FastAPI", "Python", "React", "Tailwind CSS", "SHA-256"]
  },
  {
    company: "National Service Scheme (NSS) Tech Cell",
    role: "Technical Volunteer & Digital Lead",
    period: "2023 – 2025",
    location: "Pillai College, Panvel",
    description: "Coordinated digital operations, data collection pipelines, and tech event infrastructure for college-wide community outreach programs.",
    highlights: [
      "Built data collection and validation forms handling hundreds of participant submissions.",
      "Organised technology awareness sessions and digital literacy drives.",
      "Managed digital assets and automated volunteer hours tracking."
    ],
    technologies: ["JavaScript", "Google Apps Script", "Web Design", "Automation"]
  },
  {
    company: "Independent Software Projects",
    role: "Full-Stack Developer",
    period: "2023 – Present",
    location: "Mumbai, India",
    description: "Building personal web and mobile software across security, offline-first systems, and frontend engineering. Each project addresses a real problem rather than a generic demo.",
    highlights: [
      "Built Bhumi Finance: offline-first Flutter app for daily micro-loan collections — works with no internet.",
      "Built Secure Vault: full-stack MERN app demonstrating JWT auth, per-user data scoping, and bcrypt hashing.",
      "Built Every Second Counts: 60 FPS astronomical age clock packaged as a Firefox/Chrome extension."
    ],
    technologies: ["React", "Next.js", "Flutter", "Dart", "Node.js", "Express", "MongoDB", "SQLite"]
  }
];

export const contactInfo = {
  heading: "Let's build something useful.",
  subheading: "Open to internships, graduate roles, and software engineering opportunities. Also happy to talk about projects, collaborations, or open source.",
  email: "rnale88@gmail.com",
  responseTime: "Usually responds within 24 hours",
  location: "Mumbai, India (IST / UTC+5:30)",
  inquiryTypes: [
    "Internship / Graduate Role",
    "Full-Stack Software Engineering",
    "Security Engineering",
    "Open Source Collaboration"
  ]
};
