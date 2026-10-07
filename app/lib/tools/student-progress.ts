import { tool } from "ai";
import { z } from "zod";

export const studentProgressTool = tool({
  description:
    "Calculate a student's project progress and return structured progress data.",

  inputSchema: z.object({
    projectName: z.string(),
    completedTasks: z.number().int().min(0),
    totalTasks: z.number().int().positive(),
  }),

  execute: async ({ projectName, completedTasks, totalTasks }) => {
    if (completedTasks > totalTasks) {
      throw new Error(
        "Completed tasks cannot be greater than total tasks."
      );
    }

    const percentage = Math.round(
      (completedTasks / totalTasks) * 100
    );

    return {
      projectName,
      completedTasks,
      totalTasks,
      percentage,
      status:
        percentage === 100
          ? "Complete"
          : percentage >= 70
            ? "On Track"
            : percentage >= 40
              ? "In Progress"
              : "Needs Attention",
    };
  },
});