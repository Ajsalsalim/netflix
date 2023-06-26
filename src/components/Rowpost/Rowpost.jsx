import React,{useEffect,useState} from 'react'
import Youtube from "react-youtube"
import "./rowpost.css"
import axios from "../../axios"
import { API_KEY } from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import { baseUrl } from '../../constants/constants'

function Rowpost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,seturlId]=useState([])
    useEffect(()=>{
        axios.get(props.url).then(response=>{
              console.log(response.data);
              setMovies(response.data.results)
        }).catch(err=>{
            alert("Network error")
        })   
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        console.log(id);
        axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            }else{
                console.log("array is empty");
            }
        })

      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':"poster"} alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>

                )}
            </div>
          {  urlId.key&&  <Youtube opts={opts} videoId={urlId.key}/>}

        </div>
    )
}

export default Rowpost
