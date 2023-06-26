import React,{ useEffect, useState } from 'react'
import axios from "../../../axios"
import {API_KEY,imageUrl} from "../../../constants/constants"
import "./banner.css"
function Banner() {
    const [movies, setMovies]= useState([])
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
   useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0]);
        setMovies(response.data.results)
       console.log( setCurrentMovieIndex(0));
    })

   },[])
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [movies]);

  const currentMovie = movies[currentMovieIndex];
    return (
        <div style={{backgroundImage:`url(${currentMovie?imageUrl+currentMovie.backdrop_path:""})`}} className='banner'>

           <div className='content'>
            <h1 className='title'>{currentMovie?currentMovie.title:""}</h1>
            <div className='banner_button'>
                <button className="button">play</button>
                <button className="button">My list</button>

            </div>
            <h1 className='description'>{currentMovie?currentMovie.overview:""}</h1>
 
           </div> 
        <div className="fade">
            
        </div>
        </div>
    )
}

export default Banner
