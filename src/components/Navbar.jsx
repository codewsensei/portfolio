import { motion } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
];

export default function Navbar({ activeSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Smoothly scroll to the section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo - Scrolls to top */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold tracking-wide text-lg cursor-pointer text-white"
            onClick={() => scrollToSection("home")}
          >
            PORTFOLIO
          </motion.div>

          {/* Nav Links as Buttons */}
          <div className="flex gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-sm tracking-wide transition-all duration-300 outline-none ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="inline-block"
                  >
                    {link.name}
                    {/* Active Underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#BC002D] transition-all duration-500
                      ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                    />
                  </motion.span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}