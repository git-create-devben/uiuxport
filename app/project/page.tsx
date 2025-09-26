import { Sidebar } from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import SCUDO_WEB from "@/public/scudo-land.png"
import DAT from "@/public/dat.png"
import ACR from "@/public/acr.png"

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "Scudo Mobile App",
      description:
        "A modern insurance app design with an intuitive user experience, offering seamless policy purchase flows and personalized coverage recommendations.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a5353c232601033.689f5493bdcf0.png",
      link: "https://www.behance.net/gallery/232601033/Scudo-Insurance-Mobile-App",
    },
    {
      id: 2,
      title: "ACR",
      description:
        "A cutting-edge platform where assets meet opportunity featuring intuitive navigation, secure transactions, and personalized acquisition options.",
      image: ACR,
      link: "https://africanassetacq.com/",
    },
    {
      id: 3,
      title: "Datrisoft",
      description:
        "Datrisoft is a forward thinking tech company, building intelligent solutions that simplify processes, enhance experiences, and power digital transformation.",
      image: DAT,
      link: "https://www.figma.com/proto/LZHae7qbLZgNBLrqNrwO6w/Datrisoft?node-id=1-10&t=R559oa3wTsYX5yxy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A10",
    },
    {
      id: 4,
      title: "Scuo Web",
      description:
        "Scudo Web simplifies insurance with a user friendly platform that streamlines policy search, comparison, and purchase tailored to individual and business needs.",
      image: SCUDO_WEB,
      link: "https://scudoapp.co/",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Sidebar accentColor="orange" />

      <main className="sm:ml-16 p-8 lg:p-12">
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
                    height={400}
                    className="w-full h-full object-cove group-hover:scale-105 transition-transform duration-300"
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
