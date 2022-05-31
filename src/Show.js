import react from "react"
import "./Show.css"


export default function Show({pic,name}) {
    return(
        <div>
            <img src={pic} alt="pic" />
            <p>{name}</p>
        </div>
    )
}