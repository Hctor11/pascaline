"use client";

import { useState } from "react";
import PersonalizedButton from "@/components/Utilities/PersonalizedButton";
import PersonalizedInput from "@/components/Utilities/PersonalizedInput";

const PerpendicularFunctionCalculator = () => {
  const [point, setPoint] = useState({
    x: undefined,
    y: undefined,
  });
  const [inputSlope, setInputSlope] = useState();
  const [resultSlope, setResultSlope] = useState();
  const [resultFunction, setResultFunction] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPoint((prevPoint) => ({
      ...prevPoint,
      [name]: parseFloat(value),
    }));
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
            onChange={(e) => handleInputChange(e)}
            value={point.x}
          />{" "}
          <PersonalizedInput
            placeholder="y"
            name="y"
            onChange={(e) => handleInputChange(e)}
            value={point.y}
          />
        </span>
        <span>
          Slope{" "}
          <PersonalizedInput
            placeholder="m"
            name="slope"
            onChange={(e) => handleInputChange(e)}
            value={point.y}
          />
        </span>
      </div>
    </div>
  );
};

export default PerpendicularFunctionCalculator;
