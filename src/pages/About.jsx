import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AboutScene from "../components/AboutScene";
import { Mail, Wallet, ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#D1D1D1] overflow-x-hidden font-serif">
      
      {/* BACKGROUND SCENE */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-60">
        <AboutScene />
      </div>

      {/* OVERLAY GRAIN */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* NOTIFICATION TOAST */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-50 bg-[#BC002D] text-white px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-sans shadow-2xl whitespace-nowrap"
          >
            Address_Copied
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-20 py-32 md:py-40">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-end">
          
          {/* LEFT COLUMN: IDENTITY */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16">
            <header className="space-y-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                className="h-[1px] bg-[#BC002D]"
              />
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter text-white leading-[0.9] md:leading-[0.85]">
                Code with <br />
                <span className="italic opacity-20 font-serif lowercase">Sensei</span>
              </h1>
              <p className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-sans text-[#BC002D] font-bold">
                Specialization: webapp and smart contract developer 
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <span className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-sans">About me</span>
                <p className="text-base md:text-lg leading-relaxed text-white/60 italic">
                  I specialize in building high-performance frontend experiences with animation systems, and interaction-driven UI/UX.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <span className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-sans">Comfortable_Area</span>
                <p className="text-base md:text-lg leading-relaxed text-white/60">
                  Trading interfaces, dashboards, and experimental Web3 systems are my comfort zone.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-12 pt-6 md:pt-10">
              <SocialLink href="https://github.com/codewsensei" label="GitHub" />
              <SocialLink href="https://x.com/codewsensei" label="x (twitter)" />
            </div>
          </div>

          {/* RIGHT COLUMN: UTILITY/SUPPORT */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden group"
            >
              {/* ASYMMETRIC DECO - Desktop Only */}
              <div className="absolute top-0 right-0 w-20 h-[1px] bg-white/10 hidden md:block" />
              <div className="absolute top-0 right-0 w-[1px] h-20 bg-white/10 hidden md:block" />

              <div className="space-y-8 md:space-y-10 relative z-10">
                <div className="space-y-2">
                  <h2 className="text-[10px] md:text-xs tracking-[0.5em] md:tracking-[0.8em] uppercase text-white font-sans flex items-center gap-3">
                    <Wallet className="w-4 h-4 text-[#BC002D]" />
                    Support_My_Work
                  </h2>
                  <p className="text-[11px] md:text-sm text-white/30 lowercase italic leading-relaxed">Direct crypto-contribution at EVM network.</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <p className="text-[9px] tracking-[0.3em] uppercase opacity-40">Ethereum/EVM</p>
                  <div className="flex flex-col gap-6">
                    <code className="text-[10px] md:text-xs font-mono text-white/80 break-all leading-relaxed bg-white/5 p-3 rounded-sm">
                      0x17a7Ab6629510F95374cbe2E11dE89feBcd2b6b0
                    </code>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy("0x17a7Ab6629510F95374cbe2E11dE89feBcd2b6b0")}
                      className="text-[10px] tracking-[0.4em] uppercase text-[#BC002D] self-start border-b border-[#BC002D]/20 pb-2 flex items-center gap-3 hover:text-white transition-all"
                    >
                      Copy_Address <ExternalLink size={10} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function SocialLink({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ x: 5 }}
      className="text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/40 hover:text-[#BC002D] transition-colors flex items-center gap-2 group font-sans"
    >
      {label} <ArrowUpRight size={12} className="opacity-0 md:group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}