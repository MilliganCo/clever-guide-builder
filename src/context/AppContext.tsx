import React, { createContext, useContext, useState, useCallback } from 'react';
import { Object3D, Space, UserProfile } from '@/types';
import { MOCK_OBJECTS, MOCK_SPACES, DROP_POOL } from '@/data/mockData';

interface AppState {
  user: UserProfile;
  inventory: Object3D[];
  spaces: Space[];
  currentDrop: Object3D | null;
  theme: 'light' | 'dark';
}

interface AppContextType extends AppState {
  setUser: (user: UserProfile) => void;
  completeOnboarding: (nickname: string, avatarIndex: number) => void;
  claimDailyDrop: () => void;
  addToInventory: (obj: Object3D) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>({
    nickname: '',
    avatarIndex: 0,
    onboardingComplete: false,
    dailyDropClaimed: false,
    lastDropDate: null,
  });
  const [inventory, setInventory] = useState<Object3D[]>(MOCK_OBJECTS);
  const [spaces, setSpaces] = useState<Space[]>(MOCK_SPACES);
  const [currentDrop, setCurrentDrop] = useState<Object3D | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const completeOnboarding = useCallback((nickname: string, avatarIndex: number) => {
    setUser(prev => ({ ...prev, nickname, avatarIndex, onboardingComplete: true }));
    // Generate first drop
    const drop = { ...DROP_POOL[Math.floor(Math.random() * DROP_POOL.length)], dateObtained: new Date().toISOString().split('T')[0] };
    setCurrentDrop(drop);
  }, []);

  const claimDailyDrop = useCallback(() => {
    if (currentDrop) {
      setInventory(prev => [...prev, currentDrop]);
      setUser(prev => ({ ...prev, dailyDropClaimed: true, lastDropDate: new Date().toISOString().split('T')[0] }));
    }
  }, [currentDrop]);

  const addToInventory = useCallback((obj: Object3D) => {
    setInventory(prev => [...prev, obj]);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      return next;
    });
  }, []);

  // Set dark mode on mount
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <AppContext.Provider value={{
      user, inventory, spaces, currentDrop, theme,
      setUser, completeOnboarding, claimDailyDrop, addToInventory, toggleTheme,
    }}>
      {children}
    </AppContext.Provider>
  );
};
