"use client";

import { useState } from "react";

const Calculator = () => {
  const [firstInput, setFirstInput] = useState<null | string>(null);
  const [secondInput, setSecondInput] = useState<null | string>(null);
  const [operator, setOperator] = useState(false)
  const [operatorSymbol, setOperatorSymbol] = useState(null)

  const handleInput = (number:string) => {
    firstInput == null ? setFirstInput(number) : setFirstInput(firstInput + number)
  } 

  return (
    <div className="border w-full rounded-xl flex flex-col justify-center items-center p-2 h-96">
      <input
        type="text"
        className="hover:bg-zinc-100 outline-none cursor-default w-full border rounded-md h-12 text-xl px-2"
        placeholder=""
        readOnly
      />
      <div className="">
        <button type="button" className="">
          1
        </button>
      </div>
    </div>
  );
};

export default Calculator;
