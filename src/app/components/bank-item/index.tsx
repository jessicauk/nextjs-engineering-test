import { useState } from "react";
import { Bank } from "@/app/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import DialogResponsive from "../dialog";

interface BankItemProps {
  bank: Bank;
  onDelete: (bankName: string) => void;
}

export default function BankItem({ bank, onDelete }: BankItemProps) {
  const { bankName, url, description, age } = bank;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        key={bankName}
        className="flex flex-col items-center justify-between p-8 border border-gray-200 rounded-md size-96"
      >
        <div className="w-full flex flex-row justify-between content-center items-center my-4">
          <h2 className="text-xl font-bold">{bankName}</h2>
          <DeleteIcon
            onClick={() => setOpen(true)}
            className="hover:cursor-pointer hover:text-red-500"
          />
        </div>
        <p>{description}</p>
        <p>{age} años</p>
        <Image src={url} alt="bank" width={100} height={100} />
      </div>
      <DialogResponsive
        title={"Bank: " + bankName}
        open={open}
        setOpen={setOpen}
        onAccept={() => onDelete(bankName)}
      />
    </>
  );
}
