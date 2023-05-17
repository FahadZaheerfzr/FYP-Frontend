import React from "react";

const backgroundImageStyle = {
  backgroundImage: 'url("/assets/images/arc.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Architecture({ forwardRef, ref }) {
  return (
    <div
      ref={forwardRef || ref}
      className="w-full flex h-screen items-center px-10 max-h-[900px] overflow-hidden"
      style={backgroundImageStyle}
    >
      <div className="w-1/2 relative">
        <img src="/assets/images/code.png" alt="Architecture" />
      </div>

      <div className="w-1/2 relative h-[400px] max-h-[400px] bg-black bg-opacity-60 p-8 rounded-xl">
        <h1 className="text-3xl font-semibold">
          Model Architecture
        </h1>
        <p className="text-[20px] mt-10">
          The model architecture includes Convolution and LSTM layers for feature extraction and capturing temporal dependencies, respectively. The Flatten layer converts the output to a one-dimensional format. Fully connected layers process the extracted features, while the Dropout layer helps prevent overfitting. The final layer predicts the class probabilities, enabling accurate classification.
        </p>
      </div>
    </div>
  );
}
