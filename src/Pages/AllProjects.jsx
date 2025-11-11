import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Fresh Flower Store",
      image: "/projects/flower.png",
      description: "Modern online flower shop with responsive UI.",
      tech: ["React", "Tailwind", "Firebase"],
      live: "https://freshflowerstore.com",
      github: "https://github.com/",
      category: "Frontend",
    },
    {
      title: "Voter List Search System",
      image: "/projects/voter.png",
      description: "Search Bengali names inside PDF with page detection.",
      tech: ["React", "Tailwind", "LocalStorage"],
      live: "#",
      github: "#",
      category: "Full Stack",
    },
    {
      title: "School Management Website",
      image: "/projects/school.png",
      description: "Full responsive school website with multiple sections.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "#",
      category: "Frontend",
    },
    {
      title: "MERN Stack Dashboard",
      image: "/projects/dashboard.png",
      description: "Secure admin dashboard using React + Node + MongoDB.",
      tech: ["MERN", "JWT", "Tailwind"],
      live: "#",
      github: "#",
      category: "Full Stack",
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-base-100/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover rounded-t-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
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
                    className="flex items-center gap-1 text-primary"
                  >
                    Live <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-secondary"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
