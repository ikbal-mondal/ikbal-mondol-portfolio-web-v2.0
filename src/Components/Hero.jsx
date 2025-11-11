import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiReactrouter,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 grid lg:grid-cols-2 gap-10 items-center">
      {/* LEFT CONTENT */}
      <div className="space-y-6 text-center lg:text-left">
        <h3 className="text-3xl font-bold flex items-center gap-2">
          Hi There
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </h3>

        {/* Typewriter animation */}
        <h4 className="text-3xl font-semibold text-primary">
          <Typewriter
            options={{
              strings: [
                "I'm Ikbal Mondal",
                "Frontend Developer",
                "React Developer",
                "Full-stack Learner",
                "Passionate Coder",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <div class="space-y-1 border-2 border-primary/25 rounded-lg p-3 text-base text-base-content/50 leading-relaxed">
          <p>
            <span class="text-primary/90 font-semibold">Frontend:</span>{" "}
            React-based responsive UI with smooth animations and modern design.
          </p>
          <p>
            <span class="text-primary/90 font-semibold">Backend:</span> Fast and
            scalable REST APIs using Express.js and MongoDB.
          </p>
          <p>
            <span class="text-primary/90 font-semibold">Authentication:</span>{" "}
            Secure login, protected routes, and role-based access using JWT &
            Firebase.
          </p>
        </div>
        {/* BUTTONS */}
        <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
          <button className="btn btn-primary px-6">View Projects</button>
          <button className="btn btn-outline px-6">Download Resume</button>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center lg:justify-start gap-6 text-xl mt-4 text-base-content/60">
          <a href="https://github.com" className="hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" className="hover:text-primary">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE (New responsive layout) */}
      <div className="hidden lg:block">
        <div className="relative flex justify-center items-center">
          {/* Orbit icons (desktop only) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
            {[
              {
                icon: <FaReact className="text-sky-400 opacity-20" />,
                pos: "top-[-20px] left-2/3 -translate-x-1/2",
              },
              {
                icon: <SiJavascript className="text-yellow-400 opacity-20" />,
                pos: "top-[18%] left-0",
              },
              {
                icon: <SiTailwindcss className="text-cyan-400 opacity-20" />,
                pos: "top-1/2 left-[-20px] -translate-y-1/2",
              },
              {
                icon: <SiMongodb className="text-green-600 opacity-20" />,
                pos: "bottom-[18%] left-[0]",
              },
              {
                icon: <SiFirebase className="text-yellow-500 opacity-20" />,
                pos: "bottom-[-15px] left-1/2 -translate-x-1/2",
              },
              {
                icon: <SiExpress className="text-gray-400 opacity-20" />,
                pos: "bottom-[18%] right-[0]",
              },
              {
                icon: <SiReactrouter className="text-red-500 opacity-20" />,
                pos: "top-1/2 right-[-20px] -translate-y-1/2",
              },
              {
                icon: <FaLinkedin className="text-blue-600 opacity-20" />,
                pos: "top-[18%] right-[0]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i * 0.3 }}
                className={`absolute   rounded-full p-3 text-xl ${item.pos}`}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>

          {/* Main profile image */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-[8px] border-primary/40">
            <img
              title="Ikbal Mondal"
              src="https://i.ibb.co/JWr5PtdJ/Gemini-Generated-Image-hk1hmshk1hmshk1h.png"
              alt="Ikbal Mondal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* stat card */}
          <div className="absolute top-2 right-2 bg-white p-3 rounded-xl shadow-xl">
            <p className="text-lg font-bold text-primary">1+ Years</p>
            <p className="text-xs font-medium text-base-content/70">
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
