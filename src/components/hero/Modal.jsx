import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ showModal, closeModal }) => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file, file?.name);
    fetch("http://13.229.105.154:8000/predict_file", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        const modulationType = result["modulation:type"];
        setResult(modulationType);
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error. Please try again.");
      });
  };
  const reset = () => {
    setFile(null);
    setResult(null);
  };

  const modalStyle = {
    display: showModal ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(26, 32, 44, 0.5)",
    backdropFilter: "blur(5px)",
    zIndex: 9999,
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0" style={modalStyle}>
      <div className="modal-container bg-black rounded-lg p-6 w-96">
        <button
          onClick={() => {
            reset();
            closeModal();
          }}
          className="close-button absolute top-2 right-2 text-gray-400 hover:text-gray-200"
        >
          <AiOutlineCloseCircle className="h-6 w-6" />
        </button>

        <input
          className="file-input mt-4 mb-6 p-2 rounded-lg w-full text-gray-200 bg-gray-900 border border-gray-600 focus:outline-none"
          type="file"
          id="formFile"
          onChange={handleUpload}
          accept=".dat"
        />

        <button
          onClick={handleSubmit}
          className="test-button bg-gray-900 text-white font-medium py-2 rounded-lg w-full flex items-center justify-center"
        >
          {loading ? (
            <div className="loading-spinner mr-2" role="status">
              <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-b-4 border-gray-900"></div>
            </div>
          ) : (
            <span>Test</span>
          )}
        </button>

        {(
          <div
            className="result-textarea flex justify-center items-center h-20 text-xl mt-6 bg-gray-900 text-white p-2 rounded-lg w-full resize-none"
            readOnly
          >
            {result && result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
