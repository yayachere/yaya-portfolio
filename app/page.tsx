"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { MotionWrapper } from "@/components/motion-wrapper"
import { FloatingNav } from "@/components/floating-nav"
import ServicesSection from "@/components/services-section"


export default function Home() {
  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <AnimatePresence>
      <div className="flex flex-col min-h-screen">
        {/* Floating Nav */}
        <FloatingNav />

        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="container py-24 md:py-32 space-y-8">
            <div className="flex flex-col items-center text-center">
              <MotionWrapper className="space-y-4 max-w-2xl" direction="up">
                <motion.div
                  className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary mx-auto mb-8"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  <Image src="/images/chernet-mitiku.jpg" alt="Chernet Mitiku" fill className="object-cover" priority />
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <motion.span
                    className="text-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Chernet Mitiku
                  </motion.span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Front-End Developer (React / Next.js) helping businesses build fast, scalable web platforms
                </p>
                <div className="flex gap-4 pt-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild>
                      <Link href="#projects">
                        View My Work <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" asChild>
                      <Link href="#contact">Contact Me</Link>
                    </Button>
                  </motion.div>
                </div>
              </MotionWrapper>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-muted/50 py-16 md:py-24">
            <div className="container space-y-6">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
              </MotionWrapper>
              <div className="max-w-3xl mx-auto text-center space-y-4">
                {[
                  "I'm a Frontend Developer focused on building fast, accessible and scalable web applications using modern technologies like React and Next.js. I enjoy transforming ideas into reliable digital products and creating interfaces that are both intuitive for users and maintainable for teams. I have hands-on experience developinng real platforms, including a production job-posting website and multiple responsive web applications, where I worked on performance optimization, component architecture and user focused design. I hold a Bachelor's degree in Information Technology from Wolaita Sodo University and currently work in a customer-facing role at Dashen Bank, which has strengthened my understanding of business workflows, user needs, and professional communication skills I bring into every project I build.  I'm passionate about building impactful digital products and am actively seeking remote opportunities where I can contribute to meaningful web platforms while continuing to grow as a frontend engineer.",
                ].map((paragraph, index) => (
                  <MotionWrapper key={index} delay={index * 0.2}>
                    <p className="text-lg text-muted-foreground">{paragraph}</p>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <ServicesSection />

          {/* Experience Section */}

          {/* Projects Section */}
          <section id="projects" className="container py-16 md:py-24 space-y-8">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold text-center">My Projects</h2>
            </MotionWrapper>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  title: "Job Posting Platform",
                  description: "Built a full job board with Next.js and database integration, Developed admin dashboard for managing job posts and structured pages for SEO and smooth user interface.",
                  tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
                  imageUrl: "/images/jobsethiopia.png",
                  demoUrl: "https://jobsethiopia.vercel.app/",
                  codeUrl: "#",
                },
                {
                  title: "YouTube Clone",
                  description: "Created responsive video UI with palyback and search, Implemented dynamic data loading and auth features and Built reusable components for scalable layout.",
                  tags: ["React", "Firebase", "Styled Components"],
                  imageUrl: "/images/youtube-clone.png",
                  demoUrl: "https://youtube-clone-pearl-iota.vercel.app/",
                  codeUrl: "https://github.com/yayachere/youtube-clone",
                },
                {
                  title: "Gemini Clone",
                  description: "Built AI chat interface with responsive layout and message streaming, Implemented dynamic input handling and reusable UI components and Focused on clean state management and fast rendering.",
                  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
                  imageUrl: "/images/gemini-clone.png",
                  demoUrl: "https://gemini-clone-iota-six.vercel.app/",
                  codeUrl: "https://github.com/yayachere/gemini-clone",
                },
                {
                  title: "Car Buy / Selling Site",
                  description:
                    "Developed responsive vehicle listing and detail pages, Implemented filtering and structured product display UI and Optimized layout for smooth browsing across devices",
                  tags: ["React", "Redux", "Node.js"],
                  imageUrl: "/images/car-selling-site.png",
                  demoUrl: "https://chernet-ev-site.netlify.app/",
                  codeUrl: "https://github.com/yayachere/ev-website",
                },
                {
                  title: "AI Blockchain Site",
                  description:
                    "Designed modern landing pages explaining AI/blockchain services, Built responsive sections with reusable components and Focused on performance and clean UI structure.",
                  tags: ["React", "Solidity", "TensorFlow.js", "Web3.js"],
                  imageUrl: "/images/ai-blockchain.png",
                  demoUrl: "https://front-end-assignment-figma.vercel.app/",
                  codeUrl: "https://github.com/yayachere/front-end-assignment-figma",
                },
                {
                  title: "College Site",
                  description:
                    "Developed multi-page responsive institutional site, Organized navigation and modular components and Improved usability with clear content structure.",
                  tags: ["React", "Bootstrap", "Firebase"],
                  imageUrl: "/images/college-site.png",
                  demoUrl: "https://edusity-one-weld.vercel.app/",
                  codeUrl: "https://github.com/yayachere/edusity",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2,
                      },
                    },
                  }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="bg-muted/50 py-16 md:py-24">
            <div className="container space-y-8">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl font-bold text-center">Skills & Technologies</h2>
              </MotionWrapper>
              <div className="max-w-3xl mx-auto text-center">
                <div className="space-y-6">
                  {[
                    {
                      title: "Frontend",
                      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
                    },
                    {
                      title: "Tools & Libraries",
                      skills: ["Redux", "Framer Motion", "Git", "Webpack", "Vite", "Storybook"],
                    },
                    {
                      title: "Design & Others",
                      skills: [
                        "Responsive Design",
                        "UI/UX",
                        "Figma",
                        "Accessibility",
                        "SEO",
                        "Performance Optimization",
                      ],
                    },
                  ].map((category, categoryIndex) => (
                    <MotionWrapper key={category.title} delay={categoryIndex * 0.2}>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-center">{category.title}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {category.skills.map((skill, index) => (
                            <SkillBadge key={skill} name={skill} index={index} />
                          ))}
                        </div>
                      </div>
                    </MotionWrapper>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="container py-16 md:py-24 space-y-8">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
            </MotionWrapper>
            <div className="max-w-xl mx-auto space-y-8">
              <MotionWrapper className="space-y-6" delay={0.2}>
                <p className="text-center text-muted-foreground">
                  I'm available for remote frontend development opportunities, freelance projects and collaborations.

                  If you have a project in mind or are looking for a developer to join your team, feel free to reach out.

                  You can contact me with below options:
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  {[
                    { icon: Mail, href: "mailto:chereyaya16@gmail.com", label: "Email" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/chernet-mitiku-09008a266", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/yayachere", label: "GitHub" },
                    { icon: ExternalLink, href: "https://www.upwork.com/freelancers/~01b32e69ac9f25d593?mp_source=share", label: "Upwork" },
                  ].map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.div
                        key={social.label}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button variant="outline" size="icon" className="h-12 w-12" asChild>
                          <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <Icon className="h-6 w-6" />
                          </Link>
                        </Button>
                      </motion.div>
                    )
                  })}
                </div>
                <div className="flex justify-center items-center gap-2 pt-6">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">+251 924 740 111</span>
                </div>
              </MotionWrapper>
            </div>
          </section>
        </main>
        <motion.footer
          className="border-t py-6 md:py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Chernet Mitiku. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </AnimatePresence>
  )
}
