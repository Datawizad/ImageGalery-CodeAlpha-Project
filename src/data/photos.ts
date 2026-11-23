export type PhotoCategory =
  | 'all'
  | 'nature'
  | 'cities'
  | 'people'
  | 'technology'
  | 'art';

export interface PhotoExif {
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: number;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: Exclude<PhotoCategory, 'all'>;
  categoryLabel: string;
  src: string;
  aspectRatio: '16/9' | '3/4' | '4/3' | '1/1';
  location: string;
  photographer: string;
  year: number;
  description: string;
  exif: PhotoExif;
}

export const CATEGORIES: { id: PhotoCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'nature', label: 'Nature' },
  { id: 'cities', label: 'Cities' },
  { id: 'people', label: 'People' },
  { id: 'technology', label: 'Technology' },
  { id: 'art', label: 'Art' },
];

export const PHOTOS: PhotoItem[] = [
  {
    id: 'tropical-paradise',
    title: 'Tropical Paradise',
    category: 'nature',
    categoryLabel: 'Nature',
    src: '/src/assets/images/nature_tropical_paradise_1795427459829.jpg',
    aspectRatio: '4/3',
    location: 'Bora Bora, French Polynesia',
    photographer: 'Elena Vance',
    year: 2026,
    description:
      'Turquoise lagoon shallows and leaning coconut palms bathed in crisp morning sunlight.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: '38mm V',
      aperture: 'f/8.0',
      shutter: '1/500s',
      iso: 100,
    },
  },
  {
    id: 'beautiful-city',
    title: 'Beautiful City',
    category: 'cities',
    categoryLabel: 'Cities',
    src: '/src/assets/images/cities_beautiful_skyline_1795427460971.jpg',
    aspectRatio: '4/3',
    location: 'Harbor Waterfront',
    photographer: 'Lukas Meyer',
    year: 2026,
    description:
      'Glass towers along a calm river harbor catching warm sunset reflections at golden hour.',
    exif: {
      camera: 'Nikon Z8',
      lens: '24-70mm f/2.8',
      aperture: 'f/7.1',
      shutter: '1/160s',
      iso: 160,
    },
  },
  {
    id: 'wild-lion',
    title: 'Wild Lion',
    category: 'nature',
    categoryLabel: 'Nature',
    src: '/src/assets/images/nature_wild_lion_1795427459961.jpg',
    aspectRatio: '4/3',
    location: 'Serengeti Plains, Tanzania',
    photographer: 'Soren Halvorsen',
    year: 2026,
    description:
      'A male lion resting in golden savannah grass as late afternoon sunlight illuminates his mane.',
    exif: {
      camera: 'Canon EOS R5',
      lens: '400mm f/2.8',
      aperture: 'f/3.2',
      shutter: '1/1000s',
      iso: 320,
    },
  },
  {
    id: 'beautiful-flowers',
    title: 'Beautiful Flowers',
    category: 'nature',
    categoryLabel: 'Nature',
    src: '/src/assets/images/nature_beautiful_flowers_1795427460402.jpg',
    aspectRatio: '4/3',
    location: 'Loire Meadow, France',
    photographer: 'Clara Lindqvist',
    year: 2026,
    description:
      'Blooming pastel peonies and vibrant poppies sparkling with morning dew across a sunlit meadow.',
    exif: {
      camera: 'Fujifilm GFX 100 II',
      lens: '80mm f/1.7',
      aperture: 'f/2.8',
      shutter: '1/400s',
      iso: 125,
    },
  },
  {
    id: 'modern-workspace',
    title: 'Modern Workspace',
    category: 'technology',
    categoryLabel: 'Technology',
    src: '/src/assets/images/tech_modern_workspace_1795427459985.jpg',
    aspectRatio: '4/3',
    location: 'Zurich Studio, Switzerland',
    photographer: 'Marcus Chen',
    year: 2026,
    description:
      'Oak desk setup featuring a sleek aluminum laptop, mechanical keyboard, and studio monitors beside natural garden light.',
    exif: {
      camera: 'Leica SL3',
      lens: '35mm APO',
      aperture: 'f/4.0',
      shutter: '1/125s',
      iso: 200,
    },
  },
  {
    id: 'mountain-adventure',
    title: 'Mountain Adventure',
    category: 'nature',
    categoryLabel: 'Nature',
    src: '/src/assets/images/nature_alpine_mist_1795425978081.jpg',
    aspectRatio: '16/9',
    location: 'Chamonix Valley, France',
    photographer: 'Elena Vance',
    year: 2026,
    description:
      'Jagged alpine granite peaks rising above a sea of morning valley mist and dark pine silhouettes.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: '38mm V',
      aperture: 'f/8.0',
      shutter: '1/125s',
      iso: 100,
    },
  },
  {
    id: 'parrot',
    title: 'Parrot',
    category: 'nature',
    categoryLabel: 'Nature',
    src: '/src/assets/images/nature_vibrant_parrot_1795427460060.jpg',
    aspectRatio: '4/3',
    location: 'Osa Peninsula, Costa Rica',
    photographer: 'Soren Halvorsen',
    year: 2026,
    description:
      'A scarlet and cobalt macaw perched on a moss-covered rainforest branch beneath dappled canopy light.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: '200-600mm',
      aperture: 'f/5.6',
      shutter: '1/640s',
      iso: 500,
    },
  },
  {
    id: 'city-lights',
    title: 'City Lights',
    category: 'cities',
    categoryLabel: 'Cities',
    src: '/src/assets/images/cities_tokyo_rain_1795425978699.jpg',
    aspectRatio: '4/3',
    location: 'Tokyo, Japan',
    photographer: 'Kenji Takahashi',
    year: 2026,
    description:
      'Warm street lanterns and neon reflections shimmering across rain-slicked alley pavement at twilight.',
    exif: {
      camera: 'Leica M11',
      lens: '35mm Summilux',
      aperture: 'f/2.0',
      shutter: '1/160s',
      iso: 800,
    },
  },
  {
    id: 'creative-portrait',
    title: 'Creative Portrait',
    category: 'people',
    categoryLabel: 'People',
    src: '/src/assets/images/people_creative_portrait_1795427460191.jpg',
    aspectRatio: '4/3',
    location: 'Berlin, Germany',
    photographer: 'Clara Lindqvist',
    year: 2026,
    description:
      'Painter seated beside her studio easel and palette under warm directional window and softbox rim light.',
    exif: {
      camera: 'Leica SL3',
      lens: '50mm APO',
      aperture: 'f/2.0',
      shutter: '1/250s',
      iso: 250,
    },
  },
  {
    id: 'digital-technology',
    title: 'Digital Technology',
    category: 'technology',
    categoryLabel: 'Technology',
    src: '/src/assets/images/tech_silicon_wafer_1795425982128.jpg',
    aspectRatio: '4/3',
    location: 'Eindhoven, Netherlands',
    photographer: 'Marcus Chen',
    year: 2026,
    description:
      'Polished monocrystal silicon wafer diffracting cleanroom light into vivid geometric spectra.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: '90mm Macro',
      aperture: 'f/5.6',
      shutter: '1/100s',
      iso: 160,
    },
  },
  {
    id: 'creative-art',
    title: 'Creative Art',
    category: 'art',
    categoryLabel: 'Art',
    src: '/src/assets/images/art_impasto_canvas_1795425982076.jpg',
    aspectRatio: '1/1',
    location: 'Copenhagen, Denmark',
    photographer: 'Giulia Conti',
    year: 2026,
    description:
      'Sculpted oil impasto textures in slate blue, bone white, and charcoal framed on raw Belgian linen.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: '90mm V',
      aperture: 'f/5.6',
      shutter: '1/160s',
      iso: 100,
    },
  },
  {
    id: 'urban-architecture',
    title: 'Urban Architecture',
    category: 'cities',
    categoryLabel: 'Cities',
    src: '/src/assets/images/cities_brutalist_facade_1795425981695.jpg',
    aspectRatio: '3/4',
    location: 'Zurich, Switzerland',
    photographer: 'Lukas Meyer',
    year: 2026,
    description:
      'Monumental modernist concrete piers and recessed glazing casting crisp geometric shadows against pale sky.',
    exif: {
      camera: 'Nikon Z8',
      lens: '24-70mm f/2.8',
      aperture: 'f/9.0',
      shutter: '1/640s',
      iso: 100,
    },
  },
];
