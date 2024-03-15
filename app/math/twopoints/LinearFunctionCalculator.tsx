"use client";

import { useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const LinearFunctionCalculator = () => {
  const [points, setPoints] = useState([
    { x: 0, y: 0 }, // Punto 1 (por defecto)
    { x: 0, y: 0 }, // Punto 2 (por defecto)
  ]);

  const [result, setResult] = useState('');

  const handleInputChange = (index:number, event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPoints(prevPoints => {
      const newPoints = prevPoints.map((point, idx) => {
        if (idx === index) {
          return { ...point, [name]: parseFloat(value)};
        }
        return point;
      });
      return newPoints;
    });
  };

  const calculateLinearFunction = () => {
    const [p1, p2] = points;
    const m = (p2.y - p1.y) / (p2.x - p1.x);
    const b = p1.y - m * p1.x;

    const formattedM = m % 1 === 0 ? m.toFixed(0) : m !== 0 ? m.toFixed(2) : "";
    const formatttedB = b % 1 === 0 ? b.toFixed(0) : b !== 0 ? b.toFixed(2) : "";
    //const formattedValue = newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(2);
    setResult(`$$y = ${formattedM}x ${b > 0 ? `+ ${formatttedB}` : formatttedB}$$`);
  };


  return (
    <div>
      <div className="flex flex-col gap-2">
        <span>
          Point A{" "}
          <input
            type="number"
            className="border w-12 rounded-md text-center px-1"
            placeholder="x1"
            name="x"
            value={points[0].x}
            onChange={e => handleInputChange(0, e)}
          />{" "}
          <input
            type="number"
            className="border w-12 rounded-md text-center px-1"
            placeholder="y1"
            name="y"
            value={points[0].y}
            onChange={e => handleInputChange(0, e)}
          />
        </span>
        <span>
          Point B{" "}
          <input
            type="number"
            className="border w-12 rounded-md text-center px-1"
            placeholder="x2"
            name="x"
            value={points[1].x}
            onChange={e => handleInputChange(1, e)}
          />{" "}
          <input
            type="number"
            className="border w-12 rounded-md text-center px-1"
            placeholder="y2"
            name="y"
            value={points[1].y}
            onChange={e => handleInputChange(1, e)}
          />
        </span>
      </div>
      <div>
        <button className="p-2 bg-zinc-400 rounded-md m-2" onClick={calculateLinearFunction}>Calcular</button>
      </div>
      <h1>
        <Latex>
        {result}
        </Latex>
      </h1>
    </div>
  );
};

export default LinearFunctionCalculator;
