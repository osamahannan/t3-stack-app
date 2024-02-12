// components/ProjectTimeline.tsx

import React, { useEffect, useState } from 'react';

const ProjectTimeline: React.FC = () => {
  // State to hold project timeline data
  const [timelineData, setTimelineData] = useState<string[]>([]);

  // Effect to load timeline data from local storage on component mount
  useEffect(() => {
    const storedTimeline = localStorage.getItem('timelineData');
    if (storedTimeline) {
      setTimelineData(JSON.parse(storedTimeline));
    }
  }, []);

  // Function to update timeline data
  const updateTimeline = () => {
    const updatedTimeline = [...timelineData, 'New Timeline Event'];
    setTimelineData(updatedTimeline);
    localStorage.setItem('timelineData', JSON.stringify(updatedTimeline));
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold mb-2">Project Timeline</h2>
      <ul>
        {timelineData.map((event, index) => (
          <li key={index} className="mb-1">{event}</li>
        ))}
      </ul>
      <button onClick={updateTimeline} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Timeline Event
      </button>
    </div>
  );
};

export default ProjectTimeline;
