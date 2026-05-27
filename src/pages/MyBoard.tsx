// import {
//   MdAddCircle,
//   MdMoreHoriz,
//   MdCheckCircle,
// } from "react-icons/md";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import {useState, useEffect} from "react"
// import {getAllTasks, deleteTaskApi} from "../utils/taskApi"
// import  type {TaskResponse} from "../utils/taskApi"
// import { AxiosError } from "axios";
// import { LuCalendarClock } from "react-icons/lu";
// import { CreateTaskModel } from "../component/models/CreateTask";
// import { FaRegEdit } from "react-icons/fa";
// import { MdOutlineDelete } from "react-icons/md";
// import {toast} from "react-toastify"
// import {UpdateTaskModel} from "../component/models/UpdateTask"




// const MyBoard = () => {
//   const [tasks, setTasks] = useState<TaskResponse[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [openModel, setOpenModel] = useState<boolean>(false);
//   const [isOpenDropdown, setIsOpenDropdown ] = useState<number | null>(null);
//   const [isOpenUpdateModel, setIsOpenUpdateModel] = useState<number | null>(null);
//   const [selectedTask, setSelectedTask] = useState<TaskResponse | null>(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         setIsLoading(true);
//         const data = await getAllTasks();
//         setTasks(data);
//         // toast.success("Successfully fetched tasks");
//       } catch (err) {
//         const error = err as AxiosError<{ message?: string }>;
//         console.error("Full error object:", error);
//         // toast.error(backendMessage);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchTasks();
//   }, []);


//     const handleDelete = async (id: number) => {
//       try {
//         await deleteTaskApi(id);
//         setTasks((prev) => prev.filter((task) => task.id !== id));
//         toast.success("Task deleted");
//       } catch (error) {
//         toast.error("Delete failed" + error); 
//       }
//     };
//   return (
//     <>
//       <div className="bg-slate-100 p-6 h-screen " >
//       {/* Header */}
//         <div className="mb-8 flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-slate-900">
//               My Board
//             </h1>

//             <p className="mt-1 text-sm text-slate-500">
//               Manage your daily workflow and tasks
//             </p>
//           </div>

//            <button
//               onClick={() => setOpenModel(true)}
//               type="button"
//               className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
//               aria-haspopup="dialog"
//               aria-expanded={openModel}
//             >
//             <MdAddCircle size={22} />
//             Create Task
//           </button>
//         </div>

//         {/* Task Grid */}
//         {isLoading ? (<p className="text-slate-400">Loading your synchronized systems...</p>) :
//         (<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {tasks.map((task, index) => (
//             <div
//               key={index}
//               className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//             >
//               {/* Top */}
//               <div className="mb-5 flex items-start justify-between">
//                 <div>
//                   <h2 className="text-lg font-semibold text-slate-900">
//                     {task.title}
//                   </h2>

//                   <p className="mt-1 text-sm text-slate-500">
//                     {task.description}
//                   </p>
//                 </div>

//                 <div className="relative inline-block">
//                   <button
//                     onClick={() =>
//                       setIsOpenDropdown(isOpenDropdown === task.id ? null : task.id)
//                     }
//                     className="text-slate-500 hover:text-slate-900"
//                   >
//                     <MdMoreHoriz size={22} />
//                   </button>

//                   {/* Dropdown */}
//                   {isOpenDropdown === task.id && (
//                     <div className="absolute right-0 mt-2 overflow-hidden rounded-md border border-slate-100 bg-white shadow-lg z-50">
//                       <button
//                         onClick={() => handleDelete(task.id)}
//                         className="w-full p-3 text-left text-red-600 hover:bg-red-50"
//                       >
//                         <MdOutlineDelete/>
//                       </button>

//                       <button
//                        onClick={() => {
//                           setSelectedTask(task);
//                           setIsOpenUpdateModel(task.id);
//                         }}
//                         className="w-full p-3 text-left text-blue-600 hover:bg-blue-50"
//                       >
//                         <FaRegEdit/>
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* update model */}
//                   {isOpenUpdateModel && (
//                     <div className="fixed inset-0 z-50 bg-black/70 py-5" onClick={(e) => e.stopPropagation()}>
//                       <div onClick={(e) => e.stopPropagation()}>
//                         <UpdateTaskModel
//               task={selectedTask}
//               onClose={() => setIsOpenUpdateModel(null)}
//             />
//                       </div>
//                     </div>
//                   )}

               
      
