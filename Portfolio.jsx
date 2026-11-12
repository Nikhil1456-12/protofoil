import { useState, useEffect } from 'react';

// The 12 Collaborative AI Builder Agents from the Video
const AGENTS = {
  typevert: { name: 'Typevert', color: '#3B82F6', textColor: '#FFF', icon: 'fa-font' },
  motion: { name: 'Motion', color: '#EC4899', textColor: '#FFF', icon: 'fa-wand-magic-sparkles' },
  comp: { name: 'Comp', color: '#8B5CF6', textColor: '#FFF', icon: 'fa-cubes' },
  index: { name: 'Index', color: '#06B6D4', textColor: '#000', icon: 'fa-database' },
  qa: { name: 'QA', color: '#10B981', textColor: '#000', icon: 'fa-vial-circle-check' },
  deploy: { name: 'Deploy', color: '#FF4D2E', textColor: '#FFF', icon: 'fa-rocket' },
  palette: { name: 'Palette', color: '#F59E0B', textColor: '#000', icon: 'fa-palette' },
  lint: { name: 'Lint', color: '#94A3B8', textColor: '#000', icon: 'fa-check-double' },
  security: { name: 'Security', color: '#EF4444', textColor: '#FFF', icon: 'fa-shield-halved' },
  layout: { name: 'Layout', color: '#EAB308', textColor: '#000', icon: 'fa-table-columns' },
  review: { name: 'Review', color: '#D946EF', textColor: '#FFF', icon: 'fa-code-pull-request' },
  connect: { name: 'Connect', color: '#14B8A6', textColor: '#000', icon: 'fa-network-wired' },
};

// Initial floating cursor positions across the viewport
const INITIAL_CURSORS = [
  { id: 'typevert', ...AGENTS.typevert, x: 22, y: 14, action: 'connecting' },
  { id: 'motion', ...AGENTS.motion, x: 14, y: 36, action: 'typing' },
  { id: 'comp', ...AGENTS.comp, x: 78, y: 22, action: 'placing' },
  { id: 'index', ...AGENTS.index, x: 34, y: 62, action: 'indexing' },
  { id: 'qa', ...AGENTS.qa, x: 84, y: 45, action: 'asserting' },
  { id: 'deploy', ...AGENTS.deploy, x: 68, y: 76, action: 'edge sync' },
  { id: 'palette', ...AGENTS.palette, x: 48, y: 28, action: 'sampling' },
  { id: 'lint', ...AGENTS.lint, x: 18, y: 82, action: 'formatting' },
  { id: 'security', ...AGENTS.security, x: 62, y: 38, action: 'validating' },
  { id: 'layout', ...AGENTS.layout, x: 26, y: 52, action: 'aligning' },
  { id: 'review', ...AGENTS.review, x: 74, y: 58, action: 'diff check' },
  { id: 'connect', ...AGENTS.connect, x: 54, y: 88, action: 'mesh route' },
];

