import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Blur-In Character Stagger
const BlurReveal = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * 0.04,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const projects = [
  {
    title: "Axon Audit",
    desc: "A protocol where you don't need firms or big KOLs contact to audit your contract, or if you are an auditor and don't have any job or joined any firm yet, audit here and start your earning.",
    tag: "Audit_PROTOCOL_01",
    preview: "https://axon-audit.vercel.app/",
  },
  {
    title: "MintSkill",
    desc: "A web3 protocol where creators monetize talent without compromising privacy.",
    tag: "PROTOCOL_02",
    preview: "https://mintskill.vercel.app/",
  },
  {
    title: "PitchChain",
    desc: "A decentralized connection point for founders and investors to build vision.",
    tag: "ECOSYSTEM_03",
    preview: "https://pitchchain.vercel.app/",
  },
];

export default function Projects({ isDarkMode }) {
  return (
    <main className={`min-h-screen font-serif pt-32 md:pt-40 pb-20 px-6 md:px-10 relative overflow-x-hidden transition-colors duration-700 ${
      isDarkMode ? "bg-[#070707] text-[#D1D1D1]" : "bg-[#F5F5F7] text-[#1D1D1F]"
    }`}>
      
      {/* ZEN ACCENT */}
      <div className="fixed top-8 right-8 md:top-12 md:right-12 w-2 h-2 bg-[#BC002D] rounded-full z-50 shadow-[0_0_15px_rgba(188,0,45,0.4)]" />

      {/* HEADER */}
      <section className="max-w-6xl mx-auto mb-24 md:mb-40 relative z-10">
        <div className="relative inline-block overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
            className="absolute inset-0 bg-[#BC002D] z-10"
          />
          <h1 className={`text-6xl md:text-9xl font-light tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Selected
          </h1>
        </div>
        <br />
        <div className="relative inline-block overflow-hidden mt-[-10px] md:mt-[-20px]">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
            className={`absolute inset-0 z-10 ${isDarkMode ? 'bg-white' : 'bg-black'}`}
          />
          <span className={`italic text-6xl md:text-9xl lowercase ${isDarkMode ? 'opacity-30' : 'opacity-10'}`}>works</span>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <div className="max-w-6xl mx-auto space-y-32 md:space-y-72 relative z-10">
        {projects.map((p, i) => (
          <div key={p.title} className="group grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center">
            
            {/* CONTENT */}
            <div className="md:col-span-5 space-y-6 md:space-y-8 order-2 md:order-1">
              <div className="space-y-3">
                <div className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] text-[#BC002D] font-sans font-bold uppercase">
                  <BlurReveal text={p.tag} delay={0.2} />
                </div>
                <h3 className={`text-4xl md:text-6xl font-light leading-tight tracking-tighter ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {p.title}
                </h3>
              </div>
              
              <p className={`text-base md:text-lg font-light leading-relaxed max-w-sm ${isDarkMode ? 'text-white/40' : 'text-black/50'}`}>
                {p.desc}
              </p>

              <motion.a
                href={p.preview}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase group/link ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                <span className={`border-b pb-1 transition-colors duration-500 ${isDarkMode ? 'border-white/10 group-hover/link:border-[#BC002D]' : 'border-black/10 group-hover/link:border-[#BC002D]'}`}>Visit Live</span>
                <span className="text-[#BC002D] transform group-hover/link:translate-x-2 transition-transform duration-500">→</span>
              </motion.a>
            </div>

            {/* PREVIEW */}
            <div className="md:col-span-7 order-1 md:order-2 relative">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`aspect-video relative overflow-hidden rounded-sm border ${
                  isDarkMode ? "bg-[#111] border-white/5" : "bg-white border-black/5 shadow-xl"
                }`}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <iframe
                    src={p.preview}
                    className={`w-[150%] h-[150%] origin-top-left scale-[0.67] grayscale group-hover:grayscale-0 transition-all duration-1000 pointer-events-none ${
                      isDarkMode ? "opacity-40 group-hover:opacity-100" : "opacity-60 group-hover:opacity-100"
                    }`}
                    title={p.title}
                    loading="lazy"
                  />
                </motion.div>

                {/* Reveal Animation */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                  className={`absolute inset-0 origin-right z-20 ${isDarkMode ? 'bg-[#070707]' : 'bg-[#F5F5F7]'}`}
                />
              </motion.div>

              {/* Ghost Background Title */}
              <div className="absolute -right-8 top-0 h-full hidden lg:flex items-center pointer-events-none">
                <span className={`text-[10rem] font-black uppercase font-sans tracking-tighter rotate-90 origin-center leading-none select-none ${
                  isDarkMode ? 'text-white/[0.02]' : 'text-black/[0.02]'
                }`}>
                  {p.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className={`mt-40 md:mt-64 py-16 md:py-20 border-t flex flex-col items-center gap-6 relative z-10 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
          <div className="flex gap-4">
            <div className="w-1 h-1 bg-[#BC002D] rounded-full animate-ping" />
            <span className={`text-[9px] tracking-[1em] md:tracking-[1.5em] uppercase font-sans ${isDarkMode ? 'opacity-30' : 'opacity-40'}`}>Portfolio</span>
          </div>
          <p className={`text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-sans italic ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>All rights reserved_2026</p>
      </footer>
    </main>
  );
}