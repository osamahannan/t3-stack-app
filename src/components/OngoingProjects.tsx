import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Project } from '~/pages/projectTracking';

const OngoingProjects: React.FC = () => {
  // State to hold ongoing projects
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([]);

  // Effect to load projects from local storage on component mount
  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setOngoingProjects(JSON.parse(storedProjects));
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold mb-2">Ongoing Projects</h2>
      <ul>
        {ongoingProjects.length > 0 ? (
          ongoingProjects.map(project => (
            <div key={project.id} className="border border-gray-300 rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <time className="text-gray-600">{project.timeLine}</time>
            </div>
          ))
        ) : (
          <span className="">No Ongoing Projects found</span>
        )}
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
