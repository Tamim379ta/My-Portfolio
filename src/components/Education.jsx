const EducationSection = () => {
  return (
    <section data-aos="fade-up" id="education" className="py-28 px-6 flex justify-center scroll-mt-20">
      <div className="max-w-4xl w-full">

        {/* Glass card */}
        <div
          className="rounded-3xl p-12"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >

          {/* Title */}
          <h2 className="text-4xl font-bold text-white text-center">
            Education
          </h2>

          <p className="mt-3 text-zinc-500 text-sm text-center tracking-widest uppercase">
            Academic Background
          </p>

          {/* Divider */}
          <div className="my-8 mx-auto w-10 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} />

          {/* Timeline */}
          <div className="mt-4 space-y-0">

            {/* CSE */}
            <div className="relative flex gap-6 pb-10">
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full mt-1 shrink-0"
                  style={{ background: "linear-gradient(135deg, #a07aff, #5ec3ff)", boxShadow: "0 0 8px rgba(160,122,255,0.5)" }} />
                <div className="w-px flex-1 mt-2"
                  style={{ background: "linear-gradient(to bottom, rgba(160,122,255,0.4), rgba(255,255,255,0.05))" }} />
              </div>

              {/* Content */}
              <div className="pb-2">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(120,80,255,0.15)",
                    border: "1px solid rgba(120,80,255,0.3)",
                    color: "rgba(180,150,255,0.9)",
                  }}>
                  2022 — Present
                </span>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  Diploma in Computer Science & Engineering
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Faridpur Polytechnic Institute
                </p>
                <p className="text-zinc-600 text-xs mt-1 tracking-wide uppercase">
                  7th Semester · Running
                </p>
              </div>
            </div>

            {/* SSC */}
            <div className="relative flex gap-6">
              {/* Dot only */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full mt-1 shrink-0"
                  style={{ background: "linear-gradient(135deg, #5ec3ff, #a07aff)", boxShadow: "0 0 8px rgba(94,195,255,0.4)" }} />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(94,195,255,0.1)",
                    border: "1px solid rgba(94,195,255,0.25)",
                    color: "rgba(140,210,255,0.9)",
                  }}>
                  2022
                </span>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Bishwa Zaker Monjil Government High School
                </p>
                 <p className="text-zinc-400 text-sm mt-1">
                  Science
                </p>
                <p className="text-zinc-600 text-xs mt-1 tracking-wide uppercase">
                  Completed
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;