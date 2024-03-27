import { useCallback, useEffect } from "react";
import { TextField } from "@mui/material";
import { useAppStore } from "@/store";
import useStore from "@/store/useStore";

export default function Search() {
  const banks = useStore(useAppStore, (state) => state.banks);
  const search = useStore(useAppStore, (state) => state.search);
  const { setFilteredAndSortBanks, setSearch } = useAppStore((state) => ({
    setFilteredAndSortBanks: state.setFilteredAndSortBanks,
    setSearch: state.setSearch,
  }));

  useEffect(() => {
    const searchBanks = banks?.filter((bank) =>
      bank.bankName.toLowerCase().includes((search ?? "").toLowerCase())
    );
    setFilteredAndSortBanks(searchBanks ?? []);
  }, [search]);

  return (
    <div className="flex flex-col items-center justify-between p-2 w-full">
      <TextField
        label="Search"
        placeholder="Search"
        variant="outlined"
        value={search ?? ""}
        className="w-full text-white border-white custom-outline"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
