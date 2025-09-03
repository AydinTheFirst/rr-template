import { create } from "zustand";

import type { User } from "~/types";

interface AuthState {
  setToken: (token: null | string) => void;
  setUser: (user: null | User) => void;
  token: null | string;
  user: null | User;
}

export const useAuthStore = create<AuthState>((set) => ({
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  token: null,
  user: null,
}));
