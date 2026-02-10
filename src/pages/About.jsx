import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AboutScene from "../components/AboutScene";
import { Mail, Wallet, ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function About({ isDarkMode }) { // added isDarkMode prop
  const [copied, setCopied] = useState(false);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className={`relative min-h-screen overflow-x-hidden font-serif transition-colors duration-700 ${
      isDarkMode ? "bg-[#050505] text-[#D1D1D1]" : "bg-[#F5F5F7] text-[#1D1D1F]"
    }`}>
      
      {/* BACKGROUND SCENE - Passing theme to 3D scene */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
        isDarkMode ? "opacity-40 md:opacity-60" : "opacity-20 md:opacity-30"
      }`}>
        <AboutScene isDarkMode={isDarkMode} />
      </div>

      {/* OVERLAY GRAIN */}
      <div className={`absolute inset-0 z-[1] pointer-events-none transition-colors duration-700 ${
        isDarkMode ? "bg-black/40" : "bg-white/10"
      }`} />

      {/* NOTIFICATION TOAST */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-[110] bg-[#BC002D] text-white px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-sans shadow-2xl whitespace-nowrap"
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
              
              <h1 className={`text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter leading-[0.9] md:leading-[0.85] ${
                isDarkMode ? "text-white" : "text-black"
              }`}>
                Code with<br />
                <span className={`italic font-serif lowercase ${isDarkMode ? "opacity-20" : "opacity-10"}`}>sensei</span>
              </h1>
              <p className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-sans text-[#BC002D] font-bold">
                Specialization: webapp, dapp and smart contract developer
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* ABOUT ME SECTION */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <span className={`text-[9px] tracking-[0.4em] uppercase font-sans ${isDarkMode ? "opacity-30" : "opacity-50 font-bold"}`}>About me</span>
                <p className={`text-base md:text-lg leading-relaxed italic ${isDarkMode ? "text-white/60" : "text-black/60"}`}>
                  I architect <span className={isDarkMode ? "text-white" : "text-black font-medium"}>high-fidelity</span> digital ecosystems. My work sits at the intersection of complex logic and fluid aesthetics, focusing on building secure, decentralized solutions that don't compromise on user experience.
                </p>
              </motion.div>

              {/* COMFORTABLE AREA SECTION */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <span className={`text-[9px] tracking-[0.4em] uppercase font-sans ${isDarkMode ? "opacity-30" : "opacity-50 font-bold"}`}>Comfortable_Area</span>
                <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? "text-white/60" : "text-black/60"}`}>
                  Engineering <span className={isDarkMode ? "text-white" : "text-black font-medium"}>DeFi protocols</span>, custom smart contract logic, and immersive dApp interfaces.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-12 pt-6 md:pt-10">
              <SocialLink href="https://x.com/codewsensei" label="X" isDarkMode={isDarkMode} />
              <SocialLink href="https://github.com/codewsensei" label="GitHub" isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* RIGHT COLUMN: SUPPORT */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`backdrop-blur-sm border p-8 md:p-12 relative overflow-hidden group rounded-sm transition-all duration-700 ${
                isDarkMode ? "bg-white/[0.02] border-white/5" : "bg-black/[0.03] border-black/10 shadow-sm"
              }`}
            >
              <div className={`absolute top-0 right-0 w-20 h-[1px] hidden md:block ${isDarkMode ? "bg-white/10" : "bg-black/10"}`} />
              <div className={`absolute top-0 right-0 w-[1px] h-20 hidden md:block ${isDarkMode ? "bg-white/10" : "bg-black/10"}`} />

              <div className="space-y-8 md:space-y-10 relative z-10">
                <div className="space-y-2">
                  <h2 className={`text-[10px] md:text-xs tracking-[0.5em] md:tracking-[0.8em] uppercase font-sans flex items-center gap-3 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}>
                    <Wallet className="w-4 h-4 text-[#BC002D]" />
                    Support_my_work
                  </h2>
                  <p className={`text-[11px] md:text-sm lowercase italic leading-relaxed ${isDarkMode ? "text-white/30" : "text-black/40"}`}>Direct support via EVM Networks.</p>
                </div>

                <div className={`space-y-4 pt-4 border-t ${isDarkMode ? "border-white/5" : "border-black/5"}`}>
                  <div className="flex justify-between items-center">
                    <p className={`text-[9px] tracking-[0.3em] uppercase ${isDarkMode ? "opacity-40" : "opacity-60 font-bold"}`}>Ethereum/EVM</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <code className={`text-[10px] md:text-xs font-mono break-all leading-relaxed p-3 rounded-sm border transition-colors ${
                      isDarkMode 
                        ? "text-white/80 bg-white/5 border-white/5 group-hover:border-white/10" 
                        : "text-black/80 bg-black/5 border-black/5 group-hover:border-black/10"
                    }`}>
                      0x6275298df12bd80ba338d64ce35f96b3cdb3bbd2
                    </code>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopy("0x6275298df12bd80ba338d64ce35f96b3cdb3bbd2")}
                      className="text-[10px] tracking-[0.4em] uppercase text-[#BC002D] self-start border-b border-[#BC002D]/20 pb-2 flex items-center gap-3 hover:text-white hover:bg-[#BC002D] px-2 transition-all group/btn"
                    >
                      Copy_Address <ExternalLink size={10} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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

function SocialLink({ href, label, isDarkMode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ x: 5 }}
      className={`text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase transition-colors flex items-center gap-2 group font-sans ${
        isDarkMode ? "text-white/40 hover:text-[#BC002D]" : "text-black/50 hover:text-[#BC002D]"
      }`}
    >
      {label} <ArrowUpRight size={12} className="opacity-0 md:group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}