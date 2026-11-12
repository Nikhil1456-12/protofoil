import { useState, useEffect, useRef } from 'react';

// Live Autonomous Agent swarm simulating real-time collaborative development
const INITIAL_AGENTS = [
  { id: 'palette', name: 'Palette', color: '#FBBF24', textColor: '#000', icon: 'fa-palette', x: 22, y: 18, targetX: 28, targetY: 22, action: 'Picking flame accents' },
  { id: 'lint', name: 'Lint', color: '#94A3B8', textColor: '#000', icon: 'fa-check-double', x: 12, y: 35, targetX: 18, targetY: 42, action: 'Formatting TSX & Tailwind' },
  { id: 'deploy', name: 'Deploy', color: '#FF4D2E', textColor: '#FFF', icon: 'fa-rocket', x: 74, y: 20, targetX: 68, targetY: 26, action: 'Syncing GitHub Pages edge' },
  { id: 'review', name: 'Review', color: '#A855F7', textColor: '#FFF', icon: 'fa-code-pull-request', x: 82, y: 48, targetX: 75, targetY: 52, action: 'Auditing system architecture' },
  { id: 'test', name: 'Test', color: '#10B981', textColor: '#000', icon: 'fa-vial-circle-check', x: 38, y: 64, targetX: 45, targetY: 58, action: '32/32 Pytest suites passing' },
  { id: 'typecheck', name: 'Typecheck', color: '#06B6D4', textColor: '#000', icon: 'fa-code', x: 58, y: 32, targetX: 52, targetY: 38, action: 'Strict null checking' },
  { id: 'security', name: 'Security', color: '#F59E0B', textColor: '#000', icon: 'fa-shield-halved', x: 65, y: 78, targetX: 70, targetY: 72, action: 'Android Keystore verified' },
  { id: 'index', name: 'Index', color: '#6366F1', textColor: '#FFF', icon: 'fa-database', x: 25, y: 82, targetX: 30, targetY: 76, action: 'Vector embeddings loaded' },
];

