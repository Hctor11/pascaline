"use client";

import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import OperatorButton from "./OperatorButton";

const Calculator = () => {
  const [firstInput, setFirstInput] = useState<null | string>(null);
  const [secondInput, setSecondInput] = useState<null | string>(null);
  const [operator, setOperator] = useState(false);
  const [operatorSymbol, setOperatorSymbol] = useState<null | string>(null);

  const handleInput = (number: string) => {
    firstInput == null
      ? setFirstInput(number)
      : setFirstInput(firstInput + number);
  };

  const handleSecondInput = (number: string) => {
    secondInput == null
      ? setSecondInput(number)
      : setSecondInput(secondInput + number);
  };

  const handleOperator = (symbol: string) => {
    setOperator(true)
    setOperatorSymbol(symbol)
  }

  const handleSumbmit = () => {
    if(operatorSymbol == "+"){
      setFirstInput(`${parseFloat(firstInput!) + parseFloat(secondInput!)}`)
      setSecondInput(null)
      setOperator(false)
      setOperatorSymbol(null)
    }
  }

  const handleClear = () => {
    setFirstInput(null)
    setSecondInput(null)
    setOperator(false)
    setOperatorSymbol(null)
  }


  const handleDecimalPoint = () => {
    if (operator) {
      if (secondInput === null || secondInput.indexOf('.') === -1) {
        setSecondInput((secondInput || '') + '.');
      }
    } else {
      if (firstInput === null || firstInput.indexOf('.') === -1) {
        setFirstInput((firstInput || '') + '.');
      }
    }
  }

  return (
    <div className="border w-full rounded-xl flex flex-col justify-center items-center p-3 h-96">
      <div className="w-full">
        <input
          type="text"
          className="hover:bg-zinc-100 text-right outline-none cursor-default w-full border rounded-md h-16 text-2xl px-3"
          placeholder={operator ? firstInput! : secondInput!}
          readOnly
          value={firstInput || ''}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      <div className="w-full h-full pt-3 grid grid-cols-7 grid-rows-5 gap-2">
        <div className="flex hover:bg-zinc-200 justify-evenly items-center col-span-2 border bg-zinc-100 rounded-md content-center text-center">
          <button className="px-3">deg</button>
          <p className="hover:cursor-default">|</p>
          <button className="px-3">rad</button>
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
        <OperatorButton
          content="AC"
          type="operator"
          operator={operator}
          handlerFunction={handleClear}
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
          content="π"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="e"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="√"
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
          content="2"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="3"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="-"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="log"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="ln"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="^"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <OperatorButton
          content="."
          type="operator"
          operator={operator}
          handlerFunction={handleDecimalPoint}
        />
        <CalculatorButton
          content="0"
          type="number"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="="
          type="equal"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
        <CalculatorButton
          content="+"
          type="operator"
          operator={operator}
          firstHandlerFunction={handleInput}
          secondHandlerFunction={handleSecondInput}
        />
      </div>
    </div>
  );
};

export default Calculator;
