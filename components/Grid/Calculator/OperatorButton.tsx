"use client"

interface props {
    handlerFunction: React.MouseEventHandler<HTMLButtonElement>;
    content: string;
    type: "operator" | "number" | "equal";
    operator: boolean,
    isEnabled: boolean
  }
  

const OperatorButton = ({ handlerFunction, content, type, isEnabled}: props) => {
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
        } ${isEnabled ? "" : "bg-gray-300 cursor-not-allowed opacity-50"}`}
        onClick={handlerFunction}
        disabled={!isEnabled}
      >
        {content}
      </button>
    </>
  )
}

export default OperatorButton