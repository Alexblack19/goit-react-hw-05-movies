import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../api/movies-api';
import profile from '../images/no-person-profile.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <ul>
          {cast.map(({ name, character, profile_path }) => {
            return (
              <li key={name}>
                <img
                  src={
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/original/${profile_path}`
                      : profile
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
