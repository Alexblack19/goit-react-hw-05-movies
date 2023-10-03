import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api/movies-api';
import { ReviewsList, Author, Content, AnyReviews } from '../components/GlobalStyle';


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
        <ReviewsList>
          {reviews.map(({ author, content }) => {
            return (
              <li key={author}>
                <Author>{author}</Author>
                <Content>{content}</Content>
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <AnyReviews>We don't have any reviews for this movie.</AnyReviews>
      )}
    </>
  );
};

export default Reviews;
