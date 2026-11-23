import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';
import type { PhotoItem } from '../data/photos';

interface LightboxProps {
  photos: PhotoItem[];
  currentIndex: number;
  favoriteIds: Set<string>;
  onToggleFavorite: (id: string) => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  photos,
  currentIndex,
  favoriteIds,
  onToggleFavorite,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const photo = photos[currentIndex];

  useEffect(() => {
    if (!photo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, onPrev, onNext]);

  if (!photo) return null;

  const isFavorite = favoriteIds.has(photo.id);

  return (
    <div
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.title} lightbox viewer`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/94 p-4 sm:p-[30px]"
    >
      {/* Top-right controls */}
      <div className="absolute top-3 right-4 flex items-center gap-2 sm:top-5 sm:right-[30px]">
        <button
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={
            isFavorite ? 'Remove from favorites' : 'Add to favorites'
          }
          aria-pressed={isFavorite}
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-[#087df5] focus-visible:outline-2 focus-visible:outline-white ${
            isFavorite ? 'text-[#ff4c78]' : 'text-white'
          }`}
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`}
            aria-hidden="true"
          />
        </button>

        <button
          id="closeLightbox"
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
        >
          <X className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {/* Previous Button */}
      {photos.length > 1 && (
        <button
          id="prevBtn"
          type="button"
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute top-1/2 left-1.5 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-[#087df5] focus-visible:outline-2 focus-visible:outline-white sm:left-[25px] sm:h-[55px] sm:w-[55px]"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      {/* Centered Content */}
      <div className="w-full max-w-[850px] text-center sm:w-[85%]">
        <img
          id="lightboxImage"
          src={photo.src}
          alt={`${photo.title} — ${photo.location}`}
          referrerPolicy="no-referrer"
          className="mx-auto max-h-[75vh] w-full rounded-[10px] object-contain"
        />

        <div className="p-[15px] text-white">
          <h3 id="imageTitle" className="mb-2 text-lg font-bold sm:text-xl">
            {photo.title}
          </h3>
          <p id="imageCounter" className="text-sm text-[#aabbd2] tabular-nums">
            <span>
              {currentIndex + 1} / {photos.length}
            </span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>{photo.categoryLabel}</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>{photo.location}</span>
          </p>
        </div>
      </div>

      {/* Next Button */}
      {photos.length > 1 && (
        <button
          id="nextBtn"
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className="absolute top-1/2 right-1.5 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-[#087df5] focus-visible:outline-2 focus-visible:outline-white sm:right-[25px] sm:h-[55px] sm:w-[55px]"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
