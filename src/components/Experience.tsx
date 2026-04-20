"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    company: "Origins AI",
    role: "Software Engineer",
    date: "Feb 2026 - Present",
    location: "Delhi, India (Remote)",
    points: [
      "Led end-to-end backend development for core platform features with scalable PostgreSQL schemas and business-critical APIs.",
      "Built event-driven data pipelines (Kafka) with guarantees on idempotency, deduplication, and reliability.",
      "Developed AI-powered systems (research chat agents, Pinecone vector search, SSE/WebSockets).",
      "Re-architected document ingestion and caching (Redis) improving performance.",
      "Achieved 99.95% service-layer coverage with 985 tests."
    ]
  },
  {
    company: "Freelancing",
    role: "Full Stack Engineer",
    date: "Jul 2025 - Jan 2026",
    location: "Mumbai, India",
    points: [
      "Architected microservices-based apps (Node.js, React, PostgreSQL, Kubernetes on AWS & GCP) achieving 99.9% uptime.",
      "Containerized services with Docker, improving release reliability by 40%.",
      "Built real-time systems using REST + WebSockets (<200 ms latency).",
      "Engineered multilingual RAG systems using FastAPI, LangChain, and Gemini API."
    ]
  },
  {
    company: "Kaiburr",
    role: "Software Engineer",
    date: "Nov 2023 - Jun 2025",
    location: "Cambridge, MA, USA (Remote)",
    points: [
      "Full-stack development using Python (Flask, Django), React.js, and Java.",
      "Resolved 20+ bugs, enhanced features, and improved UI/UX across 4 enterprise applications.",
      "Deployed Django APIs, containerized services, and reduced ML inference time by 30%.",
      "Managed MongoDB data and integrated Whoosh search, improving AI text relevance by 20%."
    ]
  },
  {
    company: "Curaksha",
    role: "Intern",
    date: "Nov 2020 - Jun 2021",
    location: "Mumbai, India (Remote)",
    points: [
      "Designed responsive UI interfaces, reducing UI defects by 15%.",
      "Collaborated with cross-functional teams to improve design consistency."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tight mb-2 text-white">Experience</h2>
        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-12 border-l border-gray-800 ml-3 pl-8 md:pl-12">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1 bg-gray-900 border-2 border-blue-500 p-2 rounded-full">
              <Briefcase className="w-4 h-4 text-blue-400" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <h4 className="text-lg text-blue-400 font-medium">{exp.company}</h4>
              </div>
              <div className="text-left md:text-right mt-2 md:mt-0">
                <span className="block text-gray-400 font-mono text-sm">{exp.date}</span>
                <span className="block text-gray-500 text-sm">{exp.location}</span>
              </div>
            </div>

            <ul className="list-disc space-y-2 text-gray-300 ml-4 marker:text-gray-600">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
