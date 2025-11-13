import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
  },
  { name: "React.js", icon: <FaReact className="text-sky-400 text-4xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-4xl" />,
  },
  { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen py-24" id="skills">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 rounded-xl 
              bg-base-100/40 backdrop-blur-md shadow-lg border border-white/10 
              hover:border-primary hover:shadow-xl transition-all duration-300
              hover:scale-105 cursor-pointer"
            >
              <div className="group-hover:scale-110 transition-all">
                {skill.icon}
              </div>
              <p className="mt-3 font-semibold text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
