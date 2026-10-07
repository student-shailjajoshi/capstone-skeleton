type ProgressData = {
  projectName: string;
  completedTasks: number;
  totalTasks: number;
  percentage: number;
  status: string;
};

export default function ProgressCard({
  data,
}: {
  data: ProgressData;
}) {
  return (
    <div className="mt-4 max-w-md rounded-2xl border p-6 shadow-sm">
      <p className="text-sm text-gray-500">Project Progress</p>

      <h2 className="mt-1 text-xl font-semibold">
        {data.projectName}
      </h2>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span>Progress</span>
          <span>{data.percentage}%</span>
        </div>

        <div className="h-3 rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-black"
            style={{ width: `${data.percentage}%` }}
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-gray-100 p-3">
          <p className="text-gray-500">Completed</p>
          <p className="text-lg font-semibold">
            {data.completedTasks}
          </p>
        </div>

        <div className="rounded-lg bg-gray-100 p-3">
          <p className="text-gray-500">Total</p>
          <p className="text-lg font-semibold">
            {data.totalTasks}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg border p-3">
        <p className="text-sm text-gray-500">Status</p>
        <p className="font-semibold">{data.status}</p>
      </div>
    </div>
  );
}