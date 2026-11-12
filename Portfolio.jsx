import React, { useState, useEffect, useRef } from 'react';
import nikhilPortrait from './assets/nikhil_portrait.png';
import { 
  SelectionFrame, 
  CalloutArrow, 
  SwarmRebuildCursors, 
  BottomCanvasDock 
} from './CanvasElements.jsx';

// Asset resolver helper for subpath hosting on GitHub Pages
const resolveAsset = (path) => {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.replace(/^\//, '');
  const normalizedPath = cleanPath.startsWith('protofoil/') ? cleanPath.slice(10) : cleanPath;
  return `${cleanBase}${normalizedPath}`;
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Swarm Rebuild State Machine
  const [activeStep, setActiveStep] = useState(0);
  const [isRebuilding, setIsRebuilding] = useState(true);
  const totalSteps = 8;
  const rebuildTimerRef = useRef(null);

  // Auto-Scroll Sections corresponding to steps
  const stepSectionMap = {
    0: 'hero',
    1: 'hero',
    2: 'hero',
    3: 'work',
    4: 'work',
    5: 'track-record',
    6: 'arsenal',
    7: 'contact'
  };

  // Swarm Rebuild Runner Effect
  useEffect(() => {
    if (!isRebuilding) return;

    rebuildTimerRef.current = setTimeout(() => {
      setActiveStep(prev => {
        const next = prev + 1;
        if (next < totalSteps) {
          const targetSection = stepSectionMap[next];
          const el = document.getElementById(targetSection);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          return next;
        } else {
          setIsRebuilding(false);
          return prev;
        }
      });
    }, 2800);

    return () => clearTimeout(rebuildTimerRef.current);
  }, [activeStep, isRebuilding]);

  const handleReplay = () => {
    setActiveStep(0);
    setIsRebuilding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTogglePlayPause = () => {
    setIsRebuilding(prev => !prev);
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Strict Project Specifications (Zero Hallucinations, Exact Sequence)
  const projects = [
    {
      id: "jarvis",
      num: "01",
      title: "JARVIS",
      category: "AI_SYSTEMS",
      badge: "Flagship AI OS",
      subtitle: "Autonomous Multimodal Voice OS & Encrypted Mobile Mesh",
      videoUrl: resolveAsset("docs/videos/jarvis_preview.mp4"),
      posterUrl: resolveAsset("docs/previews/jarvis_preview.jpg"),
      calloutText: "60FPS Three.js Arc Reactor HUD + <50ms Voice VAD",
      calloutAuthor: "Agent: Dev",
      calloutColor: "#6366f1",
      calloutDir: "down-right",
      bullets: [
        "Holographic Three.js Arc Reactor HUD rendered at 60 FPS WebGL with real-time audio reactivity.",
        "Continuous Silero VAD listening (<50ms latency) & local LLM voice synthesis for zero-lag conversational control.",
        "Zero-cable encrypted remote Android device control via authenticated Termux SSH and Tailscale WireGuard mesh."
      ],
      tech: ["React 19", "Three.js", "FastAPI", "Silero VAD", "Tailscale Mesh", "Termux SSH", "WebSockets"],
      liveUrl: resolveAsset("jarvis/"),
      githubUrl: "https://github.com/Nikhil1456-12/Jarvis",
      ctaText: "3D HUD Demo ↗",
      accent: "from-indigo-500 to-purple-600"
    },
    {
      id: "pathsaathi",
      num: "02",
      title: "Infosys PathSaathi",
      category: "MOBILE_EDGE",
      badge: "Infosys Capstone",
      subtitle: "Vernacular AI Travel Concierge & Offline Edge System",
      videoUrl: resolveAsset("docs/videos/pathsaathi_preview.mp4"),
      posterUrl: resolveAsset("docs/previews/pathsaathi_preview.png"),
      calloutText: "Offline SQLite sync & Android Keystore biometric encryption",
      calloutAuthor: "Agent: Priya",
      calloutColor: "#ec4899",
      calloutDir: "down-left",
      bullets: [
        "Offline-first vernacular travel companion engineered for high-density pilgrimages with poor or zero connectivity.",
        "Orchestrates localized on-device sub-agents for voice planning, road transit, and accommodation booking.",
        "SQLite offline sync, edge ChromaDB vector search, and biometric authentication via Android Keystore & HSM."
      ],
      tech: ["Flutter", "Dart", "Multi-Agent System", "SQLite", "ChromaDB", "Android Keystore", "FastAPI"],
      liveUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      githubUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      ctaText: "Architecture & Code ↗",
      accent: "from-purple-500 to-pink-600"
    },
    {
      id: "data-analyst",
      num: "03",
      title: "AI Data Analysis Website",
      category: "AI_SYSTEMS",
      badge: "Agentic Analytics",
      subtitle: "Natural Language to SQL Conversational Analytics Engine",
      videoUrl: null,
      posterUrl: resolveAsset("docs/previews/data_analyst_preview.png"),
      calloutText: "Gemini API NL-to-SQL reasoning & Plotly charts",
      calloutAuthor: "Agent: Sarah",
      calloutColor: "#06b6d4",
      calloutDir: "down-right",
      bullets: [
        "Translates conversational natural language business questions into schema-validated SQL queries with zero data leakage.",
        "Returns instant structured tabular data and generates responsive, dynamic interactive Plotly analytics charts.",
        "Containerized full-stack architecture leveraging Google Gemini API schema reasoning and React 19 UI."
      ],
      tech: ["React 19", "Node.js", "Express", "Google Gemini API", "Docker", "Plotly", "Tailwind CSS"],
      liveUrl: "https://nikhil1456-12.github.io/-Data-Analyst-AI/",
      githubUrl: "https://github.com/Nikhil1456-12/-Data-Analyst-AI",
      ctaText: "Launch Live App ↗",
      accent: "from-cyan-500 to-blue-600"
    },
    {
      id: "churn",
      num: "04",
      title: "Customer Churn Intelligence",
      category: "ML_FINTECH",
      badge: "84.2% ROC-AUC",
      subtitle: "Production ML Financial Risk & Retention Engine",
      videoUrl: resolveAsset("docs/videos/churn_preview.mp4"),
      posterUrl: resolveAsset("docs/previews/churn_preview.png"),
      calloutText: "84.2% ROC-AUC & live $MRR risk simulator",
      calloutAuthor: "Agent: Alex",
      calloutColor: "#10b981",
      calloutDir: "down-left",
      bullets: [
        "Interactive enterprise retention portal featuring dynamic customer CSV/Excel upload with automated column mapping.",
        "Sub-100ms client-side inference (84.2% ROC-AUC) calculating individual flight risk and total $MRR revenue exposure.",
        "What-If retention simulation engine modeling financial impact of contract interventions in real time."
      ],
      tech: ["Python", "Scikit-learn", "Plotly", "Modern JavaScript", "Feature Engineering", "What-If Engine"],
      liveUrl: "https://nikhil1456-12.github.io/CUSTOMER-CHURN-ANALYSIS/",
      githubUrl: "https://github.com/Nikhil1456-12/CUSTOMER-CHURN-ANALYSIS",
      ctaText: "Launch Live App ↗",
      accent: "from-emerald-500 to-teal-600"
    },
    {
      id: "recoverx",
      num: "05",
      title: "RecoverX",
      category: "BACKEND",
      badge: "Pytest 32/32 (100%)",
      subtitle: "Autonomous Revenue Recovery & Risk Underwriting Platform",
      videoUrl: resolveAsset("docs/videos/recoverx_preview.mp4"),
      posterUrl: resolveAsset("docs/previews/recoverx_preview.png"),
      calloutText: "32/32 Pytest suites passed in 0.85s (100%)",
      calloutAuthor: "Agent: Dev",
      calloutColor: "#a855f7",
      calloutDir: "down-right",
      bullets: [
        "Event-driven revenue recovery microservices engine with automated invoice anomaly detection and payment risk underwriting.",
        "Complete OpenAPI documentation and a 100% pass rate across 32 unit and integration tests (0.85s runtime).",
        "Automated debt collection workflows, recovery action dispatching, and audit logging."
      ],
      tech: ["FastAPI", "Python 3.12", "Docker", "Pytest (32/32 Pass)", "Microservices", "SQLite"],
      liveUrl: "https://nikhil1456-12.github.io/RecoverX/",
      githubUrl: "https://github.com/Nikhil1456-12/RecoverX",
      ctaText: "Explore System ↗",
      accent: "from-indigo-500 to-violet-600"
    },
    {
      id: "credit-risk",
      num: "06",
      title: "Credit Risk & Loan Default",
      category: "ML_FINTECH",
      badge: "FinTech Risk Underwriting",
      subtitle: "Probability of Default (PD) & Financial Loss Scoring Engine",
      videoUrl: null,
      posterUrl: resolveAsset("docs/previews/credit_risk_preview.png"),
      calloutText: "XGBoost & LightGBM credit default risk tiering",
      calloutAuthor: "Agent: David",
      calloutColor: "#f59e0b",
      calloutDir: "down-left",
      bullets: [
        "Automated FinTech credit scoring model assessing loan applicant probability of default and expected loss exposure.",
        "Robust tabular preprocessing pipeline with stratified validation, weight of evidence (WoE) transformation, and IV scoring.",
        "Produces auditable scorecards complying with institutional risk threshold constraints."
      ],
      tech: ["Python", "XGBoost", "LightGBM", "Pandas", "Scikit-learn", "FastAPI"],
      liveUrl: "https://nikhil1456-12.github.io/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM/",
      githubUrl: "https://github.com/Nikhil1456-12/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM",
      ctaText: "Launch Live App ↗",
      accent: "from-amber-500 to-orange-600"
    }
  ];

  const filteredProjects = activeTab === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const internships = [
    {
      company: "Labmentix",
      role: "AI & ML Intern",
      period: "2025",
      detail: "Developed high-throughput inference pipelines, fine-tuned transformer models, and reduced latency by 35%."
    },
    {
      company: "NullClass",
      role: "Full-Stack Developer Intern",
      period: "2024",
      detail: "Engineered scalable REST APIs with Node.js/Express, implemented role-based auth, and built responsive React interfaces."
    },
    {
      company: "SkillDzire",
      role: "Data Science Intern",
      period: "2024",
      detail: "Executed statistical exploratory data analysis, engineered domain-specific features, and trained predictive models."
    }
  ];

  const techArsenal = [
    {
      category: "Languages",
      skills: ["Python 3.12", "JavaScript (ES6+)", "TypeScript", "C++", "Java", "SQL"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["Google Gemini API", "Silero VAD", "Scikit-learn", "XGBoost", "LightGBM", "ChromaDB", "Prompt Engineering"]
    },
    {
      category: "Frontend & 3D Interactive",
      skills: ["React 19", "Three.js (WebGL)", "Flutter", "Tailwind CSS", "Plotly", "Vite", "Canvas API"]
    },
    {
      category: "Backend & Systems",
      skills: ["FastAPI", "Node.js", "Express", "Docker", "Tailscale WireGuard", "Termux SSH", "SQLite", "REST APIs"]
    },
    {
      category: "Testing & DevOps",
      skills: ["Pytest (100% Pass Rate)", "Git", "GitHub Actions", "Postman", "CI/CD Pipelines", "Linux/Bash"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 canvas-grid relative selection:bg-[#ff4500] selection:text-white">
      
      {/* Live Swarm Rebuild Autonomous Cursors (Moves and Pastes Matter) */}
      <SwarmRebuildCursors 
        activeStep={activeStep}
        isRebuilding={isRebuilding}
      />

      {/* Top Navigation Canvas Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#08090d]/85 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Identity Pill with Selection Frame */}
          <SelectionFrame label="Frame: Header" tagColor="#0d99ff">
            <a href="#hero" className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4500] animate-pulse"></span>
              <span className="font-extrabold text-sm sm:text-base tracking-wider uppercase font-heading">
                KANDI NIKHIL SAI KUMAR
              </span>
            </a>
          </SelectionFrame>

          {/* Center: Canvas Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider font-mono">
            <a href="#work" className="px-3 py-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              WORK
            </a>
            <a href="#track-record" className="px-3 py-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              TRACK RECORD
            </a>
            <a href="#arsenal" className="px-3 py-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              ARSENAL
            </a>
            <a href="#contact" className="px-3 py-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Right: Quick Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
            >
              <i className="fa-brands fa-linkedin text-indigo-400"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Nikhil1456-12"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href="mailto:nikhilsaikumarkandi@gmail.com"
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#ff4500] hover:bg-[#ff5722] text-white shadow-md transition-all active:scale-95"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section (00:00 - 00:08 in Reference Video) */}
      <section id="hero" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
        
        {/* Massive Solid Red-Orange Gradient "PORTFOLIO" Text in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <h1 className="text-portfolio-gradient text-7xl sm:text-9xl md:text-[210px] lg:text-[260px] font-black tracking-tighter uppercase leading-none font-heading">
            PORTFOLIO
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            
            {/* Left Column: Heading, Bio, and Callout Arrows (5 Cols) */}
            <div className="lg:col-span-5 space-y-5 animate-paste">
              
              <SelectionFrame label="Hero: Nikhil Sai Kumar" tagColor="#0d99ff" alwaysShow={false}>
                <div className="space-y-2">
                  <div className="font-handwriting text-2xl text-slate-300">
                    Hello, I'm
                  </div>

                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-heading leading-tight">
                    KANDI NIKHIL <br />
                    SAI KUMAR<span className="text-[#ff4500]">.</span>
                  </h2>

                  <p className="text-sm sm:text-base font-bold tracking-wider text-[#ff4500] font-mono uppercase">
                    AI SYSTEMS ARCHITECT & ML BUILDER
                  </p>
                </div>
              </SelectionFrame>

              {/* Hand-Drawn Callout Arrow Pointing to Bio Statement */}
              <div className="relative pt-1">
                <CalloutArrow 
                  author="Jai"
                  text="I build autonomous voice OS, offline edge systems, and enterprise ML pipelines that actually ship."
                  color="#ff4500"
                  direction="down-right"
                  className="mb-2"
                />
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans glass-panel p-4 rounded-xl border border-white/10 mt-2">
                  Information Technology Undergraduate at <span className="text-white font-semibold">ANITS</span> (CGPA 8.74, Batch 2023–2027). Specializing in autonomous voice agents, offline edge resilience, and production-ready machine learning architectures.
                </p>

                {/* Yellow Layout Pill Matching Video */}
                <div className="pt-2 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#f59e0b] text-black shadow-sm flex items-center gap-1">
                    <span>::</span> Layout
                  </span>
                </div>
              </div>

              {/* Action Buttons with Callout Arrow */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="px-6 py-3 rounded-xl bg-[#ff4500] hover:bg-[#ff5722] text-white text-sm font-bold tracking-wide shadow-lg shadow-[#ff4500]/25 transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>VIEW WORK</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
                
                <a
                  href="mailto:nikhilsaikumarkandi@gmail.com"
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>CONTACT ME</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-400"></i>
                </a>

                <a
                  href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-indigo-400 text-sm font-semibold transition-all active:scale-95"
                >
                  RESUME ↗
                </a>
              </div>

              {/* Dim Monospace Location Tag Matching Video */}
              <div className="text-[11px] font-mono text-slate-500 tracking-wider">
                BASED IN VISAKHAPATNAM, INDIA · OPEN TO INTERNSHIPS
              </div>
            </div>

            {/* Center Column: Cutout Portrait (Seamlessly Layered, No Container Box, White Shirt Pristine) */}
            <div className="lg:col-span-4 flex justify-center relative items-end">
              <SelectionFrame label="Subject: Kandi Nikhil" tagColor="#a855f7">
                <div className="relative w-[320px] sm:w-[400px] md:w-[460px] h-[480px] sm:h-[560px] flex items-end justify-center overflow-hidden">
                  
                  {/* Subtle Multi-Color Ambient Backlight Glow */}
                  <div className="absolute inset-0 bg-radial from-[#ff4500]/25 via-[#6366f1]/15 to-transparent blur-3xl pointer-events-none" />

                  {/* Pristine Cutout Portrait (Head & Hair Sharp, White Shirt Intact, Bottom Fading to Dark Canvas) */}
                  <img
                    src={nikhilPortrait}
                    alt="Kandi Nikhil Sai Kumar"
                    className="relative z-10 w-full h-full object-contain object-bottom pointer-events-none drop-shadow-[0_20px_50px_rgba(255,69,0,0.35)] transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Cutout Verification Pill Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-20 px-3.5 py-2 rounded-xl bg-[#08090d]/85 border border-white/15 backdrop-blur-md flex items-center justify-between shadow-xl">
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">Kandi Nikhil Sai Kumar</p>
                      <p className="text-[10px] font-mono text-[#ff4500]">ANITS B.Tech IT · Batch 2023–2027</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>
              </SelectionFrame>
            </div>

            {/* Right Column: Key Stats Matrix with Callout Arrow (3 Cols) */}
            <div className="lg:col-span-3 space-y-4 animate-paste">
              <div className="relative">
                <CalloutArrow 
                  author="Verified"
                  text="Production systems & zero backlogs"
                  color="#10b981"
                  direction="down-left"
                  className="mb-2"
                />

                <SelectionFrame label="Stats Matrix" tagColor="#10b981">
                  <div className="space-y-3 glass-panel p-4 rounded-2xl border border-white/10">
                    
                    {/* Stat 1 */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff4500]/30 transition-all">
                      <div className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
                        06<span className="text-[#ff4500]">+</span>
                      </div>
                      <div className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                        Production Systems
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Voice OS, offline edge AI, and full-stack ML
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all">
                      <div className="text-3xl sm:text-4xl font-black text-indigo-400 font-heading tracking-tight">
                        8.74
                      </div>
                      <div className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                        B.Tech IT CGPA
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        ANIL NEERUKONDA INSTITUTE (2023–2027)
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all">
                      <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-heading tracking-tight">
                        100<span className="text-xs font-mono text-emerald-300">%</span>
                      </div>
                      <div className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                        Pytest Pass Rate
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        32/32 suites passed in RecoverX (0.85s)
                      </div>
                    </div>

                  </div>
                </SelectionFrame>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Infinite Horizontal Tech Marquee Ticker (00:21 in Video) */}
      <section className="relative py-4 bg-black/60 border-y border-white/10 overflow-hidden select-none">
        <div className="animate-marquee items-center gap-8 text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
          <span className="text-[#ff4500]">● FASTAPI</span>
          <span>● PYTHON 3.12</span>
          <span className="text-indigo-400">● REACT 19</span>
          <span>● THREE.JS WEBGL</span>
          <span className="text-pink-400">● FLUTTER & DART</span>
          <span>● DOCKER</span>
          <span className="text-cyan-400">● SQLITE OFFLINE</span>
          <span>● TAILSCALE WIREGUARD</span>
          <span className="text-emerald-400">● SILERO VAD</span>
          <span>● GOOGLE GEMINI API</span>
          <span className="text-purple-400">● PLOTLY CHARTS</span>
          <span>● SCIKIT-LEARN</span>
          <span>● PYTEST (100% PASS)</span>
          <span className="text-[#ff4500]">● POSTMAN</span>
          <span>● GIT & CI/CD</span>

          {/* Repeat for seamless infinite loop */}
          <span className="text-[#ff4500]">● FASTAPI</span>
          <span>● PYTHON 3.12</span>
          <span className="text-indigo-400">● REACT 19</span>
          <span>● THREE.JS WEBGL</span>
          <span className="text-pink-400">● FLUTTER & DART</span>
          <span>● DOCKER</span>
          <span className="text-cyan-400">● SQLITE OFFLINE</span>
          <span>● TAILSCALE WIREGUARD</span>
          <span className="text-emerald-400">● SILERO VAD</span>
          <span>● GOOGLE GEMINI API</span>
          <span className="text-purple-400">● PLOTLY CHARTS</span>
          <span>● SCIKIT-LEARN</span>
          <span>● PYTEST (100% PASS)</span>
          <span className="text-[#ff4500]">● POSTMAN</span>
          <span>● GIT & CI/CD</span>
        </div>
      </section>

      {/* Section 2: Selected Work ("WORK THAT SHIPS.") (00:09 - 00:20 in Video) */}
      <section id="work" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4500]/15 border border-[#ff4500]/30 text-[#ff4500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
              SELECTED WORK
            </div>
            
            <SelectionFrame label="Section: Selected Work" tagColor="#0d99ff">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-heading">
                WORK THAT <span className="text-[#ff4500]">SHIPS.</span>
              </h2>
            </SelectionFrame>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Autonomous voice agents, offline edge systems, and enterprise ML engines. Every project here was built to solve real-world problems with production reliability.
            </p>
            
            {/* Quick Metrics Bar */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span><strong className="text-white">06</strong> Systems</span>
              <span>·</span>
              <span><strong className="text-white">04</strong> Video Walkthroughs</span>
              <span>·</span>
              <span><strong className="text-white">100%</strong> Pytest Pass</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 py-8">
          {['ALL', 'AI_SYSTEMS', 'MOBILE_EDGE', 'ML_FINTECH', 'BACKEND'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all ${
                activeTab === tab
                  ? 'bg-[#ff4500] text-white shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {tab.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Project Cards (Staggered 2-Column Grid Matching Reference Video) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id}
              className={`${idx % 2 === 1 ? 'md:translate-y-6' : ''} transition-transform duration-300 animate-paste`}
            >
              <SelectionFrame 
                label={`Card ${project.num}: ${project.title}`} 
                tagColor="#0d99ff"
                className="h-full"
              >
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full border border-white/10 relative overflow-hidden group">
                  
                  {/* Subtle Background Radial Accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.accent} opacity-10 blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity`} />

                  <div className="space-y-4 relative z-10">
                    
                    {/* Header Row: Number + Badge + Preview Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl font-black font-heading text-[#ff4500]">
                          {project.num}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/10 border border-white/15 text-slate-200">
                          {project.badge}
                        </span>
                      </div>

                      {project.videoUrl && (
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-[#ff4500]/20 hover:bg-[#ff4500] text-[#ff4500] hover:text-white border border-[#ff4500]/40 transition-all flex items-center gap-1.5"
                        >
                          <i className="fa-solid fa-play text-[10px]"></i>
                          <span>Preview</span>
                        </button>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-heading tracking-tight group-hover:text-[#ff4500] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-300 font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Callout Arrow Pointing to Feature */}
                    {project.calloutText && (
                      <div className="pt-1">
                        <CalloutArrow 
                          author={project.calloutAuthor}
                          text={project.calloutText}
                          color={project.calloutColor}
                          direction={project.calloutDir}
                          className="w-full items-start"
                        />
                      </div>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                      {project.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-[#ff4500] font-bold mt-0.5">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Card Actions */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold font-mono text-[#ff4500] hover:text-[#ff5722] transition-colors flex items-center gap-1"
                        >
                          <span>{project.ctaText}</span>
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                          <i className="fa-brands fa-github"></i>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    <span className="text-[10px] font-mono text-slate-500">
                      LIVE IN PRODUCTION
                    </span>
                  </div>

                </div>
              </SelectionFrame>
            </div>
          ))}
        </div>

      </section>

      {/* Section 3: Track Record ("BUILT FAST. SHIPPED REAL.") (00:21 - 00:27 in Video) */}
      <section id="track-record" className="py-24 bg-black/40 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and Giant Number Metric */}
            <div className="lg:col-span-5 space-y-6 animate-paste">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4500]/15 border border-[#ff4500]/30 text-[#ff4500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
                  TRACK RECORD
                </div>
                
                <SelectionFrame label="Metric: 8.74 CGPA" tagColor="#ff4500">
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-heading leading-tight">
                    BUILT FAST. <br />
                    <span className="text-[#ff4500]">SHIPPED REAL.</span>
                  </h2>
                </SelectionFrame>
              </div>

              {/* Giant Metric Number with Hand-Drawn Callout Arrow */}
              <div className="relative pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl sm:text-9xl font-black font-heading text-[#ff4500] tracking-tighter">
                    8.74
                  </span>
                  <span className="text-xl sm:text-2xl font-mono text-slate-400 font-bold">
                    / 10.0
                  </span>
                </div>

                <CalloutArrow 
                  author="Academic Excellence"
                  text="CGPA at ANITS with zero backlogs & full engineering coursework."
                  color="#ff4500"
                  direction="down-right"
                  className="mt-2"
                />
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
                Proven track record across 3 software engineering internships, open-source architectures, and mission-critical production systems built with end-to-end test suites.
              </p>
            </div>

            {/* Right Column: Timeline & Internship Experience */}
            <div className="lg:col-span-7 space-y-4 animate-paste">
              <SelectionFrame label="Timeline: Experience & Education" tagColor="#0d99ff">
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  
                  {/* Item 1 */}
                  {internships.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-white/10 last:border-b-0 last:pb-0">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h4 className="text-lg font-bold text-white font-heading">
                            {item.role}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#ff4500]/20 text-[#ff4500] font-semibold">
                            {item.company}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                      <div className="text-xs font-mono text-slate-400 font-bold whitespace-nowrap sm:text-right">
                        {item.period}
                      </div>
                    </div>
                  ))}

                  {/* Education Item */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pt-2">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-lg font-bold text-white font-heading">
                          B.Tech in Information Technology
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/20 text-indigo-400 font-semibold">
                          ANITS
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        Anil Neerukonda Institute of Technology & Sciences (CGPA: 8.74 / 10.0)
                      </p>
                    </div>
                    <div className="text-xs font-mono text-slate-400 font-bold whitespace-nowrap sm:text-right">
                      2023 – 2027
                    </div>
                  </div>

                </div>
              </SelectionFrame>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Arsenal & Philosophy ("NOT JUST CODE. CODE THAT SHIPS.") (00:28 - 00:35 in Video) */}
      <section id="arsenal" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4500]/15 border border-[#ff4500]/30 text-[#ff4500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            EDUCATION & ARSENAL
          </div>
          
          <SelectionFrame label="Section: Skills & Philosophy" tagColor="#0d99ff">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-heading">
              NOT JUST CODE. <br className="sm:hidden" />
              <span className="text-[#ff4500]">CODE THAT SHIPS.</span>
            </h2>
          </SelectionFrame>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 items-start">
          
          {/* Left Column: Categorized Technical Arsenal (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 animate-paste">
            <SelectionFrame label="Technical Arsenal Grid" tagColor="#0d99ff">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                {techArsenal.map((category, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff4500]">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-200 hover:border-[#ff4500]/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SelectionFrame>
          </div>

          {/* Right Column: Sticky Notes & Big Signature Quote Banner (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 animate-paste">
            
            {/* Sticky Notes Grid Matching the Video */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                  <i className="fa-solid fa-thumbtack text-[10px]"></i>
                  <span>TEST FIRST</span>
                </div>
                <p className="text-xs mt-1.5 leading-relaxed text-slate-200">
                  "Test what can silently break before it ever hits production."
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400">
                  <i className="fa-solid fa-thumbtack text-[10px]"></i>
                  <span>EDGE RESILIENCE</span>
                </div>
                <p className="text-xs mt-1.5 leading-relaxed text-slate-200">
                  "Offline-first sync ensures users never hit an unexpected barrier."
                </p>
              </div>
            </div>

            {/* Big Signature Quote Card (Vibrant Orange Background from Video) */}
            <SelectionFrame label="Quote: Engineering Standard" tagColor="#ff4500">
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#ff4500] to-[#ff2a00] text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <span className="text-3xl font-black font-heading opacity-50 select-none">“</span>
                  <p className="text-xl sm:text-2xl font-black uppercase font-heading tracking-tight leading-snug">
                    SHIP THE FEATURE, THEN WRITE THE TEST THAT PROVES IT CAN'T SILENTLY BREAK.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-white/85">
                    <span>— Kandi Nikhil Sai Kumar</span>
                    <span>ANITS · 2026</span>
                  </div>
                </div>
              </div>
            </SelectionFrame>

          </div>

        </div>

      </section>

      {/* Section 5: Contact & Let's Work Together (00:36 - 00:40 in Video) */}
      <section id="contact" className="py-24 bg-black/60 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-6 space-y-6 animate-paste">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4500]/15 border border-[#ff4500]/30 text-[#ff4500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
                  CONTACT
                </div>
                
                <SelectionFrame label="Section: Contact" tagColor="#0d99ff">
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-heading leading-tight">
                    LET'S WORK <br />
                    <span className="text-[#ff4500]">TOGETHER.</span>
                  </h2>
                </SelectionFrame>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-sans max-w-lg">
                Open to SWE Internships, AI Consulting, and Full-time engineering roles. Ready to ship production-grade architectures and zero-defect systems.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="mailto:nikhilsaikumarkandi@gmail.com"
                  className="px-6 py-3.5 rounded-xl bg-[#ff4500] hover:bg-[#ff5722] text-white text-sm font-bold tracking-wide shadow-lg shadow-[#ff4500]/25 transition-all active:scale-95 flex items-center gap-2"
                >
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                  <span>GET IN TOUCH</span>
                </a>

                <a
                  href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all active:scale-95 flex items-center gap-2"
                >
                  <i className="fa-brands fa-linkedin text-indigo-400"></i>
                  <span>CONNECT ON LINKEDIN</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Figma Cursor Contact Cards & Big Kicker */}
            <div className="lg:col-span-6 space-y-4 animate-paste">
              
              {/* Email Card with Figma Arrow */}
              <div className="relative">
                <CalloutArrow 
                  author="Direct"
                  text="Drop an email"
                  color="#0d99ff"
                  direction="down-right"
                  className="mb-1"
                />
                
                <SelectionFrame label="Contact: Email" tagColor="#0d99ff">
                  <a
                    href="mailto:nikhilsaikumarkandi@gmail.com"
                    className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between hover:border-[#ff4500]/40 transition-colors block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#ff4500]/15 flex items-center justify-center text-[#ff4500]">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-slate-400">EMAIL</p>
                        <p className="text-sm sm:text-base font-bold text-white font-mono">
                          nikhilsaikumarkandi@gmail.com
                        </p>
                      </div>
                    </div>
                    <i className="fa-solid fa-arrow-right text-slate-400 text-xs"></i>
                  </a>
                </SelectionFrame>
              </div>

              {/* LinkedIn Card */}
              <SelectionFrame label="Contact: LinkedIn" tagColor="#a855f7">
                <a
                  href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between hover:border-indigo-500/40 transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">LINKEDIN</p>
                      <p className="text-sm font-bold text-white font-mono truncate max-w-[240px] sm:max-w-none">
                        nikhil-sai-kumar-kandi-03a33b359
                      </p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-slate-400 text-xs"></i>
                </a>
              </SelectionFrame>

              {/* GitHub Card */}
              <SelectionFrame label="Contact: GitHub" tagColor="#10b981">
                <a
                  href="https://github.com/Nikhil1456-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between hover:border-emerald-500/40 transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                      <i className="fa-brands fa-github"></i>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">GITHUB</p>
                      <p className="text-sm font-bold text-white font-mono">
                        Nikhil1456-12
                      </p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square text-slate-400 text-xs"></i>
                </a>
              </SelectionFrame>

              {/* Giant "SHIP IT FOR REAL." Footer Kicker */}
              <div className="pt-6 text-right select-none">
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-outline-white font-heading uppercase">
                  SHIP IT FOR REAL.
                </h3>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Slide-Up Video Preview Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="w-full max-w-4xl bg-[#0d1017] border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-slide-up flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#ff4500]"></span>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    {activeModalProject.title} — Video Walkthrough
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    720p 30fps High-Bitrate Architecture Showcase
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <video
                src={activeModalProject.videoUrl}
                poster={activeModalProject.posterUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-black/30 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#ff4500] hover:bg-[#ff5722] text-white text-xs font-bold font-mono transition-all"
                  >
                    {activeModalProject.ctaText}
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Bottom Figma-Style Canvas Dock (Replicating Reference Video) */}
      <BottomCanvasDock 
        isRebuilding={isRebuilding}
        setIsRebuilding={setIsRebuilding}
        currentStep={activeStep}
        totalSteps={totalSteps}
        onReplay={handleReplay}
        onTogglePlayPause={handleTogglePlayPause}
      />
    </div>
  );
}
