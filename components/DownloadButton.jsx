import React from 'react';
import { jsPDF } from 'jspdf';

function DownloadButton() {
  const handleDownload = () => {
    const doc = new jsPDF();
    const element = document.body;

    doc.html(element, {
      callback: (pdf) => {
        pdf.save('resume.pdf');
      },
      margin: [10, 10, 10, 10],
      autoPaging: 'text',
      x: 0,
      y: 0,
      width: 190,
      windowWidth: 675
    });
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download PDF
    </button>
  );
}

export default DownloadButton;