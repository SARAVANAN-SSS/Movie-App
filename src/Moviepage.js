import Movie from "./Movie";

export function Moviepage({ movieList }) {
  return (
    <div className="app">
      {/* <AddColor /> */}
      {movieList.map(({ pic, nama, rating, summary }, index) => <Movie index={index} pic={pic} nama={nama} rating={rating} summary={summary} />)}
      {/* {names.map(({pic,name})=><Show pic={pic} name={name} />)} */}
    </div>
  );
}
