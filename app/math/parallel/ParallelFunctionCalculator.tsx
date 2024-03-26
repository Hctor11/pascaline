"use client";

import React from "react";
import { useState } from "react";
import PersonalizedButton from "@/components/Utilities/PersonalizedButton";
import PersonalizedInput from "@/components/Utilities/PersonalizedInput";
import Latex from "react-latex-next";
import DoubleResultPlot from "@/components/Utilities/DoubleResultPlot";
import "katex/dist/katex.min.css";

const ParallelFunctionCalculator = () => {
  const [inputPoint, setInputPoint] = useState({ x: undefined, y: undefined });
  const [inputSlope, setInputSlope] = useState<number | null>(null);
  const [inputIntercept, setInputIntercept] = useState<number | null>(null);
  const [inputSign, setInputSign] = useState<string | null>("+");
  const [result, setResult] = useState<string | null>("");
  const [resultIntercept, setResultIntercept] = useState<number | null>(null);

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

  const handleSignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputSign(event.target.value);
  };

  const calculateParallelEquation = () => {
    inputSign == "+"
      ? setInputIntercept(inputIntercept)
      : setInputIntercept(-1 * inputIntercept!);

    const resIntercept = -1 * (inputSlope! * inputPoint.x!) + inputPoint.y!;
    setResultIntercept(resIntercept)
    setResult(
      `$$y = ${inputSlope ? `${inputSlope.toFixed(2)}x` : ""} ${
        resIntercept > 0
          ? `+ ${resIntercept.toFixed(2)}`
          : resIntercept.toFixed(2)
      }$$`
    );
  };

  const plotFunc = (x: number) => {
    return x * inputSlope! + resultIntercept!;
  };

  const basePlotFunc = (x: number) => {
    return x * inputSlope! + inputIntercept!;
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
                name="a"
              />
              <Latex>$\;x$</Latex>
              <select
                name="sign"
                onChange={(e) => handleSignChange(e)}
                className="ml-3 p-1 border rounded-md"
                id=""
              >
                <option value="+">+</option>
                <option value="-">-</option>
              </select>
              <PersonalizedInput
                value={`${inputIntercept}`}
                onChange={(e) => handleInputInterceptChange(e)}
                placeholder="b"
                name="b"
              />
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
          <PersonalizedButton
            eventCallback={() => calculateParallelEquation()}
            content="Calculate"
          />
        </span>
      </div>
      <div
        className={`flex flex-col md:items-center ${
          result === "" ? "invisible" : "visible"
        }`}
      >
        <Latex>{result!}$\newline$</Latex>
        <DoubleResultPlot
          resultFunctionPlot={plotFunc}
          baseFunctionPlot={basePlotFunc}
        />
        <div className="p-1 text-sm my-2 bg-transparent border backdrop-blur-md rounded-xl md:relative md:bottom-24 md:right-32 lg:static lg:flex lg:justify-start">
          {/* <Latex>
            $y\,intercept = {Yintercept.toString()} \newline x\,intercept ={" "}
            {Xintercept.toString()} \newline slope = {slope.toString()}$
          </Latex> */}
        </div>
      </div>
    </div>
  );
};

export default ParallelFunctionCalculator;