// Interactive Figma / Canvas Style Bounding Box with Live Typewriter Effect
function AgenticTextLine({
  agent,
  fullText,
  dimension = '520 × 36',
  delay = 200,
  speed = 18,
  isActive = true,
  bulletPrefix = '▸ '
}) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayText(fullText);
      setIsComplete(true);
      return;
    }

    let timeout;
    let interval;
    let index = 0;

    setDisplayText('');
    setIsComplete(false);

    timeout = setTimeout(() => {
      setIsTyping(true);
      interval = setInterval(() => {
        index += 1;
        setDisplayText(fullText.slice(0, index));
        if (index >= fullText.length) {
          clearInterval(interval);
          setIsTyping(false);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [fullText, delay, speed, isActive]);

  return (
    <div className="relative group my-2.5 transition-all duration-300">
      {/* Figma Selection Bounding Box */}
      <div
        className="relative p-2.5 sm:p-3 rounded-lg border transition-all duration-300"
        style={{
          borderColor: isTyping ? agent.color : `${agent.color}40`,
          backgroundColor: isTyping ? `${agent.color}0a` : 'rgba(255, 255, 255, 0.012)',
          boxShadow: isTyping ? `0 0 16px ${agent.color}25` : 'none'
        }}
      >
        {/* 4 Corner Anchor Handles (White squares with agent color border) */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-[1px] border shadow-xs" style={{ borderColor: agent.color }} />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-[1px] border shadow-xs" style={{ borderColor: agent.color }} />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-[1px] border shadow-xs" style={{ borderColor: agent.color }} />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-[1px] border shadow-xs" style={{ borderColor: agent.color }} />

        {/* Top Agent Status Badge with Arrow (Exact from Reel) */}
        <div
          className="absolute -top-3.5 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-md border border-white/20 z-20 select-none"
          style={{ backgroundColor: agent.color, color: agent.textColor }}
        >
          <span className={`w-1.5 h-1.5 rounded-full bg-current ${isTyping ? 'animate-ping' : ''}`} />
          <span>{agent.name} · {isTyping ? 'typing' : 'placed'}</span>
        </div>

        {/* Dimension Pill (Like Figma / Canva inspect) */}
        {dimension && (
          <div className="absolute -top-3 right-2 px-1.5 py-0.5 rounded text-[9px] font-mono text-slate-400 bg-[#08080a] border border-white/10 hidden sm:block select-none">
            {dimension}
          </div>
        )}

        {/* Text with dynamic SVG cursor arrow at insertion point */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans pr-6">
          {bulletPrefix && <span className="font-bold text-[#FF4D2E] mr-1.5">{bulletPrefix}</span>}
          {displayText}
          {isTyping && (
            <span className="inline-flex items-center ml-1 align-middle">
              <span className="w-0.5 h-4 inline-block animate-pulse" style={{ backgroundColor: agent.color }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill={agent.color} className="inline-block ml-0.5 drop-shadow -rotate-12">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              </svg>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [agentsActive, setAgentsActive] = useState(true);
  const [cursors, setCursors] = useState(INITIAL_CURSORS);
  const [cycleKey, setCycleKey] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Smooth floating cursor drift simulation
  useEffect(() => {
    if (!agentsActive) return;

    const interval = setInterval(() => {
      setCursors(prev =>
        prev.map(c => {
          const dx = (Math.random() - 0.5) * 6;
          const dy = (Math.random() - 0.5) * 6;
          return {
            ...c,
            x: Math.min(92, Math.max(5, c.x + dx)),
            y: Math.min(92, Math.max(8, c.y + dy)),
          };
        })
      );
    }, 2200);

    return () => clearInterval(interval);
  }, [agentsActive]);

  // Replay build / typing trigger
  const handleReplayBuild = () => {
    setCycleKey(prev => prev + 1);
  };

  // Authentic Projects strictly ordered:
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
      lines: [
        {
          agent: AGENTS.motion,
          text: "Holographic Three.js Arc Reactor HUD rendered at 60 FPS WebGL with real-time audio reactivity.",
          dim: "520 × 38",
          delay: 200,
        },
        {
          agent: AGENTS.comp,
          text: "Continuous Silero VAD listening (<50ms latency) & local LLM voice synthesis for zero-lag conversational control.",
          dim: "520 × 38",
          delay: 900,
        },
        {
          agent: AGENTS.index,
          text: "Zero-cable encrypted remote Android device control via authenticated Termux SSH and Tailscale WireGuard mesh.",
          dim: "520 × 38",
          delay: 1600,
        },
        {
          agent: AGENTS.qa,
          text: "Real-time camera surveillance, GPS tracking, and automated mobile hardware actuation.",
          dim: "520 × 38",
          delay: 2300,
        }
      ],
      tech: ["React 19", "Three.js", "FastAPI", "Silero VAD", "Tailscale Mesh", "Termux SSH", "WebSockets"],
      liveUrl: "/protofoil/jarvis/",
      githubUrl: "https://github.com/Nikhil1456-12/Jarvis",
      liveText: "3D HUD Demo ↗",
    },
    {
      num: "02",
      title: "INFOSYS PATHSAATHI",
      subtitle: "Vernacular AI Travel Concierge & Offline Edge System",
      domain: "INFOSYS MAJOR PROJECT · CAPSTONE ARCHITECT",
      tag: "Infosys Capstone",
      tagColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
      videoMp4: "/protofoil/docs/videos/pathsaathi_preview.mp4",
      lines: [
        {
          agent: AGENTS.qa,
          text: "Offline-first vernacular travel companion engineered for high-density pilgrimages with poor or zero connectivity.",
          dim: "520 × 38",
          delay: 300,
        },
        {
          agent: AGENTS.comp,
          text: "Orchestrates localized on-device sub-agents for voice planning, road transit, and accommodation booking.",
          dim: "520 × 38",
          delay: 1000,
        },
        {
          agent: AGENTS.security,
          text: "SQLite offline sync, edge ChromaDB vector search, and biometric authentication via Android Keystore & HSM.",
          dim: "520 × 38",
          delay: 1700,
        },
        {
          agent: AGENTS.deploy,
          text: "Sponsored Infosys Springboard capstone project deployed and validated on physical Android hardware.",
          dim: "520 × 38",
          delay: 2400,
        }
      ],
      tech: ["Flutter", "Dart", "Multi-Agent System", "SQLite", "ChromaDB", "Android Keystore", "FastAPI"],
      liveUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      githubUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      liveText: "Architecture & Code ↗",
    },
    {
      num: "03",
      title: "AI DATA ANALYSIS WEBSITE",
      subtitle: "Natural Language to SQL Conversational Analytics Engine",
      domain: "AGENTIC ANALYTICS · FULL STACK",
      tag: "Agentic Analytics",
      tagColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
      videoMp4: null,
      lines: [
        {
          agent: AGENTS.typevert,
          text: "Translates conversational natural language business questions into schema-validated SQL queries with zero data leakage.",
          dim: "520 × 38",
          delay: 200,
        },
        {
          agent: AGENTS.palette,
          text: "Returns instant structured tabular data and generates responsive, dynamic interactive Plotly analytics charts.",
          dim: "520 × 38",
          delay: 900,
        },
        {
          agent: AGENTS.deploy,
          text: "Containerized full-stack architecture leveraging Google Gemini API schema reasoning and React 19 UI.",
          dim: "520 × 38",
          delay: 1600,
        }
      ],
      tech: ["React 19", "Node.js", "Express", "Google Gemini API", "Docker", "Plotly", "Tailwind CSS"],
      liveUrl: "https://nikhil1456-12.github.io/-Data-Analyst-AI/",
      githubUrl: "https://github.com/Nikhil1456-12/-Data-Analyst-AI",
      liveText: "Launch Live App ↗",
    },
    {
      num: "04",
      title: "CUSTOMER CHURN INTELLIGENCE",
      subtitle: "Production ML Financial Risk & Retention Engine",
      domain: "FINANCIAL RISK & RETENTION ENGINE · ML PRODUCTION",
      tag: "84.2% ROC-AUC",
      tagColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
      videoMp4: "/protofoil/docs/videos/churn_preview.mp4",
      lines: [
        {
          agent: AGENTS.qa,
          text: "Interactive enterprise retention portal featuring dynamic customer CSV/Excel upload with automated column mapping.",
          dim: "520 × 38",
          delay: 200,
        },
        {
          agent: AGENTS.review,
          text: "Sub-100ms client-side inference (84.2% ROC-AUC) calculating individual flight risk and total $MRR revenue exposure.",
          dim: "520 × 38",
          delay: 900,
        },
        {
          agent: AGENTS.motion,
          text: "What-If retention simulation engine modeling financial impact of contract interventions in real time.",
          dim: "520 × 38",
          delay: 1600,
        }
      ],
      tech: ["Python", "Scikit-learn", "84.2% ROC-AUC", "Plotly", "JavaScript", "Feature Engineering", "What-If Engine"],
      liveUrl: "https://nikhil1456-12.github.io/CUSTOMER-CHURN-ANALYSIS/",
      githubUrl: "https://github.com/Nikhil1456-12/CUSTOMER-CHURN-ANALYSIS",
      liveText: "Launch Live App ↗",
    },
    {
      num: "05",
      title: "RECOVERX",
      subtitle: "Autonomous Revenue Recovery & Risk Underwriting Platform",
      domain: "AUTONOMOUS REVENUE RECOVERY · 100% TEST COVERAGE",
      tag: "Pytest 32/32 (100%)",
      tagColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
      videoMp4: "/protofoil/docs/videos/recoverx_preview.mp4",
      lines: [
        {
          agent: AGENTS.qa,
          text: "Event-driven revenue recovery microservices engine with automated invoice anomaly detection and payment risk underwriting.",
          dim: "520 × 38",
          delay: 200,
        },
        {
          agent: AGENTS.security,
          text: "Complete OpenAPI documentation and a 100% pass rate across 32 unit and integration tests (0.85s runtime).",
          dim: "520 × 38",
          delay: 900,
        },
        {
          agent: AGENTS.deploy,
          text: "Automated debt collection workflows, recovery action dispatching, and audit logging.",
          dim: "520 × 38",
          delay: 1600,
        }
      ],
      tech: ["FastAPI", "Python 3.12", "Docker", "Pytest (32/32 Pass)", "Microservices", "SQLite"],
      liveUrl: "https://nikhil1456-12.github.io/RecoverX/",
      githubUrl: "https://github.com/Nikhil1456-12/RecoverX",
      liveText: "Explore System ↗",
    },
    {
      num: "06",
      title: "CREDIT RISK & LOAN DEFAULT PREDICTION",
      subtitle: "Probability of Default Underwriting Model",
      domain: "PROBABILITY OF DEFAULT MODEL · FINTECH ML",
      tag: "FinTech ML",
      tagColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
      videoMp4: null,
      lines: [
        {
          agent: AGENTS.qa,
          text: "Underwriting analytics engine quantifying probability of default across diverse applicant financial profiles.",
          dim: "520 × 38",
          delay: 200,
        },
        {
          agent: AGENTS.index,
          text: "Calibrated statistical modeling with real-time risk tiering and decision explainability.",
          dim: "520 × 38",
          delay: 900,
        },
        {
          agent: AGENTS.lint,
          text: "Production-tested pipeline with automated preprocessing and feature validation.",
          dim: "520 × 38",
          delay: 1600,
        }
      ],
      tech: ["Python", "Scikit-learn", "Streamlit", "Statistical Modeling", "Credit Underwriting"],
      liveUrl: "https://nikhil1456-12.github.io/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM/",
      githubUrl: "https://github.com/Nikhil1456-12/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM",
      liveText: "Launch Live App ↗",
    }
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

  const skillsList = [
    { category: "LANGUAGES", items: "Python 3.12, Java, C, C++, SQL (PostgreSQL & MySQL), JavaScript (ES6+), Dart" },
    { category: "AI & MACHINE LEARNING", items: "PyTorch, Scikit-learn, XGBoost, LightGBM, Transformers, ChromaDB, LangChain, Ollama" },
    { category: "BACKEND & ARCHITECTURE", items: "FastAPI, Express.js, RESTful APIs, WebSockets, Microservices, SQLite, Docker" },
    { category: "FRONTEND & MOBILE", items: "React 19, Tailwind CSS, Vite, Three.js (WebGL), Flutter, HTML5/CSS3" },
    { category: "DEV, CLOUD & NETWORKING", items: "Git, GitHub Actions, Linux, Termux, Tailscale Mesh, WireGuard, Postman, Pytest" },
  ];

  return (
    <div key={cycleKey} className="min-h-screen bg-[#08080a] text-slate-100 font-sans relative selection:bg-[#ff4d2e] selection:text-white overflow-hidden">
      
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[550px] hero-glow pointer-events-none" />

      {/* Live Agent Swarm (Agentic Build Motion Simulation) */}
      {agentsActive && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {cursors.map(c => (
            <div
              key={c.id}
              className="agent-cursor absolute transition-all duration-700 ease-out flex items-center gap-1.5"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
              }}
            >
              {/* SVG Cursor Pointer */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill={c.color} className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              </svg>
              {/* Agent Pill Badge with Live Action */}
              <div 
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg border border-white/10 backdrop-blur-md"
                style={{ backgroundColor: c.color, color: c.textColor }}
              >
                <i className={`fas ${c.icon} text-[9px]`}></i>
                <span>{c.name} · {c.action}</span>
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

      {/* Hero Section (Exact Layout & Visual Balance from Reel 00:02 - 00:08) */}
      <section id="home" className="relative pt-24 sm:pt-32 pb-16 px-6 sm:px-12 max-w-7xl mx-auto min-h-[92vh] flex flex-col justify-between">
        
        {/* Giant Typographic Backdrop: "PORTFOLIO" with Typevert Bounding Box */}
        <div className="absolute top-14 sm:top-18 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
          <div className="relative inline-block">
            {/* Typevert Connecting Bounding Box from Reel Frame 02 */}
            <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border border-blue-500/40 rounded-lg pointer-events-none">
              <div className="absolute -top-3 left-4 px-2 py-0.5 rounded bg-blue-600 text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow">
                <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                <span>Typevert · connecting</span>
              </div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500" />
            </div>

            <h1 className="font-display text-[22vw] sm:text-[19vw] leading-none font-black text-[#FF4D2E]/20 tracking-tighter uppercase blur-[0.5px]">
              PORTFOLIO
            </h1>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end pt-6">
          
          {/* Left Column: Greeting, Name, Role, Bio & CTAs */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <p className="font-handwriting text-2xl sm:text-3xl text-slate-300 font-bold tracking-wide">
              Hello, I'm
            </p>

            <h1 className="font-display text-5xl sm:text-7xl font-black tracking-tight leading-none text-white uppercase">
              NIKHIL <br />
              <span className="text-white">SAI KUMAR KANDI.</span>
            </h1>

            {/* Role Header with Active Agent Pill */}
            <div className="relative inline-block pt-1">
              <div className="border border-orange-500/50 rounded-lg p-2 bg-orange-500/5 relative">
                <div className="absolute -top-2.5 left-2 px-1.5 py-0.5 rounded bg-[#FF4D2E] text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow">
                  <i className="fas fa-terminal text-[8px]"></i>
                  <span>Role · active</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-[#FF4D2E] uppercase">
                  AI SYSTEMS &amp; SOFTWARE ENGINEER
                </h2>
              </div>
            </div>

            {/* Live Typed Bio Paragraph */}
            <AgenticTextLine
              agent={AGENTS.comp}
              fullText="I build autonomous voice AI engines, offline-first vernacular mobile apps, and high-reliability ML systems that actually ship. Information Technology student at ANITS (CGPA 8.74)."
              dimension="480 × 58"
              delay={300}
              speed={15}
              bulletPrefix=""
            />

            {/* CTA Buttons with Layout Agent Bounding Box */}
            <div className="relative inline-block pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="px-7 py-3.5 rounded-xl bg-[#FF4D2E] text-white font-bold text-sm hover:bg-[#ff3e1d] transition-all shadow-lg shadow-[#FF4D2E]/25 hover:shadow-[#FF4D2E]/40 flex items-center gap-2 group"
                >
                  <span>VIEW WORK</span>
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </a>

                <a
                  href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/Nikhil1456-12"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
                >
                  GitHub ↗
                </a>
              </div>

              {/* Layout Agent Pointer from Reel Frame 08 */}
              <div className="absolute -bottom-3 left-4 px-2 py-0.5 rounded bg-yellow-400 text-black text-[9px] font-mono font-bold flex items-center gap-1 shadow-md pointer-events-none">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#000" className="-rotate-12">
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
                <span>Layout · placing</span>
              </div>
            </div>

            <p className="font-mono text-[11px] text-slate-500 pt-3">
              BASED IN VISAKHAPATNAM, INDIA · OPEN TO OPPORTUNITIES
            </p>
          </div>

          {/* Center Column: Nikhil's Real Cutout Portrait with Agent Cursors (Exact from Reel 00:03 - 00:07) */}
          <div className="lg:col-span-4 flex justify-center relative select-none">
            <div className="relative w-full max-w-sm sm:max-w-md h-[420px] sm:h-[500px] flex items-end justify-center">
              
              {/* Backlight Flame Aura */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FF4D2E]/25 to-transparent blur-3xl pointer-events-none" />

              {/* Nikhil's Real Cutout Portrait */}
              <img
                src="/protofoil/assets/nikhil_portrait.png"
                alt="Nikhil Sai Kumar Kandi"
                className="relative z-10 w-full h-full object-contain object-bottom pointer-events-none drop-shadow-[0_15px_45px_rgba(255,77,46,0.22)]"
              />

              {/* Floating Multi-Agent Cursors Anchored Directly on the Portrait (from Reel 00:03 - 00:07) */}
              <div className="absolute top-28 left-4 z-20 px-2 py-0.5 rounded bg-[#FF4D2E] text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow-lg border border-white/20">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFF" className="-rotate-12"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                <span>Deploy</span>
              </div>

              <div className="absolute top-40 right-4 z-20 px-2 py-0.5 rounded bg-[#F59E0B] text-black text-[9px] font-mono font-bold flex items-center gap-1 shadow-lg border border-white/20">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#000" className="-rotate-12"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                <span>Palette</span>
              </div>

              <div className="absolute bottom-24 left-6 z-20 px-2 py-0.5 rounded bg-[#EC4899] text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow-lg border border-white/20">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFF" className="-rotate-12"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                <span>Review</span>
              </div>

              <div className="absolute bottom-20 right-8 z-20 px-2 py-0.5 rounded bg-[#8B5CF6] text-white text-[9px] font-mono font-bold flex items-center gap-1 shadow-lg border border-white/20">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFF" className="-rotate-12"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
                <span>Comp</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked High-Impact Stats */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between sm:justify-start gap-6 lg:gap-8 pb-4">
            <div className="border-l-2 border-[#FF4D2E] pl-4">
              <div className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                06<span className="text-[#FF4D2E]">.</span>
              </div>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Projects Shipped
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
        <div className="relative z-10 pt-8 pb-4 flex items-center justify-between text-xs font-mono text-slate-500 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LIVE ENVIRONMENT · ACTIONS &amp; FLOW ACTIVE</span>
          </div>
          <a href="#work" className="hover:text-white transition-colors flex items-center gap-1">
            <span>SCROLL TO WORK</span>
            <i className="fas fa-chevron-down text-[10px]"></i>
          </a>
        </div>
      </section>

      {/* Featured Projects Section: "WORK THAT SHIPS." (from Reel 00:09 - 00:19) */}
      <section id="work" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase mb-2">
              SELECTED WORK
            </p>
            <h2 className="font-display text-5xl sm:text-7xl font-black tracking-tight leading-none uppercase text-white">
              WORK THAT <span className="text-[#FF4D2E]">SHIPS.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl">
              Production systems, offline-first mobile agents, and client-side ML. Every project here went from a brief to something real people open and use.
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
              <p className="text-slate-400 uppercase text-[10px]">Sites Live</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black text-emerald-400">32.</span>
              <p className="text-slate-400 uppercase text-[10px]">Tests Written</p>
            </div>
          </div>
        </div>

        {/* Project Cards Grid with Typewriter Action Lines */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.num}
              className="group relative rounded-2xl bg-[#0f0f14] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#FF4D2E]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF4D2E]/10"
            >
              {/* Card Header (Pure Engineering Card Layout from Reel) */}
              <div className="p-6 sm:p-8 pb-4 border-b border-white/10 bg-[#0d0d12]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl font-black text-[#FF4D2E]">
                      {proj.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-[#FF4D2E] transition-colors leading-none">
                        {proj.title}
                      </h3>
                      <p className="font-mono text-[11px] text-slate-400 mt-1">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border backdrop-blur-md uppercase tracking-wider ${proj.tagColor}`}>
                    {proj.tag}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#FF4D2E]">
                  <span>{proj.domain}</span>
                </div>
              </div>

              {/* Card Body: Live Typewritten Lines Powered by AI Agents (Arrow gives the text) */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="space-y-3 mb-6">
                    {proj.lines.map((line, lIdx) => (
                      <AgenticTextLine
                        key={lIdx}
                        agent={line.agent}
                        fullText={line.text}
                        dimension={line.dim}
                        delay={line.delay}
                        speed={14}
                        isActive={agentsActive}
                      />
                    ))}
                  </div>

                  {/* Tech Tags with Deploy Pointer */}
                  <div className="relative pt-2">
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
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={proj.liveUrl}
                    target={proj.liveUrl.startsWith('http') ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#FF4D2E] hover:bg-[#ff3e1d] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#FF4D2E]/20"
                  >
                    {proj.liveText}
                  </a>

                  {proj.videoMp4 && (
                    <button
                      onClick={() => setActiveVideoModal(proj)}
                      className="py-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                      title="Watch High-Def Video Preview"
                    >
                      <i className="fas fa-play text-[10px] text-cyan-400"></i>
                      <span>Demo</span>
                    </button>
                  )}

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

      {/* Video Preview Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0f0f14] border border-white/20 overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#14141a]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D2E]"></span>
                <span className="font-display text-lg font-bold text-white uppercase">{activeVideoModal.title} — Video Demo</span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <i className="fas fa-xmark"></i>
              </button>
            </div>
            <div className="w-full aspect-video bg-black">
              <video
                src={activeVideoModal.videoMp4}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Stack I Ship With & Built Fast Shipped Real (from Reel 00:20 - 00:27) */}
      <section id="stack" className="relative py-20 bg-[#0a0a0e] border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase">
              TOOLING &amp; FOUNDATIONS
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white mt-1">
              STACK I SHIP WITH<span className="text-[#FF4D2E]">.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 hidden sm:block uppercase">
            29 TOOLS · TESTED TO DEPLOY
          </p>
        </div>

        {/* Infinite Marquee Ribbon */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/5">
          <div className="animate-marquee-infinite flex items-center gap-8 whitespace-nowrap font-mono text-sm sm:text-base text-slate-300 font-semibold">
            <span>FastAPI</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>C++</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Java</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>pnpm</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Turborepo</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Git</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>GitHub</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Postman</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Python 3.12</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>PyTorch</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Scikit-learn</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>React 19</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Three.js (WebGL)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Flutter</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Docker</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>SQLite</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>ChromaDB</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Tailscale &amp; WireGuard</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Pytest (32/32 Pass)</span>
            <span className="text-[#FF4D2E]">✦</span>

            {/* Repeat for seamless loop */}
            <span>FastAPI</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>C++</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Java</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>pnpm</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Turborepo</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Git</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>GitHub</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Postman</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Python 3.12</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>PyTorch</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Scikit-learn</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>React 19</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Three.js (WebGL)</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Flutter</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Docker</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>SQLite</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>ChromaDB</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Tailscale &amp; WireGuard</span>
            <span className="text-[#FF4D2E]">✦</span>
            <span>Pytest (32/32 Pass)</span>
            <span className="text-[#FF4D2E]">✦</span>
          </div>
        </div>

        {/* Built Fast, Shipped Real Metric & Roles (from Reel 00:23) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16 grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Big Typographic Stats Block */}
          <div className="lg:col-span-5 space-y-4">
            <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase">
              TRACK RECORD
            </p>
            <h3 className="font-display text-5xl sm:text-7xl font-black uppercase text-white leading-none">
              BUILT FAST.<br />
              <span className="text-[#FF4D2E]">SHIPPED REAL.</span>
            </h3>
            <div className="font-display text-6xl sm:text-7xl font-black text-white">
              32<span className="text-[#FF4D2E]">.</span>
            </div>
            <p className="font-mono text-xs text-slate-400 max-w-sm">
              Automated unit &amp; integration tests passing in RecoverX with 100% pass rate in 0.85s.
            </p>
          </div>

          {/* Right Column: Roles & Experience List with Bounding Boxes */}
          <div className="lg:col-span-7 space-y-4">
            {internships.map((exp, idx) => (
              <div
                key={idx}
                className="relative p-4 rounded-xl bg-[#121217] border border-white/10 hover:border-[#FF4D2E]/40 transition-colors"
              >
                {/* Figma Corner Handles */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#FF4D2E]/60" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#FF4D2E]/60" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#FF4D2E]/60" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#FF4D2E]/60" />

                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#FF4D2E]/20 text-[#FF4D2E]">
                      {exp.period}
                    </span>
                    <h4 className="text-base font-bold text-white">{exp.role}</h4>
                  </div>
                  <span className="font-mono text-xs text-[#FF4D2E] font-bold">{exp.company}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section: "NOT JUST CODE. CODE THAT SHIPS." (from Reel 00:28 - 00:35) */}
      <section id="about" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase mb-2">
            ABOUT
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

          {/* Right: Core Engineering Principles + Signature Quote Card with Agent Typing */}
          <div className="lg:col-span-5 space-y-4">
            <AgenticTextLine
              agent={AGENTS.qa}
              fullText="01 Test what can silently break — Pricing, validation, state machines, encryption. 32 automated tests prove RecoverX never fails silently."
              dimension="420 × 40"
              delay={200}
              speed={15}
              bulletPrefix=""
            />
            <AgenticTextLine
              agent={AGENTS.comp}
              fullText="02 AI in the loop, human in command — LLMs accelerate prototyping; deterministic constraints and human review ship production."
              dimension="420 × 40"
              delay={800}
              speed={15}
              bulletPrefix=""
            />
            <AgenticTextLine
              agent={AGENTS.deploy}
              fullText="03 Ship, then polish — Deploy live endpoints on GitHub Pages first, then refine under real latency constraints."
              dimension="420 × 40"
              delay={1400}
              speed={15}
              bulletPrefix=""
            />
            <AgenticTextLine
              agent={AGENTS.palette}
              fullText="04 Deep fundamentals over hype — Strong Data Structures & Algorithms, OS concepts, and networked systems over ephemeral tool trends."
              dimension="420 × 40"
              delay={2000}
              speed={15}
              bulletPrefix=""
            />

            {/* Signature Reel Quote Card (Exact from Reel 00:33) */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#FF4D2E] to-[#bd240a] text-white shadow-xl mt-6">
              {/* Figma Corner Handles */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border border-[#FF4D2E]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border border-[#FF4D2E]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border border-[#FF4D2E]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-[#FF4D2E]" />

              <div className="absolute -top-3 left-4 px-2 py-0.5 rounded bg-black text-white text-[10px] font-mono font-bold flex items-center gap-1.5 shadow">
                <i className="fas fa-quote-left text-[9px] text-[#FF4D2E]"></i>
                <span>Review · verified</span>
              </div>

              <p className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight">
                SHIP THE FEATURE, THEN WRITE THE TEST THAT PROVES IT CAN'T SILENTLY BREAK.
              </p>
              <p className="font-mono text-xs font-bold mt-4 text-white/90 uppercase tracking-widest">
                — Nikhil Sai Kumar Kandi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section: "LET'S WORK TOGETHER." (from Reel 00:36 - 00:39) */}
      <section id="contact" className="relative py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Live Typed Text */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs font-bold text-[#FF4D2E] tracking-widest uppercase">
              CONTACT
            </p>
            <h2 className="font-display text-5xl sm:text-7xl font-black uppercase text-white leading-none">
              LET'S WORK<br />
              <span className="text-[#FF4D2E]">TOGETHER.</span>
            </h2>

            {/* Live Typing Pitch Box from Reel Frame 38 */}
            <AgenticTextLine
              agent={AGENTS.connect}
              fullText="Open to Software Engineering roles, AI System Architecture, and Machine Learning engineering opportunities. Let's build reliable software that ships."
              dimension="117 × 46"
              delay={400}
              speed={16}
              bulletPrefix=""
            />

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

          {/* Right Column: Giant Sign-off with Multi-Cursor Cluster from Reel 00:38 */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end text-left lg:text-right relative">
            
            {/* Multiplayer Cursor Cluster hovering around the sign-off */}
            <div className="relative inline-block">
              <h3 className="font-display text-6xl sm:text-8xl font-black uppercase leading-none tracking-tight">
                SHIP IT<br />
                <span className="text-[#FF4D2E]">FOR REAL.</span>
              </h3>

              {/* Cursor Swarm Clustered on Corner (Frame 38 / 00:38) */}
              <div className="absolute -bottom-6 -right-6 flex flex-col items-end gap-1 pointer-events-none select-none">
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#EC4899] text-white shadow">Motion</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#06B6D4] text-black shadow">Index</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#10B981] text-black shadow">QA</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#FF4D2E] text-white shadow">Deploy</span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#F59E0B] text-black shadow">Layout</span>
                  <div className="w-6 h-6 rounded-full bg-[#FF4D2E] text-white flex items-center justify-center text-[10px] font-bold shadow-lg animate-bounce">
                    🚀
                  </div>
                </div>
              </div>
            </div>

            <p className="font-mono text-xs text-slate-500 mt-6 tracking-widest uppercase">
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
            <span className="text-white font-bold tracking-wider">12 AGENTS LIVE</span>
          </div>

          <div className="h-4 w-px bg-white/20" />

          <button
            onClick={handleReplayBuild}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
            title="Replay Agent Typing & Build Flow"
          >
            <i className="fas fa-rotate text-cyan-400 text-[10px]"></i>
            <span className="hidden sm:inline">Replay Build</span>
          </button>

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
