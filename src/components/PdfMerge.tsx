import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const PdfMerge: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('Please select at least 2 PDF files to merge');
      return;
    }

    setIsMerging(true);
    setError(null);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setFiles([]);
    } catch (err) {
      setError('Error merging PDFs: ' + (err as Error).message);
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div className="card">
      <h2>PDF Merge Tool</h2>
      <div className="pdf-merge-container">
        <div className="file-input-container">
          <input
            title="Select PDF Files"
            placeholder="Select PDF Files"  
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileSelect}
            className="file-input"
          />
          <button className="btn btn-primary" onClick={() => (document.querySelector('.file-input') as HTMLInputElement)?.click()}>
            Select PDF Files
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {files.length > 0 && (
          <div className="selected-files">
            <h3>Selected Files:</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <span>{file.name}</span>
                  <button
                    className="btn btn-remove"
                    onClick={() => handleRemoveFile(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {files.length >= 2 && (
          <button
            className="btn btn-primary btn-merge"
            onClick={handleMerge}
            disabled={isMerging}
          >
            {isMerging ? 'Merging...' : 'Merge PDFs'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PdfMerge; 