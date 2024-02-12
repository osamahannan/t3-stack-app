// components/PDFViewer.tsx

import React from 'react';

const PDFView: React.FC = () => {
  // Mock PDF URL
  const mockPDFUrl = 'https://example.com/sample.pdf';

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Implement PDF download logic here
    window.open(mockPDFUrl, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">PDF Viewer</h1>
      {/* PDF Viewer */}
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        {/* PDF viewer component */}
        <iframe src={mockPDFUrl} title="PDF Viewer" className="w-full" style={{ height: "410px" }} />
      </div>

      {/* Button to download PDF */}
      <button
        onClick={handleDownloadPDF}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Download PDF
      </button>
    </div>
  );
};

export default PDFView;
