'use client';

import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
  // Get tasks from Redux store
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>

      {/* Incomplete Tasks */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Incomplete Tasks</h2>
        <ul>
          {tasks
            .filter((task) => !task.completed) // Filter for incomplete tasks
            .map((task) => (
              <li key={task.id} className="p-2 mb-2 border-b">
                <span className="font-semibold">{task.name}</span>
                <p className="text-sm text-gray-500">Due: {task.date}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Completed Tasks */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
        <ul>
          {tasks
            .filter((task) => task.completed) // Filter for completed tasks
            .map((task) => (
              <li key={task.id} className="p-2 mb-2 border-b">
                <span className="font-semibold line-through text-gray-500">
                  {task.name}
                </span>
                <p className="text-sm text-gray-400">Completed on: {task.date}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
