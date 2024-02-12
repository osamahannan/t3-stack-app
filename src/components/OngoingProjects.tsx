// components/OngoingProjects.tsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const OngoingProjects: React.FC = () => {
  // State to hold ongoing projects
  const [ongoingProjects, setOngoingProjects] = useState<string[]>([]);

  // Effect to load projects from local storage on component mount
  useEffect(() => {
    const storedProjects = localStorage.getItem('ongoingProjects');
    if (storedProjects) {
      setOngoingProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Function to add a project
  // const addProject = (project: string) => {
  //   const updatedProjects = [...ongoingProjects, project];
  //   setOngoingProjects(updatedProjects);
  //   localStorage.setItem('ongoingProjects', JSON.stringify(updatedProjects));
  // };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold mb-2">Ongoing Projects</h2>
      <ul>
        {ongoingProjects.map((project, index) => (
          <li key={index} className="mb-1">{project}</li>
        ))}
      </ul>
      <Link href="/projectTracking">
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Project
        </button>
      </Link>
    </div>
  );
};

export default OngoingProjects;
