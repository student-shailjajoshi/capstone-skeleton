import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import { studentProgressTool } from "../../lib/tools/student-progress";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),

    system: `
You are a student project progress assistant.

Whenever the user gives:
- a project name
- completed task count
- total task count

you MUST use the studentProgressTool.

Do not calculate the percentage yourself.
Use the tool and return its result.
`,

    messages: await convertToModelMessages(messages),

    tools: {
      studentProgressTool,
    },

    toolChoice: "required",
  });

  return result.toUIMessageStreamResponse();
}