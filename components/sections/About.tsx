'use client'
import shubhamImage from '/portfolio/../src/img/shubham_image-removebg.png';
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './About.module.css'; 

export default function About() {
  return (
    <section className={`${styles.aboutSection} bg-background`}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.title} text-4xl font-bold`}
        >
          About Me
        </motion.h2>
        <div className={styles.contentContainer}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.imageContainer}
          >
            <Image
              src={shubhamImage}
              alt="Shubham"
              width={400}
              height={400}
              priority
              className={styles.image}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`${styles.textContent} space-y-6`}
          >
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Hello! I&apos;m <span className="font-semibold text-primary">Shubham Chauhan</span>, a passionate web developer and 3D enthusiast. With a strong foundation in modern web technologies and a keen eye for design, I create immersive digital experiences that push the boundaries of what&apos;s possible on the web.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in tech started <span className="font-medium text-secondary">2 years ago</span>, and since then, I&apos;ve been constantly learning and evolving. I specialize in <span className="font-medium text-primary">React</span>, <span className="font-medium text-primary">Three.js</span>, and <span className="font-medium text-primary">Next.js</span>, using these tools to build performant and visually stunning applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me experimenting with 3D modeling, exploring new web technologies, or contributing to open-source projects. I&apos;m always excited to take on new challenges and collaborate on innovative projects that make a difference in the digital world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}