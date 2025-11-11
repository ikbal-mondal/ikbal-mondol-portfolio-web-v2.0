import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaUserAlt,
  FaEnvelope,
  FaCertificate,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Load theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const activeStyle =
    "text-primary font-semibold flex items-center gap-2 border-b-2 border-primary py-2";
  const linkStyle = "flex items-center gap-2 hover:text-primary transition";

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/skills", label: "Skills", icon: <FaTools /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/about", label: "About", icon: <FaUserAlt /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
    { to: "/certificates", label: "Certificates", icon: <FaCertificate /> },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-base-100/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          <img
            title="Ikbal Mondal"
            className="w-12 rounded "
            src="https://i.ibb.co/JWr5PtdJ/Gemini-Generated-Image-hk1hmshk1hmshk1h.png"
            alt="Ikbal Mondal"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-lg">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeStyle : linkStyle
                }
              >
                {item.icon} {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <span className="text-sm">Toggle theme</span>
          <button onClick={toggleTheme} className="btn btn-ghost text-xl">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden btn btn-ghost text-xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 left-0 w-full h-full bg-primary text-white shadow-xl z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-base-300">
            <h3 className="font-semibold text-base">Menu</h3>
            <button
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col mt-3 bg-primary text-white">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex  hover:text-primary my-2 items-center gap-4 px-5 py-3 text-[16px] ${
                    isActive
                      ? "text-primary  font-semibold bg-base-300"
                      : "hover:bg-base-300"
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className="hover:text-primary">{item.label}</span>
              </NavLink>
            ))}
          </ul>

          {/* Theme Switch */}
          <div className="px-5 bg-primary text-white py-4 flex items-center justify-between">
            <span className="font-medium text-white">Theme</span>
            <button
              onClick={toggleTheme}
              className="btn btn-sm btn-ghost text-xl"
            >
              <span>Theme Switch</span>
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
