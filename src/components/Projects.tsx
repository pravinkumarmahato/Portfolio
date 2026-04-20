"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Kube Credential",
    description: "Architected a microservice-based credential system achieving 99.9% API uptime.",
    tech: ["Node.js", "TypeScript", "React", "PostgreSQL", "Kubernetes"],
    github: "https://github.com",
    metrics: ["99.9% Uptime", "40% Reliability Boost"],
  },
  {
    title: "WhatsApp Web Clone",
    description: "Built a real-time clone with secure authentication, search, and date-grouped history.",
    tech: ["React", "TypeScript", "Tailwind", "Express", "Socket.io", "MongoDB"],
    github: "https://github.com",
    metrics: ["<200ms Delivery", "98% Sync Reliability"],
  },
  {
    title: "MultiLang RAG",
    description: "Created a multilingual RAG system supporting contextual Q&A in 10+ languages.",
    tech: ["FastAPI", "LangChain", "Gemini API", "MongoDB", "React"],
    github: "https://github.com",
    demo: "https://live-demo.com",
    metrics: ["35% Latency Reduction", "10+ Languages"],
  },
  {
    title: "Human Presence Detection",
    description: "Captured RSSI data from ESP32 applying statistical filters to detect human presence.",
    tech: ["ESP32", "RF Signals", "Python"],
    demo: "https://document-link.com",
    metrics: ["90%+ Accuracy", "12% Consistency Boost"],
  },
  {
    title: "Precision Agriculture Using NDVI",
    description: "Developed a Flask-based web app to visualize NDVI from RGB/NIR images for crop analysis.",
    tech: ["Python", "Flask", "PIL", "OpenCV"],
    github: "https://github.com",
    demo: "https://demo-video.com",
    metrics: ["100+ Crop Analyses", "25% Early-warning Precision"],
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-950/50 backdrop-blur-sm" id="projects">
      <div className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3 text-gray-400">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-gray-800 text-blue-300 text-xs font-medium rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-800">
                {project.metrics.map((metric, metricIdx) => (
                  <div key={metricIdx} className="text-xs text-green-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
