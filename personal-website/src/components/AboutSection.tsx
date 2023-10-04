import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Solidity" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "Assembly" },
  { skill: "Swift" },
  { skill: "HTML/CSS/Javascript" },
  { skill: "Next.js" },
  { skill: "Flask" },
  { skill: "Docker" },
  { skill: "Redis" },
  { skill: "Jenkins" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Web3 Tooling: Alchemy, Hardhat, Waffle, GETH" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              I love building things people use. The disruptive and nascent nature of blockchain captivate me, making it my field of exploration.
            </p>
            <br />
            <p>
            I&#39;m currently pursuing a double major in Computer Science and Economics at the University of Virginia.
            </p>
            <br />
            <p>
              Besides being a crypto degen or nerding out on the latest Web3 infrastructure I lift weights and manage clients as the Director of External Relations @ <a href="https://vcguva.com/" className="text-teal-600">Virginia Consulting Group.</a> 
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <div className="relative mt-8 md:mt-0 flex flex-col items-center">
                <Image
                    src="/Web3License.png"
                    alt=""
                    width={325}
                    height={325}
                    className="rounded-full mt-10 mx-auto md:mx-0"
                />
                <p className="text-center text-gray-600 mt-2">My Car 😁</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection