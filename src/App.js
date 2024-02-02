import Nav from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./components/Details";

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(null);
  const getMovies = async() =>{
    const movies = await axios.get('https://www.omdbapi.com/?apikey=6e30c4b4&s=venom&type=series')
    setMovies(movies.data.Search)
  }
  useEffect(()=>{
    getMovies()
  },[])

  const filterMovies = () =>{
    if(search){
    const filtredMovie = movies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()))
    setMovies(filtredMovie)
    }else{
      console.log('movie not found')
    }
  }

  return (
    <BrowserRouter>
    <Nav setSearch={setSearch} />
    <Routes>
    <Route path="/" element={<Home movies={movies} filterMovies={filterMovies} search={search}/>}/>
    <Route path="/Details/:id" element={<Details />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
