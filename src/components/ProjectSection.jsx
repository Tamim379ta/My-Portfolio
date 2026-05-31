import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SportNest",
    description:
      "A full-stack sports facility booking platform where users can explore and reserve sports venues . The system allows facility owners to manage listings and users to book or cancel time slots in real time.",
    image: "/assets/sportnest.png",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "JWT" ,"Node.js", "Express.js"],
    live: "https://sport-nest-client-liart.vercel.app",
    github: "https://github.com/Tamim379ta/SportNest-Client",
  },
  {
    title: "Wanderlust",
    description:
      "A full-stack travel booking platform where users can explore destinations, book trips, and manage bookings with authentication and CRUD operations.",
    image: "/assets/wanderlust.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "JWT"],
    live: "https://wanderlust-eight-topaz.vercel.app",
    github: "https://github.com/Tamim379ta/wanderlust",
  },
  {
    title: "QurbaniHat",
    description:
      "A livestock booking platform with modern UI, featured animals, and responsive user experience.",
    image: "/assets/qurbanihat.png",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    live: "https://qurbani-hat.vercel.app/",
    github: "https://github.com/Tamim379ta/QurbaniHat-",
  },
  {
    title: "KeenKeeper",
    description:
      "A modern friendship tracking web application that helps users stay connected by logging calls, texts, and video interactions with timeline history and statistics dashboard.",
    image: "/assets/keenkeeper.png",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
    ],
    live: "https://assignment-007-eta.vercel.app/",
    github: "https://github.com/Tamim379ta/ASSIGNMENT-007",
  },
  {
    title: "English Janala",
    description:
      "An English learning web application built with raw JavaScript featuring interactive UI and dynamic functionality.",
    image: "/assets/english-janala.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tamim379ta.github.io/English-Janala/",
    github: "https://github.com/Tamim379ta/English-Janala",
  },
];

const ProjectSection = () => {
  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="py-24 px-6 flex justify-center scroll-mt-20"
    >
      <div className="max-w-6xl w-full">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Projects
          </h2>

          <p className="mt-4 text-zinc-400">
            Some projects I’ve worked on recently
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 
              backdrop-blur-xl rounded-3xl overflow-hidden 
              shadow-xl hover:scale-[1.02] transition duration-300"
            >

              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg 
                      bg-white/10 border border-white/10 
                      text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">

                  <Link
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2 rounded-xl 
                    bg-white text-black font-medium 
                    hover:bg-zinc-200 transition"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-5 py-2 rounded-xl 
                    border border-white/20 
                    text-white hover:bg-white/10 transition"
                  >
                    GitHub
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectSection;