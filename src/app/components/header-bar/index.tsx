import { useCallback } from "react";
import { Button } from "@mui/material";
import Search from "../search";
import Sort from "../sort";
import { useAppStore } from "@/store";
import useStore from "@/store/useStore";

export default function HeaderBar() {
  const banks = useStore(useAppStore, (state) => state.banks);
  const search = useStore(useAppStore, (state) => state.search);
  const { setFilteredAndSortBanks, setSearch } = useAppStore((state) => ({
    setFilteredAndSortBanks: state.setFilteredAndSortBanks,
    setSearch: state.setSearch,
  }));

  const reset = useCallback(() => {
    setSearch("");
    setFilteredAndSortBanks(banks ?? []);
  }, [setSearch, setFilteredAndSortBanks, banks]);
  return (
    <div className="flex flex-col md:flex-row justify-between content-center items-center w-full gap-4">
      <Search />
      <Sort />
      <Button variant="contained" onClick={reset} className="">
        Reset
      </Button>
    </div>
  );
}
