'use client';

import React from 'react';
import { useSelector } from 'react-redux';

const Page = () => {
  // Get tasks from Redux store
  const tasks = useSelector((state) => state.tasks.tasks);

  // Filter tasks with high priority
  const highPriorityTasks = tasks.filter((task) => task.priority === 'high');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">High Priority Tasks</h1>

      {highPriorityTasks.length === 0 ? (
        <p>No high-priority tasks</p>
      ) : (
        <ul>
          {highPriorityTasks.map((task) => (
            <li key={task.id} className="p-2 mb-2 border-b">
              <span className="font-semibold">{task.name}</span>
              <p className="text-sm text-gray-500">Priority: {task.priority}</p>
              <p className="text-sm text-gray-500">Due: {task.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
