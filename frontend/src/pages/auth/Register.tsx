import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),

    email: z.string().email("Please enter a valid email address"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    role: z.enum(["STUDENT", "EMPLOYER"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      role: "STUDENT",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Registration data:", data);

    // Backend connection will be added later.
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

          <h1 className="mt-8 text-3xl font-bold">Create your account</h1>

          <p className="mt-2 text-slate-400">
            Start your career journey with KhmerCareer AI.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-8"
        >
          {/* Full Name */}
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              {...register("fullName")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
            />

            {errors.fullName && (
              <p className="mt-2 text-sm text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

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

          {/* Role */}
          <div className="mb-5">
            <label htmlFor="role" className="mb-2 block text-sm font-medium">
              I am joining as
            </label>

            <select
              id="role"
              {...register("role")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            >
              <option value="STUDENT">Student / Job Seeker</option>

              <option value="EMPLOYER">Employer</option>
            </select>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Minimum 8 characters"
              {...register("password")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-blue-500"
            />

            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
          >
            Create Account
          </button>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
