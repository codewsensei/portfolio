import { Routes, Route, useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";

// Responsive Navbar Component
const Sidebar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "skills", path: "/skills" },
    { name: "projects", path: "/projects" },
    { name: "about", path: "/about" },
  ];

  return (
    <nav className={`
      fixed z-[100] flex transition-all duration-500
      /* Desktop: Center Right Vertical */
      md:right-8 md:top-1/2 md:-translate-y-1/2 md:flex-col md:items-end md:gap-12
      /* Mobile: Bottom Right Box */
      right-4 bottom-6 flex-col items-end gap-6 p-4 
      bg-white/[0.02] backdrop-blur-lg border border-white/5 rounded-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:p-0
    `}>
      
      {/* Dynamic Vertical Line (Desktop Only) */}
      <div className="absolute right-0 top-[-100px] bottom-[-100px] w-[1px] bg-white/5 hidden md:block" />
      
      {links.map((link, i) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `group relative flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] tracking-[0.4em] uppercase transition-all duration-700 ${
              isActive ? "text-white" : "text-white/20 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span className="origin-right transition-transform duration-500 group-hover:scale-110">
                {link.name}
              </span>

              {/* Interaction Indicator */}
              <div className="relative w-8 md:w-12 h-[1px] bg-current opacity-20 group-hover:opacity-100 group-hover:w-16 transition-all duration-500">
                {isActive && (
                  <motion.div
                    layoutId="activeVertical"
                    className="absolute right-0 top-[-2px] w-1.5 h-1.5 bg-[#BC002D] rounded-full shadow-[0_0_10px_#BC002D]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </>
          )}
        </NavLink>
      ))}
      
      {/* Scroll Hint Detail (Hidden on mobile to save space) */}
      <div className="mt-4 md:mt-10 hidden md:flex flex-col items-center gap-4">
         <span className="rotate-90 text-[8px] tracking-[0.5em] opacity-20 uppercase whitespace-nowrap">Scroll to Navigate</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-[#BC002D] to-transparent" />
      </div>
    </nav>
  );
};

const pageVariants = {
  initial: { opacity: 0, x: -20, filter: "blur(10px)" },
  animate: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    x: 20, 
    filter: "blur(10px)",
    transition: { duration: 0.5, ease: "easeIn" } 
  },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#BC002D]/30">
      {/* Responsive Navbar */}
      <Sidebar />

      {/* Branding - Adjusted for mobile */}
      <div className="fixed top-6 left-6 md:top-10 md:left-10 z-[100] mix-blend-difference pointer-events-none">
         <span className="text-[9px] md:text-[10px] tracking-[0.5em] md:tracking-[1em] opacity-40 uppercase font-sans">@Codewsensei</span>
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
