import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = {
  Frontend: ["React 19", "JavaScript (ES6+)", "Tailwind CSS v4", "Vite"],
  Backend: ["Node.js (Core)", "Express.js", "REST APIs"],
  Database: ["MongoDB", "Local Storage API"],
  Tools: ["Git / GitHub", "NPM", "PostCSS", "VS Code"]
};

const VermLogo = () => (
  <svg 
    width="42" 
    height="42" 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 200, 0.5))" }}
    className="group-hover:scale-110 transition-transform duration-300"
  >
    <path 
      d="M15 30L50 85L85 30H72L50 64L28 30H15Z" 
      fill="#00ffc8" 
      fillOpacity="0.8"
    />
    <path 
      d="M32 20L50 48L68 20H80L50 63L20 20H32Z" 
      fill="#7c6fff" 
      fillOpacity="0.9"
    />
  </svg>
);

const PROJECTS = [
  {
    title: "Node Informational Site",
    tag: "Backend",
    stack: ["Node.js", "HTTP", "FS"],
    desc: "Architected a custom routing engine and handled asynchronous I/O operations using native Node.js modules.",
    color: "#00ffc8",
    github: "https://github.com/VicRousy/node-basic-informational-site",
  },
  {
    title: "React Shopping Cart",
    tag: "Full-Stack",
    stack: ["React", "State Management"],
    desc: "Engineered complex state management and persistent data flows to sync user selections across dynamic routes.",
    color: "#7c6fff",
    github: "https://github.com/VicRousy/shopping-cart",
  },
  {
    title: "Smart Todo List",
    tag: "Productivity",
    stack: ["JS", "Local Storage"],
    desc: "A task management system featuring data persistence and dynamic DOM filtering to maintain user workflow state.",
    color: "#ff6b6b",
    github: "https://github.com/VicRousy/todo-list",
  },
  {
    title: "Weather Dashboard",
    tag: "API Utility",
    stack: ["JS", "Async API"],
    desc: "Implemented real-time data fetching and dynamic background rendering based on OpenWeatherMap API responses.",
    color: "#ffd700",
    github: "https://github.com/VicRousy/weather-app",
  },
  {
    title: "Memory Game",
    tag: "Logic",
    stack: ["React", "Hooks"],
    desc: "Developed a pattern-recognition game using React hooks to manage card shuffling and match-detection state.",
    color: "#00ffc8",
    github: "https://github.com/VicRousy/memory-game",
  },
  {
    title: "Library Manager",
    tag: "OOP",
    stack: ["JS", "Classes"],
    desc: "Utilized Object-Oriented Programming to manage book collections, focusing on data structures and prototypes.",
    color: "#7c6fff",
    github: "https://github.com/VicRousy/library",
  },
  {
    title: "CV Application",
    tag: "Productivity",
    stack: ["React", "Form Logic"],
    desc: "Designed a real-time layout engine that translates user input into structured, professional resume formats.",
    color: "#ff6b6b",
    github: "https://github.com/VicRousy/cv-app",
  },
  {
    title: "Form Validation",
    tag: "Security",
    stack: ["JS", "Regex"],
    desc: "A robust client-side validation system ensuring data integrity and sanitization before state updates.",
    color: "#ffd700",
    github: "https://github.com/VicRousy/form-validation",
  },
  {
    title: "Admin Dashboard",
    tag: "UI/UX",
    stack: ["HTML", "CSS"],
    desc: "A high-fidelity dashboard interface showcasing advanced CSS Grid layouts and responsive sidebar architecture.",
    color: "#00ffc8",
    github: "https://github.com/VicRousy/admin-dashboard",
  }
];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const roles = ["Full-Stack Developer", "Node.js Architect", "React Specialist", "Software Engineer"];

  useEffect(() => {
    let i = 0;
    const word = roles[roleIdx];
    const interval = setInterval(() => {
      setTyped(word.slice(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(interval);
        setTimeout(() => setRoleIdx((prev) => (prev + 1) % roles.length), 2000);
      }
    }, 75);
    return () => clearInterval(interval);
  }, [roleIdx]);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    setActive(id);
  };

  return (
    <div className="bg-[#080810] text-[#e2e2e2] font-mono min-h-screen selection:bg-[#00ffc8]/30">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080810]/95 backdrop-blur-md border-b border-[#13132a] flex justify-between items-center px-[6%] h-[72px]">
        <button onClick={() => scrollTo("About")} className="bg-transparent border-none p-0 cursor-pointer flex items-center group">
           <VermLogo />
           <span className="ml-3 text-white font-bold text-lg tracking-[3px] group-hover:text-[#00ffc8] transition-colors uppercase">VERM</span>
        </button>

        <div className="hidden sm:flex gap-6">
          {NAV_LINKS.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} className={`text-[11px] tracking-[2px] uppercase transition-colors bg-transparent border-none cursor-pointer ${active === n ? 'text-[#00ffc8] border-b border-[#00ffc8]' : 'text-gray-500 hover:text-[#00ffc8]'}`}>{n}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="relative min-h-screen flex flex-col justify-center px-[8%] pt-20 pb-15 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(0,255,200,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-3xl">
          <p className="text-[#00ffc8] text-[11px] tracking-[5px] uppercase mb-4">&gt; STATUS: OPERATIONAL —</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">Victor .O.<br />Matthew</h1>
          <h2 className="text-2xl text-[#7c6fff] mb-8 min-h-[40px]">{typed}<span className="animate-pulse text-[#00ffc8]">_</span></h2>
          <p className="text-[15px] leading-relaxed text-gray-400 mb-10 border-l-2 border-[#13132a] pl-6">
            Based in <span className="text-white font-bold">Ikorodu, Lagos</span>. I architect high-performance web systems using modern JavaScript environments. Focused on clean code and scalable architecture.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button onClick={() => scrollTo("Projects")} className="bg-[#00ffc8] text-[#080810] px-8 py-3 rounded-sm text-[12px] font-bold tracking-[2px] uppercase hover:shadow-[0_0_20px_rgba(0,255,200,0.4)] transition-all cursor-pointer border-none">Execute View_Work</button>
            <button onClick={() => scrollTo("Contact")} className="border border-[#7c6fff] text-[#7c6fff] px-8 py-3 rounded-sm text-[12px] font-bold tracking-[2px] uppercase hover:bg-[#7c6fff]/10 transition-all cursor-pointer bg-transparent">Contact_Link</button>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-[8%] py-24 border-t border-[#13132a]">
        <p className="text-[#00ffc8] text-[11px] tracking-[5px] uppercase mb-12">&gt; Tech_Stack</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} className="bg-[#0d0d1e]/50 border border-[#13132a] p-6 rounded hover:border-[#7c6fff]/50 transition-colors">
              <p className="text-[#7c6fff] text-[10px] tracking-[3px] uppercase mb-6">{cat}</p>
              {items.map((s) => (
                <div key={s} className="flex items-center gap-3 mb-3 text-gray-400">
                  <div className="w-1 h-1 bg-[#00ffc8] rounded-full shadow-[0_0_5px_#00ffc8]" />
                  <span className="text-[13px]">{s}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-[8%] py-24 border-t border-[#13132a]">
        <p className="text-[#ff6b6b] text-[11px] tracking-[5px] uppercase mb-12">&gt; Deployments</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div key={p.title} className="group bg-[#0d0d1e] border border-[#13132a] border-t-2 p-6 rounded hover:-translate-y-2 transition-all duration-300 flex flex-col" style={{ borderTopColor: p.color }}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-lg font-bold text-white group-hover:text-[#00ffc8] transition-colors">{p.title}</span>
                <span className="text-[10px] px-2 py-1 rounded border uppercase tracking-widest" style={{ color: p.color, borderColor: `${p.color}33`, backgroundColor: `${p.color}10` }}>{p.tag}</span>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-8 flex-grow">{p.desc}</p>
              <div className="flex justify-between items-center pt-4 border-t border-[#13132a]">
                <div className="flex flex-wrap gap-2">
                  {p.stack.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] text-gray-600 uppercase font-bold">{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-[11px] font-bold tracking-widest hover:underline no-underline" style={{ color: p.color }}>GITHUB →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-[8%] py-32 border-t border-[#13132a] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#ffd700] text-[11px] tracking-[5px] uppercase mb-6">&gt; Connection_Protocol</p>
          <h2 className="text-4xl text-white font-bold mb-6">Start a Project?</h2>
          <p className="text-gray-500 mb-12">Currently available for freelance opportunities and full-time software engineering roles.</p>
          <a href="mailto:victormatthew368@gmail.com" className="inline-block bg-[#00ffc8] text-[#080810] px-12 py-5 rounded-sm text-[12px] font-bold tracking-[3px] uppercase hover:shadow-[0_0_30px_#00ffc844] transition-all no-underline">Initiate Message</a>
        </div>
      </section>

      <footer className="py-10 border-t border-[#13132a] text-center text-gray-700 text-[10px] tracking-[4px] uppercase">
        Victor Matthew // {new Date().getFullYear()} // System Active
      </footer>
    </div>
  );
}