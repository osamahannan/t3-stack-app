// components/TaskList.tsx

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  description: string;
  deadline: string;
  assignedTo: string;
}

const TaskList: React.FC = () => {
  // State to hold tasks
  const [tasks, setTasks] = useState<any[]>([]);

  // Effect to load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Function to add a task
  const addTask = (task: any) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Task List</h2>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">{task.deadline}</td>
                <td className="px-6 py-4">{task.priority}</td>
                <td className="px-6 py-4">{task.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/tasks">
        <button
          // onClick={() =>
          //   addTask({
          //     description: 'New Task',
          //     deadline: '2024-03-01',
          //     priority: 'High',
          //     assignedTo: 'John Doe',
          //   })}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </Link>
    </div>
  );
};

export default TaskList;
