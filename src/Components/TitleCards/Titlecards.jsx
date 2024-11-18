import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const Titlecards = ({title,category}) => {

  const [apiData,setApiData]=useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWE3MTUzODc4NTZkMWVmOGJhZDE1NGE2ZWZiMWVmNSIsIm5iZiI6MTczMTczNDc1Ny40NDY0MzY2LCJzdWIiOiI2NzM4MjlhZmFkMjc4YTg5NjNmODM0NTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.un1xIIReAGwmdOLjyVt8PSMIRN87X82Do-OfE81ZQgU'
    }
  };
 
  const handleWheel =(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.delteY;
  }

  useEffect(() => {
     
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?
    language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`}className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.
              backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards;
