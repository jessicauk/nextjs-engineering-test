import { Bank } from "@/app/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";

interface BankItemProps {
  bank: Bank;
  onDelete: (bankName: string) => void;
}

export default function BankItem({ bank, onDelete }: BankItemProps) {
  const { bankName, url, description, age } = bank;
  return (
    <div
      key={bankName}
      className="flex flex-col items-center justify-between p-8 border border-gray-200 rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold">{bankName}</h2>
      <DeleteIcon onClick={() => onDelete(bankName)} />
      <p>{description}</p>
      <p>{age}</p>
      <Image src={url} alt="bank" width={100} height={100} />
    </div>
  );
}
