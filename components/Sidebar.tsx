"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import LOGO from "@/public/logo.png"

interface SidebarProps {
  accentColor?: string
}

export function Sidebar({ accentColor = "green" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "PROJECT", href: "/project" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ]

  const getAccentClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          text: "text-green-500",
          bg: "bg-green-500",
          border: "border-green-500",
          hover: "hover:text-green-400",
          sidebarBg: "bg-green-50", // Added sidebar background color
        }
      case "blue":
        return {
          text: "text-blue-500",
          bg: "bg-blue-500",
          border: "border-blue-500",
          hover: "hover:text-blue-400",
          sidebarBg: "bg-blue-50", // Added sidebar background color
        }
      case "purple":
        return {
          text: "text-purple-500",
          bg: "bg-purple-500",
          border: "border-purple-500",
          hover: "hover:text-purple-400",
          sidebarBg: "bg-purple-50", // Added sidebar background color
        }
      case "pink":
        return {
          text: "text-[#d01879]",
          bg: "bg-[#d01879]",
          border: "border-[#d01879]",
          hover: "hover:text-[#d01879]/80",
          sidebarBg: "bg-pink-50", // Added sidebar background color
        }
      case "orange":
        return {
          text: "text-orange-500",
          bg: "bg-orange-500",
          border: "border-orange-500",
          hover: "hover:text-orange-400",
          sidebarBg: "bg-orange-50", // Added sidebar background color
        }
      default:
        return {
          text: "text-green-500",
          bg: "bg-green-500",
          border: "border-green-500",
          hover: "hover:text-green-400",
          sidebarBg: "bg-green-50", // Added sidebar background color
        }
    }
  }

  const accent = getAccentClasses(accentColor)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-60 md:hidden bg-white/80 backdrop-blur-sm text-black hover:bg-white/90 border border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-full ${accent.sidebarBg} border-r border-gray-200 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          flex flex-col items-center justify-cente py-8
          w-full md:w-16
        `}
      >
        <nav className="flex- flex flex-col items-center justify-center md:justify-start space-y-8 md:space-y-18 pt-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link key={item.name} href={item.href} className="group relative" onClick={() => setIsOpen(false)}>
                <div
                  className={`
                    whitespace-nowrap origin-center font-medium tracking-wider transition-all duration-200
                    text-2xl md:text-sm md:transform md:-rotate-90
                    ${isActive ? `${accent.text}` : `text-gray-600 hover:text-gray-900`}
                  `}
                >
                  {item.name}
                </div>
              </Link>
            )
          })}
        </nav>

        <div className="flex-1 flex justify-center items-end md:items-center pb-8 md:pb-0">
          <Link href="/" className="hover:scale-110 transition-transform duration-200">
            <Image src={LOGO} alt="logo" width={100} height={100}/>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-xs md:transform md:-rotate-90 whitespace-nowrap pb-4 md:pb-0">© 2024</div>
      </aside>
    </>
  )
}
