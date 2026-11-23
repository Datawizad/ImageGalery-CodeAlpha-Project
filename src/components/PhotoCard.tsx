import { useState } from 'react';
import { Camera, Heart } from 'lucide-react';
import type { PhotoItem } from '../data/photos';

interface PhotoCardProps {
  photo: PhotoItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect: (photo: PhotoItem) => void;
}

export function PhotoCard({
  photo,
  isFavorite,
  onToggleFavorite,
  onSelect,
}: PhotoCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group relative h-[165px] overflow-hidden rounded-[15px] bg-[#dce5f1] sm:h-[220px] lg:h-[240px]">
      <button
        type="button"
        onClick={() => onSelect(photo)}
        aria-label={`Open ${photo.title} in lightbox`}
        className="block h-full w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087df5]"
      >
        {!imageFailed ? (
          <img
            src={photo.src}
            alt={`${photo.title} — ${photo.location}`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#dce5f1] to-[#c9d6e8] p-4 text-center">
            <Camera
              className="h-7 w-7 text-[#59677c]"
              aria-hidden="true"
            />
            <span className="mt-2 text-xs font-semibold text-[#14213d]">
              {photo.title}
            </span>
          </div>
        )}

        {/* Hover gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />

        {/* Hover title & unboxed metadata */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
          <h2 className="truncate text-[16px] font-semibold text-white">
            {photo.title}
          </h2>
          <p className="mt-0.5 truncate text-xs text-white/80">
            {photo.categoryLabel} · {photo.location}
          </p>
        </div>
      </button>

      {/* Favourite heart toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(photo.id);
        }}
        aria-label={
          isFavorite
            ? `Remove ${photo.title} from favorites`
            : `Add ${photo.title} to favorites`
        }
        aria-pressed={isFavorite}
        className={`absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/35 transition-all duration-200 hover:scale-105 hover:bg-[#087df5] focus-visible:outline-2 focus-visible:outline-white ${
          isFavorite ? 'text-[#ff4c78]' : 'text-white'
        }`}
      >
        <Heart
          className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
