"use client";

import { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import PersonalizedInput from "./PersonalizedInput";

const LinearFunctionCalculator = () => {
  const [points, setPoints] = useState([
    { x: undefined, y: undefined }, // Punto 1 (por defecto)
    { x: undefined, y: undefined }, // Punto 2 (por defecto)
  ]);

  const [result, setResult] = useState("");
  const [slope, setSlope] = useState(0);
  const [intercept, setIntercept] = useState(0);

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

  const calculateLinearFunction = () => {
    const [p1, p2] = points;
    const m = (p2?.y - p1?.y) / (p2?.x - p1?.x);
    const b = p1?.y - m * p1?.x;

    let formattedM = "";
    if (m !== 0) {
      formattedM = m % 1 === 0 ? `${m}` : m.toFixed(2);
    }

    let formattedB = "";
    if (b !== 0) {
      formattedB = b % 1 === 0 ? `${b}` : b.toFixed(2);
    }

    setSlope(m);
    setIntercept(b);
    setResult(
      `$$y = ${formattedM ? formattedM : ""}x ${
        b > 0 ? `+ ${formattedB}` : formattedB
      }$$`
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <span>
          Point A{" "}
          <PersonalizedInput
            placeholder="x1"
            name="x"
            onChange={(e) => handleInputChange(0, e)}
            value={points[0].x}
          />{" "}
          <PersonalizedInput
            placeholder="y1"
            name="y"
            onChange={(e) => handleInputChange(0, e)}
            value={points[0].y}
          />
        </span>
        <span>
          Point B{" "}
          <PersonalizedInput
            placeholder="x2"
            name="x"
            onChange={(e) => handleInputChange(1, e)}
            value={points[1].x}
          />{" "}
          <PersonalizedInput
            placeholder="y2"
            name="y"
            onChange={(e) => handleInputChange(1, e)}
            value={points[1].y}
          />
        </span>
      </div>
      <div>
        <button
          className="p-2 bg-zinc-400 rounded-md m-2"
          onClick={calculateLinearFunction}
        >
          Calcular
        </button>
      </div>
      <h1>
        <Latex>{result}</Latex>
      </h1>
    </div>
  );
};

export default LinearFunctionCalculator;
