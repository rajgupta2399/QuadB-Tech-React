import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: typeof window !== "undefined" && localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTaskPriority: (state, action) => {
      const { id, priority } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.priority = priority;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed; // Toggle the completed status
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTaskPriority,
  toggleTaskCompletion,
} = tasksSlice.actions;
export default tasksSlice.reducer;
