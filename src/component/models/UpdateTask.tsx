// import { useEffect, useState } from "react";
// import type { CreateTask, TaskResponse } from "../../utils/taskApi";
// import api from "../../api/api";
// import { toast } from "react-toastify";

// interface UpdateTaskModelProps {
//   onClose: () => void;
//   task: TaskResponse | null;
// }

// const emptyForm: CreateTask = {
//   title: "",
//   description: "",
//   priority: "",
//   status: "",
//   startDate: "",
//   endDate: "",
//   active: false,
// };

// export const UpdateTaskModel = ({ task, onClose }: UpdateTaskModelProps) => {
//   const [form, setForm] = useState<CreateTask>(emptyForm);
//   useEffect(() => {
//     if (!task) return;

//     setForm({
//       title: task.title || "",
//       description: task.description || "",
//       priority: task.priority || "",
//       status: task.status || "",
//       startDate: task.startDate || "",
//       endDate: task.endDate || "",
//       active: task.active ?? false,
//     });
//   }, [task?.id]);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: name === "active" ? value === "true" : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!task) return;

//     if (!form.title.trim()) {
//       toast.error("Title is required");
//       return;
//     }

//     if (form.description.trim().length < 20) {
//       toast.error("Description should be at least 20 characters");
//       return;
//     }

//     if (!form.startDate || !form.endDate) {
//       toast.error("Start and End dates are required");
//       return;
//     }

//     if (new Date(form.startDate) > new Date(form.endDate)) {
//       toast.error("End date must be after start date");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       await api.put(`/tasks/update/${task.id}`, form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       toast.success("Task Updated Successfully!");
//       onClose();
//     } catch (err) {
//       toast.error("Failed to update task");
//       console.error(err);
//     }
//   };

//   if (!task) return null;

//   return (
//     <div className="max-w-4xl mx-auto rounded-lg border border-slate-300 bg-white p-4">
//       <div className="px-4 py-2">
//         <h2 className="text-2xl font-bold text-slate-800">Update Task</h2>
//         <p className="text-xs text-slate-500">Update your task information</p>
//       </div>

//       <form onSubmit={handleSubmit} className="p-4">
//         {/* title */}
//         <div className="flex items-center gap-3">
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
//             placeholder="Task Title"
//           />
//         </div>

//         {/* description */}
//         <div className="mt-3 flex items-center">
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
//             rows={5}
//             placeholder="Task Description"
//           />
//         </div>

//         {/* priority + status */}
//         <div className="mt-3 flex items-center gap-3">
//           <label className="w-48 text-nowrap">Priority</label>

//           <select
//             name="priority"
//             value={form.priority}
//             onChange={handleChange}
//             className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
//           >
//             <option value="">Select Priority</option>
//             <option value="LOW">Low</option>
//             <option value="MEDIUM">Medium</option>
//             <option value="HIGH">High</option>
//           </select>

//           <label className="w-72 text-nowrap">Status</label>

//           <select
//             name="status"
//             value={form.status}
//             onChange={handleChange}
//             className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
//           >
//             <option value="">Select Status</option>
//             <option value="PENDING">Pending</option>
//             <option value="ACTIVE">Active</option>
//             <option value="COMPLETED">Completed</option>
//             <option value="NOT_INITIATED">Not Initiated</option>
//             <option value="READY_INITIATED">Ready Initiated</option>
//             <option value="REJECTED">Rejected</option>
//           </select>
//         </div>

//         {/* dates */}
//         <div className="mt-3 flex items-center gap-3">
//           <label className="w-48 text-nowrap">Start Date</label>

//           <input
//             type="date"
//             name="startDate"
//             value={form.startDate}
//             onChange={handleChange}
//             className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
//           />

//           <label className="w-72 text-nowrap">End Date</label>

//           <input
//             type="date"
//             name="endDate"
//             value={form.endDate}
//             onChange={handleChange}
//             className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
//           />
//         </div>

//         {/* active */}
//         <div className="mt-3 flex items-center gap-3">
//           <label className="w-72 text-nowrap">Current Task</label>

//           <select
//             name="active"
//             value={String(form.active)}
//             onChange={handleChange}
//             className="w-96 border border-slate-200 p-2.5 text-sm outline-emerald-600"
//           >
//             <option value="true">Active</option>
//             <option value="false">Inactive</option>
//           </select>
//         </div>

//         {/* buttons */}
//         <div className="mt-4 flex gap-5 border-t border-slate-200 px-5 py-5">
//           <button
//             type="button"
//             onClick={onClose}
//             className="bg-gray-300 px-4 py-2 text-gray-700"
//           >
//             Close
//           </button>

//           <button type="submit" className="bg-emerald-600 px-4 py-2 text-white">
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

import { useState, useMemo } from "react";
import type { CreateTask, TaskResponse } from "../../utils/taskApi";
import api from "../../api/api";
import { toast } from "react-toastify";

interface UpdateTaskModelProps {
  onClose: () => void;
  task: TaskResponse | null;
}

const emptyForm: CreateTask = {
  title: "",
  description: "",
  priority: "",
  status: "",
  startDate: "",
  endDate: "",
  active: false,
};

export const UpdateTaskModel = ({ task, onClose }: UpdateTaskModelProps) => {
  const [form, setForm] = useState<CreateTask>(
    task
      ? {
          title: task.title || "",
          description: task.description || "",
          priority: task.priority || "",
          status: task.status || "",
          startDate: task.startDate || "",
          endDate: task.endDate || "",
          active: task.active ?? false,
        }
      : emptyForm
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "active" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) return;

    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (form.description.trim().length < 20) {
      toast.error("Description should be at least 20 characters");
      return;
    }
    if (!form.startDate || !form.endDate) {
      toast.error("Start and End dates are required");
      return;
    }
    if (new Date(form.startDate) > new Date(form.endDate)) {
      toast.error("End date must be after start date");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await api.put(`/tasks/update/${task.id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Task Updated Successfully!");
      onClose();
    } catch (err) {
      toast.error("Failed to update task");
      console.error(err);
    }
  };

  if (!task) return null;

  return (
    <div className="max-w-4xl mx-auto rounded-lg border border-slate-300 bg-white p-4">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold text-slate-800">Update Task</h2>
        <p className="text-xs text-slate-500">Update your task information</p>
      </div>

      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
            placeholder="Task Title"
          />
        </div>

        <div className="mt-3 flex items-center">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
            rows={5}
            placeholder="Task Description"
          />
        </div>

        <div className="mt-3 flex items-center gap-3">
          <label className="w-48 text-nowrap">Priority</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
          >
            <option value="">Select Priority</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>

          <label className="w-72 text-nowrap">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
          >
            <option value="">Select Status</option>
            <option value="PENDING">Pending</option>
            <option value="ACTIVE">Active</option>
            <option value="COMPLETED">Completed</option>
            <option value="NOT_INITIATED">Not Initiated</option>
            <option value="READY_INITIATED">Ready Initiated</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <label className="w-48 text-nowrap">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
          />
          <label className="w-72 text-nowrap">End Date</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="w-full border border-slate-200 p-2.5 text-sm outline-emerald-600"
          />
        </div>

        <div className="mt-3 flex items-center gap-3">
          <label className="w-72 text-nowrap">Current Task</label>
          <select
            name="active"
            value={String(form.active)}
            onChange={handleChange}
            className="w-96 border border-slate-200 p-2.5 text-sm outline-emerald-600"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <div className="mt-4 flex gap-5 border-t border-slate-200 px-5 py-5">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 text-gray-700"
          >
            Close
          </button>
          <button type="submit" className="bg-emerald-600 px-4 py-2 text-white">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

