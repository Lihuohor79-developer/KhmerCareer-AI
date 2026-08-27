import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),

  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);

    // Spring Boot authentication will be connected later.
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-bold">
            KhmerCareer
            <span className="text-blue-500"> AI</span>
          </Link>

          <h1 className="mt-8 text-3xl font-bold">Welcome back</h1>

          <p className="mt-2 text-slate-400">
            Login to continue your career journey.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-8"
        >
          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </button>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
          >
            Login
          </button>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
