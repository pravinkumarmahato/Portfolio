"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Terminal } from "lucide-react";

const skillsCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    skills: ["Django", "Flask", "FastAPI", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Python Libraries & AI",
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    skills: ["NumPy", "Pandas", "Matplotlib", "Plotly", "Scikit-learn", "OpenCV", "LangChain", "Gemini API"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Pinecone"],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="w-6 h-6 text-red-400" />,
    skills: ["Docker", "Kubernetes", "Git", "GitHub", "GitHub Actions", "Atlassian Jira"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Technical Toolkit</h2>
        <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-800">
              <div className="p-3 bg-gray-800 rounded-xl shadow-inner shadow-gray-700/50">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }} // gray-800
                  className="px-4 py-2 bg-black border border-gray-800 text-gray-300 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
