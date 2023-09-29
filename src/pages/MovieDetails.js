// import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  // useEffect(() => {
  //   //HTTP
  // }, []);
  const {movieId} = useParams();
  
  return <>MovieDetails: {movieId}</>;
};

export default MovieDetails;
