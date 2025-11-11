import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Link } from "react-router";

// Projects data
const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A modern e-commerce platform with secure authentication, cart, and product management.",
    image: "/images/project1.jpg",
    video: "/videos/project1-demo.mp4",
    tech: ["React", "Tailwind", "Firebase"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio design built with animations and a fully responsive layout.",
    image: "/images/project2.jpg",
    video: "/videos/project2-demo.mp4",
    tech: ["React", "Framer Motion", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "School Management System",
    description:
      "Admin dashboard for managing attendance, results, fees & teacher management.",
    image: "/images/project3.jpg",
    video: "/videos/project3-demo.mp4",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "School Management System",
    description:
      "Admin dashboard for managing attendance, results, fees & teacher management.",
    image: "/images/project3.jpg",
    video: "/videos/project3-demo.mp4",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "School Management System",
    description:
      "Admin dashboard for managing attendance, results, fees & teacher management.",
    image: "/images/project3.jpg",
    video: "/videos/project3-demo.mp4",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "School Management System",
    description:
      "Admin dashboard for managing attendance, results, fees & teacher management.",
    image: "/images/project3.jpg",
    video: "/videos/project3-demo.mp4",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Open modal
  const handleOpenModal = (project) => {
    setActiveProject(project);
    setOpenModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-5 ">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} bg-primary" ></span>`;
            },
          }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.05}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl my-8 p-4 bg-base-100/40 backdrop-blur-xl border border-primary/30 shadow-lg hover:shadow-primary/50 transition-all duration-300 neon-border"
                  onClick={() => handleOpenModal(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full h-48 object-cover hover:opacity-80 transition"
                  />

                  <h3 className="text-xl font-bold mt-4">{project.title}</h3>

                  <p className="text-base-content/70 text-sm mt-1 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Projects Button */}
        <div className="text-center mt-8">
          <Link to="/all-projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>

      {/* Modal */}
      {openModal && activeProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-base-100 p-6 rounded-xl shadow-xl max-w-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>

            {/* Video preview */}
            <video
              src={activeProject.video}
              autoPlay
              loop
              muted
              className="rounded-xl w-full mb-4"
            ></video>

            <p>{activeProject.description}</p>

            <div className="mt-3 flex gap-3 flex-wrap">
              {activeProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <a href={activeProject.demo} className="btn btn-primary">
                Live Demo
              </a>
              <a href={activeProject.github} className="btn btn-outline">
                GitHub
              </a>
              <button className="btn" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
