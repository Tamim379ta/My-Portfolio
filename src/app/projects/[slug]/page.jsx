import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const ProjectDetailPage = async ({ params }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen px-6 py-32 flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition text-sm mb-10"
        >
          <FaArrowLeft size={12} />
          Back to Projects
        </Link>

        {/* Glass card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Project image */}
          <div className="relative w-full h-64 md:h-80">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
          </div>

          <div className="p-8 md:p-12">

            {/* Title + links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
              <div className="flex gap-3">
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition"
                  style={{
                    background: "linear-gradient(135deg, rgba(160,122,255,0.85), rgba(94,195,255,0.75))",
                  }}
                >
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-300 border border-zinc-700 hover:bg-zinc-800 transition"
                >
                  <FaGithub size={14} />
                  GitHub
                </Link>
              </div>
            </div>

            {/* Tech stack */}
            <div className="mt-8">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg text-xs font-medium text-zinc-300"
                    style={{
                      background: "rgba(120,80,255,0.15)",
                      border: "1px solid rgba(120,80,255,0.3)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">About</h2>
              <p className="text-zinc-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Challenges */}
            <div className="mt-8">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-3 text-zinc-300 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "linear-gradient(135deg, #a07aff, #5ec3ff)" }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Plans */}
            <div className="mt-8">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Future Plans</h2>
              <ul className="space-y-3">
                {project.future.map((f, i) => (
                  <li key={i} className="flex gap-3 text-zinc-300 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "linear-gradient(135deg, #5ec3ff, #a07aff)" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;