//               </div>

//               {/* Status */}
//               <div className="mb-4 flex items-center gap-2">
//                 <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
//                   {task.priority}
//                 </span>

//                 <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
//                   {task.status}
//                 </span>
//               </div>

//               {/* Footer */}
//               <div className="flex items-center justify-between border-t border-slate-100 pt-4">
//                 <div className="flex items-center gap-2 text-slate-500 text-[10px] font-semibold">
//                   <LuCalendarClock size={16} />
//                   Date : {task.startDate} to {task.endDate}
//                 </div>

//                   {task.active ? (<div className="flex items-center gap-1 text-sm font-medium text-emerald-600"> 
//                     <MdCheckCircle size={18} /> Active

//                   </div>) : (<div className="flex items-center gap-1 text-sm font-medium text-red-600"> <IoIosCloseCircleOutline size={18} /> Inactive</div>)}
//               </div>
//             </div>
//           ))}
//         </div>)}
        
//       </div>
      

//      {openModel && (
//         <div className="fixed inset-0 z-50 bg-black/70 py-5">
//           <div onClick={(e) => e.stopPropagation()}>
//             <CreateTaskModel onClose={() => setOpenModel(false)}  />
//           </div>
//         </div>
//       )}

       
//     </>
//   );
// };

// export default MyBoard;

import {
  MdAddCircle,
  MdMoreHoriz,
  MdCheckCircle,
} from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { getAllTasks, deleteTaskApi } from "../utils/taskApi";
import type { TaskResponse } from "../utils/taskApi";
import { AxiosError } from "axios";
import { LuCalendarClock } from "react-icons/lu";
import { CreateTaskModel } from "../component/models/CreateTask";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { UpdateTaskModel } from "../component/models/UpdateTask";

const MyBoard = () => {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState<number | null>(null);
  const [isOpenUpdateModel, setIsOpenUpdateModel] = useState<number | null>(null);
  const [selectedTask, setSelectedTask] = useState<TaskResponse | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const data = await getAllTasks();
        setTasks(data);
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        console.error("Full error object:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteTaskApi(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      toast.success("Task deleted");
    } catch (error) {
      toast.error("Delete failed: " + error);
    }
  };

  return (
    <>
      <div className="bg-slate-100 p-6 h-screen">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Board</h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage your daily workflow and tasks 
            </p>
          </div>
          <button
            onClick={() => setOpenModel(true)}
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
          >
            <MdAddCircle size={22} />
            Create Task
          </button>
        </div>

        {isLoading ? (
          <p className="text-slate-400">Loading your synchronized systems...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {task.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {task.description}
                    </p>
                  </div>
                  <div className="relative inline-block">
                    <button
                      onClick={() =>
                        setIsOpenDropdown(
                          isOpenDropdown === task.id ? null : task.id
                        )
                      }
                      className="text-slate-500 hover:text-slate-900"
                    >
                      <MdMoreHoriz size={22} />
                    </button>
                    {isOpenDropdown === task.id && (
                      <div className="absolute right-0 mt-2 overflow-hidden rounded-md border border-slate-100 bg-white shadow-lg z-50">
                        <button
                          onClick={() => handleDelete(task.id)}
                          className="w-full p-3 text-left text-red-600 hover:bg-red-50"
                        >
                          <MdOutlineDelete />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTask(task);
                            setIsOpenUpdateModel(task.id);
                          }}
                          className="w-full p-3 text-left text-blue-600 hover:bg-blue-50"
                        >
                          <FaRegEdit />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {task.priority}
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {task.status}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-semibold">
                    <LuCalendarClock size={16} />
                    Date: {task.startDate} to {task.endDate}
                  </div>
                  {task.active ? (
                    <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                      <MdCheckCircle size={18} /> Active
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-sm font-medium text-red-600">
                      <IoIosCloseCircleOutline size={18} /> Inactive
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {isOpenUpdateModel && (
          <div
            className="fixed inset-0 z-50 bg-black/70 py-5 flex items-center justify-center"
            onClick={() => setIsOpenUpdateModel(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <UpdateTaskModel
                task={selectedTask}
                onClose={() => setIsOpenUpdateModel(null)}
              />
            </div>
          </div>
        )}

        {openModel && (
          <div
            className="fixed inset-0 z-50 bg-black/70 py-5 flex items-center justify-center"
            onClick={() => setOpenModel(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CreateTaskModel onClose={() => setOpenModel(false)} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBoard;