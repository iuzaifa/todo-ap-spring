import { useState } from "react";
import type { CreateTask } from "../../utils/taskApi";
import { createTaskApi } from "../../utils/taskApi"
import {toast} from "react-toastify"

interface CreateTaskProps {
  onClose: () => void;
}


export const CreateTaskModel = ({ onClose }: CreateTaskProps) => {

    const [addNewTask, setAddNewTask] = useState<CreateTask>({
        title: "",
        description: "",
        priority: "LOW",
        status: "PENDING",
        startDate: "",
        endDate: "",
        active: false,
    });

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAddNewTask((prev) => ({
        ...prev,
        [name]: name === "active" ? value === "true" : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
          if (!addNewTask.title.trim()) {
            toast.error("Title is required");
            return;
        }

        // Description validation
        if (addNewTask.description.trim().length < 20) {
            toast.error("Description should be at least 20 characters");
            return;
        }

        // Date validation
        if (!addNewTask.startDate || !addNewTask.endDate) {
            toast.error("Start and End dates are required");
            return;
        }
        if (new Date(addNewTask.startDate) > new Date(addNewTask.endDate)) {
            toast.error("End date must be after start date");
            return;
        }

        // Priority & Status validation
        if (!addNewTask.priority) {
            toast.error("Priority is required");
            return;
        }
        if (!addNewTask.status) {
            toast.error("Status is required");
            return;
        }
        try {
            
            await createTaskApi(addNewTask);
            toast.success("Task Added Successfully!")
            onClose();
        } catch (err) {
            toast.error("Faild to add new task" + err)
        }
    };

  return (
    <>
        <div className="max-w-4xl mx-auto bg-white p-4 border border-slate-400 rounded-lg">
            <div className="header px-4 py-2">
                <h2 className="text-2xl font-bold text-slate-800">Create New Task</h2>
                <p className="text-xs text-slate-500">Creating new task all fields are required!</p>
            </div>
            

            <form onSubmit={handleSubmit} className="p-4" >
                <div className="flex items-center gap-3">
                    <input  type="text"
                        name="title"
                        value={addNewTask.title}
                        onChange={handleChange}
                        className="border border-slate-200 w-full text-sm p-2.5 outline-emerald-600 " placeholder="Add New Task Title"/>
                </div>
                <div className="flex items-center mt-3">
                    <textarea
                        name="description"
                        value={addNewTask.description}
                        onChange={handleChange}
                        className="border border-slate-200 w-full text-sm p-2.5 outline-emerald-600" cols={3} rows={5} placeholder="Task Description should be under 255 characters"/>
                </div>

                <div className="flex items-center gap-3 mt-3">
                    <label className="text-nowrap w-48">Priority</label>
                    <select
                            name="priority"
                            onChange={handleChange}
                            className="border border-slate-200 w-full text-sm p-2.5 outline-emerald-600 ">
                        <option value="">Select Priority</option>
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>
                    
                    <label className="text-nowrap w-72"> Status </label>
                     <select
                        name="status"
                        onChange={handleChange}
                        className="border border-slate-200 w-full text-sm p-2.5 outline-emerald-600 "
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

                <div className="flex items-center gap-3 mt-3">
                    <label className="text-nowrap w-48">Start Date</label>
                    <input  type="date"
                        name="startDate"
                        value={addNewTask.startDate}
                        onChange={handleChange} 
                        className="border border-slate-200 w-full text-sm p-2.5 outline-emerald-600 " placeholder="Add New Task Title"/>
                    
                    <label className="text-nowrap w-72">Start Date</label>
                    <input type="date"
                        name="endDate"
                        value={addNewTask.endDate}
                        onChange={handleChange} className="border border-slate-200 w-full text-sm p-2.5 outline-emerald-600 " placeholder="Add New Task Title"/>
                </div>
                <div className="flex items-center gap-3 mt-3">
                   <label className="text-nowrap w-72">Current Task </label>
                   <select
                    name="active"
                    value={String(addNewTask.active)}
                    onChange={handleChange}
                    className="border w-96 border-slate-200 text-sm p-2.5 outline-emerald-600 "
                    >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                    </select>
                </div>

                 <div className="border-t border-slate-200  gap-5 flex px-5 py-5 mt-4 flex-end">
                    <button  onClick={onClose} className="bg-gray-300 text-gray-700 py-2 px-4">Close</button>
                    <button  type="submit"  className="bg-emerald-600 text-white py-2 px-4">Save Changes</button>
                </div>
            </form>


           

        </div>

    
    </>

  );
};
