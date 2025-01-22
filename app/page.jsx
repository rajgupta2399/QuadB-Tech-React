"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDown, X } from "lucide-react";
import {
  addTask,
  updateTaskPriority,
  toggleTaskCompletion,
} from "@/store/tasksSlice";
import { Repeat } from "lucide-react";
import { Bell } from "lucide-react";

const Home = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() && taskDate) {
      dispatch(
        addTask({
          id: Date.now(),
          name: taskName,
          date: taskDate,
          priority,
          completed: false,
        })
      );
      setTaskName("");
      setTaskDate("");
    }
  };

  const handleUpdateTask = (id, updatedTask) => {
    dispatch(updateTaskPriority({ id, priority: updatedTask.priority }));
    dispatch(toggleTaskCompletion(id)); // Update as needed
    setSelectedTask(null); // Close the sidebar after update
  };

  const getPriorityStars = (priority) => {
    if (priority === "High") return "★★★";
    if (priority === "Medium") return "★★☆";
    return "★☆☆";
  };

  return (
    <div
      className={`sm:px-10 px-2 sm:py-2 py-4 relative transition-all ${
        selectedTask ? "mr-80" : ""
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center mb-6  ${
          selectedTask ? "hidden sm:block" : ""
        }`}
      >
        <h1 className="text-2xl font-bold dark:text-white">To-Do</h1>
        <ChevronDown className="ml-2 text-gray-500 dark:text-gray-400" />
      </div>

      {/* Input Section */}
      <div
        className={`bg-[#eaf2eb] dark:bg-[#2f3630] rounded-lg p-6 shadow-md transition-colors ${
          selectedTask ? "hidden sm:block" : ""
        }`}
      >
        {/* Task Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add a task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-[#2f3630] dark:text-white bg-stone-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          />
        </div>

        {/* Task Options */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="flex items-center gap-4">
            {/* Icons */}
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <Bell className="h-5 w-5 text-yellow-400 dark:text-yellow-300" />
              <Repeat className="h-5 w-5 text-blue-400 dark:text-blue-300" />
            </div>

            {/* Date Picker */}
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="p-3 rounded-md border dark:text-stone-100 bg-white dark:bg-[#2f3630] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />

            {/* Priority Dropdown */}
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="p-3 rounded-md border focus:outline-none dark:text-stone-100 bg-white dark:bg-[#2f3630] focus:ring-2 focus:ring-purple-500 transition-colors text-black"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Add Task Button */}
          <button
            onClick={handleAddTask}
            className="bg-green-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-green-600 dark:hover:bg-green-400 dark:bg-green-600 transition-all"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div>
        {/* Incomplete Tasks */}
        <div>
          {/* <h2 className="text-xl font-bold mb-4">Pending Tasks</h2> */}
          <ul
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 ${
              selectedTask ? "hidden sm:block" : ""
            }`}
          >
            {[...tasks]
              .filter((task) => !task.completed) // Show only incomplete tasks
              .sort((a, b) =>
                a.completed === b.completed ? 0 : a.completed ? 1 : -1
              ) // Sort tasks
              .map((task) => (
                <li
                  key={task.id}
                  className={`p-4 rounded-lg shadow-sm flex flex-col gap-2 cursor-pointer mb-2 ${
                    task.completed
                      ? "bg-gray-200 dark:bg-[#232323]"
                      : "bg-slate-200 dark:bg-[#232323]"
                  }`}
                  onClick={(e) =>
                    e.target.type !== "checkbox" && setSelectedTask(task)
                  }
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch(toggleTaskCompletion(task.id))}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <h3
                        className={`text-lg font-semibold ${
                          task.completed
                            ? "line-through text-gray-500 dark:text-gray-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {task.name}
                      </h3>
                    </div>
                    <span className="text-sm text-yellow-500">
                      {getPriorityStars(task.priority)}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Completed Tasks */}
        <div className="mt-8">
          <h2
            className={`text-xl font-bold mb-4 ${
              selectedTask ? "hidden sm:block" : ""
            }`}
          >
            Completed Tasks
          </h2>
          <ul
            className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 ${
              selectedTask ? "hidden sm:block" : ""
            }`}
          >
            {[...tasks]
              .filter((task) => task.completed) // Show only completed tasks
              .sort((a, b) =>
                a.completed === b.completed ? 0 : a.completed ? 1 : -1
              ) // Sort tasks
              .map((task) => (
                <li
                  key={task.id}
                  className={`p-4 rounded-lg shadow-sm flex flex-col gap-2 cursor-pointer mb-2 ${
                    task.completed
                      ? "bg-gray-200 dark:bg-[#232323]"
                      : "bg-slate-200 dark:bg-[#232323]"
                  }`}
                  onClick={(e) =>
                    e.target.type !== "checkbox" && setSelectedTask(task)
                  }
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch(toggleTaskCompletion(task.id))}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <h3
                        className={`text-lg font-semibold ${
                          task.completed
                            ? "line-through text-gray-500 dark:text-gray-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {task.name}
                      </h3>
                    </div>
                    <span className="text-sm text-yellow-500">
                      {getPriorityStars(task.priority)}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      {selectedTask && (
        <div
          className="fixed top-0 right-0 h-full  dark:bg-[#232323] bg-white shadow-lg p-6 w-80 transition-transform duration-300 ease-in-out transform translate-x-full"
          style={{
            transform: selectedTask ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <button
            onClick={() => setSelectedTask(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            <X />
          </button>
          <h2 className="text-xl font-bold mb-4 dark:text-white">Edit Task</h2>
          <input
            type="text"
            value={selectedTask.name}
            onChange={(e) =>
              setSelectedTask({ ...selectedTask, name: e.target.value })
            }
            className="w-full p-3 mb-4 rounded-md border border-gray-300 text-black dark:text-stone-100 bg-white dark:bg-[#2f3630] "
          />
          <input
            type="date"
            value={selectedTask.date}
            onChange={(e) =>
              setSelectedTask({ ...selectedTask, date: e.target.value })
            }
            className="w-full p-3 mb-4 rounded-md border border-gray-300 text-black dark:text-stone-100 bg-white dark:bg-[#2f3630] "
          />
          <select
            value={selectedTask.priority}
            onChange={(e) =>
              setSelectedTask({ ...selectedTask, priority: e.target.value })
            }
            className="w-full p-3 mb-4 rounded-md border border-gray-300 text-black dark:text-stone-100 bg-white dark:bg-[#2f3630] "
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button
            onClick={() => handleUpdateTask(selectedTask.id, selectedTask)}
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
