"use client";

import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

const Calculator = () => {
  const [firstInput, setFirstInput] = useState<null | string>(null);
  const [secondInput, setSecondInput] = useState<null | string>(null);
  const [operator, setOperator] = useState(false);
  const [operatorSymbol, setOperatorSymbol] = useState(null);

  const handleInput = (number: string) => {
    firstInput == null
      ? setFirstInput(number)
      : setFirstInput(firstInput + number);
  };

  const handleSecondInput = (number: string) => {
    secondInput == null
      ? setSecondInput(number)
      : setSecondInput(firstInput + number);
  };

  return (
    <div className="border w-full rounded-xl flex flex-col justify-center items-center p-3 h-96">
      <div className="w-full">
        <input
          type="text"
          className="hover:bg-zinc-100 outline-none cursor-default w-full border rounded-md h-16 text-xl px-2"
          placeholder=""
          readOnly
        />
      </div>
      <div className="w-full h-full pt-3 grid grid-cols-7 grid-rows-5 gap-2">
        <div className="col-span-2 border bg-zinc-100 rounded-md content-center text-center">
          <p>deg rag</p>
        </div>
      <CalculatorButton
          content="x!"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="("
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content=")"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="%"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="AC"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="sin"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="cos"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="tan"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="7"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="8"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="9"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="÷"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="arcsin"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="arccos"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="arctan"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="4"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="5"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="6"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="x"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
      </div>
    </div>
  );
};

export default Calculator;
