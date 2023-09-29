import { useParams } from 'react-router-dom';

export const Cast = () => {
  // useEffect(() => {
  //   //HTTP
  // }, []);
  const { movieId } = useParams();
  return <div>Cast: {movieId}</div>;
};


