"use client"

import React from "react";
import { useState } from "react";
import PersonalizedButton from "@/components/Utilities/PersonalizedButton";
import PersonalizedInput from "@/components/Utilities/PersonalizedInput";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const ParallelFunctionCalculator = () => {

  const [inputPoint, setInputPoint] = useState({x: undefined, y: undefined});
  const inputSlope = useState(null)
  const inputIntercept = useState(null)

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-2 gap-y-4 font-semibold">
        <span>
          input function:{" "}
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <Latex>$y =\; $</Latex>
              <PersonalizedInput placeholder="a" name="b" />
              <Latex>$\;x$</Latex>
              <select name="" className="ml-3 p-1 border rounded-md" id="">
                <option value="">+</option>
                <option value="">-</option>
              </select>
              <PersonalizedInput placeholder="b" name="b" />
            </div>
          </div>
        </span>
        <span>
          input point:{" "}
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <Latex>$P\, ($</Latex>
              <PersonalizedInput placeholder="x" name="x" />
              <Latex>$|$</Latex>
              <PersonalizedInput placeholder="y" name="y" />
              <Latex>$)$</Latex>
            </div>
          </div>
        <PersonalizedButton content="Calculate"/>
        </span>
      </div>
    </div>
  );
};

export default ParallelFunctionCalculator;
