import "./App.css";
import {useState} from "react"
import Movie from "./Movie";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function App() {
  const initialMovies=[{pic:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",nama:"The Avengers",rating:"8",summary:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name"},
                {pic:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",nama:"Baahubali",rating:"9",summary:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy"},
                {pic:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",nama:"Interstellar",rating:"8.6",summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans"},     
                {pic:"https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",nama:"M.S. Dhoni: The Untold Story",rating:"9.2",summary:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams"},
                {pic:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",nama:"King Kong",rating:"8.8",summary:"Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie"},
                ]

    const [nama,setNama] = useState("")
    const [pic,setPic] = useState("")
    const [rating,setRating] = useState("")
    const [summary,setSummary] = useState("")
    const [movieList,setMovieList] = useState(initialMovies)


  // const names = [
  //   {pic:"https://1.bp.blogspot.com/-qES8XCPCoMs/YPenPwxubUI/AAAAAAAAFdg/txOuXwSLWGQLT-QGAh98a-8m26UjMU9XQCLcBGAsYHQ/w1600/20210721_101605.jpg",name:"Mani"},{pic:"https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805156?s=170667a",name:"Vani"},{pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Image.jpg",name:"Rani"}]
  return (
    <div>
    <div className="add">
        <TextField varient="contained" className="mt" onChange={(e)=>setNama(e.target.value)} placeholder="Enter Movie Name" />
        <TextField varient="contained" className="mt" onChange={(e)=>setPic(e.target.value)} placeholder="Enter Movie Pic Url" />
        <TextField varient="contained" className="mt" onChange={(e)=>setRating(e.target.value)} placeholder="Enter Movie rating" />
        <TextField varient="contained" className="mt" onChange={(e)=>setSummary(e.target.value)} placeholder="Enter Movie Summary" />
        <Button variant="contained" onClick={()=>{
        const newMovie = {
          nama,
          pic,
          rating,
          summary
        }
        console.log(newMovie)
        setMovieList([...initialMovies,newMovie])
        }
        }>Add Movie</Button>
        </div>
        <div className="app">
    {/* <AddColor /> */}
    {movieList.map(({pic,nama,rating,summary})=><Movie pic={pic} nama={nama} rating={rating} summary={summary} />)}
      {/* {names.map(({pic,name})=><Show pic={pic} name={name} />)} */}
    </div>
    </div>
  );
}


















// function AddColor() {
//   const [color,setColor] = useState("red")
//   const styles = {backgroundColor:color}
//   const [colorList,setColorList] = useState(["pink","yellow","green"])
//   return(
//     <div>
//       <input value={color} onChange={(event)=> setColor(event.target.value) } style={styles} placeholder="Pick the Color" name="value" />
//       <button onClick={()=>setColorList([...colorList,color])}>Add Color</button>
//       {colorList.map((clr)=><ColorBox clr={clr} />)}
//     </div>
//   )
// }


// function ColorBox({clr}) {
//   const styles1={
//     height:"20px",
//     width:"250px",
//     backgroundColor:clr,
//     marginTop:"10px"
//   }
//   return(
//     <div style={styles1}></div>
//   )
// }


// function Show({pic,name}) {
//   return(
//   <div>
//     <img src={pic} alt={pic}/>
//     <p>{name}</p>
//   </div>
//   )
// }