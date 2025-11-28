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
    title: "Quick Cart",
    description:
      "Quick Cart is a modern, full-stack e-commerce web application built using Next.js and designed to provide a smooth, responsive and integrates Clerk to offer a secure and seamless authentication flow.",
    image: "https://i.ibb.co/JjNc823b/quikecard-ss.png",
    tech: ["Next.js", "Tailwind css", "Clark", "Authentication,"],
    demo: "https://quick-cart-next-delta.vercel.app/",
    github: "https://github.com/ikbal-mondal/QuickCart-Next",
    category: "Full Stack",
  },
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
    demo: "https://krishi-setu-e2152.web.app/",
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
    demo: "https://skilled-hub-c7b09.web.app",
    github: "https://github.com/ikbal-mondal/skill-hub",
    category: "Front End",
  },
  {
    title: "Algorithom",
    description:
      "This project is a modern, responsive SPA that simulates a mobile app store, allowing users to browse, search, and manage app installations with data stored in LocalStorage. It focuses on a clean UI, smooth performance, and engaging user experience through efficient state management and visual enhancements.",
    image: "https://i.ibb.co/PZZqjG0G/alhorithom.png",
    tech: ["React", "Tailwind css", "Firebase Authentication"],
    demo: "https://algorythom-app-store.netlify.app/",
    github: "https://github.com/ikbal-mondal/Algorythm-Ph-A008",
    category: "Front End",
  },
  {
    title: "Panda E-commerce",
    description: "Using Html Bootstrap For Designing Panda E-comers",
    image: "https://i.ibb.co/VphY7CT6/panda.png",
    tech: ["Html", "Bootstrap"],
    demo: "https://courageous-sorbet-0ebc2a.netlify.app/",
    github: "https://github.com/ikbal-mondal/panda_ecommerce.com",
    category: "Front End",
  },
  {
    title: "Low Co ",
    description: "Just Home Page Design Using Row Html, css and Javascript",
    image: "https://i.ibb.co/N26KPsCc/Screenshot-itlabs.png",
    tech: ["HTML", "Css", "Javascript"],
    demo: "https://ikbal-it-labs.netlify.app/",
    github: "https://github.com/ikbal-mondal/Ikbal-it-Labs",
    category: "Front End",
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
    <section id="projects" className="py-5 px-4">
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
                    className="rounded w-full h-48 object-cover hover:opacity-80 transition"
                  />

                  <div className="flex justify-between my-1 gap-2 ">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <h3 className="text-sm font-bold badge badge-dash badge-primary ">
                      {project.category}
                    </h3>
                  </div>

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
            <div className="flex justify-between gap:2">
              <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
              <h3 className="text-sm font-bold badge badge-dash badge-primary ">
                {activeProject.category}
              </h3>
            </div>
            {/* Video preview */}
            <img src={activeProject?.image} alt="" />

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
              <a
                target="_black"
                href={activeProject.demo}
                className="btn btn-primary"
              >
                Live Demo
              </a>
              <a
                target="_black"
                href={activeProject.github}
                className="btn btn-outline bg-black text-white"
              >
                GitHub
              </a>
              {activeProject?.ServerRepo && (
                <a
                  target="_black"
                  href={activeProject.ServerRepo}
                  className="btn btn-outline bg-amber-300 text-black"
                >
                  Server Repo Link
                </a>
              )}

              <button className="btn btn-error" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
