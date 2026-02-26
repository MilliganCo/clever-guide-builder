export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ObjectType = 'static' | 'dynamic';
export type SpaceVisibility = 'public' | 'private';

export interface Object3D {
  id: string;
  name: string;
  set: string;
  rarity: Rarity;
  type: ObjectType;
  description: string;
  geometry: 'cube' | 'sphere' | 'torus' | 'cylinder' | 'cone' | 'dodecahedron' | 'octahedron' | 'icosahedron';
  color: string;
  scale: [number, number, number];
  dateObtained: string;
}

export interface SpaceObject {
  objectId: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

export interface Space {
  id: string;
  name: string;
  visibility: SpaceVisibility;
  objects: SpaceObject[];
  likes: number;
  rating: number;
  onSale: boolean;
  price?: number;
  createdAt: string;
  coverColor: string;
}

export interface UserProfile {
  nickname: string;
  avatarIndex: number;
  onboardingComplete: boolean;
  dailyDropClaimed: boolean;
  lastDropDate: string | null;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  nickname: string;
  avatarIndex: number;
  spaceName: string;
  spaceId: string;
  rating: number;
}
