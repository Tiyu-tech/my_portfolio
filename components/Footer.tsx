import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 px-6 pt-20">
      {/* Glow */}
      <div
        className="
      absolute
      left-1/2
      top-0
      h-72
      w-72
      -translate-x-1/2
      rounded-full
      bg-cyan-500/20
      blur-[120px]
      "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Top */}
        <div
          className="
        grid
        gap-10
        md:grid-cols-2
        lg:grid-cols-4
        "
        >
          {/* Brand */}
          <div>
            <h2
              className="
            text-3xl
            font-extrabold
            text-white
            "
            >
              Tiyu
              <span className="text-cyan-400">Tech</span>
            </h2>

            <p
              className="
            mt-4
            leading-7
            text-slate-400
            "
            >
              Building modern websites, digital experiences and creative
              solutions that help businesses grow online.
            </p>

            <div
              className="
            mt-6
            flex
            gap-3
            "
            >
              {[FaGithub, FaLinkedin, FaFacebook, FaInstagram].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-slate-300
                  transition
                  hover:border-cyan-400
                  hover:text-cyan-400
                  "
                  >
                    <Icon size={18} />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="
            text-lg
            font-bold
            text-white
            "
            >
              Services
            </h3>

            <ul
              className="
            mt-5
            space-y-3
            text-slate-400
            "
            >
              {[
                "Website Development",
                "UI/UX Design",
                "Graphic Design",
                "Social Media Marketing",
                "SEO Optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="
                  transition
                  hover:text-cyan-400
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="
            text-lg
            font-bold
            text-white
            "
            >
              Company
            </h3>

            <ul
              className="
            mt-5
            space-y-3
            text-slate-400
            "
            >
              <li>
                <Link href="#work">Projects</Link>
              </li>

              <li>
                <Link href="#services">Services</Link>
              </li>

              <li>
                <Link href="#contact">Contact</Link>
              </li>

              <li>About Me</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="
            text-lg
            font-bold
            text-white
            "
            >
              Contact
            </h3>

            <div
              className="
            mt-5
            space-y-4
            text-slate-400
            "
            >
              <p
                className="
              flex
              gap-3
              "
              >
                <MapPin className="text-cyan-400" size={20} />
                Tamale, Ghana
              </p>

              <p
                className="
              flex
              gap-3
              "
              >
                <Mail className="text-cyan-400" size={20} />
                hello@tiyutech.com
              </p>

              <p
                className="
              flex
              gap-3
              "
              >
                <Phone className="text-cyan-400" size={20} />
                +233 531 350 631
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
        mt-16
        flex
        flex-col
        items-center
        justify-between
        gap-5
        border-t
        border-white/10
        py-8
        text-sm
        text-slate-500
        md:flex-row
        "
        >
          <p>
            © {new Date().getFullYear()} Tiyu Tech Solutions. All rights
            reserved.
          </p>

          <Link
            href="#"
            className="
            flex
            items-center
            gap-2
            text-slate-400
            hover:text-cyan-400
            "
          >
            Back to top
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
