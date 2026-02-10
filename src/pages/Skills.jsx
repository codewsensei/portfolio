import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiGreensock, SiFramer, SiReact, SiThreedotjs,
  SiNodedotjs, SiJavascript, SiNextdotjs, SiTailwindcss,
  SiFirebase, SiSupabase, SiMongodb, SiSolidity,
  SiWeb3Dotjs, SiEthereum, SiWalletconnect
} from "react-icons/si";

const RevealText = ({ text, delay = 0 }) => {
  return (
    <span className="overflow-hidden inline-block leading-tight">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const skillCategories = [
  {
    category: "Blockchain Architecture",
    items: [
      { name: "Solidity", desc: "Smart contract development & security.", icon: <SiSolidity size={22} /> },
      { name: "Ethers.js / Web3.js", desc: "Blockchain interaction layers.", icon: <SiWeb3Dotjs size={22} /> },
      { name: "Ethereum", desc: "EVM compatible dApp ecosystems.", icon: <SiEthereum size={22} /> },
      { name: "WalletConnect", desc: "Multi-wallet integration protocols.", icon: <SiWalletconnect size={22} /> },
    ]
  },
  {
    category: "Core Frontend",
    items: [
      { name: "Next.js 15", desc: "SSR & App Router architecture.", icon: <SiNextdotjs size={22} /> },
      { name: "JavaScript", desc: "Dynamic enterprise-level logic.", icon: <SiJavascript size={22} /> }, // Changed from TypeScript
      { name: "React", desc: "Advanced hooks & state patterns.", icon: <SiReact size={22} /> },
      { name: "Tailwind CSS", desc: "Utility-first design systems.", icon: <SiTailwindcss size={22} /> },
    ]
  },
  {
    category: "Creative Tech",
    items: [
      { name: "Three.js", desc: "WebGL & 3D scene orchestration.", icon: <SiThreedotjs size={22} /> },
      { name: "GSAP", desc: "High-performance timeline FX.", icon: <SiGreensock size={22} /> },
      { name: "Framer Motion", desc: "Gesture & layout animations.", icon: <SiFramer size={22} /> },
      { name: "Shaders", desc: "Custom GLSL visual effects.", icon: <SiThreedotjs size={22} /> },
    ]
  },
  {
    category: "System & Database",
    items: [
      { name: "Node.js", desc: "Scalable backend environments.", icon: <SiNodedotjs size={22} /> },
      { name: "Firebase", desc: "Relational data management.", icon: <SiFirebase size={22} /> },
      { name: "MongoDB", desc: "NoSQL document-based database.", icon: <SiMongodb size={22}  /> },
      { name: "Supabase", desc: "Realtime infra & Auth systems.", icon: <SiSupabase size={22} /> },
    ]
  }
];

export default function Skills({ isDarkMode }) { // Added isDarkMode prop
  return (
    <main className={`min-h-screen font-serif pt-32 md:pt-48 pb-20 overflow-x-hidden relative transition-colors duration-700 selection:bg-[#BC002D] ${
      isDarkMode ? "bg-[#070707] text-[#D1D1D1]" : "bg-[#F5F5F7] text-[#1D1D1F]"
    }`}>
      
      {/* SIDEBAR COORDINATES */}
      <div className="fixed top-12 left-12 mix-blend-difference z-50 hidden md:block">
        <div className={`text-[9px] tracking-[1em] font-sans uppercase [writing-mode:vertical-rl] h-40 flex justify-between border-r pb-4 ${
          isDarkMode ? "opacity-40 border-white/10" : "opacity-60 border-black/10"
        }`}>
          <span>2026</span>
          <span className="text-[#BC002D]">stack</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-24">
        {/* HEADER AREA */}
        <div className="mb-24 md:mb-32">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1.5, ease: "circInOut" }}
            className="h-[1px] bg-[#BC002D] mb-8"
          />
          
          <h1 className={`text-5xl md:text-[9rem] font-light tracking-tighter leading-[0.9] md:leading-[0.85] ${
            isDarkMode ? "text-white" : "text-black"
          }`}>
            <RevealText text="Technical" delay={0.2} /> <br />
            <span className={`italic ${isDarkMode ? "opacity-20" : "opacity-10"}`}>
              <RevealText text="Stack" delay={0.6} />
            </span>
          </h1>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-10 items-start">
             <p className={`max-w-md text-[9px] md:text-[10px] leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.3em] font-sans ${
               isDarkMode ? "text-white/40" : "text-black/50"
             }`}>
                A curated selection of tools optimized for high-performance interaction, functional logic, and motion-heavy user experiences.
             </p>
          </div>
        </div>

        {/* SKILLS CATEGORIES */}
        <div className="space-y-32 md:space-y-40">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-12 md:space-y-16">
              <div className="flex items-center gap-6">
                <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-[#BC002D] font-bold font-sans uppercase underline underline-offset-8 whitespace-nowrap">
                  {cat.category}
                </span>
                <div className={`h-[1px] flex-grow ${isDarkMode ? "bg-white/5" : "bg-black/5"}`} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-12">
                {cat.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative"
                  >
                    <div className="relative z-10">
                      <div className={`mb-5 group-hover:text-[#BC002D] transition-all duration-500 ${
                        isDarkMode ? "text-white/20" : "text-black/20"
                      }`}>
                         {skill.icon}
                      </div>
                      <h3 className={`text-lg md:text-xl font-light mb-2 tracking-tight group-hover:pl-2 transition-all duration-300 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}>
                        {skill.name}
                      </h3>
                      <p className={`text-[10px] md:text-[11px] uppercase tracking-[0.1em] font-sans leading-relaxed ${
                        isDarkMode ? "text-white/30" : "text-black/40"
                      }`}>
                        {skill.desc}
                      </p>
                    </div>
                    <div className="absolute -bottom-4 left-0 w-4 h-[1px] bg-[#BC002D] group-hover:w-full transition-all duration-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`mt-40 md:mt-60 py-16 md:py-20 px-6 md:px-10 border-t flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 opacity-30 ${
        isDarkMode ? "border-white/5" : "border-black/5"
      }`}>
        <span className="text-[8px] md:text-[9px] tracking-[0.8em] md:tracking-[1em] uppercase text-center">Built for Performance</span>
        <div className="flex gap-4 hidden md:flex">
          <div className={`w-[1px] h-4 rotate-12 ${isDarkMode ? "bg-white/20" : "bg-black/20"}`} />
          <div className={`w-[1px] h-4 rotate-12 ${isDarkMode ? "bg-white/20" : "bg-black/20"}`} />
        </div>
        <span className="text-[8px] md:text-[9px] tracking-[0.8em] md:tracking-[1em] uppercase">Verified_2026</span>
      </footer>
    </main>
  );
}