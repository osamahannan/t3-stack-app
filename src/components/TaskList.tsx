import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export interface Task {
  description: string;
  deadline: string;
  assignedTo: string;
  priority: string;
}

const TaskList: React.FC = () => {
  // State to hold tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Effect to load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto rounded">
        <table className="w-full whitespace-nowrap rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks?.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4">{task.description}</td>
                  <td className="px-6 py-4">{task.deadline}</td>
                  <td className="px-6 py-4">{task.priority}</td>
                  <td className="px-6 py-4">{task.assignedTo}</td>
                </tr>
              ))
            ) : (
              <tr className='bg-gray-200'>
                <td className="px-6 py-4">No tasks found</td>
                <td className="px-6 py-4" />
                <td className="px-6 py-4" />
                <td className="px-6 py-4" />
              </tr>
            )}

          </tbody>
        </table>
      </div>
      <Link href="/tasks">
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </Link>
    </div>
  );
};

export default TaskList;
