"use client";

import SmartButton from "@/components/SmartButton";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Smart Button Demo
        </h1>

        <p className="mt-3 text-gray-500">
          FE-AA1: Motion & State Micro-interactions
        </p>

        <div className="mt-12 flex justify-center">
          <SmartButton />
        </div>

        <div className="mt-10 rounded-xl border p-6">
          <h2 className="text-xl font-semibold">
            Button States
          </h2>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Idle</li>
            <li>• Hover / Focus</li>
            <li>• Loading</li>
            <li>• Success</li>
            <li>• Error</li>
          </ul>
        </div>
      </div>
    </main>
  );
}