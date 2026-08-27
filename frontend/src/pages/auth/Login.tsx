function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold">Welcome Back</h1>

        <p className="mt-2 text-slate-400">
          Login to your KhmerCareer AI account.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
