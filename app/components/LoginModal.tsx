export default function LoginModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-8" role="presentation">
      <div
        aria-labelledby="login-title"
        aria-modal="true"
        className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-2xl"
        role="dialog"
      >
        <h2 className="mb-7 text-center text-3xl font-bold text-slate-900" id="login-title">
          Sign in
        </h2>
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="username">
              Username
            </label>
            <input
              autoComplete="username"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              id="username"
              name="username"
              required
              type="text"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="current-password"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              id="password"
              name="password"
              required
              type="password"
            />
          </div>
          <button
            className="w-full rounded-md bg-amber-400 px-4 py-3 font-bold text-slate-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 flex flex-col items-center gap-3 text-sm">
          <a className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900" href="#reset-password">
            Reset password
          </a>
          <a className="font-semibold text-slate-800 hover:text-amber-700" href="#sign-up">
            New here? Sign up
          </a>
        </div>
      </div>
    </div>
  )
}
