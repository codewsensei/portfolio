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

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".zen-element", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#070707] text-[#d1d1d1] font-serif selection:bg-[#bc002d] selection:text-white overflow-x-hidden">
      
      {/* SIDEBAR DECO - Hidden on Mobile/Tablet */}
      <div className="fixed left-4 lg:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 font-sans opacity-20 pointer-events-none z-0">
        <span className="text-[7px] tracking-[1em] rotate-90 mb-16 text-white uppercase font-bold whitespace-nowrap">
          web3_Full_stack_developer
        </span>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[100svh] flex items-center justify-center px-6 py-12 md:py-20">
        <div ref={heroRef} className="max-w-6xl w-full text-center space-y-10 md:space-y-14">
          <div className="space-y-4 md:space-y-6">
            <motion.p className="zen-element text-[7px] sm:text-[9px] tracking-[0.4em] md:tracking-[1em] uppercase text-[#bc002d] font-bold font-sans">
              <ScrambleText text="CodeWSensei // web3 Full stack ENGINEER" delay={0.5} />
            </motion.p>
            
            <h1 className="zen-element text-4xl sm:text-6xl md:text-7xl lg:text-[9rem] font-light leading-[1.1] md:leading-[0.8] tracking-tighter text-white">
              <ScrambleText text="Crafting" delay={0.8} /> <br />
              <span className="italic opacity-30 font-serif lowercase block sm:inline">
                <ScrambleText text="digital logic." delay={1.4} />
              </span>
            </h1>
          </div>

          <p className="zen-element max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-xl text-white/40 font-light leading-relaxed tracking-wide px-4">
            Specializing in <span className="text-white italic">interaction-driven</span> web experiences. I bridge the gap between high-end aesthetics and robust architecture.
          </p>

          <div className="zen-element flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center pt-4">
            <motion.a
              href="/projects"
              whileHover={{ x: 10, color: "#fff" }}
              className="group flex items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 transition-all duration-500"
            >
              Selected Works <span className="hidden sm:block w-8 h-[1px] bg-white/20 group-hover:bg-[#bc002d] group-hover:w-12 transition-all" />
            </motion.a>
            <motion.a
              href="/about"
              className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/20 hover:text-white transition-colors duration-500"
            >
              Read Biography
            </motion.a>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES SECTION */}
      <section className="relative z-10 py-20 md:py-40 px-6 lg:px-20 border-t border-white/5 bg-[#080808]/30">
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
                 <div className="h-[1px] w-6 md:w-8 bg-white/10 group-hover:w-12 md:group-hover:w-16 group-hover:bg-[#bc002d] transition-all duration-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-light text-white tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-white/20 font-sans font-bold">{item.label}</p>
              </div>
              <p className="text-[13px] md:text-sm text-white/40 leading-relaxed font-light italic">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK FOOTER */}
      <footer className="relative z-10 py-16 md:py-24 border-t border-white/5 bg-[#070707]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
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
            <p className="text-[9px] md:text-[10px] text-white/20 font-mono tracking-[0.2em] md:tracking-widest uppercase">
              Open for Opportunities
            </p>
            <span className="w-1 h-1 bg-[#bc002d] rounded-full animate-pulse" />
          </div>
        </div>
      </footer>
    </main>
  );
}