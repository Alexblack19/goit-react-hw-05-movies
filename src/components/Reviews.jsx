import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ author, content }) => {
            return (
              <li key={author}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
