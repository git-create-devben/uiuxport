import { Sidebar } from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description:
        "A modern e-commerce mobile app design with intuitive user experience, featuring seamless checkout flow and personalized product recommendations.",
      image: "/modern-e-commerce-mobile-app-interface-design.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "SaaS Dashboard Design",
      description:
        "Clean and functional dashboard interface for a project management SaaS platform, focusing on data visualization and user productivity.",
      image: "/clean-saas-dashboard-interface-with-charts-and-ana.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Banking App Redesign",
      description:
        "Complete redesign of a banking mobile application with enhanced security features and improved user onboarding experience.",
      image: "/modern-banking-mobile-app-interface-design.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Food Delivery Platform",
      description:
        "User-centered design for a food delivery platform featuring restaurant discovery, order tracking, and seamless payment integration.",
      image: "/food-delivery-app-interface-with-restaurant-listin.jpg",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Sidebar accentColor="orange" />

      <main className="ml-16 p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              UI/UX Designer Portfolio
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Featured <span className="text-orange-500">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl text-pretty">
              Explore my latest UI/UX design projects, showcasing user-centered solutions that blend aesthetics with
              functionality to create meaningful digital experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-pretty leading-relaxed">{project.description}</p>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white border-0 group-hover:shadow-lg transition-all duration-200"
                    asChild
                  >
                    <a href={project.link} className="inline-flex items-center gap-2">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 bg-transparent"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
