import { Sidebar } from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Twitter, Linkedin, Dribbble, Bean as Behance } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Sidebar accentColor="green" />

      {/* Main content */}
      <main className="sm:ml-16 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-600 mb-8">
            <span className="mr-2">✨</span>
            UI/UX Designer
            <span className="ml-2">🎨</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            <span className="text-black">Crafting Digital</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            Transforming complex problems into intuitive, beautiful interfaces. Specializing in user research,
            interaction design, and creating seamless digital experiences that users love.
          </p>

          {/* Skills/Technologies */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Figma",
              "Adobe XD",
              "Sketch",
              "Prototyping",
              "User Research",
              "Wireframing",
              "Design Systems",
              "More...",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:text-black hover:border-green-500 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 bg-transparent"
            >
              Let&apos;s Collaborate
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Dribbble, href: "#", label: "Dribbble" },
              { icon: Behance, href: "#", label: "Behance" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-green-500 hover:border-green-500 transition-all duration-200 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
