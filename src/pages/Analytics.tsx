import {
  MdTrendingUp,
  MdAssignmentTurnedIn,
  MdPendingActions,
  MdAccessTime,
} from "react-icons/md";

const Analytics = () => {
  return (
    <div className=" bg-slate-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Analytics Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor task performance and productivity
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        
        {/* Total Tasks */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-500">
              Total Tasks
            </h2>

            <MdTrendingUp
              size={28}
              className="text-slate-700"
            />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            124
          </h1>

          <p className="mt-2 text-sm text-emerald-600">
            +12% this week
          </p>
        </div>

        {/* Completed */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-500">
              Completed
            </h2>

            <MdAssignmentTurnedIn
              size={28}
              className="text-green-600"
            />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            87
          </h1>

          <p className="mt-2 text-sm text-green-600">
            Tasks completed
          </p>
        </div>

        {/* Pending */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-500">
              Pending
            </h2>

            <MdPendingActions
              size={28}
              className="text-yellow-500"
            />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            24
          </h1>

          <p className="mt-2 text-sm text-yellow-600">
            Waiting for action
          </p>
        </div>

        {/* Productivity */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-medium text-slate-500">
              Productivity
            </h2>

            <MdAccessTime
              size={28}
              className="text-blue-600"
            />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            92%
          </h1>

          <p className="mt-2 text-sm text-blue-600">
            Weekly efficiency
          </p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Recent Activity
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
            <div>
              <h3 className="font-medium text-slate-900">
                JWT Authentication Completed
              </h3>

              <p className="text-sm text-slate-500">
                Security implementation finished
              </p>
            </div>

            <span className="text-sm font-medium text-green-600">
              Completed
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
            <div>
              <h3 className="font-medium text-slate-900">
                Dashboard UI Updated
              </h3>

              <p className="text-sm text-slate-500">
                Added analytics widgets
              </p>
            </div>

            <span className="text-sm font-medium text-yellow-600">
              In Progress
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
            <div>
              <h3 className="font-medium text-slate-900">
                API Integration Pending
              </h3>

              <p className="text-sm text-slate-500">
                Backend connection required
              </p>
            </div>

            <span className="text-sm font-medium text-red-500">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;