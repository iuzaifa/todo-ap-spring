import { useState, useEffect } from "react";
import {
  MdTrendingUp,
  MdAssignmentTurnedIn,
  MdPendingActions,
  MdAccessTime,
} from "react-icons/md";
import  {getAnalytics, getRecentActivity} from "../utils/taskApi.ts"
import {toast} from "react-toastify"
import type {RecentActivity} from "../utils/taskApi.ts"

const Analytics = () => {
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);

  const [stats, setStats] = useState({
    totalTasks: 0,
    completed: 0,
    pending: 0,
    productivity: 0,
  });
 
    useEffect(() => {
    const fetchRecentTasks = async () => {
      try {
        const data = await getRecentActivity();
        setRecentActivity(data);
      } catch (err) {
        console.error("Full error object:"+ err);
      } 
    };
    fetchRecentTasks();
  }, []);


  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await getAnalytics(); // call backend
        setStats(data);  // eror
      } catch (err) {
        // console.error(err.response?.data || err.message);
        toast.error("Failed to fetch analytics" + err);
      }
    };

    fetchAnalytics();
  }, []);
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
            {stats.totalTasks}
          </h1>

          <p className="mt-2 text-sm text-emerald-600">
              Tasks completed
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
            {stats.completed}
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
            {stats.pending}
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
            {stats.productivity.toFixed(0)}%
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

       
        
       
       <div className="overflow-hidden rounded-xl border border-slate-100 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-3.5">Activity</th>
                  <th scope="col" className="px-6 py-3.5  w-56">Status</th>
                  <th scope="col" className="px-6 py-3.5 text-nowrap w-56">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[...recentActivity].reverse().map((data, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{data.title}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{data.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-green-700 bg-green-50">
                        {data.status}
                      </span>
                    </td>
                   <td className="px-6 py-4 whitespace-nowrap text-slate-500 font-medium">
                      {data.updatedAt !== null
                        ? new Date(data.updatedAt).toLocaleDateString("en-IN", {
                            timeZone: "Asia/Kolkata",
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "No Date"}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

       
        {/* <div className="space-y-4">
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
        </div> */}


      </div>
    </div>
  );
};

export default Analytics;