// import React from 'react'

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>

        <h3 >Counter: {count}</h3>
        <button onClick={()=>{
            setCount((count)=> count + 1)
        }}>Update Me</button>
    </div>
  )
}
