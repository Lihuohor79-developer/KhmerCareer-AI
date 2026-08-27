import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Target,
} from "lucide-react";
import { Link } from "react-router";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%)]" />

        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              <span>🇰🇭</span>
              Built for Cambodia
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Build the career
              <span className="block text-blue-500">you deserve.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              KhmerCareer AI helps you discover the right career, identify your
              skill gaps, build a learning path, and find jobs that match your
              skills.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Start Your Career Journey
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/jobs"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-slate-900"
              >
                Explore Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              One platform
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything you need to grow
            </h2>

            <p className="mt-4 text-slate-400">
              From discovering your career to finding the right opportunity,
              KhmerCareer AI guides you along the way.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Career */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:-translate-y-1 hover:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Target size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Discover Your Career
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Understand which careers match your skills, interests,
                education, and goals.
              </p>
            </div>

            {/* AI */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:-translate-y-1 hover:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <BrainCircuit size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">AI Skill Analysis</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Find the skills you're missing and receive a personalized
                roadmap to become job-ready.
              </p>
            </div>

            {/* Jobs */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:-translate-y-1 hover:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <BriefcaseBusiness size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">Find Better Jobs</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Discover opportunities that match your skills instead of
                applying blindly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your career journey starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Create your profile, discover your potential, and take the next step
            toward your future.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
