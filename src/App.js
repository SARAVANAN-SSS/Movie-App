import "./App.css";
import {useState} from "react"
import {Switch,Link,Route,Redirect} from "react-router-dom"
import { color } from "@mui/system";
import { MovieDetails } from "./MovieDetails";
import { Notfound } from "./Notfound";
import { AddMovie } from "./AddMovie";
import { Moviepage } from "./Moviepage";
import { Home } from "./Home";
import { AddColor } from "./AddColor";

export default function App() {
  const initialMovies=[{pic:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",nama:"The Avengers",rating:"8",summary:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name",trailer : "https://www.youtube.com/embed/6ZfuNTqbHE8"},
  {pic:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",nama:"Baahubali",rating:"9",summary:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy",trailer :"https://www.youtube.com/embed/qD-6d8Wo3do"},
  {pic:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",nama:"Interstellar",rating:"8.6",summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans",trailer :
  "https://www.youtube.com/embed/FjwsY4s5ePA"},     
  {pic:"https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",nama:"M.S. Dhoni: The Untold Story",rating:"9.2",summary:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams",trailer :"https://www.youtube.com/embed/QgxvDORKzec" 
},
  {pic:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",nama:"King Kong",rating:"8.8",summary:"Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie",trailer :"https://www.youtube.com/embed/AYaTCPbYGdk"
},
  ]
  const [movieList,setMovieList] = useState(initialMovies)

  // const names = [
  //   {pic:"https://1.bp.blogspot.com/-qES8XCPCoMs/YPenPwxubUI/AAAAAAAAFdg/txOuXwSLWGQLT-QGAh98a-8m26UjMU9XQCLcBGAsYHQ/w1600/20210721_101605.jpg",name:"Mani"},{pic:"https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156?s=170667a",name:"Vani"},{pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Image.jpg",name:"Rani"}]
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ColorGame">Color Game</Link>
        </li>
        <li>
          <Link to="/Movies">Movie</Link>
        </li>
        <li>
          <Link to="/Films">Films</Link>
        </li>
        <li>
          <Link to="/Movies/Add">Add Movie</Link>
        </li>
        <li>
          <Link to="/TicTacToe">TicTacToe</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/ColorGame"><AddColor /></Route>
      <Route path="/TicTacToe"><TicTacToe /></Route>
      <Route path="/Movies/Add"><AddMovie movieList={movieList} setMovieList={setMovieList} initialMovies={initialMovies} /></Route>
      <Route path="/Movies/:id"><MovieDetails movieList={movieList} /></Route>
      <Route path="/Movies"><Moviepage movieList={movieList} /></Route>
      <Route path="/Films"><Redirect to ="/Movies" /></Route>
      <Route path="**"><Notfound /></Route>
    </Switch>
    </div>
  );
}

function TicTacToe() {
  return(
    <div className="b">
    <div className="b1">
    <Gamebox  />
    <Gamebox  />
    <Gamebox  />
    </div>
    <div className="b2">
    <Gamebox  />
    <Gamebox  />
    <Gamebox  />
    </div>
    <div className="b3">
    <Gamebox  />
    <Gamebox  />
    <Gamebox  />
    </div>
    </div>
  )
}


function Gamebox(){
  const [val,setVal] = useState(null)
  const styles = {color:val==="X"?"green":"red"}
  return(
    <div onClick={()=> setVal(val==="X"?"O":"X")} style={styles} className="game-box">{val}</div>
  )
}












// function Show({pic,name}) {
//   return(
//   <div>
//     <img src={pic} alt={pic}/>
//     <p>{name}</p>
//   </div>
//   )
// }