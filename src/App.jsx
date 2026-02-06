import { Routes, Route, useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";

// Vertical Navbar Component
const Sidebar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "skills", path: "/skills" },
    { name: "projects", path: "/projects" },
    { name: "about", path: "/about" },
  ];

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end gap-12">
      {/* Dynamic Vertical Line */}
      <div className="absolute right-0 top-[-100px] bottom-[-100px] w-[1px] bg-white/5" />
      
      {links.map((link, i) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `group relative flex items-center gap-6 text-[10px] tracking-[0.4em] uppercase transition-all duration-700 ${
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
              <div className="relative w-12 h-[1px] bg-current opacity-20 group-hover:opacity-100 group-hover:w-16 transition-all duration-500">
                {isActive && (
                  <motion.div
                    layoutId="activeVertical"
                    className="absolute right-0 top-[-2px] w-1.5 h-1.5 bg-[#BC002D] rounded-full shadow-[0_0_10px_#BC002D]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
              
              {/* Ghost Numbering */}
              {/* <span className="absolute -left-12 opacity-0 group-hover:opacity-10 transition-opacity font-sans font-bold text-lg">
                0{i + 1}
              </span> */}
            </>
          )}
        </NavLink>
      ))}
      
      {/* Scroll Hint Detail */}
      <div className="mt-10 flex flex-col items-center gap-4">
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
      {/* Right-Side Vertical Navbar */}
      <Sidebar />

      {/* Decorative Branding (Optional top-left) */}
      <div className="fixed top-10 left-10 z-[100] mix-blend-difference pointer-events-none">
         <span className="text-[10px] tracking-[1em] opacity-40 uppercase font-sans">@Codewsensei</span>
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