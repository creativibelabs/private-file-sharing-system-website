import { useLocale } from "next-intl";
import Link from "next/link";

export default function Login() {
  const locale = useLocale();

  return (
    <main className="bg-cover  relative overflow-hidden" style={{ backgroundImage: "url('/images/auth/login-bg.png')", height: "100vh", width: "100vw" }}>

      {/* Glow - Bottom Left */}
      <div className="absolute bottom-[-50px] left-[-100px] w-[300px] h-[500px] rounded-full bg-[#43E1A9] blur-[120px] opacity-60 z-0" />

      {/* Glow - Bottom Right */}
      <div className="absolute bottom-[-110px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#43E1A9] blur-[120px] opacity-35 z-0" />

      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-16 py-10 gap-16">
        {/* Left: Welcome Text */}
        <div className="w-full md:max-w-[40%] text-center md:text-left ">
          <h1 className="text-4xl md:text-7xl font-bold">Welcome Back</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Log in to access your dashboard and continue where you left off.
          </p>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 max-w-sm" >
          <form className="w-full border border-emerald-400 rounded-2xl px-5 py-6" style={{ backgroundImage: "url('/images/auth/bg-texture.png')" }}>
            <h2 className="text-2xl font-semibold text-center mb-5">
              Login
            </h2>

            <input
              type="text"
              placeholder="Username"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0 mb-2"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0 mb-4"
            />

            <button
              type="submit"
              className="w-full px-4 py-2 border rounded-xl font-semibold bg-emerald-600/30 backdrop-blur-sm"
            >
              LOGIN
            </button>

            <Link href="#" className="w-full px-4 py-2 text-[#20BF0E] font-semibold text-right block">Forgot Password?</Link>

          </form>
          <p className="text-center text-md font-bold md:mt-5 mt-2">
            Don't have an account?{" "}
            <Link href={`/${locale}/sign-up`} className="text-[#20BF0E] font-medium underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
