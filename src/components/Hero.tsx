import { CATEGORIES, type PhotoCategory } from '../data/photos';

export type FilterTab = PhotoCategory | 'favorites';

interface HeroProps {
  activeCategory: FilterTab;
  onCategoryChange: (category: FilterTab) => void;
  categoryCounts: Record<FilterTab, number>;
}

const HERO_BACKDROP = '/src/assets/images/nature_alpine_mist_1795425978081.jpg';

export function Hero({
  activeCategory,
  onCategoryChange,
  categoryCounts,
}: HeroProps) {
  const filterItems: { id: FilterTab; label: string }[] = [
    ...CATEGORIES,
    { id: 'favorites', label: 'Favorites' },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-[55px] pb-[34px] text-center text-white"
    >
      {/* Background photograph + measured navy scrim */}
      <img
        src={HERO_BACKDROP}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#051937]/78"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1
          className="text-[clamp(32px,5vw,54px)] font-extrabold leading-tight tracking-tight text-white"
          style={{ textWrap: 'balance' }}
        >
          Our <span className="text-[#168cff]">Image</span> Gallery
        </h1>
        <p className="mt-3 text-[15px] text-white/90 sm:text-[18px]">
          Explore our collection of beautiful moments
        </p>

        {/* Category Filters */}
        <div
          role="tablist"
          aria-label="Filter photographs by category"
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {filterItems.map((category) => {
            const isSelected = activeCategory === category.id;
            const count = categoryCounts[category.id] ?? 0;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onCategoryChange(category.id)}
                className={`inline-flex min-h-[40px] items-center gap-2 rounded-[30px] border px-[18px] py-2.5 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200 sm:px-[23px] sm:py-3 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isSelected
                    ? 'border-[#087df5] bg-[#087df5] text-white -translate-y-0.5 shadow-[0_5px_15px_rgba(0,123,255,0.35)]'
                    : 'border-[#8295b0] bg-white/8 text-white hover:-translate-y-0.5 hover:border-[#087df5] hover:bg-[#087df5] hover:shadow-[0_5px_15px_rgba(0,123,255,0.3)]'
                }`}
              >
                <span>{category.label}</span>
                <span className="font-mono text-xs text-white/85 tabular-nums">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
