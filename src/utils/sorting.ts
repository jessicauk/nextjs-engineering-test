import { Bank } from "@/app/interfaces";

export function sortBanks(banks: Bank[], sort: string) {
  return banks.sort((a, b) => {
    if (sort === "asc") {
      return a.age - b.age;
    }
    return b.age - a.age;
  });
}
