import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Floating Ring */}
          <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full bg-primary/40 blur-3xl opacity-40 animate-pulse -z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            {/* Rotating Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-primary/30 blur-xl opacity-60"
            ></motion.div>

            {/* Floating + Lift-Up + Pulse */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                boxShadow: [
                  "0px 0px 20px rgba(0,0,0,0.1)",
                  "0px 0px 40px rgba(0,0,0,0.15)",
                  "0px 0px 20px rgba(0,0,0,0.1)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              <Tilt
                glareEnable={true}
                glareColor="#ffffff"
                glareMaxOpacity={0.35}
                glarePosition="all"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.08}
                transitionSpeed={1500}
                className="rounded-full"
              >
                <div className="w-60  hidden md:block h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-[5px] border-primary/50">
                  <img
                    src="https://i.ibb.co/JWr5PtdJ/Gemini-Generated-Image-hk1hmshk1hmshk1h.png"
                    alt="Ikbal Mondal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Tilt>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
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
            <h4 className="text-xl font-semibold text-primary">
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

            <p className="text-base-content/80 leading-relaxed">
              This is Ikbal Mondal, a Web Developer from West Bengal, India. I
              have completed a six-month training course covering HTML, CSS,
              JavaScript, Bootstrap, Tailwind CSS, React.js, and Firebase.
            </p>

            <p className="text-base-content/80 leading-relaxed">
              I also learned backend technologies like Node.js, Express.js,
              MongoDB and JWT authentication. I have successfully completed
              multiple real-world projects with these technologies.
            </p>

            <p className="text-base-content/80 leading-relaxed">
              I have finished a 6-month internship as a software developer and
              currently completing a 9-month internship as a Frontend Developer.
            </p>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="btn btn-primary mt-4"
            >
              View My Resume
            </motion.a>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl mt-6">
              <motion.a
                href="https://github.com/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin className="text-blue-600" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mt-20 text-center"
        >
          <div className="bg-base-100/40 p-6 rounded-xl backdrop-blur-lg shadow-xl">
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              className="text-4xl font-bold text-primary"
            >
              25+
            </motion.h3>
            <p className="text-lg text-base-content/80">Projects Completed</p>
          </div>

          <div className="bg-base-100/40 p-6 rounded-xl backdrop-blur-lg shadow-xl">
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
              className="text-4xl font-bold text-primary"
            >
              15+
            </motion.h3>
            <p className="text-lg text-base-content/80">Happy Clients</p>
          </div>

          <div className="bg-base-100/40 p-6 rounded-xl backdrop-blur-lg shadow-xl">
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
              className="text-4xl font-bold text-primary"
            >
              2+
            </motion.h3>
            <p className="text-lg text-base-content/80">Years of Experience</p>
          </div>
        </motion.div>

        {/* Scrolling Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden whitespace-nowrap"
        >
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="text-2xl font-medium flex gap-12 text-primary whitespace-nowrap"
          >
            HTML • CSS • JavaScript • React.js • Tailwind • Node.js • Express.js
            • MongoDB • Firebase • GitHub • JWT
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
