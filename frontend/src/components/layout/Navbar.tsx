import { Link } from "react-router";
import { Menu, X, BriefcaseBusiness, UserRound } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <BriefcaseBusiness size={20} />
          </div>

          <div>
            <span className="text-lg font-bold text-white">KhmerCareer</span>
            <span className="ml-1 text-lg font-bold text-blue-500">AI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/jobs"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Find Jobs
          </Link>

          <Link
            to="/career"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Explore Careers
          </Link>

          <Link
            to="/ai-coach"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            AI Career Coach
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <UserRound size={16} />
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/jobs"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                Find Jobs
              </Link>

              <Link
                to="/career"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                Explore Careers
              </Link>

              <Link
                to="/ai-coach"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                AI Career Coach
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-2 border-t border-slate-800 pt-4">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-center text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
