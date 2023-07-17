import React, { useEffect, useState } from 'react'
import axios, {} from "axios"
import { API_KEY, imageUrl } from "../../Constants/constants"
import './Trending.css'

function Trending() {
    const [data, setdata] = useState([])
    useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US'`).then((response)=>{

      setdata(response.data.results)
    })
      
    }, [])

    console.log(data);
  return (
    <div className="container" >
    {data.map((item) => (
      <div className="card" key={item.id}>
        <img className="card-image" src={imageUrl + item.backdrop_path} alt="Card" />
        <div className="card-title">{item.title}</div>
      </div>
    ))}
  </div>
  )
}

export default Trending