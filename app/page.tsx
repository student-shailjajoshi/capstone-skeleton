"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ProgressCard from "@/components/ProgressCard";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    await sendMessage({ text: input });
    setInput("");
  }

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Student Progress Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Ask the AI to calculate your project progress.
        </p>

        <div className="mt-8 space-y-6">
          {messages.map((message) => (
            <div key={message.id}>
              <p className="mb-2 font-semibold">
                {message.role === "user" ? "You" : "AI"}
              </p>

              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return (
                    <p
                      key={index}
                      className="whitespace-pre-wrap"
                    >
                      {part.text}
                    </p>
                  );
                }

                if (
                  part.type === "tool-studentProgressTool"
                ) {
                  if (part.state === "output-available") {
                    return (
                      <ProgressCard
                        key={index}
                        data={part.output as {
                          projectName: string;
                          completedTasks: number;
                          totalTasks: number;
                          percentage: number;
                          status: string;
                        }}
                      />
                    );
                  }

                  if (part.state === "output-error") {
                    return (
                      <div
                        key={index}
                        className="mt-4 rounded-lg border border-red-400 p-4 text-red-600"
                      >
                        Tool execution failed.
                      </div>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="mt-4 rounded-lg border p-4"
                    >
                      Running progress tool...
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex gap-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your project progress..."
            className="flex-1 rounded-lg border px-4 py-3"
          />

          <button
            type="submit"
            disabled={status === "streaming"}
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}