import { Bank } from "@/app/interfaces";
import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { sortBanks } from "@/utils/sorting";

export interface AppState {
  banks: null | Bank[];
  filteredAndSortBanks: null | Bank[];
  search: string;
  setBanks: (banks: Bank[]) => void;
  setFilteredAndSortBanks: (banks: Bank[]) => void;
  sortBanks: (banks: Bank[], type: string) => void;
  setSearch: (search: string) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        banks: null,
        filteredAndSortBanks: null,
        search: "",
        setBanks: (banks: Bank[]) => set({ banks }),
        setFilteredAndSortBanks: (filteredAndSortBanks: Bank[]) =>
          set({ filteredAndSortBanks }),
        sortBanks: (banks: Bank[], type: string) => {
          const sortedBanks = sortBanks(banks, type);
          set({ banks: sortedBanks });
        },
        setSearch: (search: string) => set({ search }),
      }),
      {
        name: "app-storage",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          banks: state.banks,
          filteredAndSortBanks: state.filteredAndSortBanks,
          search: state.search,
        }),
        skipHydration: true,
      }
    )
  )
);
