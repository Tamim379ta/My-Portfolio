"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["About", "Skills", "Education", "Projects", "Contact"];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div
        className="mt-5 w-[92%] max-w-6xl px-6 py-3.5 rounded-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Left - Name */}
          <a href="#home">
            <div className="text-white font-bold text-lg">
              <span className="text-zinc-300">&lt;</span>
              Tamim
              <span className="text-zinc-300"> /&gt;</span>
            </div>
          </a>

          {/* Center - Links (desktop) */}
          <div className="hidden md:flex gap-8 text-sm">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/60 hover:text-white transition-all duration-300 group"
              >
                {item}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Right - Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#fff",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              Download CV
            </a>

            {/* Hire Me */}
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              Hire Me
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-6 bg-white transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-6 bg-white transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              className="block h-px w-6 bg-white transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "400px" : "0px",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div className="flex flex-col gap-1 pt-4 pb-2">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-white/5 text-sm"
              >
                {item}
              </Link>
            ))}

            {/* Mobile CV + Hire Me */}
            <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
              <a
                href="/cv.pdf"
                download
                className="flex-1 text-center px-4 py-2 text-sm font-semibold rounded-xl text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                Download CV
              </a>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-semibold rounded-xl text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;