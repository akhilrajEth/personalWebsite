"use client"
import React from "react"
import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6"
import Link from 'next/link'

const NAV_ITEMS = [
  { label: "[HOME]", href: "/" },
  { label: "[THOUGHTS]", href: "/thoughts" },
  { label: "[CREATIONS]", href: "/creations" },
]

export default function Navbar() {
  const [show, setShow] = useState(true)

  if (!show) return null

  return (
    <header className="w-full fixed top-0 z-50 bg-[#FCFBD4]">
      {/* Top row */}
      <div className="flex justify-end items-center px-8 py-3">
        <a
          href="https://x.com/0xAkhil_" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) profile"
          className="text-2xl text-gray-700 hover:text-blue-500 transition"
        >
          <FaXTwitter />
        </a>
      </div>
      {/* Bottom row */}
      <nav className="flex justify-center items-center px-4 py-2">
        <div className="flex space-x-8">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-lg font-semibold text-neutral-900 hover:text-neutral-500 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}