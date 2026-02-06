import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold tracking-wide text-lg cursor-pointer"
          >
            <NavLink to="/">PORTFOLIO</NavLink>
          </motion.div>

          {/* LINKS */}
          <div className="flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition ${
                    isActive ? "text-white" : "text-white/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block"
                  >
                    {link.name}

                    {/* underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </motion.span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
