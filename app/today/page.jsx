"use client";

import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
  // Get tasks from Redux store
  const tasks = useSelector((state) => state.tasks.tasks);

  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  // Filter tasks that are due today
  const todaysTasks = tasks.filter((task) => task.date === today);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Today Tasks</h1>

      {todaysTasks.length === 0 ? (
        <p>No tasks for today</p>
      ) : (
        <ul>
          {todaysTasks.map((task) => (
            <li key={task.id} className="p-2 mb-2 border-b">
              <span className="font-semibold">{task.name}</span>
              <p className="text-sm text-gray-500">Due: {task.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Index;
