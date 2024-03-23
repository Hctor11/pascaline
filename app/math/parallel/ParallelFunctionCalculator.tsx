import React from 'react'
import PersonalizedButton from '@/components/Utilities/PersonalizedButton'
import PersonalizedInput from '@/components/Utilities/PersonalizedInput'
import Latex from 'react-latex-next'

const ParallelFunctionCalculator = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-2">
        <span>
          Linear function: {" "}
          <div className="">
            <Latex>
              $y =\; $
            </Latex>
          <PersonalizedInput
            placeholder="a"
            name="x"
            value={1}
          />
          <Latex>
              $x$
            </Latex>
          </div>
        </span>
      </div>
    </div>
  )
}

export default ParallelFunctionCalculator