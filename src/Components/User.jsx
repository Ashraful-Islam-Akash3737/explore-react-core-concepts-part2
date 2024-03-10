// import React from 'react'

export default function User({user}) {
    const {name, username, email, address, phone} = user;
    const {suite, street, city} = address;
  return (
    <div  className='box'>
        <h3>User-name: {username}</h3>
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        <p>Address: {suite} {street} {city} </p>
        <p>Phone: {phone}</p>
    </div>
  )
}
