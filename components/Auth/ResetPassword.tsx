export default function ResetPassword() {

  return (
    <main className="bg-cover  relative overflow-hidden" style={{ backgroundImage: "url('/images/auth/reset-pass-bg.png')", height: "100vh", width: "100vw" }}>

      {/* Glow - Bottom Left */}
      <div className="absolute bottom-[-190px] left-[-100px] w-[350px] h-[550px] rounded-full bg-[#43E1A9] blur-[120px] opacity-60 z-0" />

      {/* Glow - Bottom Right */}
      <div className="absolute bottom-[-100px] right-[-70px] w-[300px] h-[300px] rounded-full bg-[#43E1A9] blur-[120px] opacity-50 z-0" />

      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-16 py-10 gap-16">
        {/* Left: Welcome Text */}
        <div className="w-full md:max-w-[40%] text-center md:text-left ">
          <h1 className="text-4xl md:text-7xl font-bold">Reset Password</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 max-w-sm" >
          <form className="w-full border border-emerald-400 rounded-2xl px-5 py-6" style={{ backgroundImage: "url('/images/auth/bg-texture.png')" }}>
            <h2 className="text-2xl font-semibold text-center mb-5">
              Reset Password
            </h2>

            <input
              type="password"
              placeholder="New Password"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0 mb-1"
            />          

            <p className="text-[12px] text-gray-400 mb-1">
            Password must be at least 12 characters. Letters, numbers, and symbols allowed.
            </p>

            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0 mb-3 mt-1"
            />          

            <button
              type="submit"
              className="w-full px-4 py-2 border rounded-xl font-semibold bg-emerald-600/30 backdrop-blur-sm"
            >
              Continue
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}
