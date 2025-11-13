import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate } from "react-icons/fa";
import { useState } from "react";
import certificateWisWork from "../assets/Ikbal Mondal - Internship Completion Certificate.pdf";
import certificateAminulIt from "../assets/Job-Completion-Certificate.jpg";

const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "WishWorks Solutions Pvt Ltd",
    start: "Jan 2023",
    end: "Jun 2023",
    logo: "https://i.ibb.co/MkDNF3JR/whish-work.png",
    certificate: certificateWisWork,
    shortDescription:
      "Worked on responsive UI, Api Integration, and performance optimization.",
    fullDescription:
      "Developed reusable UI components, improved loading performance integrating APIs for dynamic data handling, and optimizing overall application performance for a smoother user experience.",
    skills: ["React", "Material-Ui", "API Integration", "Performance"],
    avgDerationJob: "6 Months +",
  },
  {
    role: "Project Manager + (Developer)",
    company: "Aminul IT Firm",
    start: "Aug 2023",
    end: "June 2024",
    logo: "https://aminulitfirm.com/_next/static/media/logo.6dea254b.png",
    certificate: certificateAminulIt,
    shortDescription:
      "Developed and designed the website’s front-end interface, integrated APIs, and managed the development team with proper GitHub branch control.",
    fullDescription:
      "During this period, I contributed to the front-end development of the website, focusing on UI/UX design, performance optimization, and API integration. I also supervised the development workflow, managed team coordination, and handled version control through GitHub branches.",
    skills: ["React.js", "API Integration", "Tailwind CSS", "Authentication"],
    avgDerationJob: "10 Month's",
  },
];

export default function Experience() {
  const [certificateModal, setCertificateModal] = useState(null);

  const closeModal = () => setCertificateModal(null);

  return (
    <section id="experience" className=" py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="relative border-l-4 border-primary/20 pl-8 space-y-14">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                <FaBriefcase />
              </div>

              {/* Experience card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-base-100/50 backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-xl transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.img
                    src={item.logo}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                    alt={item.company}
                  />
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-primary font-semibold">{item.company}</p>
                    <p className="text-sm text-base-content/60">
                      {item.start} — {item.end}{" "}
                      <span className="text-md font-bold text-primary">
                        ({item.avgDerationJob})
                      </span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base-content/80 mb-3">
                  {item.shortDescription}
                </p>
                <p className="text-base-content/80">{item.fullDescription}</p>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Certificate button */}
                {item.certificate && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn btn-primary btn-sm mt-4 flex items-center gap-2"
                    onClick={() => setCertificateModal(item.certificate)}
                  >
                    <FaCertificate /> View Certificate
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {certificateModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-base-100 p-6 rounded-xl shadow-2xl max-w-2xl w-full border border-primary/40"
          >
            <h3 className="text-2xl font-bold mb-4">Certificate Preview</h3>

            <iframe
              src={certificateModal}
              className="w-full h-[400px] rounded-lg shadow border"
              title="Certificate"
            ></iframe>

            <div className="flex justify-end mt-4">
              <button className="btn btn-primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
