// store/index.ts
import { create } from 'zustand'

interface AppState {
  currentSection: string
  setSection: (section: string) => void
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useStore = create<AppState>((set) => ({
  currentSection: 'home',
  setSection: (section) => set({ currentSection: section }),
  theme: 'dark',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
}))