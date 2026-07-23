import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiTypescript,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";


const SkillSection = () => {
  const categories = [
    {
      label: "Frontend",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "React", icon: <SiReact className="text-cyan-300" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      label: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-zinc-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400" /> },
      ],
    },
    {
      label: "Tools",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
         { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "VS Code", icon: <BiLogoVisualStudio  className="text-blue-400" /> },
      ],
    },
  ];

  return (
    <section
      data-aos="fade-up"
      id="skills"
      className="py-20 px-6 flex justify-center scroll-mt-20"
    >
      <div className="max-w-5xl w-full">

        {/* Glass card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-xl">

          {/* Title */}
          <h2 className="text-4xl font-bold text-white text-center">
            Skills
          </h2>
          <p className="mt-4 text-zinc-400 text-center">
            Technologies I use to build full-stack web applications
          </p>

          {/* Categories */}
          <div className="mt-12 flex flex-col gap-10">
            {categories.map((cat) => (
              <div key={cat.label}>

                {/* Category label */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
                    {cat.label}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  />
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-3 px-4 py-5 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 hover:scale-105 transition duration-300"
                    >
                      <span className="text-3xl">{skill.icon}</span>
                      <span className="text-xs font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillSection;