import React from 'react';
import Layout from '~/components/Layout';
import OngoingProjects from '~/components/OngoingProjects';
import ProjectTimeline from '~/components/ProjectTimeline';
import TaskList from '~/components/TaskList';
import TeamCollaboration from '~/components/TeamCollboration';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Hello there,</h1>
        <h3 className="text-xl font-semibold mb-4">Here is some information we gathered about your projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Project Overview</h2>
            <OngoingProjects />
          </div>

          <div className="p-4 bg-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Task List</h2>
            <TaskList />
          </div>

          <div className="p-4 bg-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-2">Project Timeline & Team Collaboration</h2>
            <ProjectTimeline />
            <TeamCollaboration />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
