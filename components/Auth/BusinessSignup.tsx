export default function BusinessSignup() {
  return (
    <main className="min-h-screen bg-cover  relative" style={{ backgroundImage: "url('/images/auth/business-bg.png')" }}>
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-16 py-10 gap-16">
        {/* Left: Welcome Text */}
        <div className="w-full md:max-w-1/3 text-center md:text-left ">
          <h1 className="text-4xl md:text-7xl font-bold">Welcome</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Start your journey now with our management system!
          </p>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 max-w-md" >
          <form className="space-y-2.5 w-full border border-emerald-400 rounded-2xl px-5 py-3" style={{ backgroundImage: "url('/images/auth/bg-texture.png')" }}>
            <h2 className="text-2xl font-semibold text-center">
              Business Account
            </h2>

            <input
              type="text"
              placeholder="Business Name"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0"
            />

            {/* Phone Number Input */}
            <div className="flex gap-2">
              <select className="border px-2 py-2 rounded-lg border-emerald-400 outline-0">
                <option value="+1">+1</option>
                <option value="+92">+92</option>
                {/* Add more countries as needed */}
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 border px-4 py-2 rounded-lg border-emerald-400 outline-0"
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0"
            />
            <p className="text-sm text-gray-500">
              Password must be at least 12 characters. Letters, numbers, and
              symbols allowed.
            </p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border px-4 py-2 rounded-lg border-emerald-400 outline-0"
            />

            <button
              type="submit"
              className="w-full px-4 py-2 border rounded-xl font-semibold bg-emerald-600/30 backdrop-blur-sm"
            >
              CREATE ACCOUNT
            </button>

          </form>
            <p className="text-center text-sm font-bold md:mt-5 mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-[#20BF0E]">
                Login
              </a>
            </p>
        </div>
      </div>
    </main>
  );
}
