export const metadata = {
  title: 'Member Login | Early Edge Club',
  description: 'Log in to access your Early Edge Club member dashboard.',
}

export default function LoginPage() {
  return (
    <main>
      <section className="bg-navy text-white py-20 md:py-28" aria-labelledby="login-heading">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-5">
            Members
          </p>
          <h1
            id="login-heading"
            className="font-display text-4xl font-bold leading-tight mb-6"
          >
            Member Login
          </h1>
          <p className="text-white/65 text-base leading-relaxed">
            Login functionality coming soon.
          </p>
        </div>
      </section>
    </main>
  )
}
