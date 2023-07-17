import React, { useEffect, useState } from 'react'
import './Action.css'
import axios from 'axios'
import { imageUrl } from '../Constants/constants'


function Action() {
  const [action, setAction] = useState([])

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=70ec02309ba7b792191c996397f7f86f&with_genres=28")
      .then((res) => {
        setAction(res.data.results)
      })
  }, [])

  return (
    <div className="container" >
      {action.map((item) => (
        <div className="card" key={item.id}>
          <img className="card-image" src={imageUrl + item.backdrop_path} alt="Card" />
          <div className="card-title">{item.original_title}</div>
        </div>
      ))}
    </div>
  )
}

export default Action