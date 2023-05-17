import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../axios';
import requests from '../request';
// import movieTrailer from 'movie-trailer';
// import YouTube from 'react-youtube';

function Banner() {
  const [movie, setMovie] = useState([]);
//   const [trailerurl, setTrailerurl] = useState("");

  useEffect(() => {
      
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals) ;

        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
       
    } fetchData();

  }, []) 


          
  
    return (
      <div>
       <header className="banner"
      
       style={{
           backgroundSize: "cover",
           backgroundImage: `url(
               "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
           )`,
           backgroundPosition: "center-center",
       }}
       >

           <div className="banner__contents">

               <h1 className="banner__title">
                   {movie?.title || movie?.name || movie?.original_name}
               </h1>
               <div className="banner__buttons">

                   <button className="banner__button">
                     Play
                   </button>
                   <button className="banner__button">
                     My List 
                   </button>

               </div>
              <h1 className="banner__description">
               {movie?.overview}
                  {/* {truncate(movie?.overview, 150)} */}

              </h1>
           </div>
         
         <div className="banner--fadeBottom"></div>
         
       </header>
      
    
      </div>
    )
}

export default Banner
