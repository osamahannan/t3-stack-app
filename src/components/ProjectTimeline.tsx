// components/ProjectTimeline.tsx

import React, { useEffect, useState } from 'react';
import { Project } from '~/pages/projectTracking';

const ProjectTimeline: React.FC = () => {
  // State to hold project timeline data
  const [timelineData, setTimelineData] = useState<Project[]>([]);

  // Effect to load timeline data from local storage on component mount
  useEffect(() => {
    const storedTimeline = localStorage.getItem('projects');
    if (storedTimeline) {
      setTimelineData(JSON.parse(storedTimeline));
    }
  }, []);

  // Function to update timeline data
  // const updateTimeline = () => {
  //   const updatedTimeline = [...timelineData, 'New Timeline Event'];
  //   setTimelineData(updatedTimeline);
  //   localStorage.setItem('timelineData', JSON.stringify(updatedTimeline));
  // };

  return (
    <div className="p-4 bg-gray-100 rounded overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Project Timelines</h2>
      <ul>
        {/* {timelineData.map((event, index) => (
          <li key={index} className="mb-1">{event}</li>
        ))} */}
      </ul>
      <table className="w-full whitespace-nowrap rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timeline</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {timelineData.length > 0 ? (
            timelineData.map((task, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">{task.timeLine}</td>
              </tr>
            ))
          ) : (
            <tr className='bg-gray-50'>
              <td className="px-6 py-4">No Projects Found</td>
              <td className="px-6 py-4" />
            </tr>
          )}
        </tbody>
      </table>
      {/* <button onClick={updateTimeline} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Timeline Event
      </button> */}
    </div>
  );
};

export default ProjectTimeline;
