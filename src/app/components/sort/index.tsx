import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useAppStore } from "@/store";
import useStore from "@/store/useStore";
import { sortBanks } from "@/utils/sorting";
import { Bank } from "@/app/interfaces";

export default function Sort() {
  const [sortBy, setSortBy] = useState("");
  const filteredAndSortBanks = useStore(
    useAppStore,
    (state) => state.filteredAndSortBanks
  );
  const setFilteredAndSortBanks = useAppStore(
    (state) => state.setFilteredAndSortBanks
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
    setFilteredAndSortBanks(
      sortBanks(filteredAndSortBanks as Bank[], event.target.value)
    );
  };
  return (
    <div className="flex flex-col items-center justify-between align-center p-8 w-full">
      <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        label="Sort by"
        onChange={handleChange}
        className="w-full"
      >
        <MenuItem value="asc">Ascendant</MenuItem>
        <MenuItem value="desc">Descendant</MenuItem>
      </Select>
    </div>
  );
}
