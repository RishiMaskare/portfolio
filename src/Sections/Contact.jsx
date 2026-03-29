import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Astra from "../assets/Astra.png";
import ParticlesBackground from "../Components/ParticlesBackground";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Message sent successfully!");
          setMessageType("success");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessage("Something went wrong. Try again.");
          setMessageType("error");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="relative">
      <ParticlesBackground />
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">

        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src={Astra}
            alt="astronaut"
            className="w-120 h-120"
          />
        </div>

        {/* Form */}
        <div className="bg-[#111] p-8 rounded-xl shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-6">
            Let’s Work Together
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm">Your Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Purpose */}
            <div>
              <label className="text-sm">Purpose *</label>
              <select
                name="purpose"
                required
                className="w-full mt-1 p-2 bg-white text-black border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              >
                <option className="bg-white text-black" value="">Select purpose</option>
                <option className="bg-white text-black">Internship Opportunity</option>
                <option className="bg-white text-black">Job Opportunity</option>
                <option className="bg-white text-black">Collaboration</option>
                <option className="bg-white text-black">Project Discussion</option>
                <option className="bg-white text-black">General Inquiry</option>
              </select>
            </div>

            {/* Company */}
            <div>
              <label className="text-sm">Company (Optional)</label>
              <input
                type="text"
                name="company"
                className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm">Message *</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {message && (
              <p className={`text-sm mt-2 ${messageType === "success" ? "text-green-400" : "text-red-400"}`}>{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;