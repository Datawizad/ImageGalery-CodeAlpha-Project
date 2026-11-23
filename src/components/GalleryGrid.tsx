import { ImageOff } from 'lucide-react';
import type { PhotoItem } from '../data/photos';
import { PhotoCard } from './PhotoCard';

interface GalleryGridProps {
  photos: PhotoItem[];
  favoriteIds: Set<string>;
  onToggleFavorite: (id: string) => void;
  onSelectPhoto: (photo: PhotoItem) => void;
  onResetFilters: () => void;
}

export function GalleryGrid({
  photos,
  favoriteIds,
  onToggleFavorite,
  onSelectPhoto,
  onResetFilters,
}: GalleryGridProps) {
  return (
    <main
      id="gallery"
      className="mx-auto min-h-[350px] max-w-[1440px] px-[3%] py-[25px]"
    >
      {photos.length > 0 ? (
        <div
          id="galleryGrid"
          className="grid grid-cols-1 gap-[10px] min-[351px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[15px]"
        >
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favoriteIds.has(photo.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectPhoto}
            />
          ))}
        </div>
      ) : (
        <div
          id="emptyMessage"
          className="mx-auto flex max-w-md flex-col items-center px-4 py-[50px] text-center"
        >
          <ImageOff
            className="h-9 w-9 text-[#59677c]"
            aria-hidden="true"
          />
          <p className="mt-4 text-[18px] font-medium text-[#14213d]">
            No matching images found.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="mt-5 inline-flex min-h-[40px] items-center rounded-[30px] bg-[#087df5] px-5 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0669d1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087df5]"
          >
            Show all photos
          </button>
        </div>
      )}
    </main>
  );
}
