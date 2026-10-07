"use client";

import { useState } from "react";

type ButtonState = "idle" | "loading" | "success" | "error";

export default function SmartButton() {
  const [state, setState] = useState<ButtonState>("idle");

  const handleClick = async () => {
    setState("loading");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isSuccess = Math.random() > 0.2;

    setState(isSuccess ? "success" : "error");

    setTimeout(() => {
      setState("idle");
    }, 2000);
  };

  const getLabel = () => {
    if (state === "loading") return "Sending...";
    if (state === "success") return "✓ Sent Successfully";
    if (state === "error") return "✕ Failed — Retry";
    return "Send Message";
  };

  return (
    <button
      onClick={handleClick}
      disabled={state === "loading"}
      aria-live="polite"
      className={`
        rounded-xl px-6 py-3 font-semibold text-white
        transition-all duration-200
        focus:outline-none focus:ring-4
        ${
          state === "success"
            ? "bg-green-600 focus:ring-green-200"
            : state === "error"
              ? "bg-red-600 focus:ring-red-200"
              : "bg-black focus:ring-gray-300"
        }
        ${
          state === "loading"
            ? "cursor-wait opacity-70"
            : "hover:scale-105 active:scale-95"
        }
      `}
    >
      {state === "loading" && (
        <span className="mr-2 inline-block animate-spin">◌</span>
      )}

      {getLabel()}
    </button>
  );
}