import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tm0a0go",
        "template_5fnntyb",
        form.current,
        "Fdrd3ldpCZ0biqrDX"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-base-100/40 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-2xl" />
                <p>ikbal@example.com</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-primary text-2xl" />
                <p>+91 12345 67890</p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <p>Nadia, West Bengal, India</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-2xl">
              <motion.a
                href="https://github.com/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin className="text-blue-600" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-base-100/40 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {sent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-base-100 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-white/20 backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">
              ✅ Message Sent Successfully!
            </h3>

            <p className="text-base-content/80">
              Your message has been sent to <strong>Ikbal Mondal</strong>.
            </p>
            <p className="mt-2 text-base-content/60">
              I will connect with you shortly. Thank you!
            </p>

            <button
              className="btn btn-primary mt-6 w-full"
              onClick={() => setSent(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