export default function Portfolio() {
  const [agentsActive, setAgentsActive] = useState(true);
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [activeAgentCount, setActiveAgentCount] = useState(12);
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Multi-Agent dynamic drift animation
  useEffect(() => {
    if (!agentsActive) return;

    const interval = setInterval(() => {
      setAgents(prev =>
        prev.map(agent => {
          // Jitter smoothly within container bounds (5% to 92%)
          const dx = (Math.random() - 0.5) * 8;
          const dy = (Math.random() - 0.5) * 8;
          const newX = Math.min(92, Math.max(5, agent.x + dx));
          const newY = Math.min(92, Math.max(8, agent.y + dy));
          return {
            ...agent,
            x: newX,
            y: newY,
          };
        })
      );
    }, 2400);

    return () => clearInterval(interval);
  }, [agentsActive]);

  // Authentic Projects strictly ordered as requested:
  // 1. JARVIS
  // 2. Infosys PathSaathi
  // 3. AI Data Analysis Website
  // 4. Customer Churn Intelligence
  // 5. RecoverX
  // 6. Credit Risk & Loan Default
  const projects = [
    {
      num: "01",
      title: "JARVIS",
      subtitle: "Autonomous Multimodal AI OS & Encrypted Mobile Mesh",
      domain: "AUTONOMOUS VOICE & HARDWARE AI · 2026",
      tag: "Flagship AI OS",
      tagColor: "border-[#FF4D2E]/40 text-[#FF4D2E] bg-[#FF4D2E]/10",
      videoMp4: "/protofoil/docs/videos/jarvis_preview.mp4",
      videoWebm: "/protofoil/docs/videos/jarvis_preview.webm",
      poster: "/protofoil/docs/previews/jarvis_preview.jpg",
      bullets: [
        "Holographic Three.js Arc Reactor HUD rendered at 60 FPS WebGL with real-time audio reactivity.",
        "Continuous Silero VAD listening (<50ms latency) & local LLM voice synthesis for zero-lag conversational control.",
        "Zero-cable encrypted remote Android device control via authenticated Termux SSH and Tailscale WireGuard mesh."
      ],
      tech: ["React 19", "Three.js", "FastAPI", "Silero VAD", "Tailscale Mesh", "Termux SSH", "WebSockets"],
      liveUrl: "/protofoil/jarvis/",
      githubUrl: "https://github.com/Nikhil1456-12/Jarvis",
      liveText: "3D Hologram Showcase ↗",
      category: "AI_SYSTEMS"
    },
    {
      num: "02",
      title: "INFOSYS PATHSAATHI",
      subtitle: "Vernacular AI Travel Concierge & Offline Edge System",
      domain: "OFFLINE-FIRST TRAVEL CONCIERGE · INFOSYS MAJOR PROJECT",
      tag: "Infosys Capstone",
      tagColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
      videoMp4: "/protofoil/docs/videos/pathsaathi_preview.mp4",
      videoWebm: "/protofoil/docs/videos/pathsaathi_preview.webm",
      poster: "/protofoil/docs/previews/pathsaathi_preview.png",
      bullets: [
        "Offline-first vernacular travel companion engineered for high-density pilgrimages with poor or zero connectivity.",
        "Orchestrates localized on-device sub-agents for voice planning, road transit, and accommodation booking.",
        "SQLite offline sync, edge ChromaDB vector search, and biometric authentication via Android Keystore & HSM."
      ],
      tech: ["Flutter", "Dart", "Multi-Agent System", "SQLite", "ChromaDB", "Android Keystore", "FastAPI"],
      liveUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      githubUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      liveText: "Explore Architecture ↗",
      category: "MOBILE_EDGE"
    },
    {
      num: "03",
      title: "AI DATA ANALYSIS WEBSITE",
      subtitle: "Natural Language to SQL Conversational Analytics Engine",
      domain: "NL-TO-SQL CONVERSATIONAL ENGINE · AGENTIC AI",
      tag: "Agentic Analytics",
      tagColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
      videoMp4: null,
      videoWebm: null,
      poster: "/protofoil/docs/previews/data_analyst_preview.png",
      bullets: [
        "Translates conversational natural language business questions into schema-validated SQL queries with zero data leakage.",
        "Returns instant structured tabular data and generates responsive, dynamic interactive Plotly analytics charts.",
        "Containerized full-stack architecture leveraging Google Gemini API reasoning and React 19 UI."
      ],
      tech: ["React 19", "Node.js", "Express", "Google Gemini API", "Docker", "Plotly", "Tailwind CSS"],
      liveUrl: "https://nikhil1456-12.github.io/-Data-Analyst-AI/",
      githubUrl: "https://github.com/Nikhil1456-12/-Data-Analyst-AI",
      liveText: "Launch Live App ↗",
      category: "AI_SYSTEMS"
    },
    {
      num: "04",
      title: "CUSTOMER CHURN INTELLIGENCE",
      subtitle: "Production ML Financial Risk & Retention Engine",
      domain: "FINANCIAL RISK & RETENTION ENGINE · ML PRODUCTION",
      tag: "84.2% ROC-AUC",
      tagColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
      videoMp4: "/protofoil/docs/videos/churn_preview.mp4",
      videoWebm: "/protofoil/docs/videos/churn_preview.webm",
      poster: "/protofoil/docs/previews/churn_preview.png",
      bullets: [
        "Interactive enterprise retention portal featuring dynamic customer CSV/Excel upload with automated column mapping.",
        "Sub-100ms client-side inference (84.2% ROC-AUC) calculating individual flight risk and total $MRR revenue exposure.",
        "What-If retention simulation engine modeling financial impact of contract interventions in real time."
      ],
      tech: ["Python", "Scikit-learn", "Plotly", "Modern JavaScript", "Feature Engineering", "What-If Engine"],
      liveUrl: "https://nikhil1456-12.github.io/CUSTOMER-CHURN-ANALYSIS/",
      githubUrl: "https://github.com/Nikhil1456-12/CUSTOMER-CHURN-ANALYSIS",
      liveText: "Launch Live App ↗",
      category: "DATA_ML"
    },
    {
      num: "05",
      title: "RECOVERX",
      subtitle: "Autonomous Revenue Recovery & Risk Underwriting Platform",
      domain: "AUTONOMOUS REVENUE RECOVERY · 100% TEST COVERAGE",
      tag: "Pytest 32/32 (100%)",
      tagColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
      videoMp4: "/protofoil/docs/videos/recoverx_preview.mp4",
      videoWebm: "/protofoil/docs/videos/recoverx_preview.webm",
      poster: "/protofoil/docs/previews/recoverx_preview.png",
      bullets: [
        "Event-driven revenue recovery microservices engine with automated invoice anomaly detection and payment risk underwriting.",
        "Complete OpenAPI documentation and a 100% pass rate across 32 unit and integration tests (0.85s runtime).",
        "Automated debt collection workflows, recovery action dispatching, and audit logging."
      ],
      tech: ["FastAPI", "Python 3.12", "Docker", "Pytest (32/32 Pass)", "Microservices", "SQLite"],
      liveUrl: "https://nikhil1456-12.github.io/RecoverX/",
      githubUrl: "https://github.com/Nikhil1456-12/RecoverX",
      liveText: "Explore System ↗",
      category: "BACKEND"
    },
    {
      num: "06",
      title: "CREDIT RISK & LOAN DEFAULT PREDICTION",
      subtitle: "Probability of Default Underwriting Model",
      domain: "PROBABILITY OF DEFAULT MODEL · FINTECH ML",
      tag: "FinTech ML",
      tagColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
      videoMp4: null,
      videoWebm: null,
      poster: "/protofoil/docs/previews/credit_risk_preview.png",
      bullets: [
        "Underwriting analytics engine quantifying probability of default across diverse applicant financial profiles.",
        "Calibrated statistical modeling with real-time risk tiering and decision explainability.",
        "Production-tested pipeline with automated preprocessing and feature validation."
      ],
      tech: ["Python", "Scikit-learn", "Streamlit", "Statistical Modeling", "Credit Underwriting"],
      liveUrl: "https://nikhil1456-12.github.io/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM/",
      githubUrl: "https://github.com/Nikhil1456-12/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM",
      liveText: "Launch Live App ↗",
      category: "DATA_ML"
    }
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const skillsList = [
    { category: "LANGUAGES", items: "Python 3.12, Java, C, C++, SQL (PostgreSQL & MySQL), JavaScript (ES6+), Dart" },
    { category: "AI & MACHINE LEARNING", items: "PyTorch, Scikit-learn, XGBoost, LightGBM, Transformers, ChromaDB, LangChain, Ollama" },
    { category: "BACKEND & ARCHITECTURE", items: "FastAPI, Express.js, RESTful APIs, WebSockets, Microservices, SQLite, Docker" },
    { category: "FRONTEND & MOBILE", items: "React 19, Tailwind CSS, Vite, Three.js (WebGL), Flutter, HTML5/CSS3" },
    { category: "DEV, CLOUD & NETWORKING", items: "Git, GitHub Actions, Linux, Termux, Tailscale Mesh, WireGuard, Postman, Pytest" },
  ];

  const principles = [
    { num: "01", title: "Test what can silently break", desc: "Pricing, validation, state machines, encryption. 32 automated tests prove RecoverX never silently fails." },
    { num: "02", title: "AI in the loop, human in command", desc: "LLMs accelerate prototyping; rigorous human engineering and deterministic constraints ship production products." },
    { num: "03", title: "Ship early, benchmark, iterate", desc: "Deliver live endpoints on GitHub Pages and Vercel first, refine under real latency constraints." },
    { num: "04", title: "Deep fundamentals over hype", desc: "Strong Data Structures & Algorithms, OS concepts, and networked systems over ephemeral tool trends." },
  ];

  const internships = [
    {
      company: "Labmentix",
      role: "Machine Learning & Data Analytics Intern",
      period: "Oct 2024 – Nov 2024",
      desc: "Engineered predictive machine learning pipelines, performed rigorous exploratory data analysis, and delivered high-precision models."
    },
    {
      company: "NullClass",
      role: "Full Stack Software Development Intern",
      period: "Jul 2024 – Aug 2024",
      desc: "Developed responsive web interfaces, integrated RESTful APIs, and contributed to full-lifecycle software delivery."
    },
    {
      company: "SkillDzire",
      role: "Python & Backend Engineering Intern",
      period: "May 2024 – Jun 2024",
      desc: "Constructed Python backend utilities, automated data transformation scripts, and built modular software components."
    },
    {
      company: "Infosys Springboard",
      role: "Lead Architect — PathSaathi",
      period: "2024 – 2025",
      desc: "Spearheaded the design and development of PathSaathi, an offline-first vernacular multi-agent pilgrimage concierge."
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 font-sans relative selection:bg-[#ff4d2e] selection:text-white overflow-hidden">
      
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] hero-glow pointer-events-none" />

      {/* Live Agent Swarm (Agentic Build Simulation) */}
      {agentsActive && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {agents.map(agent => (
            <div
              key={agent.id}
              className="agent-cursor absolute transition-all duration-700 ease-out flex items-center gap-1.5"
              style={{
                left: `${agent.x}%`,
                top: `${agent.y}%`,
              }}
            >
              {/* SVG Cursor Pointer */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill={agent.color} className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              </svg>
              {/* Agent Pill Badge */}
              <div 
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg border border-white/10 backdrop-blur-md"
                style={{ backgroundColor: agent.color, color: agent.textColor }}
              >
                <i className={`fas ${agent.icon} text-[9px]`}></i>
                <span>{agent.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Island Top Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-1 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full bg-[#121216]/80 border border-white/10 backdrop-blur-xl shadow-2xl text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2 pr-3 border-r border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D2E] animate-pulse"></span>
            <span className="font-bold text-white tracking-wider">NIKHIL</span>
          </div>

          <a href="#home" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#work" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">Work</a>
          <a href="#stack" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">Stack</a>
          <a href="#about" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">Contact</a>

          <a
            href="https://github.com/Nikhil1456-12"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-white/10 text-slate-400 hover:text-[#FF4D2E] transition-colors"
            title="GitHub Profile"
          >
            <i className="fab fa-github text-sm"></i>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-28 sm:pt-36 pb-20 px-6 sm:px-12 max-w-7xl mx-auto min-h-[92vh] flex flex-col justify-between">
        
        {/* Giant Typographic Backdrop: "PORTFOLIO" */}
        <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
          <h1 className="font-display text-[20vw] sm:text-[18vw] leading-none font-black text-[#FF4D2E]/15 tracking-tighter uppercase blur-[1px]">
            PORTFOLIO
          </h1>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center pt-8">
          
          {/* Left Column: Greeting, Name, Role, Bio & CTAs */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <p className="font-mono text-sm tracking-widest text-slate-400 uppercase">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              NIKHIL <br />
              <span className="text-white">SAI KUMAR KANDI.</span>
            </h1>

            <h2 className="text-lg sm:text-xl font-extrabold tracking-wide text-[#FF4D2E] uppercase">
              AI SYSTEMS &amp; SOFTWARE ENGINEER
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
              B.Tech Information Technology student at ANITS (CGPA: 8.74). I build autonomous voice AI engines, 
              offline-first vernacular mobile architectures, and high-reliability ML systems that actually ship.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3 rounded-xl bg-[#FF4D2E] text-white font-bold text-sm hover:bg-[#ff3e1d] transition-all shadow-lg shadow-[#FF4D2E]/25 hover:shadow-[#FF4D2E]/40 flex items-center gap-2 group"
              >
                <span>VIEW WORK</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a
                href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Nikhil1456-12"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                GitHub ↗
              </a>
            </div>

            <p className="font-mono text-[11px] text-slate-500 pt-1">
              BASED IN VISAKHAPATNAM, INDIA · OPEN TO INTERNSHIPS &amp; FULL-TIME ROLES
            </p>
          </div>

          {/* Center Column: Cutout / Developer Card with Agent Inspection Box */}
          <div className="lg:col-span-4 flex justify-center relative">
            <div className="relative w-full max-w-sm">
              
              {/* Agent Inspection Bounding Box Frame (Simulating Figma / Canvas Live Agent Selection) */}
              <div className="relative rounded-2xl border-2 border-[#FF4D2E]/50 p-3 bg-gradient-to-b from-[#18181f]/80 to-[#0e0e13]/90 shadow-2xl backdrop-blur-md">
                
                {/* Agent Tag Badges on the Bounding Box */}
                <div className="absolute -top-3 left-4 px-2 py-0.5 rounded bg-[#FF4D2E] text-white text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                  <i className="fas fa-microchip text-[9px]"></i>
                  <span>Agent: Architect</span>
                </div>
                <div className="absolute -bottom-3 right-4 px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                  <i className="fas fa-check text-[9px]"></i>
                  <span>Status: Verified</span>
                </div>

                {/* Developer Persona Display */}
                <div className="h-80 sm:h-96 w-full rounded-xl bg-gradient-to-b from-[#221a1f] via-[#15151c] to-[#0a0a0e] relative overflow-hidden flex flex-col justify-end p-6 border border-white/5">
                  
                  {/* Subtle Background Radial Aura */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF4D2E]/20 via-transparent to-transparent pointer-events-none" />

                  {/* High-tech HUD Ring Graphics */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#FF4D2E]/20 animate-spin" style={{ animationDuration: '40s' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-cyan-500/20 animate-spin" style={{ animationDuration: '25s' }} />

                  {/* Developer Code Terminal HUD */}
                  <div className="relative z-10 space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 font-mono text-[11px] text-cyan-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>system.profile: initialized</span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Nikhil Sai Kumar Kandi
                    </h3>

                    <p className="text-xs font-mono text-slate-300">
                      B.Tech Information Technology
                    </p>
                    <p className="text-xs font-mono text-[#FF4D2E]">
                      ANITS (CGPA 8.74) · 2023–2027
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Python</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">FastAPI</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Three.js</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Flutter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked High-Impact Stats */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between sm:justify-start gap-6 lg:gap-8">
            <div className="border-l-2 border-[#FF4D2E] pl-4">
              <div className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                06<span className="text-[#FF4D2E]">.</span>
              </div>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Production Projects
              </p>
            </div>

            <div className="border-l-2 border-cyan-500 pl-4">
              <div className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                8.74
              </div>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                ANITS B.Tech CGPA
              </p>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4">
              <div className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                100<span className="text-emerald-400">%</span>
              </div>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Pytest Pass (32/32)
              </p>
            </div>

            <div className="border-l-2 border-purple-500 pl-4">
              <div className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                '26
              </div>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Sem Year Lead
              </p>
            </div>
          </div>
        </div>

        {/* Hero Bottom Banner Indicator */}
        <div className="relative z-10 pt-12 pb-4 flex items-center justify-between text-xs font-mono text-slate-500 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LIVE ENVIRONMENT · ZERO-HALLUCINATION SPECIFICATION</span>
          </div>
          <a href="#work" className="hover:text-white transition-colors flex items-center gap-1">
            <span>SCROLL TO WORK</span>
            <i className="fas fa-chevron-down text-[10px]"></i>
          </a>
        </div>
      </section>

      {/* Featured Projects Section: "WORK THAT SHIPS." */}
      <section id="work" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase mb-2">
              ENGINEERED &amp; DEPLOYED
            </p>
            <h2 className="font-display text-5xl sm:text-7xl font-black tracking-tight leading-none uppercase text-white">
              WORK THAT <span className="text-[#FF4D2E]">SHIPS.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
              Every project here went from a brief to something real people open and use. Tested architectures, video demos, and verified codebases.
            </p>
          </div>

          {/* Quick Metrics from Reel */}
          <div className="flex items-center gap-6 font-mono text-xs">
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black text-white">06.</span>
              <p className="text-slate-400 uppercase text-[10px]">Projects Shipped</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black text-white">04.</span>
              <p className="text-slate-400 uppercase text-[10px]">Video Previews</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black text-emerald-400">32.</span>
              <p className="text-slate-400 uppercase text-[10px]">Tests Written</p>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.num}
              className="group relative rounded-2xl bg-[#0f0f14] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#FF4D2E]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF4D2E]/10"
            >
              {/* Card Header Media (Video or High-Res Poster) */}
              <div className="w-full h-64 sm:h-72 bg-[#050508] relative overflow-hidden border-b border-white/10">
                {proj.videoMp4 ? (
                  <video
                    src={proj.videoMp4}
                    poster={proj.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  >
                    {proj.videoWebm && <source src={proj.videoWebm} type="video/webm" />}
                    <source src={proj.videoMp4} type="video/mp4" />
                  </video>
                ) : proj.poster ? (
                  <img
                    src={proj.poster}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#121218] to-[#08080a] text-slate-700">
                    <i className="fas fa-layer-group text-5xl"></i>
                  </div>
                )}

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-display text-2xl font-black text-white/90 drop-shadow-md">
                    {proj.num}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border backdrop-blur-md ${proj.tagColor}`}>
                    {proj.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-[#FF4D2E] transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="font-mono text-xs text-[#FF4D2E] uppercase tracking-wider mb-4">
                    {proj.domain}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#FF4D2E] mt-1 text-xs">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={proj.liveUrl}
                    target={proj.liveUrl.startsWith('http') ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#FF4D2E] hover:bg-[#ff3e1d] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#FF4D2E]/20"
                  >
                    {proj.liveText}
                  </a>

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors"
                      title="View GitHub Repository"
                    >
                      <i className="fab fa-github mr-1.5"></i>
                      <span>Code ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee Section: "STACK I SHIP WITH" */}
      <section id="stack" className="relative py-20 bg-[#0a0a0e] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8">
          <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase">
            TOOLING &amp; FOUNDATIONS
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white mt-1">
            STACK I SHIP WITH<span className="text-[#FF4D2E]">.</span>
          </h2>
        </div>

        {/* Infinite Marquee Ribbon */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="animate-marquee-infinite flex items-center gap-8 whitespace-nowrap font-mono text-sm sm:text-base text-slate-300 font-semibold">
            <span>C++</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Java</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Python 3.12</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>FastAPI</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>PyTorch</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Scikit-learn</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>React 19</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Three.js (WebGL)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Flutter &amp; Dart</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Docker</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>PostgreSQL</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>SQLite</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>ChromaDB (Vector Search)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Tailscale &amp; WireGuard</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Termux Android Bridge</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Pytest (32/32 Pass)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Git &amp; GitHub Actions</span>
            <span className="text-[#FF4D2E]">✦</span>

            {/* Repeat for seamless loop */}
            <span>C++</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Java</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Python 3.12</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>FastAPI</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>PyTorch</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Scikit-learn</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>React 19</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Three.js (WebGL)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Flutter &amp; Dart</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Docker</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>PostgreSQL</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>SQLite</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>ChromaDB (Vector Search)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Tailscale &amp; WireGuard</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Termux Android Bridge</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Pytest (32/32 Pass)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Git &amp; GitHub Actions</span>
            <span className="text-[#FF4D2E]">✦</span>
          </div>
        </div>

        {/* Real Experience & Internships Timeline */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internships.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121217] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#FF4D2E] font-bold">{exp.period}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{exp.company}</h4>
                  <p className="text-xs text-slate-400 font-medium mb-3">{exp.role}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section: "NOT JUST CODE. CODE THAT SHIPS." */}
      <section id="about" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase mb-2">
            PHILOSOPHY &amp; DISCIPLINES
          </p>
          <h2 className="font-display text-5xl sm:text-7xl font-black uppercase text-white leading-tight">
            NOT JUST CODE.<br />
            <span className="text-[#FF4D2E]">CODE THAT SHIPS.</span>
          </h2>
        </div>

        {/* Two-Column Bio Narrative */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an Information Technology student at Anil Neerukonda Institute of Technology &amp; Sciences 
              (ANITS, Visakhapatnam, CGPA: <b>8.74 / 10</b>) with real software engineering internship experience 
              across <b>Labmentix</b>, <b>NullClass</b>, and <b>SkillDzire</b>.
            </p>
            <p>
              Rather than building fragile prototypes, I focus on systems that run under real constraints: 
              offline-first synchronization when network drops, hardware-backed biometric encryption via Android Keystore, 
              and client-side ML scoring with sub-100ms response times.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Most days that means Python 3.12, FastAPI, and PyTorch for backend intelligence and ML underwriting; 
              React 19 and Three.js for 60 FPS interfaces; and automated Pytest test suites wherever logic could quietly break.
            </p>
            <p>
              I actively leverage modern agentic coding workflows to rapidly iterate, but enforce strict human engineering 
              judgment to guarantee reliability, security, and algorithmic correctness.
            </p>
          </div>
        </div>

        {/* Education, Skills Table & Principles Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Detailed Skills Hierarchy */}
          <div className="lg:col-span-7 space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0f0f14] border border-white/10">
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
              EDUCATION &amp; SKILLS
            </h3>

            <div className="pb-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">B.Tech · Information Technology</span>
                <span className="font-mono text-xs text-[#FF4D2E] font-bold">CGPA: 8.74 / 10</span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Anil Neerukonda Institute of Technology &amp; Sciences (ANITS) · 2023 – 2027
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {skillsList.map((s, idx) => (
                <div key={idx} className="grid sm:grid-cols-12 gap-2 text-xs">
                  <span className="sm:col-span-4 font-mono font-bold text-slate-400 uppercase">
                    {s.category}
                  </span>
                  <span className="sm:col-span-8 text-slate-200">
                    {s.items}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Core Engineering Principles + Signature Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {principles.map((pr) => (
                <div key={pr.num} className="p-4 rounded-xl bg-[#0f0f14] border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs font-bold text-[#FF4D2E]">{pr.num}</span>
                    <h4 className="font-bold text-white text-sm">{pr.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-7">{pr.desc}</p>
                </div>
              ))}
            </div>

            {/* Signature Reel Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FF4D2E] to-[#bd240a] text-white shadow-xl">
              <p className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight">
                SHIP THE FEATURE, THEN WRITE THE TEST THAT PROVES IT CAN'T SILENTLY BREAK.
              </p>
              <p className="font-mono text-xs font-bold mt-4 text-white/80 uppercase tracking-widest">
                — Nikhil Sai Kumar Kandi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section: "LET'S WORK TOGETHER." */}
      <section id="contact" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Subtext */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase">
              REACH OUT
            </p>
            <h2 className="font-display text-5xl sm:text-7xl font-black uppercase text-white leading-none">
              LET'S WORK<br />
              <span className="text-[#FF4D2E]">TOGETHER.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              Open to Software Engineering roles, AI System Architecture, and Machine Learning engineering opportunities. Let's build reliable software that ships.
            </p>

            <div className="space-y-3 font-mono text-xs pt-2">
              <a
                href="mailto:nikhilsaikumarkandi@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
              >
                <i className="fas fa-envelope text-[#FF4D2E] text-base w-5 text-center"></i>
                <span>nikhilsaikumarkandi@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
              >
                <i className="fab fa-linkedin text-[#FF4D2E] text-base w-5 text-center"></i>
                <span>linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359 ↗</span>
              </a>

              <a
                href="https://github.com/Nikhil1456-12"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
              >
                <i className="fab fa-github text-[#FF4D2E] text-base w-5 text-center"></i>
                <span>github.com/Nikhil1456-12 ↗</span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                <i className="fas fa-phone text-[#FF4D2E] text-base w-5 text-center"></i>
                <span>+91 8309322695</span>
              </div>
            </div>
          </div>

          {/* Right Column: Giant Sign-off from the Reel */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
            <h3 className="font-display text-6xl sm:text-8xl font-black uppercase leading-none tracking-tight">
              SHIP IT<br />
              <span className="text-[#FF4D2E]">FOR REAL.</span>
            </h3>
            <p className="font-mono text-xs text-slate-500 mt-4 tracking-widest uppercase">
              Zero Hallucinations · Production Code · Visakhapatnam, IN
            </p>
          </div>
        </div>
      </section>

      {/* Floating Bottom Dock: "12 AGENTS LIVE" from the Reel */}
      <aside aria-label="Live swarm controller" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-[#121217]/90 border border-white/15 backdrop-blur-xl shadow-2xl text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 agent-pulse"></span>
            <span className="text-white font-bold tracking-wider">{activeAgentCount} AGENTS LIVE</span>
          </div>

          <div className="h-4 w-px bg-white/20" />

          <div className="flex items-center gap-1.5 text-slate-300">
            <i className="fas fa-bolt text-amber-400 text-[10px]"></i>
            <span className="hidden sm:inline">SWARM ACTIVE</span>
          </div>

          <button
            onClick={() => setAgentsActive(!agentsActive)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              agentsActive 
                ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30' 
                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
            }`}
          >
            {agentsActive ? '⏸ Pause' : '▶ Resume'}
          </button>
        </div>
      </aside>

      {/* Footer */}
      <footer className="py-10 text-center text-xs font-mono border-t border-white/5 text-slate-600 bg-[#060608]">
        <p>© 2026 Nikhil Sai Kumar Kandi. All rights reserved.</p>
        <p className="mt-1 text-slate-500">
          Crafted with React 19, Tailwind CSS &amp; Vite · Production Hosted on GitHub Pages
        </p>
      </footer>
    </div>
  );
}
