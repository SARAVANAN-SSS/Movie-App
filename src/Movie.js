import react from "react"
import "./Movie.css"
import "./App.css"
import { useState } from "react"
import { Counter } from "./Counter"

export default function Movie({pic,nama,rating,summary}) {

    const styles = {color: rating < 8.5?"red":"green"}
    // const pic = "https://www.movie-list.com/img/posters/big/avengersendgame.jpg";
    // const nama = "kgf";
    // const rating = "4✨";
    // const summary = "this is nice film";

    const [show,setShow] = useState(true)
    const styles1 = {display: show?"block":"none"}
    const [state,setState] = useState(true)
    const styles2 = {display: state?"block":"none"}

    return(
    <div style={styles2} className="first">
    <div>
    <img src={pic} alt="name" />
    </div>
    <div className="second">
    <h2>{nama}</h2>
    <p style={styles}>⭐{rating}</p>
    </div>
    <button onClick={()=>setShow(!show)} className="togglebtn">Toggle Description</button>
    <p style={styles1} className="summary">{summary}</p>
    {/* {show?<p className="summary">{summary}</p>:""} */}
    <Counter />
    <button className="d-btn" onClick={() => setState(false)}>Delete</button>

    </div>
)
}


