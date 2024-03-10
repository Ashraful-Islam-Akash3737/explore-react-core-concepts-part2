// import React from 'react'
import '../Components/User.css'

import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
  return (
    <div className='box-container'>
        <h3>Users: {users.length}</h3>
        {
            users.map((user)=><h3 className='box'>{user.name}</h3>)
        }
    </div>
  )
}

/**
 * 1. declare a state to hold the data
 * 2.useEffect with call back and dependency array
 * 3.use fetch to load data
 */
