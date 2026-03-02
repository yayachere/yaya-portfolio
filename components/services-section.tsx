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
    title: "Frontend Development",
    description:
      "I build fast,responsive and scalable web applications using moderntechnologies like React and Next.js. My focus is on writing clean, maintainable code while delivering seamless user experiences that work across devices and browsers.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI Engineering",
    description:
      "I transform design concepts into pixel-perfect, accessible interfaces. With strong attention to detail and usablility, I ensure every component is intuitive, interactive and aligned with modern UI/UX best practices.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Performance Optimization",
    description:
      "I improvewebsite speed, responsiveness an overall efficiency by optimizing  assets, reducing unnecessary re-renders and implementing best practicesin structured markup and frontend architecture to enhance user experience and search visibility",
  },
]
