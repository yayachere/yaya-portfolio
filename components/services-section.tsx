import type React from "react"
import { Code, Palette, Smartphone, Globe, Lightbulb, Zap } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Specialized solutions tailored to help bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-primary/10 text-primary rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Custom websites built with modern frameworks like React, Next.js, and Tailwind CSS to create fast, responsive, and user-friendly experiences.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user interfaces with a focus on user experience, accessibility, and modern design principles.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "SEO Optimization",
    description:
      "Improve your site's visibility in search engines with technical SEO, content optimization, and performance enhancements.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Consultation",
    description:
      "Strategic guidance on technology choices, architecture planning, and digital transformation for your business.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimization",
    description:
      "Speed up your existing applications with code refactoring, bundle optimization, and modern best practices.",
  },
]
