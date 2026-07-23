import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 pb-8 pt-16">

      <div className="max-w-6xl mx-auto">

        {/* Glass footer */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-8 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-white">
                &lt;Tamim /&gt;
              </h2>
              <p className="text-zinc-400 text-sm mt-2">
                Full Stack Developer building modern web applications.
              </p>
            </div>

            {/* Center - Social icons */}
            <div className="flex items-center gap-6 text-zinc-300">
              <a
                href="https://github.com/Tamim379ta"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/tamimtahsan"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://wa.me/8801870618919"
                target="_blank"
                className="hover:text-green-400 transition"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-6 pt-5 text-center text-sm text-zinc-500">
            © 2025 Tamim Tahsan. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;