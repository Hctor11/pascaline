"use client"

interface props {
  firstHandlerFunction: Function;
  secondHandlerFunction: Function;
  content: string;
  type: "operator" | "number" | "equal";
  operator: boolean
}

const CalculatorButton = ({ firstHandlerFunction, secondHandlerFunction, content, type, operator }: props) => {
  return (
    <>
      <button
        type="button"
        className={` rounded-md border ${
          type == "operator"
            ? "bg-zinc-100 hover:bg-zinc-200"
            : type == "number"
            ? "bg-zinc-300 hover:bg-zinc-400"
            : "bg-black text-white hover:bg-zinc-800"
        }`}
        onClick={() => operator ? firstHandlerFunction(content) : secondHandlerFunction(content)}
      >
        {content}
      </button>
    </>
  );
};

export default CalculatorButton;
