export default function SectionTitle({ label, children }) {
  return (
    <div className="animate-scroll text-center mb-16">
      <span className="block text-[0.65rem] tracking-[0.5em] text-or uppercase mb-4">
        {label}
      </span>
      <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-creme">
        {children}
      </h2>
    </div>
  )
}
