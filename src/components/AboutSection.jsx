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

          {/* Journey */}
          <p className="mt-8 text-zinc-300 text-lg leading-relaxed text-center">
            I'm a Full Stack Web Developer passionate about crafting clean,
            performant, and meaningful digital experiences — from idea to deployment.
          </p>

          <p className="mt-6 text-zinc-400 text-center leading-relaxed">
            My journey into programming started in <span className="text-white">2023</span> through
            my <span className="text-white">Diploma in Computer Science</span>. What began as
            coursework quickly turned into a genuine passion — I fell in love with the process
            of building things from scratch and watching ideas come to life on the screen.
          </p>

          {/* Work */}
          <p className="mt-6 text-zinc-400 text-center leading-relaxed">
            I've built real-world projects involving <span className="text-white">authentication</span>,
            full <span className="text-white">CRUD</span> systems, and <span className="text-white">booking
            platforms</span> — always focused on writing maintainable and scalable code. What excites
            me most is solving real problems by building new things — whether it's a new feature,
            a new product, or a completely new idea.
          </p>

          {/* Current focus */}
          <p className="mt-6 text-zinc-400 text-center leading-relaxed">
            Currently deepening my backend architecture knowledge and exploring
            how to build truly scalable full-stack systems.
          </p>

          {/* Hobbies */}
          <div
            className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-center gap-6"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <span className="text-xl">⚽</span>
              <span>Sports lover — any kind, any time</span>
            </div>
            <div
              className="hidden sm:block w-px h-4"
              style={{ background: "rgba(255,255,255,0.15)" }}
            />
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <span className="text-xl">🎬</span>
              <span>Series binge-watcher</span>
            </div>
            <div
              className="hidden sm:block w-px h-4"
              style={{ background: "rgba(255,255,255,0.15)" }}
            />
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <span className="text-xl">💻</span>
              <span>Always building something new</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutSection;