import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl w-full">
      <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1">
          © 2025 Akhil Maheepathi<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/akhilrajEth" rel="noreferrer" target="_blank">
            <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/akhilmaheepathi/" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer