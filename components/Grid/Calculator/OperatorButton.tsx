interface props {
    handlerFunction: () => void;
    content: string;
    type: "operator" | "number" | "equal";
    operator: boolean
  }
  

const OperatorButton = ({ handlerFunction, content, type}: props) => {
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
        onClick={handlerFunction}
      >
        {content}
      </button>
    </>
  )
}

export default OperatorButton