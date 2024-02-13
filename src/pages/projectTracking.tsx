// components/ProjectTracking.tsx

import Layout from '~/components/Layout';
import React, { useState, useEffect } from 'react';
import ProjectTrackingAndReporting from '~/components/ProjectTrackingAndReporting';
import { FiPlus } from "react-icons/fi";

export interface Project {
  id: number;
  name: string;
  description: string;
  timeLine: string;
}

const ProjectTracking: React.FC = () => {
  // State to hold projects
  const [projects, setProjects] = useState<Project[]>([]);
  // State to manage form input
  const [formData, setFormData] = useState({ name: '', description: '', timeLine: '' });

  // Load projects from local storage on component mount
  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject: Project = { id: projects.length + 1, ...formData };
    const updatedProjects = [...projects, newProject]
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    setFormData({ name: '', description: '', timeLine: '' });
  };

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log("projects", projects)
  console.log("formData", formData)

  return (
    <Layout>
      <div className="p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-4">Project Tracking</h2>

        {/* Project Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Project Name"
              className="border border-gray-300 rounded-md px-4 py-2 mb-2 md:mb-0 w-full md:w-1/2"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Project Description"
              rows={3}
              className="border border-gray-300 rounded-md px-4 py-2 resize-none w-full md:w-1/2"
            />
          </div>
          <div className="my-4">
            <label htmlFor="deadline" className="block text-m font-medium text-gray-700">
              Project Timeline
            </label>
            <input
              type="date"
              id="timeLine"
              name='timeLine'
              value={formData.timeLine}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 flex items-center text-white px-4 py-2 rounded-md mt-2">
            <FiPlus className="mr-2" /> Add Project
          </button>
        </form>

        {/* Project List */}
        <div>
          {projects.map(project => (
            <div key={project.id} className="border border-gray-300 rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <time className="text-gray-600">{project.timeLine}</time>
            </div>
          ))}
        </div>

        <ProjectTrackingAndReporting />
      </div>
    </Layout>
  );
};

export default ProjectTracking;

