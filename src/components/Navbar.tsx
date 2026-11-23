import { Search, X } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeSection: 'home' | 'gallery' | 'about' | 'contact';
  onNavigate: (section: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const NAV_LINKS: { id: 'home' | 'gallery' | 'about' | 'contact'; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar({
  searchQuery,
  onSearchChange,
  activeSection,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="z-40 bg-[#061d40] text-white md:sticky md:top-0">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-[4%] py-4 md:flex-row md:gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#home"
          onClick={() => onNavigate('home')}
          className="text-[25px] font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168cff]"
        >
          Photo<span className="text-[#168cff]">Gallery</span>
        </a>

        {/* Zone 2: Navigation links */}
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center justify-center gap-4 text-[15px] font-medium sm:gap-[30px]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => onNavigate(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168cff] ${
                  isActive
                    ? 'text-[#168cff]'
                    : 'text-white hover:text-[#168cff]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Rounded navy search input */}
        <div className="relative flex w-full items-center md:w-[220px] shrink-0">
          <Search
            className="pointer-events-none absolute left-4 h-4 w-4 text-[#d4dceb]"
            aria-hidden="true"
          />
          <input
            id="searchInput"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search photos..."
            aria-label="Search photos"
            className="h-11 w-full rounded-full bg-[#263e63] pl-10 pr-9 text-sm text-white placeholder:text-[#d4dceb] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#168cff] [&::-webkit-search-cancel-button]:hidden"
          />
          {searchQuery.length > 0 && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-[#d4dceb] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-[#168cff]"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
