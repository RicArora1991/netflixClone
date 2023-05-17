// import React, { useEffect, useState } from 'react'
// import './Row.css'
// import axios from '../axios'
// import movieTrailer from 'movie-trailer';
// const baseUrl="https://image.tmdb.org/t/p/original/";

// function Row({title,fetchUrl,isLargeRow}){
//     const [movies, setMovies]=useState([]);
//     const [trailerUrl, setTrailerUrl]=useState("");
//     useEffect(()=>{
//         async function fetchData(){
// const request=await axios.get(fetchUrl);
// setMovies(request.data.results);
// return request;
//         }fetchData();

//     },[fetchUrl]);

    // const opts={
    //     height:"390",
    //     width:"100%",
    //     playervars:{
    //         autoplay:1,
    //     },
    // }
// const handleClick=(movie)=>{
//     if(trailerUrl){
//         setTrailerUrl("");
//     }else{
//         movieTrailer(movie?.name || "")
//         .then(url=>{
//             const urlparams=new URLSearchParams(new URL (url).search);
//             setTrailerUrl
//         })
//     }
// }
//     return(
//         <div className="row">
//             <h2>{title}</h2>
//             <div className="row_posters">
//              {movies.map(movie=>(
//                 <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseUrl}${isLargeRow? movie?.poster_path:movie?.backdrop_path}`} alt={movie.name} />
//                                 //  <img className="row_poster" src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />

//              ))}
//   </div>
         
//         </div>
//     )
// }
// export default Row














import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title , fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData(){
     const request = await axios.get(fetchUrl);
     console.log('the request',request);
     setMovies(request.data.results);
     return request;
    } fetchData();
    
  }, [fetchUrl]);
 
   const opts = {
     height: "390",
     width: "100%",
     playerVars: {
       autoplay:1,
     },
   }
    
   const handleClick = (movie) => {
    
     if(trailerUrl){
        console.log('the trailer url is',trailerUrl);
       setTrailerUrl("");
     }else{
      console.log('the trailer url is else',trailerUrl);
       movieTrailer(movie?.title || movie?.original_title || movie?.name || "")
       .then(url => {
         const urlParams = new URLSearchParams( new URL(url).search);
         console.log(urlParams);
         setTrailerUrl(urlParams.get('v'));

       }).catch(error => console.log(error))
     }
    
    }
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row" onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} >
            {!isHovering?            <div className="row__posters" >

{movies?.map(movie =>(


  <img 
  // {isMouseOver ? "black" : "white" }
  key={movie.id} id='displaydata'
  className={`row__poster  ${isLargeRow && "row__posterLarge"} `}
  onMouseOver={()=> handleClick(movie)}
 
  src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
  alt={movie.name}  />
  
))}
  <h1>Heading Tag</h1>
</div>: <div> {trailerUrl && <YouTube
             videoId={trailerUrl}  
             opts={opts}
            />}</div>
}
        {/* <div className="row" >
            

            <div className="row__posters" >

              {movies?.map(movie =>(
              

                <img 
                // {isMouseOver ? "black" : "white" }
                key={movie.id} id='displaydata'
                className={`row__poster  ${isLargeRow && "row__posterLarge"} `}
                onMouseOver={()=> handleClick(movie)}
               
                src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                alt={movie.name}  />
                
              ))}
                <h1>Heading Tag</h1>
            </div>
            {trailerUrl && <YouTube
             videoId={trailerUrl}  
             opts={opts}
            />}
        </div> */}
        </div>
         
      </div>
       
    )
}

export default Row;