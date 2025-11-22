import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Krishi Setu",
      description:
        "Krishi-Setu connects farmers and buyers through a modern web platform. It enables secure crop trading with features like interest management and real-time updates.",
      image: "https://i.ibb.co/Zpq2M7zH/krishi-setu-project-ss.png",
      tech: [
        "React",
        "Tailwind css",
        "Firebase",
        "Authentication,",
        "Node",
        "Express",
        "Mongodb",
        "JWT",
      ],
      live: "https://krishi-setu-e2152.web.app/",
      github: "https://github.com/ikbal-mondal/krishi-setu",
      ServerRepo: "https://github.com/ikbal-mondal/krishi-setu-BackEnd",
      category: "Full Stack",
    },
    {
      title: "Skill-Hub",
      description:
        "'Skilled Hub' is an interactive platform that allows individuals to offer, learn, and trade skills within their local area. From guitar lessons to language exchange, coding help, or yoga training, users can browse listings, rate experiences, and connect with local skill providers.",
      image: "https://i.ibb.co/Q73H5xZn/portfolio-ss.png",
      tech: ["React", "Tailwind css", "Firebase Authentication"],
      live: "https://skilled-hub-c7b09.web.app",
      github: "https://github.com/ikbal-mondal/skill-hub",
      category: "Frontend",
    },
    {
      title: "Algorithom",
      description:
        "This project is a modern, responsive SPA that simulates a mobile app store, allowing users to browse, search, and manage app installations with data stored in LocalStorage. It focuses on a clean UI, smooth performance, and engaging user experience through efficient state management and visual enhancements.",
      image: "https://i.ibb.co/PZZqjG0G/alhorithom.png",
      tech: ["React", "Tailwind css", "Firebase Authentication"],
      live: "https://algorythom-app-store.netlify.app/",
      github: "https://github.com/ikbal-mondal/Algorythm-Ph-A008",
      category: "Frontend",
    },
    {
      title: "Panda E-commerce",
      description: "Using Html Bootstrap For Designing Panda E-comers",
      image: "https://i.ibb.co/VphY7CT6/panda.png",
      tech: ["Html", "Bootstrap"],
      live: "https://courageous-sorbet-0ebc2a.netlify.app/",
      github: "https://github.com/ikbal-mondal/panda_ecommerce.com",
      category: "Frontend",
    },
    {
      title: "Low Co ",
      description: "Just Home Page Design Using Row Html, css and Javascript",
      image: "https://i.ibb.co/N26KPsCc/Screenshot-itlabs.png",
      tech: ["HTML", "Css", "Javascript"],
      live: "https://ikbal-it-labs.netlify.app/",
      github: "https://github.com/ikbal-mondal/Ikbal-it-Labs",
      category: "Frontend",
    },
  ];

  const categories = ["All", "Frontend", "Full Stack"];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 px-6 min-h-screen" id="projects">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-base-100/40 border-white/20 hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-base-100/50 backdrop-blur-xl  border-4 border-primary/20 rounded-2xl shadow-xl overflow-hidden "
            >
              <div className="overflow-hidden cursor-pointer">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-t-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between ">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <h3 className="text-sm font-bold badge badge-dash badge-primary ">
                    {project.category}
                  </h3>
                </div>
                <p className="text-base-content/70 text-sm mt-1">
                  {project.description}
                </p>

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex underline items-center gap-1 text-primary"
                  >
                    Live <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex underline items-center gap-1 text-secondary"
                  >
                    GitHub <FaGithub />
                  </a>
                  {project.ServerRepo && (
                    <a
                      href={project.ServerRepo}
                      target="_blank"
                      className="flex items-center gap-1 text-amber-700 underline"
                    >
                      Server Repo Link <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
