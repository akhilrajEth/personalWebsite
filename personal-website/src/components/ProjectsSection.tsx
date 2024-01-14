import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Splurge Finance",
    description:
      "Splurge provides automation for DEX traders beyond limit orders or TWAP(Time Weighted Average Price). Currently our product allows traders to capture sudden movements in price. At the moment we are in beta-phase providing service for 325 users.",
    image: "/SplurgeSS.png",
    link: "https://splurgefi.xyz/",
  },
  {
    name: "Pare.",
    description: "Pare is a iOS dApp that enables food pickup at the lowest prices and highest rewards. Backend payments are all done on the blockchain with 0% transaction fees, meaning money previously gone to middlemen goes back to users. Incentivizing recurring-revenue for partner restaurants. Raised $17,000 and onboarded 2 restaurants.",
    image: "/Pare.png",
    link: "https://apps.apple.com/us/app/pare/id6446803674",
  },
  {
    name: "MealX",
    description:
      "MealX is a iOS app to buy and sell meal exchanges @ University of Virginia. Not operational due to being shut down in violation of UVA's dining agreement.",
    image: "/MealX.png",
    github: "https://github.com/akhilrajEth/MealX",
    link: "https://github.com/akhilrajEth/MealX",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                    <Link href={project.link}>
                        <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        />
                    </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                        { project.name === "MealX" ? (
                            <Link href={project.github} target="_blank">
                                <BsGithub
                                size={30}
                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                            </Link>)
                        : (<Link href={project.link} target="_blank">
                            <BsArrowUpRightSquare
                                size={30}
                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                            </Link>)
                        }
                    </div>
                    </div>
                </div>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection