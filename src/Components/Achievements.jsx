import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaCheckCircle } from "react-icons/fa";

const certificateData = [
  {
    year: "2023",
    title: "Frontend Development Certification",
    org: "XYZ Institute",
    desc: "Completed 6-month training in React, JavaScript, Tailwind.",
  },
  {
    year: "2024",
    title: "MERN Stack Certification",
    org: "Online Bootcamp",
    desc: "Completed full MERN development program.",
  },
  {
    year: "2025",
    title: "Internship Completion Certificate",
    org: "Tech Startup Company",
    desc: "Completed 6-month developer internship.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Achievements <span className="text-primary">&</span> Certifications
        </motion.h2>

        {/* ✅ Animated Counters */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <CounterBox number="3+" label="Certificates" />
          <CounterBox number="25+" label="Projects Completed" />
          <CounterBox number="2+" label="Years Experience" />
        </div>

        {/* ✅ Timeline + Certificates */}
        <div className="relative border-l-4 border-primary/40 pl-8 space-y-10">
          {certificateData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/40" />

              {/* Certificate Card */}
              <div
                className="bg-base-100/40 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl 
                transition-transform duration-300 hover:scale-[1.03] hover:shadow-primary/30"
              >
                <div className="flex items-center gap-3">
                  <FaCertificate className="text-primary text-2xl" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                <p className="text-base-content/70 mt-2">{item.org}</p>
                <p className="mt-2 text-base-content/80">{item.desc}</p>

                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-3 inline-block text-primary font-semibold"
                >
                  {item.year}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Badges Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            Skills & Badges
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">
            <TechBadge name="React.js" />
            <TechBadge name="JavaScript" />
            <TechBadge name="Tailwind CSS" />
            <TechBadge name="Node.js" />
            <TechBadge name="MongoDB" />
            <TechBadge name="Firebase" />
            <TechBadge name="Express.js" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ✅ Counter Box Component */
const CounterBox = ({ number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-base-100/40 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-xl"
    >
      <motion.h3
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-4xl font-bold text-primary"
      >
        {number}
      </motion.h3>
      <p className="text-base-content/80 mt-2">{label}</p>
    </motion.div>
  );
};

/* ✅ Badge Component */
const TechBadge = ({ name }) => (
  <motion.span
    whileHover={{ scale: 1.15 }}
    className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full shadow-sm hover:shadow-primary/40 transition-all"
  >
    {name}
  </motion.span>
);
