import { useState } from "react";
import { Logo } from "../hero/Logo";
import Modal from "../hero/Modal";




const Hero = ({ scopeRef, resultsRef, toolRef, modelRef }) => {
  const handleScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nav_links = [
    {
      id: 0,
      name: "Scope",
      ref: scopeRef,
    },
    {
      id: 1,
      name: "Results",
      ref: resultsRef,
    },
    {
      id: 2,
      name: "Model  Architecture",
      ref: modelRef,
    },
    {
      id: 3,
      name: "Tool",
      ref: toolRef,
    },

  ];

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="h-screen max-h-[900px] w-full">
      <div className="fixed top-0">
        <video autoPlay muted loop id="myVideo" className="max-w-[1450px]">
          <source src="/assets/videos/fyp_video.mp4" type="video/mp4" />
        </video>
      </div>
      <Modal showModal={showModal} closeModal={closeModal} />
      <div className="navbar">
        <div className="flex justify-between items-center pr-10">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="flex items-center z-10">
            {
              nav_links.map((link) => (
                <div
                  key={link.id}
                  className="text-white text-2xl font-semibold mx-4 cursor-pointer"
                  onClick={() => handleScrollToSection(link.ref)}
                >
                  {link.name}
                </div>
              ))
            }
          </div>

        </div>


      </div>
      <div className="h-full w-full flex  justify-center items-center relative z-10">
        <div className="bg-black w-2/3 flex flex-col items-center p-8 lg:-mt-32 h-1/2 bg-opacity-60 rounded-3xl">
              <h1 className="text-3xl text-white font-bold text-center">
                Automatic Modulation Classification
              </h1>

              <p className="text-center mt-5 text-xl font-medium ">
              Automated Modulation Classification (AMC) is used to identify the type of modulation received in wireless communication systems. This process improves spectrum utilization and is used in various scenarios, such as electronic warfare and civil monitoring. In a project, the implementation of a Deep Learning-based modulation classifier is planned due to the reliability and accuracy expected, especially in low signal-to-noise ratios (SNR). However, challenges such as discriminating higher-order modulations like FSK and m-QAM exist within AMC.
              </p>

              <button className="bg-black w-60 py-3 mt-8 rounded-xl text-xl font-semibold"
              onClick={()=>setShowModal(!showModal)}>
                Test
              </button>
        </div>
      </div>
    </div>
  );
};

export { Hero };
