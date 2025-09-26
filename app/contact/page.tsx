import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/Sidebar"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#b23763] text-white">
            <Sidebar accentColor="pink" />
            <div className="container mx-auto px-4 py-8 ">
                <div className="max-w-4xl mx-auto">
                    {/* Main heading */}
                    <div className="mb-12 md:mb-16">
                        <h1 className="text-4xl font-extrabold sm:text-[8rem]  mb-6 md:mb-8">
                            Let&apos;s Create Something Amazing.
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 max-w-3xl text-pretty">
                            Whether you need a stunning website, a robust web application, or technical consultation, I&apos;m here to help
                            turn your vision into reality. Let&apos;s work together to create something that not only looks beautiful but
                            also delivers results for your business.
                        </p>
                    </div>

                    {/* Contact information grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-2">
                                <Mail className="w-6 h-6 text-gray-200" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-200 mb-1">Email</h3>
                                <a
                                    href="mailto:ibalematthew50@gmail.com"
                                    className="text-lg md:text-xl hover:text-foreground/80 transition-colors"
                                >
                                    ibalematthew50@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-2">
                                <Phone className="w-6 h-6 text-gray-200" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-200 mb-1">Phone</h3>
                                <a href="tel:+2348148062417" className="text-lg md:text-xl hover:text-gray-200 transition-colors">
                                    +2348148062417
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-2">
                                <MapPin className="w-6 h-6 text-gray-200" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-200 mb-1">Location</h3>
                                <p className="text-lg md:text-xl">Lagos, Nigeria</p>
                            </div>
                        </div>

                        {/* Available Hours */}
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-2">
                                <Clock className="w-6 h-6 text-gray-200" />
                            </div>
                            <div>
                                <h3 className="text-sm font-mediumtext-gray-200 mb-1">Available Hours</h3>
                                <p className="text-lg md:text-xl">Mon-Fri, 9:00 AM - 5:00 PM WAT</p>
                            </div>
                        </div>
                    </div>

                    {/* Connect with me section */}
                    <div className="">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Connect With Me</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* LinkedIn */}
                            <div className="group">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full h-auto p-6 bg-gray-100/50 border-foreground/20 hover:bg-foreground/10 hover:border-foreground/40 transition-all duration-200"
                                    asChild
                                >
                                    <a href="#" className="flex flex-col items-center gap-3">
                                        <Linkedin className="w-20 h-20 text-blue-400" />
                                        <div className="text-center">
                                            <h3 className="font-semibold text-foreground">LinkedIn</h3>
                                            <p className="text-sm text-foreground/70 mt-1">Connect with me professionally</p>
                                        </div>
                                    </a>
                                </Button>
                            </div>

                            {/* Twitter */}
                            <div className="group">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full h-auto p-6 bg-gray-100/50 shadow-sm border-gray-400 text-gray-200 transition-all duration-200"
                                    asChild
                                >
                                    <a href="#" className="flex flex-col items-center gap-3">
                                        <Twitter className="w-20 h-20 text-sky-400" />
                                        <div className="text-center text-gray-200">
                                            <h3 className="font-semibold text-foreground">Twitter</h3>
                                            <p className="text-sm text-foreground/70 mt-1">Follow for tech insights & updates</p>
                                        </div>
                                    </a>
                                </Button>
                            </div>

                            {/* Github */}
                            {/* <div className="group">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full h-auto p-6 bg-gray-100/50 border-foreground/20 hover:bg-foreground/10 hover:border-foreground/40 transition-all duration-200"
                                    asChild
                                >
                                    <a href="#" className="flex flex-col items-center gap-3">
                                        <Github className="w-8 h-8 text-sky-400" size={20} />
                                        <div className="text-center">
                                            <h3 className="font-semibold text-foreground">Github</h3>
                                            <p className="text-sm text-foreground/70 mt-1">Check out my open-source projects</p>
                                        </div>
                                    </a>
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
