import { useState } from "react"

const Calculator = () => {

  const [firstInput, setFirstInput] = useState<null | number>(null)
  const [secondInput, setSecondInput] = useState<null | number>(null)


  return (
    <div className="border rounded-xl flex justify-center items-center p-2 h-96">
      <input type="text" className="w-full border rounded-md h-12 text-xl px-2" placeholder=""/>
      <div className="">
        <button type="button" className=""></button>
      </div>
    </div>
  )
}

export default Calculator