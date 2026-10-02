type HealthData = {
  id: number;
  title: string;
  completed: boolean;
};

export default async function HealthPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch health data");
  }

  const data: HealthData = await response.json();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Health Check</h1>

      <p className="mt-4 text-gray-600">
        Data successfully fetched from the API.
      </p>

      <div className="mt-6 rounded-lg border p-6">
        <p>
          <strong>ID:</strong> {data.id}
        </p>

        <p className="mt-2">
          <strong>Title:</strong> {data.title}
        </p>

        <p className="mt-2">
          <strong>Completed:</strong>{" "}
          {data.completed ? "Yes" : "No"}
        </p>
      </div>
    </main>
  );
}