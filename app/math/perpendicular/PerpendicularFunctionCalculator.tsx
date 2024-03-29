"use client";

import { useState } from "react";
import PersonalizedButton from "@/components/Utilities/PersonalizedButton";
import PersonalizedInput from "@/components/Utilities/PersonalizedInput";
import DoubleResultPlot from "@/components/Utilities/DoubleResultPlot";
import Latex from "react-latex-next";

const PerpendicularFunctionCalculator = () => {
  const [point, setPoint] = useState({
    x: undefined,
    y: undefined,
  });
  const [inputSlope, setInputSlope] = useState<number | null>(null);
  const [resultSlope, setResultSlope] = useState(0);
  const [resultYIntercept, setResultYIntercept] = useState(0)
  const [result, setResult] = useState("");
  const [baseYIntercept, setBaseYIntercept] = useState(0);

  const handleCoordinatesInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPoint((prevPoint) => ({
      ...prevPoint,
      [name]: parseFloat(value),
    }));
  };

  const handleSlopeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputSlope(parseFloat(value));
  }

   const calculateLinearFunction = () => {
    
    const {x,y} = point
    const resSlope = -1/inputSlope!
    const resYIntercept = y! + -1*(resSlope*x!)
    const baseIntercept =  y! + -1*(inputSlope!*x!)

    setBaseYIntercept(baseIntercept)
    setResultYIntercept(resYIntercept)
    setResultSlope(resSlope)
    setResult(
      `$$y = ${resSlope ? `${resSlope.toFixed(2)}x` : ""} ${
        resYIntercept > 0 ? `+ ${resYIntercept.toFixed(2)}` : resYIntercept.toFixed(2)
      }$$`
    );
  };

  const plotFunc = (x: number) => {
    return x * resultSlope + resultYIntercept;
  };

  const basePlotFunc = (x: number) => {
    return x * inputSlope! + baseYIntercept;
  };


  return (
    <div>
      {" "}
      <div className="flex flex-col gap-2">
        <span>
          Point A{" "}
          <PersonalizedInput
            placeholder="x"
            name="x"
            onChange={(e) => handleCoordinatesInputChange(e)}
            value={point.x}
          />{" "}
          <PersonalizedInput
            placeholder="y"
            name="y"
            onChange={(e) => handleCoordinatesInputChange(e)}
            value={point.y}
          />
        </span>
        <span>
          Slope{" "}
          <PersonalizedInput
            placeholder="m"
            name="slope"
            onChange={(e) => handleSlopeInputChange(e)}
            value={`${inputSlope}`}
          />
        </span>
      </div>
      <PersonalizedButton
          content="calcular"
          eventCallback={calculateLinearFunction}
        />
      <div
        className={`flex flex-col md:items-center ${
          result === "" ? "invisible" : "visible"
        }`}
      >
        <Latex>{result}$\newline$</Latex>
        <DoubleResultPlot resultFunctionPlot={plotFunc} baseFunctionPlot={basePlotFunc}/>
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

export default PerpendicularFunctionCalculator;
