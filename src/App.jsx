import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

// Components
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";

const Sidebar = ({ isDarkMode, activeSection, onNavigate }) => {
  const links = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
  ];

  return (
    <nav className={`
      fixed z-[100] flex transition-all duration-500
      md:right-8 md:top-1/2 md:-translate-y-1/2 md:flex-col md:items-end md:gap-12
      right-4 bottom-6 flex-col items-end gap-6 p-4 
      ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-black/[0.02] border-black/5'} 
      backdrop-blur-lg border rounded-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:p-0
    `}>
      <div className={`absolute right-0 top-[-100px] bottom-[-100px] w-[1px] hidden md:block ${isDarkMode ? 'bg-white/5' : 'bg-black/10'}`} />
      
      {links.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`group relative flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] tracking-[0.4em] uppercase transition-all duration-700 outline-none ${
              isActive 
                ? (isDarkMode ? "text-white" : "text-black") 
                : (isDarkMode ? "text-white/20 hover:text-white" : "text-black/30 hover:text-black")
            }`}
          >
            <span className="origin-right transition-transform duration-500 group-hover:scale-110 font-medium">
              {link.name}
            </span>
            <div className="relative w-8 md:w-12 h-[1px] bg-current opacity-20 group-hover:opacity-100 group-hover:w-16 transition-all duration-500">
              {isActive && (
                <motion.div
                  layoutId="activeVertical"
                  className="absolute right-0 top-[-2px] w-1.5 h-1.5 bg-[#BC002D] rounded-full shadow-[0_0_10px_#BC002D]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          </button>
        );
      })}
    </nav>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    // 1. Theme Logic
    const currentHour = new Date().getHours();
    setIsDarkMode(!(currentHour >= 6 && currentHour < 18));

    // 2. RE-FIXED: Precise Observer Logic
    const observerOptions = {
      root: null,
      // rootMargin use karne se detection tab hota hai jab section screen ke center area mein ho
      rootMargin: "-45% 0px -45% 0px", 
      threshold: 0 // Thoda sa bhi part margin area mein aate hi trigger
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["home", "skills", "projects", "about"];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDarkMode ? "bg-[#070707] text-white" : "bg-[#F5F5F7] text-[#1D1D1F]"} selection:bg-[#BC002D]/30`}>
      
      <button 
        onClick={toggleTheme}
        className={`fixed top-6 right-20 md:top-10 md:right-24 z-[110] p-2 rounded-full border transition-all duration-500 ${isDarkMode ? 'border-white/10 hover:bg-white/5 text-white' : 'border-black/10 hover:bg-black/5 text-black'}`}
      >
        {isDarkMode ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
      </button>

      <Sidebar isDarkMode={isDarkMode} activeSection={activeSection} onNavigate={handleScroll} />

      <div className="fixed top-6 left-6 md:top-10 md:left-10 z-[100] mix-blend-difference pointer-events-none">
         <span className={`text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[1em] uppercase font-sans ${isDarkMode ? 'opacity-40' : 'opacity-60 font-bold'}`}>
            @codewsensei
         </span>
      </div>

      <main>
        {/* min-h-screen ensure karta hai ki section detect ho sake */}
        <section id="home" className="min-h-screen"><Home isDarkMode={isDarkMode} onNavigate={handleScroll}/></section>
        <section id="skills" className="min-h-screen"><Skills isDarkMode={isDarkMode} /></section>
        <section id="projects" className="min-h-screen"><Projects isDarkMode={isDarkMode} /></section>
        <section id="about" className="min-h-screen"><About isDarkMode={isDarkMode} /></section>
      </main>
    </div>
  );
}