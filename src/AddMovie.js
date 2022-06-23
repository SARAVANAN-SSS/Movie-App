import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

export function AddMovie({ movieList, initialMovies, setMovieList }) {
  const [nama, setNama] = useState("");
  const [pic, setPic] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const history = useHistory();

  return (
    <div>
      <div className="add">
        <TextField varient="standard" className="mt" onChange={(e) => setNama(e.target.value)} label="Enter Movie Name" />
        <TextField varient="standard" className="mt" onChange={(e) => setPic(e.target.value)} label="Enter Movie Pic Url" />
        <TextField varient="standard" className="mt" onChange={(e) => setRating(e.target.value)} label="Enter Movie rating" />
        <TextField varient="standard" className="mt" onChange={(e) => setSummary(e.target.value)} label="Enter Movie Summary" />
        <Button variant="contained" onClick={() => {
          const newMovie = {
            nama,
            pic,
            rating,
            summary
          };
          console.log(newMovie);
          setMovieList([...initialMovies, newMovie]);
          history.push("/Movies");
        }}>Add Movie</Button>
      </div>
    </div>

  );
}
