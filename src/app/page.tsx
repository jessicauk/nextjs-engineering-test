"use client";

import BankList from "./components/bank-list";
import Header from "./components/header-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen grid grid-row-template p-6 md:p-24">
      <Header />
      <BankList />
    </main>
  );
}
