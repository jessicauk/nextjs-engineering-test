import { useEffect, useRef, useCallback } from "react";
import { getAllBanks } from "@/http-service";
import BankItem from "../bank-item";
import { useAppStore } from "@/store";
import useStore from "@/store/useStore";

export default function BankList() {
  const isMounted = useRef(false);

  const filteredAndSortBanks = useStore(
    useAppStore,
    (state) => state.filteredAndSortBanks
  );
  const banks = useStore(useAppStore, (state) => state.banks);
  const { setFilteredAndSortBanks, setBanks } = useAppStore((state) => ({
    setFilteredAndSortBanks: state.setFilteredAndSortBanks,
    setBanks: state.setBanks,
  }));

  useEffect(() => {
    const getAllBanksAsync = async () => {
      isMounted.current = true;
      const banksResult = await getAllBanks();
      setBanks(banksResult);
      setFilteredAndSortBanks(banksResult);
    };
    if (!filteredAndSortBanks && !isMounted.current) {
      getAllBanksAsync();
    }
  }, [setBanks, setFilteredAndSortBanks, filteredAndSortBanks]);

  const onDelete = useCallback(
    (bankName: string) => {
      const newBanks =
        banks?.filter((bank) => bank.bankName !== bankName) ?? [];
      setBanks(newBanks);
      setFilteredAndSortBanks(newBanks);
    },
    [banks, setBanks, setFilteredAndSortBanks]
  );

  useEffect(() => {
    useAppStore.persist.rehydrate();
  }, []);
  return (
    <div className="flex min-h-screen flex-col md:flex-row md:flex-wrap md:justify-center items-center justify-between gap-10 my-10">
      {Array.isArray(filteredAndSortBanks) &&
        filteredAndSortBanks.map((bank) => (
          <BankItem key={bank.bankName} bank={bank} onDelete={onDelete} />
        ))}
    </div>
  );
}
