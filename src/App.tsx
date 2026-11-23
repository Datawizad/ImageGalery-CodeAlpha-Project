import { useEffect, useMemo, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { GalleryGrid } from './components/GalleryGrid';
import { Hero, type FilterTab } from './components/Hero';
import { Lightbox } from './components/Lightbox';
import { Navbar } from './components/Navbar';
import { PHOTOS, type PhotoItem } from './data/photos';

const FAVORITES_STORAGE_KEY = 'photogallery_favorites';

function loadInitialFavorites(): string[] {
  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<
    'home' | 'gallery' | 'about' | 'contact'
  >('home');
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(loadInitialFavorites);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favorites)
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [favorites]);

  const favoriteIds = useMemo(() => new Set(favorites), [favorites]);

  const categoryCounts = useMemo(() => {
    const counts: Record<FilterTab, number> = {
      all: PHOTOS.length,
      nature: 0,
      cities: 0,
      people: 0,
      technology: 0,
      art: 0,
      favorites: favorites.length,
    };

    for (const photo of PHOTOS) {
      counts[photo.category] += 1;
    }
    return counts;
  }, [favorites.length]);

  const filteredPhotos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PHOTOS.filter((photo) => {
      const matchesCategory =
        activeCategory === 'all' ||
        (activeCategory === 'favorites'
          ? favoriteIds.has(photo.id)
          : photo.category === activeCategory);

      if (!matchesCategory) return false;
      if (!query) return true;

      return (
        photo.title.toLowerCase().includes(query) ||
        photo.categoryLabel.toLowerCase().includes(query) ||
        photo.location.toLowerCase().includes(query) ||
        photo.photographer.toLowerCase().includes(query) ||
        photo.description.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, favoriteIds, searchQuery]);

  const currentLightboxIndex = useMemo(() => {
    if (!selectedPhotoId) return -1;
    return filteredPhotos.findIndex((photo) => photo.id === selectedPhotoId);
  }, [filteredPhotos, selectedPhotoId]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenLightbox = (photo: PhotoItem) => {
    setSelectedPhotoId(photo.id);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoId(null);
  };

  const handlePrevLightbox = () => {
    if (filteredPhotos.length === 0) return;
    const prevIndex =
      (currentLightboxIndex - 1 + filteredPhotos.length) %
      filteredPhotos.length;
    setSelectedPhotoId(filteredPhotos[prevIndex].id);
  };

  const handleNextLightbox = () => {
    if (filteredPhotos.length === 0) return;
    const nextIndex = (currentLightboxIndex + 1) % filteredPhotos.length;
    setSelectedPhotoId(filteredPhotos[nextIndex].id);
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  const handleCategoryChange = (category: FilterTab) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f7fc] text-[#14213d]">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      <div className="flex-1">
        <Hero
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          categoryCounts={categoryCounts}
        />

        <GalleryGrid
          photos={filteredPhotos}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
          onSelectPhoto={handleOpenLightbox}
          onResetFilters={handleResetFilters}
        />

        <AboutSection />
      </div>

      <Footer />

      {currentLightboxIndex >= 0 && (
        <Lightbox
          photos={filteredPhotos}
          currentIndex={currentLightboxIndex}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}
    </div>
  );
}
