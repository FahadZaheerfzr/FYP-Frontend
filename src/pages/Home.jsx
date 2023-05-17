import React from "react";
import { useRef } from "react";
import { Hero } from "../components/MainComponents/Hero";
import Scope from "../components/MainComponents/Scope";
import Results from "../components/MainComponents/Results";
import Architecture from "../components/MainComponents/Architecture";
import { Tools } from "../components/MainComponents/Tools";
import { Footer } from "../components/MainComponents/Footer";

export default function Home() {
  const scopeRef = useRef(null);
  const resultsRef = useRef(null);
  const toolRef = useRef(null);
  const modelRef = useRef(null);
  return (
    <div className="antialiased text-white bg-slate-100 main-div">
      <Hero scopeRef={scopeRef} resultsRef={resultsRef} toolRef={toolRef}
      modelRef={modelRef} />
      <Scope forwardRef={scopeRef} />
      <Results forwardRef={resultsRef} />
      <Architecture forwardRef={modelRef} />
        <Tools title="Tools" forwardRef={toolRef} />
      <Footer/>
    </div>
  );
}
