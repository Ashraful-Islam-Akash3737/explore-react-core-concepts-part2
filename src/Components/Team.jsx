// import React from 'react'

import { useState } from "react"

export default function Team() {
    const [player, setPlayer] = useState(11);

    const addPlayer = () => {
        setPlayer((player) => player + 1)
    }
    const removePlayer = () => {
        player > 11 ? setPlayer((player) => player - 1) : "disabled"
    }
  return (
    <div>
        <h3>Players:{player}</h3>
        <br />
        <button onClick={addPlayer}>Add Player</button>
        <button onClick={removePlayer}>Remove Player</button>
    </div>
  )
}
