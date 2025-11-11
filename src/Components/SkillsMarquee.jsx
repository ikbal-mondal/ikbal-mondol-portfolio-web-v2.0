import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiReactrouter,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
export default function SkillsMarquee() {
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
      icon: <SiExpress className="text-gray-500 text-4xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-4xl" />,
    },
    {
      name: "React Router",
      icon: <SiReactrouter className="text-red-500 text-4xl" />,
    },
    { name: "GitHub", icon: <FaGithub className="text-black text-4xl" /> },
  ];

  return (
    <section className="w-full py-10 overflow-hidden bg-base-100">
      {/* Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Infinite scroll container */}
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex  flex-col items-center min-w-[120px]">
              {skill.icon}
              <p className="mt-2 text-sm text-center">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
