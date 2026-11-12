import { useState, useEffect, useRef } from 'react';

// Anti-Gravity Plus Flow — Physics & Particle System Canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Floating particle nodes reacting gently to cursor coordinates
    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connected constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Render and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle cursor push reaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 1.2;
          p.y -= (dy / dist) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeTab, setActiveTab] = useState('ALL');

  // Trigger Phase 1 Spring Entrance on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Strict Project Specifications (Zero Hallucinations, Exact Order)
  const projects = [
    {
      id: "jarvis",
      num: "01",
      title: "JARVIS",
      category: "AI_SYSTEMS",
      badge: "Flagship AI OS",
      subtitle: "Autonomous Multimodal Voice OS & Encrypted Mobile Mesh",
      videoUrl: "/protofoil/docs/videos/jarvis_preview.mp4",
      posterUrl: "/protofoil/docs/previews/jarvis_preview.jpg",
      bullets: [
        "Holographic Three.js Arc Reactor HUD rendered at 60 FPS WebGL with real-time audio reactivity.",
        "Continuous Silero VAD listening (<50ms latency) & local LLM voice synthesis for zero-lag conversational control.",
        "Zero-cable encrypted remote Android device control via authenticated Termux SSH and Tailscale WireGuard mesh."
      ],
      tech: ["React 19", "Three.js", "FastAPI", "Silero VAD", "Tailscale Mesh", "Termux SSH", "WebSockets"],
      liveUrl: "/protofoil/jarvis/",
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
      videoUrl: "/protofoil/docs/videos/pathsaathi_preview.mp4",
      posterUrl: "/protofoil/docs/previews/pathsaathi_preview.png",
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
      posterUrl: "/protofoil/docs/previews/data_analyst_preview.png",
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
      videoUrl: "/protofoil/docs/videos/churn_preview.mp4",
      posterUrl: "/protofoil/docs/previews/churn_preview.png",
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
      videoUrl: "/protofoil/docs/videos/recoverx_preview.mp4",
      posterUrl: "/protofoil/docs/previews/recoverx_preview.png",
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
      badge: "FinTech ML",
      subtitle: "Probability of Default Underwriting Model",
      videoUrl: null,
      posterUrl: "/protofoil/docs/previews/credit_risk_preview.png",
      bullets: [
        "Underwriting analytics engine quantifying probability of default across diverse applicant financial profiles.",
        "Calibrated statistical modeling with real-time risk tiering and decision explainability.",
        "Production-tested pipeline with automated preprocessing and feature validation."
      ],
      tech: ["Python", "Scikit-learn", "Streamlit", "Statistical Modeling", "Credit Underwriting"],
      liveUrl: "https://nikhil1456-12.github.io/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM/",
      githubUrl: "https://github.com/Nikhil1456-12/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM",
      ctaText: "Launch Live App ↗",
      accent: "from-blue-500 to-indigo-600"
    }
  ];

  const filteredProjects = activeTab === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const internships = [
    {
      company: "Labmentix",
      role: "Machine Learning & Data Analytics Intern",
      period: "Oct 2024 – Nov 2024",
      desc: "Engineered predictive machine learning pipelines, conducted exploratory data analysis, and delivered high-precision models."
    },
    {
      company: "NullClass",
      role: "Full Stack Software Development Intern",
      period: "Jul 2024 – Aug 2024",
      desc: "Developed responsive modern web interfaces, integrated secure RESTful endpoints, and contributed to full-lifecycle software delivery."
    },
    {
      company: "SkillDzire",
      role: "Python & Backend Engineering Intern",
      period: "May 2024 – Jun 2024",
      desc: "Constructed Python backend utilities, automated data transformation scripts, and built modular system components."
    },
    {
      company: "Infosys Springboard",
      role: "Lead Architect — PathSaathi",
      period: "2024 – 2025",
      desc: "Spearheaded design and delivery of PathSaathi, an offline-first vernacular multi-agent pilgrimage concierge."
    }
  ];

  const skills = [
    "Python 3.12", "FastAPI", "PyTorch", "Scikit-learn", "React 19", "Three.js",
    "Flutter & Dart", "SQLite", "PostgreSQL", "Docker", "ChromaDB", "Tailscale",
    "Termux SSH", "Pytest (32/32)", "Git & CI/CD", "TypeScript", "REST APIs", "C++"
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans relative selection:bg-indigo-500 selection:text-white overflow-x-hidden antialiased">
      
      {/* Background Interactive Isometric Grid & Particle Node Canvas */}
      <div className="fixed inset-0 isometric-grid pointer-events-none z-0" />
      <ParticleCanvas />

      {/* Floating Island Navigation Pill */}
      <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <nav className="flex items-center gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full bg-[#0f172a]/80 border border-white/10 backdrop-blur-xl shadow-glow-indigo text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2 pr-3 border-r border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></span>
            <span className="font-bold text-white tracking-wider">NIKHIL</span>
          </div>

          <a href="#hero" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#projects" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">Work</a>
          <a href="#experience" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">Career</a>
          <a href="#contact" className="px-2.5 py-1 text-slate-300 hover:text-white transition-colors">Contact</a>

          <a
            href="https://github.com/Nikhil1456-12"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-white/10 text-slate-400 hover:text-indigo-400 transition-colors"
            title="GitHub Profile"
          >
            <i className="fab fa-github text-sm"></i>
          </a>
        </nav>
      </header>

      {/* Hero Section — Exact Specifications & Personalization Data */}
      <section id="hero" className="relative z-10 pt-28 sm:pt-36 pb-20 px-6 sm:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className={`grid lg:grid-cols-12 gap-10 items-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}>
          
          {/* Left Column: User Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
              <span>KANDI NIKHIL SAI KUMAR</span>
            </div>

            {/* Headline Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
                Information Technology <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Undergraduate @ ANITS
                </span>
              </h1>
            </div>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Specializing in high-reliability software engineering, offline-first mobile systems, and test-driven ML architectures. 
              Architect of <b>JARVIS</b>, <b>Infosys PathSaathi</b>, and <b>Customer Churn Intelligence</b>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg">
              <div className="glass-panel p-3.5 rounded-2xl border border-white/5">
                <span className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">8.74</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">ANITS CGPA</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border border-white/5">
                <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">06+</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Production Apps</p>
              </div>
              <div className="glass-panel p-3.5 rounded-2xl border border-white/5">
                <span className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">100%</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Pytest Pass (32/32)</p>
              </div>
            </div>

            {/* CTAs with Ripple Click Effect */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="ripple px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-glow-indigo hover:shadow-glow-purple transition-all duration-300 flex items-center gap-2 group"
              >
                <span>EXPLORE WORK</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a
                href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                target="_blank"
                rel="noreferrer"
                className="ripple px-6 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:border-purple-400/40 hover:text-white transition-all duration-300"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Nikhil1456-12"
                target="_blank"
                rel="noreferrer"
                className="ripple px-6 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:border-indigo-400/40 hover:text-white transition-all duration-300"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right Column: User Profile Photo with Smooth Border Glow & Depth Shadow */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Radial Multi-Color Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/25 to-pink-500/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Glassmorphic Framed Card */}
              <div className="relative glass-panel rounded-3xl p-4 sm:p-5 border border-indigo-500/30 shadow-2xl backdrop-blur-2xl overflow-hidden">
                
                {/* Photo Container with Depth Shadow */}
                <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#151d30] via-[#0f172a] to-[#070a12] flex items-end justify-center border border-white/10 shadow-inner-glow">
                  
                  {/* Subtle Grid Accent */}
                  <div className="absolute inset-0 isometric-grid opacity-30 pointer-events-none" />

                  {/* High-Resolution Cutout Photo */}
                  <img
                    src="/protofoil/assets/nikhil_portrait.png"
                    alt="Kandi Nikhil Sai Kumar"
                    className="relative z-10 w-full h-full object-contain object-bottom pointer-events-none drop-shadow-[0_20px_50px_rgba(99,102,241,0.35)]"
                  />

                  {/* Verified Identity Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-[#0b0f19]/85 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Kandi Nikhil Sai Kumar</p>
                      <p className="text-[10px] font-mono text-indigo-400">ANITS B.Tech IT · Batch 2023–2027</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section — Asymmetric Staggered 2x2 Grid with Interactive Card Scaling */}
      <section id="projects" className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs font-bold tracking-widest text-indigo-400 uppercase mb-2">
              FEATURED ENGINEERING
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Work That <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Ships.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Production architectures, offline-first mobile agents, and client-side ML pipelines verified with automated test suites.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel text-xs font-mono">
            {['ALL', 'AI_SYSTEMS', 'MOBILE_EDGE', 'ML_FINTECH', 'BACKEND'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-xl transition-all duration-300 font-semibold ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow-indigo'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Staggered Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className={`glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden transition-all duration-500 ${
                idx % 2 === 1 ? 'md:translate-y-4' : ''
              }`}
            >
              {/* Dynamic Inner Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

              <div>
                {/* Card Header & Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl sm:text-2xl font-black text-indigo-400">
                      {proj.num}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 whitespace-nowrap">
                    {proj.badge}
                  </span>
                </div>

                {/* Bullets with Staggered Reveal Styling */}
                <ul className="space-y-2.5 my-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-indigo-400 mt-1 text-xs">◆</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with Video Modal Trigger */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={proj.liveUrl}
                  target={proj.liveUrl.startsWith('http') ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="ripple flex-1 text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-indigo transition-all duration-300"
                >
                  {proj.ctaText}
                </a>

                {proj.videoUrl && (
                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="ripple py-2.5 px-3.5 rounded-xl glass-panel text-slate-200 hover:text-white border border-white/15 text-xs font-mono flex items-center gap-1.5 transition-all duration-300"
                    title="Watch High-Def Video Preview"
                  >
                    <i className="fas fa-play text-[10px] text-indigo-400"></i>
                    <span>Preview</span>
                  </button>
                )}

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ripple py-2.5 px-3.5 rounded-xl glass-panel text-slate-200 hover:text-white border border-white/15 text-xs font-mono transition-all duration-300"
                    title="View GitHub Repository"
                  >
                    <i className="fab fa-github text-sm"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide-Up Modal Sheet for Detailed Video / Interactive View */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl modal-slide-up rounded-3xl glass-panel border border-indigo-500/40 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0f172a]/90">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse"></span>
                <span className="font-bold text-white text-sm sm:text-base">{activeModalProject.title} — Video Preview</span>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <i className="fas fa-xmark text-sm"></i>
              </button>
            </div>
            
            <div className="w-full aspect-video bg-black">
              <video
                src={activeModalProject.videoUrl}
                poster={activeModalProject.posterUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#0b0f19]/90 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Verified 720p 30fps architecture demo</span>
              <a
                href={activeModalProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-bold"
              >
                Open Full System ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tooling Marquee & Authentic Internship Record */}
      <section id="experience" className="relative z-10 py-20 bg-[#070a12]/80 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8">
          <p className="font-mono text-xs font-bold tracking-widest text-indigo-400 uppercase">
            TOOLING &amp; FOUNDATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Stack I Ship With<span className="text-indigo-400">.</span>
          </h2>
        </div>

        {/* Infinite Tooling Ribbon */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/5">
          <div className="animate-marquee-infinite flex items-center gap-8 whitespace-nowrap font-mono text-sm text-slate-300">
            {skills.map((s, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{s}</span>
                <span className="text-indigo-400 text-xs">✦</span>
              </span>
            ))}
            {/* Duplicate for seamless infinite marquee loop */}
            {skills.map((s, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-8">
                <span>{s}</span>
                <span className="text-indigo-400 text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Authentic Experience Timeline Cards */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internships.map((exp, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-semibold">{exp.period}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{exp.company}</h4>
                  <p className="text-xs text-purple-300 font-medium mb-3">{exp.role}</p>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Professional Connect */}
      <section id="contact" className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs font-bold tracking-widest text-indigo-400 uppercase">
              PROFESSIONAL CONNECT
            </p>
            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
              Let's Build <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Software That Ships.
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              Available for Software Engineering, AI Systems Architecture, and Machine Learning opportunities.
            </p>

            <div className="space-y-3 font-mono text-xs pt-2">
              <a
                href="mailto:nikhilsaikumarkandi@gmail.com"
                className="ripple flex items-center gap-3 p-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-indigo-500/40 transition-all"
              >
                <i className="fas fa-envelope text-indigo-400 text-base w-5 text-center"></i>
                <span>nikhilsaikumarkandi@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                target="_blank"
                rel="noreferrer"
                className="ripple flex items-center gap-3 p-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-indigo-500/40 transition-all"
              >
                <i className="fab fa-linkedin text-indigo-400 text-base w-5 text-center"></i>
                <span>linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359 ↗</span>
              </a>

              <a
                href="https://github.com/Nikhil1456-12"
                target="_blank"
                rel="noreferrer"
                className="ripple flex items-center gap-3 p-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-indigo-500/40 transition-all"
              >
                <i className="fab fa-github text-indigo-400 text-base w-5 text-center"></i>
                <span>github.com/Nikhil1456-12 ↗</span>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-panel text-slate-200">
                <i className="fas fa-phone text-indigo-400 text-base w-5 text-center"></i>
                <span>+91 8309322695</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
            <div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 shadow-glow-indigo max-w-md">
              <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-widest">
                VERIFIED CREDENTIALS
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                Anil Neerukonda Institute of Technology &amp; Sciences
              </h3>
              <p className="text-xs font-mono text-slate-300 mt-2">
                B.Tech in Information Technology (2023–2027)
              </p>
              <p className="text-xs font-mono text-purple-400 font-bold mt-1">
                Cumulative Grade Point Average: 8.74 / 10
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Visakhapatnam, AP, India</span>
                <span className="text-emerald-400 font-bold">● Active Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Frosted Footer */}
      <footer className="py-10 text-center text-xs font-mono border-t border-white/5 text-slate-500 bg-[#070a12]/90">
        <p>© 2026 Kandi Nikhil Sai Kumar. All rights reserved.</p>
        <p className="mt-1 text-slate-600">
          Anti-Gravity Plus Flow · React 19, Tailwind CSS &amp; Vite · Production Hosted on GitHub Pages
        </p>
      </footer>
    </div>
  );
}
