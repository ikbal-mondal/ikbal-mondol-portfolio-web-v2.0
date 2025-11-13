import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
} from "react-icons/fa";

const certificateData = [
  {
    src: "https://i.ibb.co/Qvg2Kt7Q/Certificate-Of-Ikbal-Mondal-page-0001.jpg",
    title: " Web development Course Complication Certificate",
    category: "Course",
  },
  {
    src: "https://i.ibb.co/8LkY56Lj/Ikbal-Mondal-Internship-Completion-Certificate-page-0001.jpg",
    title: "Front End Web development 6 Month's Internship Certificate",
    category: "Internship",
  },
  {
    src: "https://i.ibb.co/F42VMTLs/Job-Completion-Certificate-1.jpg",
    title: "Front End Web development 10 Month's Internship Certificate",
    category: "Internship",
  },
];

const categories = ["All", "Course", "Internship"];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? certificateData
      : certificateData.filter((item) => item.category === activeCategory);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certificates" className="py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Certificates</span>
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

        {/* Grid Certificates */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer bg-base-100/50 border border-white/10 rounded-xl shadow-xl hover:shadow-primary/30 transition"
              onClick={() => openModal(index)}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-56 object-cover rounded-xl"
              />
              <p className="text-center py-3 font-semibold">{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal} // ✅ close when clicking backdrop
          >
            {/* stop click inside modal from closing */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative bg-base-100 p-6 rounded-xl max-w-3xl w-full shadow-2xl border border-primary/40"
              onClick={(e) => e.stopPropagation()} // ✅ important fix
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 bg-primary text-white p-2 rounded-full z-50"
                onClick={closeModal}
              >
                <FaTimes />
              </button>

              {/* Preview image */}
              <motion.img
                src={filtered[currentIndex].src}
                className="w-full max-h-[450px] object-contain rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              />

              {/* Title */}
              <h3 className="text-xl font-bold mt-4 text-center">
                {filtered[currentIndex].title}
              </h3>

              {/* Navigation */}
              <div className="absolute inset-y-0 left-2 flex items-center">
                <button
                  className="bg-primary text-white p-2 rounded-full shadow-lg"
                  onClick={prevImage}
                >
                  <FaChevronLeft />
                </button>
              </div>

              <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                  className="bg-primary text-white p-2 rounded-full shadow-lg"
                  onClick={nextImage}
                >
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
