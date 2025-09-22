import { Sidebar } from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Sidebar accentColor="pink" />

      {/* Main content */}
      <main className="sm:ml-16 min-h-screen p-8 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left content - 2/3 width */}
            <div className="lg:col-span-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#d01879] mb-8">About</h1>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <p className="text-lg font-medium text-gray-800 mb-4">Senior UX/UI & Web Designer based in Lagos</p>
                  <p className="mb-4">
                    I&apos;m passionate about crafting meaningful, user-centered digital experiences — from concept to
                    polished interface. With over 5+ years of experience, I design engaging solutions that don&apos;t just
                    look good but also solve real user needs.
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    💡 At Arravo, I design impactful web and mobile interfaces, contribute to design systems, and lead
                    creative improvements that enhance usability and performance.
                  </p>
                  <p className="mb-6">
                    Previously, I worked on diverse digital projects including campaigns, web platforms, and branding
                    initiatives across tech and business sectors. My work bridges aesthetics with functionality to
                    deliver designs that truly connect with users.
                  </p>
                </div>

                <div className="space-y-2">
                  <p>
                    <strong>Tools:</strong> Figma, Adobe CC, Webflow
                  </p>
                  <p>
                    <strong>Language:</strong> English (Fluent)
                  </p>
                  <p className="text-[#d01879] font-medium">Let&apos;s connect!</p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-[#d01879] mb-6">Experience</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">- 5+ years of professional experience in UX/UI Design</p>

                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Key Areas of Expertise:</h3>
                    <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                      <div>• User Experience Design</div>
                      <div>• Responsive Web Design</div>
                      <div>• Interface Design</div>
                      <div>• Design Systems</div>
                      <div>• User Research</div>
                      <div>• Prototyping</div>
                      <div>• Brand Identity</div>
                      <div>• Mobile App Design</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Figma",
                    "Adobe XD",
                    "Sketch",
                    "Adobe CC",
                    "Webflow",
                    "Principle",
                    "InVision",
                    "Miro",
                    "Notion",
                    "Framer",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#d01879] hover:text-[#d01879] transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
                <Button
                  size="lg"
                  className="bg-[#d01879] hover:bg-[#d01879]/90 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right content - Profile image */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src="/professional-headshot-of-a-female-ux-ui-designer.jpg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                  width={384}
                  height={384}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
