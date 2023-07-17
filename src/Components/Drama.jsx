import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imageUrl } from '../Constants/constants'
import './Drama.css'

const Drama = () => {
    const [drama, setdrama] = useState([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=70ec02309ba7b792191c996397f7f86f&with_genres=18")
        .then((res) => {
          setdrama(res.data.results)
        }) 
    }, [])
    
  return (
    <div className="container" >
      {drama.map((item) => (
        <div className="card" key={item.id}>
          <img className="card-image" src={imageUrl + item.backdrop_path} alt="Card" />
          <div className="card-title">{item.original_title}</div>
        </div>
      ))}
    </div>
  )
}

export default Drama