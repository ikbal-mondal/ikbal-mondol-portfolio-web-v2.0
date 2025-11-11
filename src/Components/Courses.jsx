import { motion } from "framer-motion";
import { FaPlayCircle, FaVideo, FaFolderOpen, FaUsers } from "react-icons/fa";

const courses = [
  {
    title: "HTML Basics",
    videos: 15,
    description: "Learn structure, tags, SEO basics, and clean markup.",
    link: "https://www.youtube.com/@ikbal9064/playlists",
    thumbnail:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240701150351/HTML-Tutorial-copy.webp",
  },
  {
    title: "CSS Styling",
    videos: 20,
    description: "Master Flexbox, Grid, responsive layouts, and animations.",
    link: "https://www.youtube.com/@ikbal9064/playlists",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6OmlWTM5JOzjAttEKxPQjj3FV7Ej1ug6HrcB35ASsVCDG8kwpK7TqzwQ6zypiGVa64Y&usqp=CAU",
  },
  {
    title: "JavaScript Complete",
    videos: 40,
    description: "Variables, loops, DOM, events, API, ES6, projects.",
    link: "https://www.youtube.com/@ikbal9064/playlists",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/2002950_4c61.jpg",
  },
  {
    title: "DOM Manipulation",
    videos: 15,
    description: "Dynamic UI, event-driven interactions, real projects.",
    link: "https://www.youtube.com/@ikbal9064/playlists",
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5622AQGbHyrZGxpaMQ/feedshare-shrink_800/feedshare-shrink_800/0/1711543643609?e=2147483647&v=beta&t=mcJzLf_kySG2vhuBARan00Xz8qNWC8ih0jzwz6TR7zc",
  },
  {
    title: "Mini Projects",
    videos: 10,
    description: "Calculator, weather app, to-do app, clocks, quote generator.",
    link: "https://www.youtube.com/@ikbal9064/playlists",
    thumbnail:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220325175226/WebDevelopmentProjects2.png",
  },
];

export default function Courses() {
  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Teaching Experience Section */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Teaching <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <StatCard icon={<FaVideo />} number="100+" label="Videos Created" />
          <StatCard
            icon={<FaFolderOpen />}
            number="8"
            label="Playlists Organized"
          />
          <StatCard icon={<FaUsers />} number="1+" label="Years Teaching" />
        </div>

        {/* Video Courses Section */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Video Courses</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              className="bg-base-100/40 backdrop-blur-xl rounded-xl shadow-xl border border-white/10 p-4 cursor-pointer transition-all"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-44 object-cover rounded-lg"
              />

              <h3 className="text-xl font-bold mt-4">{course.title}</h3>
              <p className="text-base-content/70 text-sm mt-1">
                {course.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-primary font-semibold text-sm">
                  {course.videos} Videos
                </span>

                <a
                  href={course.link}
                  target="_blank"
                  className="text-secondary flex items-center gap-1"
                >
                  Watch <FaPlayCircle />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="bg-base-100/50 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg flex flex-col items-center gap-3"
    >
      <div className="text-4xl text-primary">{icon}</div>
      <h3 className="text-3xl font-bold">{number}</h3>
      <p className="text-base-content/70">{label}</p>
    </motion.div>
  );
}
