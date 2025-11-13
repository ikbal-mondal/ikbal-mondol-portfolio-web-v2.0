import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaCode,
  FaTools,
  FaProjectDiagram,
  FaDollarSign,
  FaSearch,
} from "react-icons/fa";

const faqData = [
  {
    category: "General",
    question: "What technologies do you specialize in?",
    answer:
      "React.js, JavaScript, Tailwind CSS, Firebase, Node.js, Express, MongoDB.",
    icon: <FaCode />,
  },
  {
    category: "General",
    question: "Do you work on full-stack projects?",
    answer:
      "Yes, I build complete MERN stack applications with frontend, backend, and database.",
    icon: <FaTools />,
  },
  {
    category: "Skills",
    question: "Are you comfortable with API integration?",
    answer:
      "Yes! I integrate REST APIs, handle async data, and manage real-time data flows.",
    icon: <FaCode />,
  },
  {
    category: "Skills",
    question: "Can you build responsive and animated websites?",
    answer:
      "Absolutely! I use Tailwind, Framer Motion, Swiper JS, and glassmorphism design.",
    icon: <FaTools />,
  },
  {
    category: "Projects",
    question: "Do you develop production-ready websites?",
    answer:
      "Yes, optimized for speed, SEO, UI/UX, and fully tested for performance.",
    icon: <FaProjectDiagram />,
  },
  {
    category: "Pricing",
    question: "Do you offer project-based pricing?",
    answer:
      "Yes! Contact me with details. I offer flexible rates based on task complexity.",
    icon: <FaDollarSign />,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "General", "Skills", "Projects", "Pricing"];

  const filteredFAQ = faqData.filter((item) => {
    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.question.toLowerCase();

    return matchCategory && matchSearch;
  });

  return (
    <section id="faq" className="py-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>

        {/* ✅ New Category Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border backdrop-blur-md transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white border-none shadow-lg"
                  : "bg-base-100/40 border-white/20 text-base-content/70 shadow-sm hover:bg-base-100/60"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* ✅ New Grid Layout */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {filteredFAQ.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              layout
              className={`bg-base-100/40 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-primary/30 cursor-pointer transition-all ${
                openIndex === i ? "border-primary" : ""
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                    className="text-primary text-2xl"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg">{item.question}</h3>
                </div>

                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl"
                >
                  <FaChevronDown />
                </motion.div>
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-base-content/80 leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
