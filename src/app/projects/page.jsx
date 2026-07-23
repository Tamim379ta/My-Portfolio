import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

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
              key={project.slug}
              className="flex flex-col bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:border-white/20 transition duration-300"
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

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 text-center rounded-xl py-2.5 text-xs font-semibold text-white transition duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(160,122,255,0.85), rgba(94,195,255,0.75))",
                    }}
                  >
                    View Details
                  </Link>
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