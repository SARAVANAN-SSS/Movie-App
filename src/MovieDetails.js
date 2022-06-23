import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const history = useHistory();
  return (
    <div>
      title {id}
      <br /><br />
      <iframe width="727" height="409" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="second">
        <h2>{movie.nama}</h2>
        <p>⭐{movie.rating}</p>
      </div>
      <p>{movie.summary}</p>

      <Button variant="outlined" onClick={() => { history.goBack(); }}> <ArrowBackIosIcon />Back </Button>
      <Button variant="outlined" onClick={() => { history.goForward(); }}> Forward <ArrowForwardIosIcon /> </Button>

    </div>
  );
}
