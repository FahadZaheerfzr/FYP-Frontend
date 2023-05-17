import React from "react";


export default function Scope({ forwardRef, ref }) {
  return (
    <div
      ref={forwardRef || ref}
      className="w-full flex justify-center items-center h-screen max-h-[900px] overflow-hidden"
    >
      <div className="bg-black flex flex-col p-8 items-center justify-center relative bg-opacity-60 w-[80%] h-[600px] rounded-2xl">
          <span className="text-4xl font-semibold">
            Scope
          </span>

          <p className="text-xl mt-10 leading-10"> 
          1.Analysis and classification of signals into various modulation types (AM, FM, PM, QAM). <br/>
  2.Classify Modulations on both simulated and real-world data. <br/>
  3.Real-time processing of signals with low SNR (Signal-to-Noise Ratio). <br/>
  4.Testing and verification of the system to ensure it functions correctly and meets the required specifications. <br/>
  5.Documentation and training materials for users and administrators.<br/>
  6.Developing the AMC system to meet specific application requirements can also be included in the scope. For example, the AMC system can be optimized for satellite communication, military communication, or wireless communication.
          </p>
      </div>
     
    </div>
  );
}
