import React from 'react'
import CardSlider from './CardSlider';

export default React.memo( function Slider({movies}) {
  const getMoviesFromRange=(from, to) => {
    return movies.slice(from, to)
  }
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)}/>
      <CardSlider title="New Releases" data={getMoviesFromRange(10,20)}/>
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20,30)}/>
      <CardSlider title="Popular on Netfilx" data={getMoviesFromRange(30,40)}/>
      <CardSlider title="Action Movies" data={getMoviesFromRange(40,50)}/>
      <CardSlider title="Epics" data={getMoviesFromRange(50,60)}/>
      <CardSlider title="Drama" data={getMoviesFromRange(60,70)}/>
      <CardSlider title="Top Rated" data={getMoviesFromRange(70,80)}/>
      <CardSlider title="Romantic Movies" data={getMoviesFromRange(80,90)}/>
      <CardSlider title="Hidden Gems" data={getMoviesFromRange(90,100)}/>
    </div>
  );
});
