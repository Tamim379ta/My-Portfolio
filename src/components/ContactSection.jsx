import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      data-aos="fade-up"
      id="contact"
      className="py-24 px-6 flex justify-center scroll-mt-20"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-xl text-center">

          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
          <p className="mt-4 text-zinc-400">
            Feel free to reach out for collaboration or just say hello 👋
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">

            <a
              href="mailto:tamimthasan55@gmail.com"
              className="flex flex-col items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition duration-300"
            >
              <FaEnvelope className="text-3xl text-white" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-zinc-400 text-sm mt-1 break-all">tamimthasan55@gmail.com</p>
              </div>
            </a>
            <a

              href="https://wa.me/8801870618919"
              target="_blank"
              className="flex flex-col items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition duration-300"
            >
              <FaWhatsapp className="text-3xl text-green-400" />
              <div>
                <h3 className="text-white font-semibold">WhatsApp</h3>
                <p className="text-zinc-400 text-sm mt-1">+880 1870 618 919</p>
              </div>
            </a>

            <a
              href="https://github.com/Tamim379ta"
              target="_blank"
              className="flex flex-col items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition duration-300"
            >
              <FaGithub className="text-3xl text-white" />
              <div>
                <h3 className="text-white font-semibold">GitHub</h3>
                <p className="text-zinc-400 text-sm mt-1 break-all">github.com/Tamim379ta</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/tamimtahsan"
              target="_blank"
              className="flex flex-col items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition duration-300"
            >
              <FaLinkedin className="text-3xl text-blue-400" />
              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>
                <p className="text-zinc-400 text-sm mt-1 break-all">linkedin.com/in/tamimtahsan</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;