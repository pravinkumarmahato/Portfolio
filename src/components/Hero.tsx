"use client";

import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";
import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene />
      
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Pravin Kumar Mahato
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-gray-300 font-light mb-8"
        >
          Software Engineer & Full Stack Developer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Architecting scalable systems, event-driven data pipelines, and AI-powered applications. Dedicated to driving 99.9% uptime and building high-performance modern web platforms.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="mailto:praveenmahato026@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Email">
            <Mail className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/pravinkumarmahato" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/Pravinkumarmahato" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://pravinkumarmahato.dev" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2" aria-label="Portfolio">
            <FileText className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
