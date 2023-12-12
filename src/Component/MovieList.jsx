import React from 'react';
import MediaCard from './MovieCard';
import './cart.css';


const MovieList = ({Movie , search , ran}) => {
    //console.log("Movielist : " , Movie)
  return (
    <div className='cart'>
        {Movie
        .filter(el=>el.Titre.toLowerCase().includes(search.toLowerCase().trim()) && el.rang >= ran)
        .map((elm , i) => <MediaCard ob={elm} key={i}  />)}
        
    </div>  
   
  )
};

export default MovieList