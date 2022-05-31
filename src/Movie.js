import react from "react"
import "./Movie.css"

export default function Movie({pic,nama,rating,summary}) {

    const styles = {color: rating < 8.5?"red":"green"}
    // const pic = "https://www.movie-list.com/img/posters/big/avengersendgame.jpg";
    // const nama = "kgf";
    // const rating = "4✨";
    // const summary = "this is nice film";
    return(
    <div className="first">
    <div>
    <img src={pic} alt="name" />
    </div>
    <div className="second">
    <h2>{nama}</h2>
    <p style={styles}>⭐{rating}</p>
    </div>
    <p className="summary">{summary}</p>
    </div>
    )
}