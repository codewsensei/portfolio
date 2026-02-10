import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  SiReact, SiGreensock, SiFramer,
  SiNodedotjs, SiTailwindcss, SiJavascript, SiNextdotjs
} from "react-icons/si";

const ScrambleText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    let timer;
    const animate = () => {
      timer = setTimeout(() => {
        const scrambled = text
          .split("")
          .map((char, index) => {
            if (char === " " || frame > index + 10) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        setDisplayText(scrambled);
        frame++;
        if (frame < text.length + 15) animate();
        else setDisplayText(text);
      }, 40);
    };
    const startTimeout = setTimeout(animate, delay * 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(startTimeout);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

export default function Home({ isDarkMode, onNavigate }) {
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  // Background Particle Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-particle", {
        y: "-100vh",
        duration: "random(10, 20)",
        repeat: -1,
        ease: "none",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className={`relative min-h-screen font-serif transition-colors duration-700 overflow-x-hidden ${
      isDarkMode ? "bg-[#070707] text-[#d1d1d1]" : "bg-[#F5F5F7] text-[#1D1D1F]"
    }`}>
      
      {/* --- DYNAMIC JAPANESE INK-FLOAT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        
        {/* Floating Ink Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`bg-particle absolute rounded-full blur-[1px] ${
              isDarkMode ? "bg-white/[0.03]" : "bg-black/[0.04]"
            }`}
            style={{
              width: Math.random() * 40 + 10 + "px",
              height: Math.random() * 40 + 10 + "px",
              left: Math.random() * 100 + "%",
              bottom: "-10%"
            }}
          />
        ))}

        {/* Soft Red Horizon Glow */}
        <div className={`absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] transition-opacity duration-1000 ${
          isDarkMode ? "bg-[#BC002D]/10 opacity-100" : "bg-[#BC002D]/5 opacity-80"
        }`} />

        {/* Noise Texture Overaly */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
      </div>

      {/* SIDEBAR DECO */}
      <div className="fixed left-4 lg:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 font-sans opacity-20 pointer-events-none z-10">
        <span className={`text-[7px] tracking-[1em] rotate-90 mb-16 uppercase font-bold whitespace-nowrap ${
          isDarkMode ? "text-white" : "text-black"
        }`}>
          web3_Full_stack_developer
        </span>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[100svh] flex items-center justify-center px-6 py-12 md:py-20">
        <div ref={heroRef} className="max-w-6xl w-full text-center space-y-10 md:space-y-14">
          <div className="space-y-4 md:space-y-6">
            <motion.p className="zen-element text-[7px] sm:text-[9px] tracking-[0.4em] md:tracking-[1em] uppercase text-[#bc002d] font-bold font-sans">
              <ScrambleText text="CodeWsensei // web3 Full stack ENGINEER" delay={0.5} />
            </motion.p>
            
            <h1 className={`zen-element text-4xl sm:text-6xl md:text-7xl lg:text-[9rem] font-light leading-[1.1] md:leading-[0.8] tracking-tighter ${
              isDarkMode ? "text-white" : "text-black"
            }`}>
              <ScrambleText text="Crafting" delay={0.8} /> <br />
              <span className={`italic font-serif lowercase block sm:inline ${
                isDarkMode ? "opacity-30" : "opacity-20"
              }`}>
                <ScrambleText text="digital logic." delay={1.4} />
              </span>
            </h1>
          </div>

          <p className={`zen-element max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-xl font-light leading-relaxed tracking-wide px-4 ${
            isDarkMode ? "text-white/40" : "text-black/50"
          }`}>
            Specializing in <span className={`${isDarkMode ? "text-white" : "text-black"} italic`}>interaction-driven</span> web experiences. I bridge the gap between high-end aesthetics and robust architecture.
          </p>

          <div className="zen-element flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center pt-4">
            {/* FIXED: motion.a -> motion.button with onNavigate */}
            <motion.button
              onClick={() => onNavigate("projects")}
              whileHover={{ x: 10, color: isDarkMode ? "#fff" : "#bc002d" }}
              className={`group flex items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-all duration-500 cursor-pointer outline-none ${
                isDarkMode ? "text-white/50" : "text-black/40"
              }`}
            >
              Selected Works <span className={`hidden sm:block w-8 h-[1px] transition-all ${
                isDarkMode ? "bg-white/20 group-hover:bg-[#bc002d]" : "bg-black/10 group-hover:bg-[#bc002d]"
              } group-hover:w-12`} />
            </motion.button>

            {/* FIXED: motion.a -> motion.button with onNavigate */}
            <motion.button
              onClick={() => onNavigate("about")}
              className={`text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] transition-colors duration-500 cursor-pointer outline-none ${
                isDarkMode ? "text-white/20 hover:text-white" : "text-black/30 hover:text-black"
              }`}
            >
              Read Biography
            </motion.button>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES SECTION */}
      <section className={`relative z-10 py-20 md:py-40 px-6 lg:px-20 border-t transition-colors duration-700 ${
        isDarkMode ? "border-white/5 bg-[#080808]/30" : "border-black/5 bg-white/60 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
          {[
            { 
              title: "SCALABILITY", 
              label: "Architectural Integrity", 
              desc: "Building modular, clean, and maintainable codebases that evolve with the product's growth." 
            },
            { 
              title: "INTERACTION", 
              label: "User Psychology", 
              desc: "Developing motion systems that aren't just decorative, but functional and responsive to human behavior." 
            },
            { 
              title: "PERFORMANCE", 
              label: "Optimized Engineering", 
              desc: "Leveraging GPU acceleration and efficient state management for seamless digital experiences." 
            },
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group space-y-6"
            >
              <div className="flex items-center gap-4">
                 <span className="text-[#bc002d] text-[10px] font-bold font-sans tracking-widest">0{i+1}</span>
                 <div className={`h-[1px] w-6 md:w-8 transition-all duration-500 group-hover:w-12 md:group-hover:w-16 group-hover:bg-[#bc002d] ${
                   isDarkMode ? "bg-white/10" : "bg-black/10"
                 }`} />
              </div>
              <div className="space-y-2">
                <h3 className={`text-3xl md:text-4xl font-light tracking-tighter ${
                  isDarkMode ? "text-white" : "text-black"
                }`}>
                  {item.title}
                </h3>
                <p className={`text-[8px] md:text-[9px] tracking-[0.3em] uppercase font-sans font-bold ${
                  isDarkMode ? "text-white/20" : "text-black/30"
                }`}>{item.label}</p>
              </div>
              <p className={`text-[13px] md:text-sm leading-relaxed font-light italic ${
                isDarkMode ? "text-white/40" : "text-black/50"
              }`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK FOOTER */}
      <footer className={`relative z-10 py-16 md:py-24 border-t transition-colors duration-700 ${
        isDarkMode ? "border-white/5 bg-[#070707]" : "border-black/5 bg-[#F5F5F7]"
      }`}>
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className={`flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 grayscale transition-all duration-700 ${
            isDarkMode ? "opacity-20 hover:opacity-100 hover:grayscale-0" : "opacity-40 hover:opacity-100 hover:grayscale-0"
          }`}>
            <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" />
            <SiReact className="w-6 h-6 md:w-8 md:h-8" />
            <SiJavascript className="w-6 h-6 md:w-8 md:h-8" />
            <SiNodedotjs className="w-6 h-6 md:w-8 md:h-8" />
            <SiGreensock className="w-6 h-6 md:w-8 md:h-8" />
            <SiFramer className="w-6 h-6 md:w-8 md:h-8" />
            <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <span className="w-1 h-1 bg-[#bc002d] rounded-full animate-pulse" />
            <p className={`text-[9px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-widest uppercase ${
              isDarkMode ? "text-white/20" : "text-black/40"
            }`}>
              Open for Opportunities
            </p>
            <span className="w-1 h-1 bg-[#bc002d] rounded-full animate-pulse" />
          </div>
        </div>
      </footer>
    </main>
  );
}