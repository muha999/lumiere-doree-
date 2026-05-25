export default function Filtres({ categories, filtreActif, onFiltreChange }) {
  return (
    <div className="animate-scroll mb-12 flex flex-wrap justify-center gap-4 max-md:gap-2.5 max-md:px-2">
      <button
        type="button"
        onClick={() => onFiltreChange('tous')}
        className={`cursor-pointer border px-7 py-2.5 font-sans text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 max-md:px-4 max-md:py-2 max-md:text-[0.65rem] ${
          filtreActif === 'tous'
            ? 'border-or bg-or text-noir'
            : 'border-or/30 bg-transparent text-gris hover:border-or hover:text-or'
        }`}
      >
        Tout
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onFiltreChange(cat)}
          className={`cursor-pointer border px-7 py-2.5 font-sans text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 max-md:px-4 max-md:py-2 max-md:text-[0.65rem] ${
            filtreActif === cat
              ? 'border-or bg-or text-noir'
              : 'border-or/30 bg-transparent text-gris hover:border-or hover:text-or'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
