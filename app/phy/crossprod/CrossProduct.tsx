"use client"

import React from 'react'
import PersonalizedButton from '@/components/Utilities/PersonalizedButton'
import { useState } from 'react'

const CrossProduct = () => {

    const [vector1, setVector1] = useState<string>('');
    const [vector2, setVector2] = useState<string>('');
    const [result, setResult] = useState<null | number[]>(null);
    const [error, setError] = useState<string>('')

    const calculateCrossProduct = () => {
        const vec1 = vector1.split(',').map(Number);
        const vec2 = vector2.split(',').map(Number);
    
        if (vec1.length !== 3 || vec2.length !== 3 || vec1.includes(NaN) || vec2.includes(NaN)) {
            setError('Por favor, ingrese vectores de 3 componentes válidos.');
            setResult(null);
            return;
          }
    
        const crossProduct = [
          vec1[1]*(vec2[2] - vec1[2]),
          vec1[2]*(vec2[0] - vec1[0]),
          vec1[0]*(vec2[1] - vec1[1]),
        ];
    
        setResult(crossProduct);
        setError('');
      };


  return (
    <>
      <div className='my-2'>
        <label>Vector 1: </label>
        <input
        className={`p-2 h-8 border rounded-md ${error ? 'red' : 'black'}`}        
          type="text"
          placeholder='v1'
          value={vector1}
          onChange={(e) => setVector1(e.target.value)}
        />
      </div>
      <div>
        <label>Vector 2: </label>
        <input
        className={`p-2 h-8 border rounded-md ${error ? 'red' : 'black'}`}
          type="text"
          placeholder='v2'
          value={vector2}
          onChange={(e) => setVector2(e.target.value)}
        />
      </div>
      <PersonalizedButton content='Calculate' eventCallback={calculateCrossProduct}/>
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
      )}
      {result && (
        <div>
          <h2>Result:</h2>
          <p>{`[${result[0]}, ${result[1]}, ${result[2]}]`}</p>
        </div>
      )}
  </>
  )
}

export default CrossProduct