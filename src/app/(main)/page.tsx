"use client";

import { useAuthStore } from "@/store/auth.store";

export default function HomePage() {
  const token = useAuthStore((state) => state.token);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Restaurant App</h1>

      <p className="mt-5">Login berhasil 🎉</p>

      <div className="mt-5">
        <h2 className="font-semibold">Token:</h2>

        <p className="break-all text-sm text-zinc-500">{token}</p>
      </div>
    </div>
  );
}
