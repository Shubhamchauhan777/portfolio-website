'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg",
    link: "#"
  }
]

export default function Projects() {
  return (
    <section className="py-20 bg-background/50" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-primary/80 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-accent hover:text-secondary transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}