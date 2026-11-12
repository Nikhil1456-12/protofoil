import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const projects = [
    {
      title: "PathSaathi",
      subtitle: "Vernacular AI Travel Concierge & Offline Mobile System",
      badge: "Infosys Major Project",
      video: "/protofoil/docs/videos/pathsaathi_preview.mp4",
      preview: "/protofoil/docs/previews/pathsaathi_preview.png",
      tech: "Flutter • Multi-Agent System • SQLite • Edge AI",
      desc: "Offline-first vernacular travel companion for high-density pilgrimages with poor or zero network connectivity. Orchestrates on-device sub-agents for voice interaction, road routing, transit, and accommodation with hardware-backed biometric encryption.",
      liveUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      githubUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      primaryText: "Explore Architecture ↗",
    },
    {
      title: "JARVIS",
      subtitle: "Autonomous Multimodal AI OS & Encrypted Mobile Mesh",
      badge: "Hardware & AI",
      video: "/protofoil/docs/videos/jarvis_preview.mp4",
      preview: "/protofoil/docs/previews/jarvis_preview.jpg",
      tech: "FastAPI • React • Three.js • Termux SSH • WireGuard Mesh",
      desc: "Voice-driven operating system with a 60 FPS Three.js holographic Arc Reactor HUD, continuous VAD listening (<50ms), and zero-cable encrypted remote Android device control via authenticated Termux SSH and Tailscale WireGuard.",
      liveUrl: "/protofoil/jarvis/",
      githubUrl: "https://github.com/Nikhil1456-12/Jarvis",
      primaryText: "Interactive 3D Showcase ↗",
    },
    {
      title: "Customer Churn Intelligence Portal",
      subtitle: "Client-Side ML Scoring & Financial Risk App",
      badge: "Production App",
      video: "/protofoil/docs/videos/churn_preview.mp4",
      preview: "/protofoil/docs/previews/churn_preview.png",
      tech: "Python • Scikit-learn • Plotly • Modern JavaScript",
      desc: "Interactive retention portal featuring dynamic customer CSV/Excel upload, automated column mapping, sub-100ms batch scoring (84.2% ROC-AUC), $MRR flight risk revenue exposure calculation, and What-If scenario simulations.",
      liveUrl: "https://nikhil1456-12.github.io/CUSTOMER-CHURN-ANALYSIS/",
      githubUrl: "https://github.com/Nikhil1456-12/CUSTOMER-CHURN-ANALYSIS",
      primaryText: "Launch Live App ↗",
    },
    {
      title: "RecoverX",
      subtitle: "Autonomous Revenue Recovery & Risk Underwriting Platform",
      badge: "100% Test Pass (32/32)",
      video: "/protofoil/docs/videos/recoverx_preview.mp4",
      preview: "/protofoil/docs/previews/recoverx_preview.png",
      tech: "FastAPI • Python 3.12 • Docker • Microservices • Pytest",
      desc: "Event-driven revenue recovery microservices engine with automated invoice anomaly detection, payment risk scoring, and dispute triage. Backed by complete OpenAPI documentation and a 100% pass rate across 32 unit and integration tests.",
      liveUrl: "https://nikhil1456-12.github.io/RecoverX/",
      githubUrl: "https://github.com/Nikhil1456-12/RecoverX",
      primaryText: "Explore System ↗",
    },
    {
      title: "AI-Powered Data Analyst",
      subtitle: "Natural Language to SQL Conversational Engine",
      badge: "Agentic AI",
      video: null,
      preview: null,
      tech: "Node.js • Express • React 19 • Gemini API • Docker",
      desc: "Translates conversational business questions into schema-validated SQL queries with zero data leakage, returning structured tabular analytics and interactive dynamic Plotly charts.",
      liveUrl: "https://nikhil1456-12.github.io/-Data-Analyst-AI/",
      githubUrl: "https://github.com/Nikhil1456-12/-Data-Analyst-AI",
      primaryText: "Open Live App ↗",
    },
    {
      title: "Credit Risk & Loan Default Prediction",
      subtitle: "Probability of Default Underwriting Model",
      badge: "FinTech ML",
      video: null,
      preview: null,
      tech: "Python • Scikit-learn • Streamlit • Statistical Modeling",
      desc: "Underwriting analytics engine quantifying probability of default across diverse applicant financial profiles with calibrated statistical modeling and real-time risk classification.",
      liveUrl: "https://nikhil1456-12.github.io/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM/",
      githubUrl: "https://github.com/Nikhil1456-12/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM",
      primaryText: "Open Live App ↗",
    },
  ];

  const skills = [
    "Python 3.12",
    "Java",
    "Dart & Flutter",
    "FastAPI & REST APIs",
    "React 19 & Vite",
    "SQL (PostgreSQL & MySQL)",
    "Three.js & WebGL",
    "Docker & Containerization",
    "Agentic AI & LangChain",
    "Ollama & Quantized LLMs",
    "Scikit-learn & Predictive Modeling",
    "Data Structures & Algorithms",
    "Git & GitHub Actions",
    "Tailscale & Linux / Termux",
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#06121f] text-slate-100' : 'bg-[#f8fafc] text-slate-900'} font-sans transition-colors duration-200 antialiased`}>
      {/* Header / Navbar */}
      <header className={`w-full px-6 md:px-16 py-5 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md ${isDarkMode ? 'bg-[#06121f]/90 border-b border-slate-800' : 'bg-white/90 border-b border-slate-200'}`}>
        <a href="#home" className="text-2xl font-bold tracking-tight text-cyan-400">
          Nikhil Sai Kumar<span className="text-white">.</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className={`hidden md:flex gap-8 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            <a href="#home" className="hover:text-cyan-400 transition-colors duration-150">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-150">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors duration-150">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors duration-150">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-150">Contact</a>
          </nav>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border ${isDarkMode ? 'border-slate-700 bg-slate-900/60 text-cyan-400 hover:border-cyan-400' : 'border-slate-300 bg-slate-100 text-amber-500 hover:border-amber-400'}`}
            aria-label="Toggle visual theme"
          >
            {isDarkMode ? (
              <i className="fas fa-moon text-sm"></i>
            ) : (
              <i className="fas fa-sun text-sm"></i>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-6 md:px-16 pt-12 pb-20">
        <div className={`max-w-7xl mx-auto ${isDarkMode ? 'bg-[#081826] border-slate-800' : 'bg-white border-slate-200 shadow-xl'} rounded-3xl border overflow-hidden p-8 md:p-14`}>
          <div className="grid lg:grid-cols-12 items-center gap-10">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Nikhil Sai Kumar Kandi
              </h1>

              <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400">
                AI Systems Engineer & Full-Stack Developer
              </h2>

              <p className={`mt-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed max-w-2xl text-base sm:text-lg`}>
                B.Tech Information Technology student at ANITS (CGPA: 8.74) specializing in 
                agentic AI architectures, offline-first mobile applications, and high-reliability backend microservices. 
                Architect of <b>PathSaathi</b> (Infosys major project), <b>JARVIS</b> (encrypted mesh OS), and <b>Customer Churn Intelligence</b>.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-7 py-3.5 bg-cyan-400 text-slate-950 rounded-xl font-bold hover:bg-cyan-300 transition-colors duration-150 shadow-md"
                >
                  View Engineered Systems ↓
                </a>

                <a
                  href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-7 py-3.5 border rounded-xl font-bold transition-colors duration-150 ${isDarkMode ? 'border-slate-700 hover:border-cyan-400 text-slate-100' : 'border-slate-300 hover:border-slate-800 text-slate-900'}`}
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/Nikhil1456-12"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-7 py-3.5 border rounded-xl font-bold transition-colors duration-150 ${isDarkMode ? 'border-slate-700 hover:border-cyan-400 text-slate-100' : 'border-slate-300 hover:border-slate-800 text-slate-900'}`}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className={`rounded-2xl p-6 border font-mono text-xs space-y-3 ${isDarkMode ? 'bg-[#050f1a] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="ml-auto text-slate-500">nikhil@workstation</span>
                </div>
                <p><span className="text-cyan-400">role:</span> Software Developer & AI Engineer</p>
                <p><span className="text-cyan-400">education:</span> ANITS B.Tech IT (2023–2027) | CGPA: 8.74/10</p>
                <p><span className="text-cyan-400">internships:</span> Labmentix, NullClass, SkillDzire</p>
                <p><span className="text-cyan-400">flagship:</span> PathSaathi (Infosys Sponsored) • JARVIS OS</p>
                <p className="text-emerald-400">&gt; Ready for enterprise software & AI engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            About Me
          </h2>

          <div className={`p-8 sm:p-10 rounded-3xl border ${isDarkMode ? 'bg-[#081826] border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
            <p className="text-base sm:text-lg leading-relaxed">
              I am an Information Technology student at Anil Neerukonda Institute of Technology & Sciences (ANITS, CGPA: 8.74) 
              with practical software engineering and data analytics internship experience across <b>Labmentix</b>, <b>NullClass</b>, and <b>SkillDzire</b>. 
              I design and build production-ready systems that prioritize offline reliability, algorithmic correctness, and real-world utility — 
              ranging from localized multi-agent mobile concierges with Android Keystore encryption to microservices architectures validated with automated test suites.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`px-6 md:px-16 py-16 ${isDarkMode ? 'bg-[#071624]' : 'bg-slate-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-150 ${isDarkMode ? 'bg-[#0c2236] border-slate-800 text-slate-200 hover:border-cyan-400' : 'bg-white border-slate-300 text-slate-800 hover:border-cyan-600'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section with Real Video Previews */}
      <section id="projects" className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className={`mt-2 text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Real production applications with automated video previews, distributed architectures, and verified deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`group flex flex-col justify-between rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl ${isDarkMode ? 'bg-[#081826] border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-600'}`}
              >
                {proj.video ? (
                  <div className="w-full h-64 sm:h-72 overflow-hidden bg-slate-950 relative border-b border-slate-800">
                    <video 
                      src={proj.video} 
                      poster={proj.preview}
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out" 
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/85 border border-cyan-500/30 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs font-bold text-cyan-300">
                        {proj.badge}
                      </span>
                    </div>
                  </div>
                ) : proj.preview ? (
                  <div className="w-full h-64 sm:h-72 overflow-hidden bg-slate-950 relative border-b border-slate-800">
                    <img 
                      src={proj.preview} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out" 
                      loading="lazy" 
                    />
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                        {proj.badge}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="px-8 pt-6 pb-2">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                      {proj.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-medium mb-4">
                      {proj.subtitle}
                    </p>

                    <p className={`text-xs font-mono mb-4 px-3 py-2 rounded-lg ${isDarkMode ? 'bg-[#050f1a] text-cyan-300 border border-slate-800' : 'bg-slate-100 text-cyan-700'}`}>
                      {proj.tech}
                    </p>

                    <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {proj.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center text-sm font-bold px-5 py-3 bg-cyan-400 text-slate-950 rounded-xl hover:bg-cyan-300 transition-colors duration-150 shadow-md"
                    >
                      {proj.primaryText}
                    </a>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-center text-sm font-bold px-4 py-3 border rounded-xl transition-colors duration-150 ${isDarkMode ? 'border-slate-700 text-slate-200 hover:border-cyan-400' : 'border-slate-300 text-slate-700 hover:border-slate-800'}`}
                        title="GitHub Repository"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`px-6 md:px-16 py-20 ${isDarkMode ? 'bg-[#071624]' : 'bg-slate-100'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Connect
          </h2>

          <p className={`mt-4 text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Open to software engineering roles, AI system design, and technical discussions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nikhilsaikumarkandi@gmail.com"
              className="px-8 py-3.5 bg-cyan-400 text-slate-950 rounded-xl font-bold hover:bg-cyan-300 transition-colors duration-150 shadow-md"
            >
              Email: nikhilsaikumarkandi@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-3.5 border rounded-xl font-bold transition-colors duration-150 ${isDarkMode ? 'border-slate-700 hover:border-cyan-400 text-slate-100' : 'border-slate-300 hover:border-slate-800 text-slate-900'}`}
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Nikhil1456-12"
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-3.5 border rounded-xl font-bold transition-colors duration-150 ${isDarkMode ? 'border-slate-700 hover:border-cyan-400 text-slate-100' : 'border-slate-300 hover:border-slate-800 text-slate-900'}`}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-xs border-t ${isDarkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
        <p>© 2026 Nikhil Sai Kumar Kandi. All Rights Reserved.</p>
        <p className="mt-1">Crafted with React 19, Vite, and Tailwind CSS • Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}
