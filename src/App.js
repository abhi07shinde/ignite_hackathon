import React, { useState } from 'react';
import Header from './componets/Navbar'
import './App.css'; // We'll define styles separately

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  
  // Sample data for the table
  const tableData = [
    { parameter: 'Resolution', input: '1920x1080', output: '1920x1080' },
    { parameter: 'Size', input: '2.4 MB', output: '1.8 MB' },
    { parameter: 'Format', input: 'JPEG', output: 'PNG' }
  ];

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setSelectedImage(URL.createObjectURL(imageFile));
      setIsUploaded(true);
    }
  };

  // Function to clear the uploaded image and reset state
  const handleClear = () => {
    setSelectedImage(null);
    setIsUploaded(false);
    
    // Revoke object URL to avoid memory leaks
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    
    console.log("Image cleared");
  };

  return (
    <>
    <Header/>
    <div className="image-uploader-container">
      <div className={`upload-section \${isUploaded ? 'uploaded' : ''}`}>
        {!isUploaded ? (
          <div className="upload-box">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image-input"
              className="file-input"
            />
            <label htmlFor="image-input" className="upload-button">
              Upload Image
            </label>
          </div>
        ) : (
          <div className="result-container">
            <div className="images-comparison">
              <div className="image-container left">
                <h3>Input Image</h3>
                <img src={selectedImage} alt="Uploaded" className="displayed-image" />
              </div>
              
              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Input</th>
                      <th>Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.parameter}</td>
                        <td>{row.input}</td>
                        <td>{row.output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="image-container right">
                <h3>Output Image</h3>
                {/* In a real application, this would be the processed image */}
                <img src={selectedImage} alt="Output" className="displayed-image" />
              </div>
            </div>
            
            <div className="bottom-controls">
              <label htmlFor="new-image-input" className="upload-button">
                Upload Image
              </label>
              
              <button 
                className="clear-button" 
                onClick={handleClear}
              >
                Reset
              </button>
              
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="new-image-input"
                className="file-input"
              />
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default App;