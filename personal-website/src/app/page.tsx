import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />

      {/* Interests and Email */}
      <section className="mt-10 mb-16 flex flex-col items-center">
        <p className="text-base text-neutral-700 mb-2">
          Interested in: <span className="font-semibold text-teal-700">stablecoins</span>, <span className="font-semibold text-teal-700">defi yield</span>, <span className="font-semibold text-teal-700">zktls</span>
        </p>
        <a
          href="mailto:akhil@maheeps.net"
          className="text-sm text-teal-900 underline hover:text-teal-600 transition"
        >
          akhil@maheeps.net
        </a>
      </section>
    </main>
  )
}
