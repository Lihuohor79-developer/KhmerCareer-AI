function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            🇰🇭 Built for Cambodia
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            KhmerCareer AI
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            AI-powered career guidance and job matching for Cambodian students
            and professionals.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
              Explore Careers
            </button>

            <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
