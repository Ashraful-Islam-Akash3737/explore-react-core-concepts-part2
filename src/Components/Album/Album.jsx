// import React from 'react'
import './Album.css'

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
        <h3>Albums: {albums.length}</h3>
        <div className="box-container">
            
            {
                albums.map((album)=><div className='box'>
                    <h4>Album Id: {album.albumId}</h4>
                    <h4>Id: {album.id}</h4>
                    <h3>Name: {album.title}</h3>
                    <img className='img-container' src={album.url} alt="" />
                    <img className='img-container' src={album.thumbnailUrl} alt="" />
                </div>)
            }
        </div>


    </div>
  )
}
