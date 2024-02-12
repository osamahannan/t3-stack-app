// components/ProjectTracking.tsx

import Layout from '~/components/Layout';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectTrackingAndReporting from '~/components/ProjectTrackingAndReporting';

interface Project {
  id: number;
  name: string;
  description: string;
}

const ProjectTracking: React.FC = () => {
  // State to hold projects
  const [projects, setProjects] = useState<Project[]>([]);
  // State to manage form input
  const [formData, setFormData] = useState({ name: '', description: '' });

  // Load projects from local storage on component mount
  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Function to save projects to local storage
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject: Project = { id: projects.length + 1, ...formData };
    setProjects([...projects, newProject]);
    setFormData({ name: '', description: '' });
  };

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2">
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Project
          </button>
        </form>

        {/* Project List */}
        <div>
          {projects.map(project => (
            <div key={project.id} className="border border-gray-300 rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        <ProjectTrackingAndReporting />
      </div>
    </Layout>
  );
};

export default ProjectTracking;

