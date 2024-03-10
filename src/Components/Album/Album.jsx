// import React from 'react'
import '../Album/Album.css'

import { useEffect, useState } from "react"

export default function Album() {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setAlbums(data))
    }, [])

  return (
    <div>
        <h3>albums</h3>
        <div className="box-container">
            <h3>Albums: {albums.length}</h3>
            {
                albums.map((album)=><div className='box'>
                    <h4>Id: {album.id}</h4>
                    <h3>Name: {album.title}</h3>
                    <img className='img-container' src={album.url} alt="" />
                </div>)
            }
        </div>


    </div>
  )
}
