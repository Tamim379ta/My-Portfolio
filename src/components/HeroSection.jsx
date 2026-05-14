import Link from "next/link";

const HeroSection = () => {
  return (
    <section  id="home" className="relative min-h-screen flex items-center justify-center mt-20 px-6">

      <div className="relative animate__fadeIn animate__animated z-10 text-center max-w-3xl w-full">

        {/* Glass card */}
        <div
          className="rounded-3xl px-10 py-12"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs tracking-wide"
            style={{
              background: "rgba(120,80,255,0.18)",
              border: "1px solid rgba(120,80,255,0.35)",
              color: "rgba(180,150,255,0.95)",
            }}>
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Available for hire
          </div>

          {/* Title */}
          <h1 className=" text-4xl md:text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span style={{
              background: "linear-gradient(90deg, #a07aff, #5ec3ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Tamim Tahsan
            </span>{" "}

          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-zinc-400 text-lg md:text-xl leading-relaxed">
            Full Stack Developer crafting modern web experiences with
            Next.js, Node.js, Express, and MongoDB.
          </p>

          {/* Tagline */}
          <p className="mt-2 text-zinc-500 text-sm italic">
            Turning ideas into real-world products.
          </p>



          {/* Divider */}
          <div className="my-7 mx-auto w-10 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, rgba(160,122,255,0.85), rgba(94,195,255,0.75))",
                boxShadow: "0 4px 20px rgba(120,80,255,0.3)",
              }}
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-7 py-3 rounded-xl text-sm font-semibold text-white/75 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Contact Me
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-8 flex flex-col items-center gap-3 text-white/25 text-xs tracking-widest">
            <span>SCROLL DOWN</span>

            <svg
              className="w-4 h-4 animate-float"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;