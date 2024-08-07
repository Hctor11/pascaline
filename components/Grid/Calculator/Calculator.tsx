"use client";

import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import OperatorButton from "./OperatorButton";

const Calculator = () => {
  const [firstInput, setFirstInput] = useState<null | string>(null);
  const [secondInput, setSecondInput] = useState<null | string>(null);
  const [operator, setOperator] = useState(false);
  const [operatorSymbol, setOperatorSymbol] = useState<null | string>(null);
  const [isRadSelected, setIsRadSelected] = useState(false);

  const handleInput = (number: string) => {
    console.log("Updating firstInput:", firstInput);
    firstInput === null
      ? setFirstInput(number)
      : setFirstInput(firstInput + number);
  };

  const handleSecondInput = (number: string) => {
    console.log("Updating secondInput:", secondInput);
    secondInput === null
      ? setSecondInput(number)
      : setSecondInput(secondInput + number);
  };

  const handleOperator = (symbol: string) => {
    setOperator(true);
    setOperatorSymbol(symbol);
  };

  const handleSumbmit = () => {
    if (operatorSymbol == "+") {
      setFirstInput(`${parseFloat(firstInput!) + parseFloat(secondInput!)}`);
      setSecondInput(null);
      setOperator(false);
      setOperatorSymbol(null);
    }
    if (operatorSymbol == "-") {
      setFirstInput(`${parseFloat(firstInput!) - parseFloat(secondInput!)}`);
      setSecondInput(null);
      setOperator(false);
      setOperatorSymbol(null);
    }
    if (operatorSymbol == "x") {
      setFirstInput(`${parseFloat(firstInput!) * parseFloat(secondInput!)}`);
      setSecondInput(null);
      setOperator(false);
      setOperatorSymbol(null);
    }
    if (operatorSymbol == "÷") {
      setFirstInput(
        `${
          parseFloat(firstInput!) / parseFloat(secondInput!) === Infinity
            ? "error"
            : parseFloat(firstInput!) / parseFloat(secondInput!)
        }`
      );
      setSecondInput(null);
      setOperator(false);
      setOperatorSymbol(null);
    }
    if (operatorSymbol == "%") {
      setFirstInput(`${parseFloat(firstInput!) % parseFloat(secondInput!)}`);
      setSecondInput(null);
      setOperator(false);
      setOperatorSymbol(null);
    }
  };

  const handleClear = () => {
    setFirstInput(null);
    setSecondInput(null);
    setOperator(false);
    setOperatorSymbol(null);
  };

  const handleDecimalPoint = () => {
    if (operator) {
      if (secondInput === null || secondInput.indexOf(".") === -1) {
        handleSecondInput(".");
      }
    } else {
      if (firstInput === null || firstInput.indexOf(".") === -1) {
        handleInput(".");
      }
    }
  };

  const handleDegreeButtonClick = (option: "rad" | "deg") => {
    if (option === "rad" && !isRadSelected) {
      setIsRadSelected(true);
    } else if (option === "deg" && isRadSelected) {
      setIsRadSelected(false);
    }
  };

  return (
    <div className="border w-full rounded-xl flex flex-col justify-center items-center p-3 h-96">
      <div className="w-full">
        <input
          type="text"
          className="hover:bg-zinc-100 text-right outline-none cursor-default w-full border rounded-md h-16 text-2xl px-3"
          placeholder={operator ? firstInput! : secondInput!}
          readOnly
          value={operator ? secondInput! || " " : firstInput! || " "}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      <div className="hidden w-full h-full pt-3 md:grid grid-cols-7 grid-rows-5 gap-2">
        <div className="flex hover:bg-zinc-200 justify-evenly items-center col-span-2 cursor-not-allowed bg-zinc-100 rounded-md content-center text-center text-zinc-400">
          <button
            className={`cursor-not-allowed px-3 rounded-md ${isRadSelected ? " " : ""}`}
            onClick={() => handleDegreeButtonClick("rad")}
          >
            rad
          </button>
          <p className="">|</p>
          <button
            className={`cursor-not-allowed px-3 ${isRadSelected ? "" : ""}`}
            onClick={() => handleDegreeButtonClick("deg")}
          >
            deg
          </button>
        </div>
        <OperatorButton
         isEnabled={false}
          content="x!"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
         isEnabled={false}
          content="("
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
         isEnabled={false}
          content=")"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          isEnabled={true}
          content="%"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          isEnabled={true}
          content="AC"
          type="operator"
          operator={operator}
          handlerFunction={() => handleClear()}
        />
        <OperatorButton
          isEnabled={false}
          content="sin"
          type="operator"
          operator={operator}
          handlerFunction={() => handleClear()}
        />
        <OperatorButton
          isEnabled={false}
          content="cos"
          type="operator"
          operator={operator}
          handlerFunction={() => handleClear()}
        />
        <OperatorButton
          isEnabled={false}
          content="tan"
          type="operator"
          operator={operator}
          handlerFunction={() => handleClear()}
        />
        <CalculatorButton
          content="7"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="8"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="9"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="÷"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("÷")}
        />
        <OperatorButton
         isEnabled={false}
          content="arcsin"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
         isEnabled={false}
          content="arccos"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
         isEnabled={false}
          content="arctan"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <CalculatorButton
          content="4"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="5"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="6"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="x"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("x")}
        />
        <OperatorButton
          content="π"
          isEnabled={false}
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          content="e"
          isEnabled={false}
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          content="√"
          isEnabled={false}
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="2"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="3"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="-"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("-")}
        />
        <OperatorButton
          content="log"
          isEnabled={false}
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          content="ln"
          isEnabled={false}
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          content="^"
          isEnabled={false}
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          isEnabled={true}
          content="."
          type="operator"
          operator={operator}
          handlerFunction={() => handleDecimalPoint()}
        />
        <CalculatorButton
          content="0"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="="
          type="equal"
          operator={operator}
          handlerFunction={() => handleSumbmit()}
        />
        <OperatorButton
          isEnabled={true}
          content="+"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("+")}
        />
      </div>
      <div className="md:hidden grid w-full h-full pt-3 grid-cols-4 grid-rows-5 gap-2">
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
        <OperatorButton
          isEnabled={true}
          content="%"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("%")}
        />
        <OperatorButton
          isEnabled={true}
          content="AC"
          type="operator"
          operator={operator}
          handlerFunction={() => handleClear()}
        />
        <CalculatorButton
          content="7"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="8"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="9"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="÷"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("÷")}
        />
        <CalculatorButton
          content="4"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="5"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="6"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="x"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("x")}
        />
        <CalculatorButton
          content="1"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="2"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <CalculatorButton
          content="3"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="-"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("-")}
        />
        <OperatorButton
          isEnabled={true}
          content="."
          type="operator"
          operator={operator}
          handlerFunction={() => handleDecimalPoint()}
        />
        <CalculatorButton
          content="0"
          type="number"
          operator={operator}
          firstHandlerFunction={handleSecondInput}
          secondHandlerFunction={handleInput}
        />
        <OperatorButton
          isEnabled={true}
          content="="
          type="equal"
          operator={operator}
          handlerFunction={() => handleSumbmit()}
        />
        <OperatorButton
          isEnabled={true}
          content="+"
          type="operator"
          operator={operator}
          handlerFunction={() => handleOperator("+")}
        />
      </div>
    </div>
  );
};

export default Calculator;
