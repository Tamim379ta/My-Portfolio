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
} from "react-icons/si";

const SkillSection = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "Git", icon: <SiGit /> },
  ];

  return (
    <section
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

          
          {/* Skills grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-3 
      px-6 py-6 rounded-2xl 
      bg-white/10 border border-white/10 
      text-zinc-200 
      hover:bg-white/20 hover:scale-105 
      transition duration-300"
              >
                {/* Icon */}
                <span className="text-4xl">
                  {skill.icon}
                </span>

                {/* Skill name */}
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillSection;