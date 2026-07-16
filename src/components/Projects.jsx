
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "LegalEase",
    description:
      "A full-stack legal services marketplace where clients can discover and hire lawyers, make payments, and track cases, while lawyers manage their profiles and services, and admins oversee the entire platform with analytics.",
    image: "/assets/legaleasy.png",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "Google OAuth", "Stripe", "Node.js", "Express.js"],
    live: "https://legal-ease-flame-zeta.vercel.app/",
    github: "https://github.com/Tamim379ta/LegalEase",
  },
  {
    title: "BookBridge",
    description:
      "A university library management system where students can browse, borrow, and return books with due date tracking, and admins can manage the full catalog, users, and borrow records in real time.",
    image: "/assets/bookbridge.png",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "Node.js", "Express.js", "Framer Motion"],
    live: "https://library-management-eight-chi-66.vercel.app/",
    github: "https://github.com/Tamim379ta/Library-Management-",
  },
  {
    title: "DineSpot",
    description:
      "A full-stack restaurant discovery and table booking platform where users can explore restaurants and reserve tables, while owners manage their listings and bookings in real time.",
    image: "/assets/dinespot.png",
    tech: ["Next.js", "Typescript", "React", "MongoDB", "Better Auth", "Node.js", "Express.js"],
    live: "https://dine-spot-eta.vercel.app/",
    github: "https://github.com/Tamim379ta/DineSpot",
  },
  {
    title: "SportNest",
    description:
      "A full-stack sports facility booking platform where users can explore and reserve sports venues. The system allows facility owners to manage listings and users to book or cancel time slots in real time.",
    image: "/assets/sportnest.png",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "JWT", "Node.js", "Express.js"],
    live: "https://sport-nest-client-liart.vercel.app",
    github: "https://github.com/Tamim379ta/SportNest-Client",
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
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="mt-4 text-zinc-400">Some projects I've worked on recently</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col bg-white/5 border border-white/10 
              backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl 
              hover:border-white/20 transition duration-300 cursor-pointer"
            >
              <div className="relative w-full h-48">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded-md bg-white/10 border border-white/5 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3"
                >
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center rounded-xl bg-white py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center rounded-xl border border-zinc-700 py-2.5 text-xs font-semibold text-zinc-300 transition hover:bg-zinc-800"
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