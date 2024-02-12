// components/ProjectTrackingAndReporting.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';
// import { PdfViewer } from './PdfViewer';
import PDFView from './PDFView';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ProjectTrackingAndReporting: React.FC = () => {
  // Mock data for project tracking visualization
  const projectTrackingData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [12, 19, 3, 5, 2, 3, 7],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options: any = {
    scales: {
      x: {
        type: 'category', // Ensure x-axis is configured as category scale
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Tasks Completed',
        },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold mb-4">Project Tracking and Reporting</h2>

      {/* Project Tracking Visualization */}
      <div className="mb-8">
        {/* <h3 className="text-lg font-semibold mb-2">Project Tracking Visualization</h3> */}
        <div className="bg-white p-4 rounded shadow-md">
          <Line data={projectTrackingData} options={options} />
        </div>
      </div>

      {/* PDF Viewer */}
      <div>
        <h3 className="text-lg font-semibold mb-2">PDF Viewer</h3>
        <div className="bg-white p-4 rounded shadow-md">
          <PDFView />
          {/* <PdfViewer pdfUrl="https://example.com/sample.pdf" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectTrackingAndReporting;
