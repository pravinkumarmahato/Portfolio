"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto" id="education">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tight mb-2 text-white">Education & Achievements</h2>
        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-gray-200">
            <GraduationCap className="text-blue-400" /> Education
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
            {/* VIT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-hover:bg-blue-900 group-hover:border-blue-400 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-blue-400">VIT, Vellore</span>
                  <span className="text-sm font-mono text-gray-500">2022 - 2024</span>
                </div>
                <h4 className="font-semibold text-lg text-white">Master of Computer Applications (MCA)</h4>
                <p className="text-sm text-gray-400 mt-2 font-mono">CGPA: 8.31</p>
              </div>
            </motion.div>

            {/* KC College */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-hover:bg-blue-900 group-hover:border-blue-400 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-blue-400">KC College, Mumbai</span>
                  <span className="text-sm font-mono text-gray-500">2019 - 2022</span>
                </div>
                <h4 className="font-semibold text-lg text-white">B.Sc. in Information Technology</h4>
                <p className="text-sm text-gray-400 mt-2 font-mono">CGPA: 9.20</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-gray-200">
            <Award className="text-purple-400" /> Achievements
          </h3>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 bg-gray-900/50 rounded-xl border-l-4 border-blue-500 hover:bg-gray-900 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-white">Best Project Award</h4>
                <span className="text-xs font-mono text-gray-500 bg-gray-950 px-2 py-1 rounded">May 2023</span>
              </div>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Code for Life Hackathon, VIT Vellore. Awarded Best Project among 100+ registered teams and 400+ participants.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 bg-gray-900/50 rounded-xl border-l-4 border-purple-500 hover:bg-gray-900 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-white">Best Volunteer Award</h4>
                <span className="text-xs font-mono text-gray-500 bg-gray-950 px-2 py-1 rounded">2021 - 2022</span>
              </div>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Jigyaasa – Science Honors Program, KC College. Recognized as Best Volunteer of Batch XVII in the U.G. research initiative.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 bg-gray-900/50 rounded-xl border-l-4 border-green-500 hover:bg-gray-900 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-white">SIH Internal Hackathon</h4>
                <span className="text-xs font-mono text-gray-500 bg-gray-950 px-2 py-1 rounded">Mar 2022</span>
              </div>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">KC College. Secured 2nd Position at the Smart India Hackathon Internal Round.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 bg-gray-900/50 rounded-xl border-l-4 border-yellow-500 hover:bg-gray-900 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-white">Project DeepBlue</h4>
                <span className="text-xs font-mono text-gray-500 bg-gray-950 px-2 py-1 rounded">Mar 2022</span>
              </div>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Mastek. Achieved 2nd Runner-up Position in Season 7 among 280+ teams.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
