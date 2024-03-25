"use client";

import React from "react";
import { useState } from "react";
import PersonalizedButton from "@/components/Utilities/PersonalizedButton";
import PersonalizedInput from "@/components/Utilities/PersonalizedInput";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const ParallelFunctionCalculator = () => {
  const [inputPoint, setInputPoint] = useState({ x: undefined, y: undefined });
  const [inputSlope, setInputSlope] = useState<number | null>(null);
  const [inputIntercept, setInputIntercept] = useState<number | null>(null);

  const handleCoordinatesInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setInputPoint((prevPoint) => ({
      ...prevPoint,
      [name]: parseFloat(value),
    }));
  };

  const handleInputSlopeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setInputSlope(parseFloat(value));
  };

  const handleInputInterceptChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setInputIntercept(parseFloat(value));
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-2 gap-y-4 font-semibold">
        <span>
          input function:{" "}
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <Latex>$y =\; $</Latex>
              <PersonalizedInput
                value={`${inputSlope}`}
                onChange={(e) => handleInputSlopeChange(e)}
                placeholder="a"
                name="b"
              />
              <Latex>$\;x$</Latex>
              <select name="" className="ml-3 p-1 border rounded-md" id="">
                <option value="">+</option>
                <option value="">-</option>
              </select>
              <PersonalizedInput value={`${inputIntercept}`}
                onChange={(e) => handleInputInterceptChange(e)}  placeholder="b" name="b" />
            </div>
          </div>
        </span>
        <span>
          input point:{" "}
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <Latex>$P\, ($</Latex>
              <PersonalizedInput
                value={inputPoint.x}
                placeholder="x"
                name="x"
                onChange={(e) => handleCoordinatesInputChange(e)}
              />
              <Latex>$|$</Latex>
              <PersonalizedInput
                value={inputPoint.y}
                placeholder="y"
                name="y"
                onChange={(e) => handleCoordinatesInputChange(e)}
              />
              <Latex>$)$</Latex>
            </div>
          </div>
          <PersonalizedButton eventCallback={() => {}} content="Calculate" />
        </span>
      </div>
    </div>
  );
};

export default ParallelFunctionCalculator;
