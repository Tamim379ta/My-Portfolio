import Link from "next/link";
import Card from './../provider/StyledWrapper';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen container mx-auto flex items-center justify-center px-6 mt-25 lg:mt-15 "
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          {/* Availability Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs tracking-wide"
            style={{
              background: "rgba(120,80,255,0.18)",
              border: "1px solid rgba(120,80,255,0.35)",
              color: "rgba(180,150,255,0.95)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Available for hire
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{" "} <br />
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tamim Tahsan
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl">
            Full Stack Developer crafting modern web experiences with
            Next.js, Node.js, Express, and MongoDB.
          </p>

          <p className="mt-3 text-zinc-500 italic">
            Turning ideas into real-world products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Link
              href="#projects"
              className="px-7 py-3 rounded-xl text-sm font-semibold text-white text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(160,122,255,0.85), rgba(94,195,255,0.75))",
              }}
            >
              View Projects
            </Link>

            <a
              href="/cv.pdf"
              download
              className="px-7 py-3 rounded-xl text-sm font-semibold text-white text-center border border-white/20 hover:border-white/40 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <Card />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;