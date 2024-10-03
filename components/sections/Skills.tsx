'use client'

import { motion } from 'framer-motion'
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiMongodb, DiNodejs } from 'react-icons/di'
import { SiNextdotjs, SiThreedotjs, SiTypescript, SiAmazon, SiCplusplus, SiExpress } from 'react-icons/si'
import { BsRobot } from 'react-icons/bs'

const skills = [
  { name: "React", icon: DiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  { name: "HTML5", icon: DiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: DiCss3, color: "#1572B6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" }, // Changed color to white
  { name: "Three.js", icon: SiThreedotjs, color: "#FFFFFF" }, // Changed color to white
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "Node.js", icon: DiNodejs, color: "#339933" },
  { name: "Chatbots/AI", icon: BsRobot, color: "#00A67E" },
]

export default function Skills() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <skill.icon size={64} color={skill.color} />
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}