"use client";

import { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import PersonalizedInput from "../../../components/Utilities/PersonalizedInput";
import PersonalizedButton from "@/components/Utilities/PersonalizedButton";
import ResultPlot from "../../../components/Utilities/ResultPlot";

const LinearFunctionCalculator = () => {
  const [points, setPoints] = useState([
    { x: undefined, y: undefined }, // Punto 1 (por defecto)
    { x: undefined, y: undefined }, // Punto 2 (por defecto)
  ]);

  const [result, setResult] = useState("");
  const [slope, setSlope] = useState(0);
  const [Yintercept, setYIntercept] = useState(0);
  const [Xintercept, setXIntercept] = useState(0);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPoints((prevPoints) => {
      const newPoints = prevPoints.map((point, idx) => {
        if (idx === index) {
          return { ...point, [name]: parseFloat(value) };
        }
        return point;
      });
      return newPoints;
    });
  };

  const plotFunc = (x: number) => {
    return x * slope + Yintercept;
  };

  const calculateLinearFunction = () => {
    const [p1, p2] = points;
    const m =
      p2.y! === p1!.y! && p2.x! === p1.x!
        ? 0
        : (p2!.y! - p1!.y!) / (p2?.x! - p1?.x!);

    const b = p1!.y! - m * p1!.x!;
    const a = (-1 * b) / m;

    let formattedM = "";
    if (m !== 0) {
      formattedM = m % 1 === 0 ? `${m}` : m.toFixed(2);
    }

    let formattedB = "";
    if (b !== 0) {
      formattedB = b % 1 === 0 ? `${b}` : b.toFixed(2);
    }

    setSlope(m);
    setYIntercept(b);
    setXIntercept(a);
    setResult(
      `$$y = ${formattedM ? `${formattedM}x` : ""} ${
        b > 0 ? `+ ${formattedB}` : formattedB
      }$$`
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-2 font-semibold">
        <span>
          Point A{" "}
          <div className="">
          <Latex>$A\, ($</Latex>
            <PersonalizedInput
              placeholder="x1"
              name="x"
              onChange={(e) => handleInputChange(0, e)}
              value={points[0].x}
            />
            <Latex>$|$</Latex>
            <PersonalizedInput
              placeholder="y1"
              name="y"
              onChange={(e) => handleInputChange(0, e)}
              value={points[0].y}
            />
            <Latex>$)$</Latex>
          </div>
        </span>
        <span>
          Point B:{" "}
          <div className="">
            <Latex>$B\, ($</Latex>
            <PersonalizedInput
              placeholder="x2"
              name="x"
              onChange={(e) => handleInputChange(1, e)}
              value={points[1].x}
            />
            <Latex>$|$</Latex>
            <PersonalizedInput
              placeholder="y2"
              name="y"
              onChange={(e) => handleInputChange(1, e)}
              value={points[1].y}
            />
            <Latex>$)$</Latex>
          </div>
        </span>
      </div>
      <div>
        <PersonalizedButton
          content="calcular"
          eventCallback={calculateLinearFunction}
        />
      </div>
      <div
        className={`flex flex-col md:items-center ${
          result === "" ? "invisible" : "visible"
        }`}
      >
        <Latex>{result}$\newline$</Latex>
        <ResultPlot functionPlot={plotFunc} />
        <div className="p-1 text-sm my-2 bg-transparent border backdrop-blur-md rounded-xl md:relative md:bottom-24 md:right-32 lg:static lg:flex lg:justify-start">
          <Latex>
            $y\,intercept = {Yintercept.toString()} \newline x\,intercept ={" "}
            {Xintercept.toString()} \newline slope = {slope.toString()}$
          </Latex>
        </div>
      </div>
    </div>
  );
};

export default LinearFunctionCalculator;
