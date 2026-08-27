import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-white">
              KhmerCareer
              <span className="text-blue-500"> AI</span>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-slate-400">
              AI-powered career guidance and job matching designed to help
              Cambodian students and professionals build better careers.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:hello@khmercareer.ai"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-white"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white">Platform</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/jobs"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Find Jobs
              </Link>

              <Link
                to="/career"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Explore Careers
              </Link>

              <Link
                to="/ai-coach"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                AI Career Coach
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                About
              </a>

              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} KhmerCareer AI. Built for Cambodia 🇰🇭
        </div>
      </div>
    </footer>
  );
}

export default Footer;
