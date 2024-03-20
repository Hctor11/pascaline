"use client";

import { useState } from "react";
import PersonalizedButton from "@/components/Utilities/PersonalizedButton";
import PersonalizedInput from "@/components/Utilities/PersonalizedInput";

const PerpendicularFunctionCalculator = () => {
  const [point, setPoint] = useState({
    x: undefined,
    y: undefined,
  });
  const [inputSlope, setInputSlope] = useState<number | null>(null);
  const [resultSlope, setResultSlope] = useState(0);
  const [resultFunction, setResultFunction] = useState("");

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
          eventCallback={()=>{}}
        />
    </div>
  );
};

export default PerpendicularFunctionCalculator;
