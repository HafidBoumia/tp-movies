import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Details() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async() =>{
        const movie = await axios.get(`https://www.omdbapi.com/?apikey=6e30c4b4&i=${id}`)
        setMovie(movie.data)
    }

    useEffect(()=>{
        getMovie()
    },[])

    return (
        <>
        {movie && (
        <div className="w-full ml-8 mt-8">
            <img src={movie.Poster} className=" float-left"/> 
            <div className="flex flex-col space-x-8 mt-8 gap-4">
                <h2 className="ml-8"><span className="text-lg font-medium">Title :</span> {movie.Title}</h2>
                <h4><span className="text-lg font-medium">Writer :</span> {movie.Writer}</h4>
                <span><span className="text-lg font-medium">Genre :</span> {movie.Genre}</span>
                <span><span className="text-lg font-medium">Actors :</span> {movie.Actors}</span>
                <p><span className="text-lg font-medium">Plot :</span> {movie.Plot}</p>
                <span><span className="text-lg font-medium">Country :</span>{movie.Country} / Language :{movie.Language} </span>
                <span><span className="text-lg font-medium">Ratings :</span> <code>{movie.Ratings.Value}</code></span>
            </div>            
        </div>
        )}
        </>
    )
}