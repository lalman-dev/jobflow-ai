export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome back 👋</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border p-4">Applications</div>
        <div className="rounded-xl border p-4">Response Rate</div>
        <div className="rounded-xl border p-4">Interviews</div>
      </div>
    </div>
  );
}
