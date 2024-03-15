'use client'

import { useState } from "react";

const LinearFunctionCalculator = () => {

    const [points1, setPoints1] = useState([])

  return (
    <div>
      <div className="flex flex-col gap-2">
        <span>
          Point A <input type="number" className="border w-12 rounded-md text-center px-1" placeholder="x1"/>{" "}
          <input type="number" className="border w-12 rounded-md text-center px-1" placeholder="y1" />
        </span>
        <span>
          Point B <input type="number" className="border w-12 rounded-md text-center px-1" placeholder="x2"/>{" "}
          <input type="number" className="border w-12 rounded-md text-center px-1" placeholder="y2"/>
        </span>
      </div>
    </div>
  );
};

export default LinearFunctionCalculator;
