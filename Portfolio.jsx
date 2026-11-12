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
      title: "PathSaathi – Vernacular AI Travel Concierge",
      subtitle: "Infosys Major Project",
      tech: "Flutter • Multi-Agent System • SQLite • Edge AI",
      desc: "Offline-first vernacular AI travel concierge sponsored by Infosys for high-density pilgrimages with unreliable connectivity. Features multi-agent task planning and hardware-secured biometric document encryption.",
      liveUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      githubUrl: "https://github.com/Nikhil1456-12/Infosys-Project-Pathsaathi-",
      primaryText: "View on GitHub",
      badge: "Infosys Sponsored",
    },
    {
      title: "JARVIS – Multimodal AI OS & Mobile Mesh",
      subtitle: "Autonomous Agentic Operating System",
      tech: "FastAPI • React • Three.js • Termux SSH • WireGuard Mesh",
      desc: "Voice-activated AI OS featuring a 60 FPS Three.js holographic HUD, real-time VAD speech engine, and zero-cable encrypted mesh automation controlling Android devices via Termux SSH.",
      liveUrl: "/protofoil/jarvis/",
      githubUrl: "https://github.com/Nikhil1456-12/Jarvis",
      primaryText: "Live 3D Showcase",
      badge: "Hardware & AI",
    },
    {
      title: "Customer Churn Intelligence Portal",
      subtitle: "Dynamic Retention & Financial Risk App",
      tech: "Python • Scikit-learn • Plotly • Modern JavaScript",
      desc: "Enterprise client-side analytics portal with live CSV/Excel dataset upload, automated column mapping, sub-100ms batch churn risk scoring, and $MRR financial exposure simulation.",
      liveUrl: "https://nikhil1456-12.github.io/CUSTOMER-CHURN-ANALYSIS/",
      githubUrl: "https://github.com/Nikhil1456-12/CUSTOMER-CHURN-ANALYSIS",
      primaryText: "Open Live App",
      badge: "Production App",
    },
    {
      title: "RecoverX – Revenue Recovery Platform",
      subtitle: "Distributed Microservices & Risk Underwriting",
      tech: "FastAPI • Python 3.12 • Docker • Microservices • Pytest",
      desc: "Automated invoice anomaly detection, payment risk scoring, and dispute triage microservices platform. Validated with a 100% passing test suite (32/32 tests) and interactive Swagger docs.",
      liveUrl: "https://nikhil1456-12.github.io/RecoverX/",
      githubUrl: "https://github.com/Nikhil1456-12/RecoverX",
      primaryText: "Interactive Showcase",
      badge: "100% Test Pass",
    },
    {
      title: "AI-Powered Data Analyst",
      subtitle: "NL-to-SQL Conversational Analytics",
      tech: "Node.js • Express • React 19 • Gemini API • Docker",
      desc: "Translates natural language questions into validated SQL queries for instant analytics, structured KPI reporting, and interactive visualizations with zero data leakage.",
      liveUrl: "https://nikhil1456-12.github.io/-Data-Analyst-AI/",
      githubUrl: "https://github.com/Nikhil1456-12/-Data-Analyst-AI",
      primaryText: "Open Live App",
      badge: "Agentic AI",
    },
    {
      title: "Credit Risk & Loan Default Predictor",
      subtitle: "Financial Risk & Scoring Engine",
      tech: "Python • Machine Learning • Scikit-learn • Streamlit",
      desc: "Credit risk underwriting engine analyzing default probability across diverse loan applicants with calibrated ROC-AUC performance and real-time risk classification.",
      liveUrl: "https://nikhil1456-12.github.io/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM/",
      githubUrl: "https://github.com/Nikhil1456-12/CREDIT-RISK-LOAN-DEFAULT-PREDICTION-SYSTEM",
      primaryText: "Open Live App",
      badge: "FinTech ML",
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
    "Docker & Microservices",
    "Agentic RAG & LangChain",
    "Ollama & Quantized LLMs",
    "Scikit-learn & Machine Learning",
    "Data Structures & Algorithms",
    "Git & GitHub Actions",
    "Tailscale & Linux / Termux",
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#06121f]' : 'bg-[#f8fafc]'} ${isDarkMode ? 'text-white' : 'text-slate-900'} overflow-x-hidden font-sans transition-colors duration-300`}>
      {/* Navbar */}
      <header className={`w-full px-6 md:px-16 py-5 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md ${isDarkMode ? 'bg-[#06121f]/80 border-b border-cyan-500/10' : 'bg-white/80 border-b border-slate-200'}`}>
        <a href="#home" className="text-2xl font-bold tracking-tight hover:opacity-90 transition">
          Nikhil<span className="text-cyan-400">.</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className={`hidden md:flex gap-8 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition border ${isDarkMode ? 'border-cyan-500/20 bg-cyan-950/30 text-cyan-400 hover:bg-cyan-500/20' : 'border-slate-300 bg-slate-100 text-amber-500 hover:bg-slate-200'}`}
            aria-label="Toggle theme"
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
      <section id="home" className="relative px-6 md:px-16 pt-8 pb-20">
        <div className={`max-w-7xl mx-auto ${isDarkMode ? 'bg-[#081826] border-cyan-500/20 shadow-[0_0_80px_rgba(6,182,212,0.12)]' : 'bg-white border-slate-200 shadow-xl'} rounded-[32px] border overflow-hidden`}>
          <div className="grid lg:grid-cols-12 items-center min-h-[580px] p-8 md:p-14 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Available for Software Engineering & AI Roles
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Nikhil Sai <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                  Kumar Kandi
                </span>
              </h1>

              <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400">
                AI Systems Engineer & Full-Stack Developer
              </h2>

              <p className={`mt-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed max-w-xl text-base sm:text-lg`}>
                B.Tech IT student (CGPA: 8.74) architecting autonomous agentic AI systems, 
                offline-first mobile applications, and high-performance full-stack web platforms. 
                Creator of <b>PathSaathi</b> (Infosys major project), <b>JARVIS</b>, and <b>Customer Churn Intelligence</b>.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition duration-200"
                >
                  Explore Projects ↓
                </a>

                <a
                  href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-7 py-3.5 border rounded-xl font-bold transition duration-200 ${isDarkMode ? 'border-cyan-400/50 hover:bg-cyan-400/10 text-white' : 'border-slate-300 hover:bg-slate-100 text-slate-900'}`}
                >
                  LinkedIn Profile ↗
                </a>

                <a
                  href="https://github.com/Nikhil1456-12"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-7 py-3.5 border rounded-xl font-bold transition duration-200 ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-700'}`}
                >
                  GitHub ↗
                </a>
              </div>

              {/* Social Link Badges */}
              <div className="flex items-center gap-4 mt-10">
                <a
                  href="https://github.com/Nikhil1456-12"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${isDarkMode ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${isDarkMode ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href="mailto:nikhilsaikumarkandi@gmail.com"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${isDarkMode ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            {/* Right Visual Badge Section */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full"></div>
              <div className={`relative w-full max-w-sm rounded-2xl p-6 border backdrop-blur-md ${isDarkMode ? 'bg-[#0b2136]/70 border-cyan-500/30' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className={`text-xs font-mono ml-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>nikhil@workstation</span>
                </div>
                <div className="font-mono text-xs space-y-2">
                  <p className="text-cyan-400">$ whoami</p>
                  <p className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>&gt; Nikhil Sai Kumar Kandi (ANITS IT '27)</p>
                  <p className="text-cyan-400">$ current_focus</p>
                  <p className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>&gt; Agentic AI • Offline-First Mobile • Distributed Systems</p>
                  <p className="text-cyan-400">$ recent_achievements</p>
                  <p className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>&gt; PathSaathi (Infosys Major Project)</p>
                  <p className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>&gt; JARVIS Encrypted Mesh OS</p>
                  <p className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>&gt; 3 Data Internships Completed</p>
                  <p className="text-cyan-400">$ status</p>
                  <p className="text-emerald-400">&gt; 100% Systems Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className={`p-8 sm:p-10 rounded-3xl border ${isDarkMode ? 'bg-[#081826] border-cyan-500/10' : 'bg-white border-slate-200'}`}>
            <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              I am a results-oriented Information Technology student at Anil Neerukonda Institute of Technology & Sciences (ANITS, CGPA: 8.74) 
              with hands-on industry internship experience across <b>Labmentix</b>, <b>NullClass</b>, and <b>SkillDzire</b>. 
              My engineering philosophy revolves around solving hard, real-world problems through robust system design — whether building on-device 
              multimodal agents with hardware-backed encryption or developing low-latency full-stack data platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`px-6 md:px-16 py-16 ${isDarkMode ? 'bg-[#071624]' : 'bg-slate-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`px-5 py-3 rounded-xl border text-sm font-semibold transition duration-200 ${isDarkMode ? 'bg-[#0c2236] border-cyan-500/20 text-slate-200 hover:border-cyan-400 hover:text-cyan-300' : 'bg-white border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-600'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">Portfolio Showcase</p>
              <h2 className="text-3xl sm:text-5xl font-bold">
                Featured <span className="text-cyan-400">Projects</span>
              </h2>
            </div>
            <p className={`mt-3 md:mt-0 text-sm max-w-md ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Production systems, verified interactive deployments, and open-source contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${isDarkMode ? 'bg-[#081826] border-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-lg'}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {proj.subtitle}
                  </p>

                  <p className={`text-xs font-mono mb-4 px-2.5 py-1.5 rounded-lg ${isDarkMode ? 'bg-[#050f1a] text-cyan-300' : 'bg-slate-100 text-cyan-700'}`}>
                    {proj.tech}
                  </p>

                  <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-cyan-500/10">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center text-xs font-bold px-4 py-2.5 bg-cyan-400 text-slate-950 rounded-lg hover:bg-cyan-300 transition"
                  >
                    {proj.primaryText} ↗
                  </a>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-center text-xs font-bold px-3 py-2.5 border rounded-lg transition ${isDarkMode ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                      title="GitHub Repository"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`px-6 md:px-16 py-20 ${isDarkMode ? 'bg-[#071624]' : 'bg-slate-100'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className={`mt-6 text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Open to full-time Software Engineering, AI/ML roles, and impactful collaborative projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nikhilsaikumarkandi@gmail.com"
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition duration-200"
            >
              Email: nikhilsaikumarkandi@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/nikhil-sai-kumar-kandi-03a33b359"
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-3.5 border rounded-xl font-bold transition duration-200 ${isDarkMode ? 'border-cyan-400/50 hover:bg-cyan-400/10 text-white' : 'border-slate-300 hover:bg-slate-200 text-slate-900'}`}
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Nikhil1456-12"
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-3.5 border rounded-xl font-bold transition duration-200 ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-200 text-slate-700'}`}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-xs border-t ${isDarkMode ? 'border-cyan-500/10 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
        <p>© 2026 Nikhil Sai Kumar Kandi. All Rights Reserved.</p>
        <p className="mt-1">Built with React 19, Vite, and Tailwind CSS • Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}
