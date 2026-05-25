export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-noir"
      style={{
        background:
          'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(201,168,76,0.05) 0%, transparent 50%), #0a0a0a',
      }}
    >
      {/* Grille décorative (équivalent .hero::before) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,0.03) 80px, rgba(201,168,76,0.03) 81px),
            repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.03) 80px, rgba(201,168,76,0.03) 81px)
          `,
        }}
        aria-hidden
      />

      <div className="animate-fade-up relative z-10 text-center">
        <p className="mb-6 text-[0.7rem] tracking-[0.5em] text-or uppercase max-md:text-[0.6rem] max-md:tracking-[0.3em]">
          ✦ Cosmétiques de Prestige ✦
        </p>
        <h1 className="font-serif text-[clamp(4rem,9vw,8rem)] font-light leading-[1.05] mb-4 max-md:text-[clamp(2.8rem,12vw,5rem)]">
          L&apos;Art de la
          <br />
          <em className="bg-gradient-to-br from-or to-or-clair bg-clip-text text-transparent not-italic">
            Beauté Pure
          </em>
        </h1>
        <p className="mb-12 text-[0.9rem] text-gris tracking-[0.15em] max-md:text-[0.8rem]">
          Beauté · Parfums · Bien-être · Dakar, Sénégal
        </p>
        <a href="#catalogue" className="btn-or max-md:px-8 max-md:py-3 max-md:text-[0.7rem]">
          Découvrir la Collection
        </a>
      </div>
    </section>
  )
}
