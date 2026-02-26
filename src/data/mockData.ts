import { Object3D, Space, LeaderboardEntry } from '@/types';

export const AVATAR_PRESETS = [
  { emoji: '🟣', bg: 'bg-purple-500' },
  { emoji: '🔵', bg: 'bg-blue-500' },
  { emoji: '🟢', bg: 'bg-green-500' },
  { emoji: '🔴', bg: 'bg-red-500' },
  { emoji: '🟡', bg: 'bg-yellow-500' },
  { emoji: '⚪', bg: 'bg-gray-300' },
];

export const RARITY_LABELS: Record<string, string> = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  epic: 'Epic',
  legendary: 'Legendary',
};

export const MOCK_OBJECTS: Object3D[] = [
  { id: '1', name: 'Prism Cube', set: 'Basics', rarity: 'common', type: 'static', description: 'A simple cube with subtle reflections.', geometry: 'cube', color: '#8b5cf6', scale: [1, 1, 1], dateObtained: '2026-02-26' },
  { id: '2', name: 'Neon Sphere', set: 'Glow', rarity: 'uncommon', type: 'dynamic', description: 'A sphere emitting soft neon light.', geometry: 'sphere', color: '#06b6d4', scale: [1, 1, 1], dateObtained: '2026-02-25' },
  { id: '3', name: 'Crystal Torus', set: 'Crystals', rarity: 'rare', type: 'static', description: 'A glass-like torus with refractions.', geometry: 'torus', color: '#3b82f6', scale: [1, 1, 1], dateObtained: '2026-02-24' },
  { id: '4', name: 'Void Dodecahedron', set: 'Void', rarity: 'epic', type: 'dynamic', description: 'A mysterious shape from the void.', geometry: 'dodecahedron', color: '#a855f7', scale: [1.2, 1.2, 1.2], dateObtained: '2026-02-23' },
  { id: '5', name: 'Solar Octahedron', set: 'Celestial', rarity: 'legendary', type: 'dynamic', description: 'Radiates energy from a dying star.', geometry: 'octahedron', color: '#f59e0b', scale: [1.3, 1.3, 1.3], dateObtained: '2026-02-22' },
  { id: '6', name: 'Ice Cylinder', set: 'Elements', rarity: 'common', type: 'static', description: 'Frozen in time.', geometry: 'cylinder', color: '#67e8f9', scale: [0.8, 1.2, 0.8], dateObtained: '2026-02-21' },
  { id: '7', name: 'Fire Cone', set: 'Elements', rarity: 'uncommon', type: 'dynamic', description: 'Burns with eternal flame.', geometry: 'cone', color: '#ef4444', scale: [1, 1.4, 1], dateObtained: '2026-02-20' },
  { id: '8', name: 'Galaxy Icosahedron', set: 'Celestial', rarity: 'epic', type: 'dynamic', description: 'Contains a mini galaxy within.', geometry: 'icosahedron', color: '#c084fc', scale: [1.1, 1.1, 1.1], dateObtained: '2026-02-19' },
];

export const DROP_POOL: Object3D[] = [
  { id: 'drop-1', name: 'Phantom Cube', set: 'Phantom', rarity: 'rare', type: 'dynamic', description: 'Phases between dimensions.', geometry: 'cube', color: '#818cf8', scale: [1, 1, 1], dateObtained: '' },
  { id: 'drop-2', name: 'Aurora Sphere', set: 'Aurora', rarity: 'epic', type: 'dynamic', description: 'Dances like the northern lights.', geometry: 'sphere', color: '#34d399', scale: [1.1, 1.1, 1.1], dateObtained: '' },
  { id: 'drop-3', name: 'Obsidian Torus', set: 'Dark', rarity: 'uncommon', type: 'static', description: 'Dark and polished.', geometry: 'torus', color: '#374151', scale: [1, 1, 1], dateObtained: '' },
  { id: 'drop-4', name: 'Diamond Core', set: 'Gems', rarity: 'legendary', type: 'static', description: 'Unbreakable brilliance.', geometry: 'octahedron', color: '#e2e8f0', scale: [1.2, 1.2, 1.2], dateObtained: '' },
];

export const MOCK_SPACES: Space[] = [
  { id: 's1', name: 'My Private Room', visibility: 'private', objects: [], likes: 0, rating: 0, onSale: false, createdAt: '2026-02-26', coverColor: '#6d28d9' },
  { id: 's2', name: 'Public Gallery', visibility: 'public', objects: [], likes: 12, rating: 4.2, onSale: false, createdAt: '2026-02-26', coverColor: '#0891b2' },
  { id: 's3', name: 'Neon Dreams', visibility: 'public', objects: [], likes: 89, rating: 4.8, onSale: true, price: 250, createdAt: '2026-02-20', coverColor: '#a855f7' },
  { id: 's4', name: 'Crystal Cave', visibility: 'public', objects: [], likes: 45, rating: 4.5, onSale: false, createdAt: '2026-02-18', coverColor: '#3b82f6' },
  { id: 's5', name: 'Void Chamber', visibility: 'public', objects: [], likes: 156, rating: 4.9, onSale: true, price: 500, createdAt: '2026-02-15', coverColor: '#1e1b4b' },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, userId: 'u1', nickname: 'CryptoArtist', avatarIndex: 0, spaceName: 'Void Chamber', spaceId: 's5', rating: 4.9 },
  { rank: 2, userId: 'u2', nickname: 'NeonMaster', avatarIndex: 1, spaceName: 'Neon Dreams', spaceId: 's3', rating: 4.8 },
  { rank: 3, userId: 'u3', nickname: 'GlassBuilder', avatarIndex: 2, spaceName: 'Crystal Cave', spaceId: 's4', rating: 4.5 },
  { rank: 4, userId: 'u4', nickname: 'SpaceWalker', avatarIndex: 3, spaceName: 'Orbit Lounge', spaceId: 's6', rating: 4.3 },
  { rank: 5, userId: 'u5', nickname: 'PixelDreamer', avatarIndex: 4, spaceName: 'Public Gallery', spaceId: 's2', rating: 4.2 },
];
