import { motion } from "framer-motion";
import { useState } from "react";
import { FaBriefcase, FaCertificate } from "react-icons/fa";

const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "Company A",
    start: "Jan 2023",
    end: "Jun 2023",
    logo: "/logos/companyA.png",
    certificate: "/certificates/companyA.pdf",
    shortDescription:
      "Worked on responsive UI, design improvements, and performance optimization.",
    fullDescription:
      "Developed reusable UI components, improved loading performance by 30%, and collaborated with designers & backend engineers.",
    skills: ["React", "Tailwind CSS", "API Integration", "Performance Tuning"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Company B",
    start: "Aug 2023",
    end: "May 2024",
    logo: "/logos/companyB.png",
    certificate: "/certificates/companyB.pdf",
    shortDescription:
      "Built dashboard features, authentication, and integrated MongoDB database.",
    fullDescription:
      "Developed REST APIs, implemented secure auth, optimized DB queries, and improved UI consistency.",
    skills: ["Node.js", "MongoDB", "Express.js", "Authentication"],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(null);
  const [certificateModal, setCertificateModal] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const closeModal = () => setCertificateModal(null);

  return (
    <section id="experience" className="min-h-screen py-20">
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
                className="bg-base-100/50 backdrop-blur-xl p-6 rounded-xl border border-white/20 shadow-xl cursor-pointer transition-all"
                onClick={() => toggleExpand(index)}
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
                      {item.start} — {item.end}
                    </p>
                  </div>
                </div>

                {/* Short description */}
                <p className="text-base-content/80">{item.shortDescription}</p>

                {/* Expandable section */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expanded === index ? "auto" : 0,
                    opacity: expanded === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="mt-3">{item.fullDescription}</p>

                  {/* Skill badges */}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        setCertificateModal(item.certificate);
                      }}
                    >
                      <FaCertificate /> View Certificate
                    </motion.button>
                  )}
                </motion.div>
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
