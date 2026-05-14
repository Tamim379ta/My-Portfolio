const AboutSection = () => {
  return (
    <section data-aos="fade-up" id="about" className="py-20 px-6 flex justify-center">

      <div className="max-w-4xl w-full">

        {/* Glass card */}
        <div
          className="rounded-3xl p-10"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            About Me
          </h2>

          {/* Content */}
          <p className="mt-8 text-zinc-300 text-lg leading-relaxed text-center">
            I'm a Full Stack Web Developer passionate about crafting clean,
            performant, and meaningful digital experiences from idea to deployment.
          </p>

          <p className="mt-6 text-zinc-400 text-center leading-relaxed">
            I've built real-world projects involving authentication with{" "}
            <span className="text-white">JWT</span>, full{" "}
            <span className="text-white">CRUD</span> systems, and{" "}
            <span className="text-white">booking platforms</span> — always
            focused on writing maintainable and scalable code.
          </p>

          <p className="mt-6 text-zinc-400 text-center leading-relaxed">
            Currently deepening my backend architecture knowledge and exploring
            how to build truly scalable full-stack systems.
          </p>

        </div>
      </div>

    </section>
  );
};

export default AboutSection;