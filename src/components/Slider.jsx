import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container> 
     <CardSlider className="trending-now" data={getMoviesFromRange(0, 10)} title="Trending Now" />
    <CardSlider className="new-releases" data={getMoviesFromRange(10, 20)} title="New Releases" />
    <CardSlider className="blockbuster-movies" data={getMoviesFromRange(20, 30)} title="Blockbuster Movies" />
    <CardSlider className="popular-on-netflix" data={getMoviesFromRange(30, 40)} title="Popular on Netflix" />
    <CardSlider className="action-movies" data={getMoviesFromRange(40, 50)} title="Action Movies" />
    <CardSlider className="epics" data={getMoviesFromRange(50, 60)} title="Epics" />
    </Container>
  );
}

const Container = styled.div`
.trending-now .card {
  background-color: #ff4081;
  color: #098de5;
}

.new-releases .card {
  background-color: #673ab7;
  color: white;
}

.blockbuster-movies .card {
  background-color: #3f51b5;
  color: white;
}

.popular-on-netflix .card {
  background-color: #2196f3;
  color: white;
}

.action-movies .card {
  background-color: #00bcd4;
  color: white;
}

.epics .card {
  background-color: #009688;
  color: white;
}
`;