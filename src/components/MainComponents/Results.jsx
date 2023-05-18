import React from "react";

import Card from "../cards/cards";

export default function Results({ forwardRef, ref }) {
  return (
    <div
      ref={forwardRef || ref}
      className="w-full flex flex-col h-screen max-h-[900px]  p-8 relative z-10"
    >
      <div className="bg-black bg-opacity-60 h-[90%] p-8 rounded-xl">
        <div className="h-10 w-full text-center">
          <h1 className=" font-semibold text-5xl">
            Results
          </h1>
        </div>
        <div className="flex justify-between w-full h-full px-20 mt-20">
          <Card percentage={89.98} title={"Train Accuracy"} />
          <Card percentage={90.01} title={"Val Accuracy"} />
          <Card percentage={89.7} title={"Test Accuracy"} />
        </div>
      </div>
    </div>
  );
}
