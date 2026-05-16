import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference, or use system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    // Default to dark mode based on the current design
    return true;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
    // Update document class for CSS variables if needed
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#06121f]' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-black'} overflow-hidden font-sans`}>
      {/* Navbar */}
      <header className="w-full px-8 md:px-20 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          Nikhil<span className="text-cyan-400">.</span>
        </h1>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-10 text-sm text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <i className="fas fa-moon text-cyan-400"></i>
            ) : (
              <i className="fas fa-sun text-yellow-400"></i>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative px-8 md:px-20 pt-10 pb-24"
      >
        <div className={`max-w-7xl mx-auto ${isDarkMode ? 'bg-[#081826]' : 'bg-[#f0f9ff]'} rounded-[40px] border ${isDarkMode ? 'border-cyan-500/10' : 'border-cyan-500/20'} shadow-[0_0_80px_rgba(0,255,255,0.12)] overflow-hidden`}>
          <div className="grid md:grid-cols-2 items-center min-h-[650px]">
            {/* Left Content */}
            <div className="p-10 md:p-20 z-10">
              <p className="text-cyan-400 text-lg mb-3 tracking-wide">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Nikhil Sai
                <br />
                Kumar
              </h1>

              <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-cyan-400">
                Data Analyst & AI Developer
              </h2>

              <p className={`mt-8 text-${isDarkMode ? 'slate-300' : 'gray-700'} leading-8 max-w-xl text-lg`}>
                Passionate IT student specializing in Data Analytics,
                Full Stack Development, AI solutions, and Flutter app
                development. I build modern scalable applications and
                intelligent systems with clean UI/UX.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="https://github.com/Nikhil1456-12"
                  target="_blank"
                  className="px-8 py-4 bg-cyan-400 text-black rounded-xl font-bold hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-500/30"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className={`px-8 py-4 border border-cyan-400 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition duration-300 ${isDarkMode ? '' : 'border-cyan-500'}`}
                >
                  LinkedIn
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 mt-14">
                <div className={`w-11 h-11 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition cursor-pointer ${isDarkMode ? '' : 'border-cyan-500'}`}>
                  <i className="fab fa-github"></i>
                </div>

                <div className={`w-11 h-11 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition cursor-pointer ${isDarkMode ? '' : 'border-cyan-500'}`}>
                  <i className="fab fa-linkedin-in"></i>
                </div>

                <div className={`w-11 h-11 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition cursor-pointer ${isDarkMode ? '' : 'border-cyan-500'}`}>
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center items-center h-full">
              {/* Glow Effect */}
              <div className="absolute w-[450px] h-[450px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

              {/* Profile Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="profile"
                  className="w-[420px] md:w-[520px] object-cover rounded-3xl opacity-90"
                />

                {/* Cyan Overlay */}
                <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 md:px-20 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className={`bg-[#081826] border border-cyan-500/10 rounded-3xl p-10 ${isDarkMode ? '' : 'bg-[#f0f9ff] border-cyan-500/20'}`}>
            <p className={`text-slate-300 text-lg leading-9 ${isDarkMode ? '' : 'text-gray-700'}`}>
              Motivated and detail-oriented Information Technology student
              with strong expertise in Data Analytics, Machine Learning,
              Flutter Development, React, and Full Stack technologies.
              Passionate about solving real-world problems using AI-driven
              systems and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-8 md:px-20 py-24 bg-[#08131f]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-14">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="flex flex-wrap gap-5">
            {[
              "Python",
              "Java",
              "Flutter",
              "React",
              "MySQL",
              "Power BI",
              "Machine Learning",
              "Docker",
              "GitHub",
              "Data Analytics",
              "HTML",
              "CSS",
            ].map((skill, index) => (
              <div
                key={index}
                className={`px-6 py-4 ${isDarkMode ? 'bg-[#0c1f30]' : 'bg-[#f0f9ff]'} border border-cyan-500/10 rounded-2xl hover:border-cyan-400 hover:-translate-y-1 transition duration-300 ${isDarkMode ? '' : 'border-cyan-500'}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-8 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "AI-Powered Data Analyst",
                tech: "React • Node.js • Python • MySQL",
              },
              {
                title: "Rescue Mess",
                tech: "Flutter • BLE • Wi-Fi Direct",
              },
              {
                title: "Strava Fitness Analytics",
                tech: "Python • Power BI • SQL",
              },
              {
                title: "Page Picks",
                tech: "MongoDB • MERN Stack",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`bg-[#081826] rounded-3xl border border-cyan-500/10 p-8 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] ${isDarkMode ? '' : 'bg-[#f0f9ff] border-cyan-500/20'}`}
              >
                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className={`text-cyan-300 text-lg ${isDarkMode ? '' : 'text-gray-700'}`}>
                  {project.tech}
                </p>

                <button className="mt-8 px-6 py-3 bg-cyan-400 text-black rounded-xl font-bold hover:bg-cyan-300 transition">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`px-8 md:px-20 py-24 ${isDarkMode ? 'bg-[#08131f]' : 'bg-[#f0f9ff]'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className={`mt-8 text-${isDarkMode ? 'slate-300' : 'gray-700'} text-lg leading-8`}>
            Open to internships, freelance opportunities, AI projects,
            and full-stack development collaborations.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:nikhilsaikumarkandi@gmail.com"
              className="px-8 py-4 bg-cyan-400 text-black rounded-xl font-bold hover:bg-cyan-300 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Nikhil1456-12"
              target="_blank"
              className={`px-8 py-4 border border-cyan-400 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition ${isDarkMode ? '' : 'border-cyan-500'}`}
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t border-cyan-500/10 text-slate-400 ${isDarkMode ? '' : 'border-cyan-500/20'}`}>
        © 2026 Nikhil Sai Kumar — All Rights Reserved
      </footer>
    </div>
  );
}