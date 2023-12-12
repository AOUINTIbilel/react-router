import React,{useState} from "react";
import { Route , Routes } from "react-router-dom";
import Filter from "./Component/Filter";
import MovieList from "./Component/MovieList";
import BasicModal from "./Component/addMovie";
import Movie from "./Movie";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Movies from "./Pages/Movies/Movies";
import Trailer from "./Pages/Trailer/Trailer";


function App() { 

  const [movies , setMovies] = useState(Movie)
  const [search , setSearch] = useState("")
  const [ran , setRan] = useState (1)
  // console.log("this srach ", ran)

 
  const add =(NewMov)=>{
    // console.log("test : " ,NewMov)
    setMovies([...movies , NewMov])
  }
  
  
  return (
  
    <div className="App">

      <Filter setSearch={setSearch} setRan={setRan}/>
      <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/contact" element={<Contact /> } />
      <Route path="/add" element={<BasicModal obj={add}/>} />
      <Route path="/movies" element={<Movies movies={movies}  search={search} ran={ran} />} />
      <Route  path="/trailer/:id" element={<Trailer movies={movies} />} />
      <Route path="*" element={<img style={{width:'100%'}} src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png" alt="NotFound" />} />
      </Routes>


    </div>
  );
}

export default App;


