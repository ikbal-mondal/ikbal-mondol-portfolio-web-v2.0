import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaDownload,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { MdAttachEmail, MdEmail } from "react-icons/md";
import myResume from "../assets/Ikbal_Mondal_Resume.pdf";
import { useState } from "react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email!");
    alert("✅ Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="relative mt-20">
      {/* 🔥 Triple Layer Wave Background */}
      <div className="absolute top-0 w-full -z-10 opacity-90">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-40 fill-primary/20 animate-pulse"
        >
          <path d="M0,160L60,144C120,128,240,96,360,122.7C480,149,600,235,720,256C840,277,960,235,1080,192C1200,149,1320,107,1380,85.3L1440,64V320H0Z"></path>
        </svg>
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-40 fill-secondary/20 animate-[pulse_7s_infinite]"
        >
          <path d="M0,128L60,149.3C120,171,240,213,360,234.7C480,256,600,256,720,229.3C840,203,960,149,1080,112C1200,75,1320,53,1380,42.7L1440,32V320H0Z"></path>
        </svg>
      </div>

      {/* Neon Border Top */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="h-[3px] w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:300%_300%]"
      ></motion.div>

      <div className="bg-base-100/50 backdrop-blur-xl border-t border-white/20 py-20">
        <div className="container mx-auto grid md:grid-cols-5 gap-10 px-6">
          {/* ✅ Brand Column */}
          <div>
            <h2 className="text-3xl font-bold text-primary">Ikbal Mondal</h2>
            <p className="text-base-content/70 mt-3 leading-relaxed">
              Creating modern, animated, and interactive websites with love &
              clean code.
            </p>
          </div>

          {/* ✅ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-base-content/70">
              <li>
                <a href="#home" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ✅ Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="flex items-center gap-3 text-base-content/70">
              <FaPhoneAlt /> +91 9064743262
            </p>
            <p className="flex items-center gap-3 text-base-content/70 mt-2">
              <MdAttachEmail className="text-black" />
              ikbalmondal019@gmail.com
            </p>
            <p className="text-base-content/70 mt-2 flex items-center gap-2">
              {" "}
              <FaLocationArrow></FaLocationArrow> West Bengal, India
            </p>
          </div>

          {/* ✅ Subscribe Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary w-full">Subscribe</button>
            </form>
          </div>

          {/* ✅ Social + Download CV */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>

            {/* Rotating Social Icons */}
            <div className="flex gap-5 text-3xl mb-6">
              <motion.a
                href="https://github.com/"
                target="_blank"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-sky-500 to-blue-700 bg-clip-text text-transparent"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-500 to-blue-800 bg-clip-text text-transparent"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://facebook.com/"
                target="_blank"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-indigo-400 to-purple-700 bg-clip-text text-transparent"
              >
                <FaFacebook />
              </motion.a>
            </div>

            <motion.a
              href={myResume}
              download="Ikbal_Mondal_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="btn btn-outline w-full flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </motion.a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-primary text-white shadow-2xl"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}
