"use client"
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div
        className="mt-5 w-[92%] max-w-6xl px-6 py-3.5 flex items-center justify-between rounded-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Left - Name */}
        <a
          href="#home"
          className="font-bold text-lg tracking-wide"
          style={{
            background:
              "linear-gradient(135deg, #fff 60%, rgba(255,255,255,0.5))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <div className="text-white font-bold text-lg">
            <span className="text-zinc-300">&lt;</span>
            Tamim
            <span className="text-zinc-300"> /&gt;</span>
          </div>
        </a>
        {/* Center - Links */}
        <div className="hidden md:flex gap-8 text-sm">
          {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/60 hover:text-white transition-all duration-300 group"
            >
              {item}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                }}
              />
            </Link>
          ))}
        </div>

        {/* Right - Button */}
        <div>
          <Link
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.22)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.boxShadow =
                "0 0 16px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.boxShadow =
                "inset 0 1px 0 rgba(255,255,255,0.15)";
            }}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;