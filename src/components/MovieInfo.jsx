import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import poster from '../images/no-poster.png';
import {
  MainInfoWrap,
  ImgPoster,
  InfoWrap,
  TitleWrap,
  OverviewWrap,
  TitleMovies,
  SubTitleMovies,
  TextMovie,
  AddWrap,
  AddTitle,
  LinkBtn,
  LinkBtnWrap
} from './GlobalStyle';

export const MovieInfo = ({ movie }) => {
  return (
    <>
      <MainInfoWrap>
        <ImgPoster
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : poster
          }
          alt=""
        />
        <InfoWrap>
          <TitleWrap>
            <TitleMovies>
              {movie.title} {`(${movie.release_date.slice(0, 4)})`}
            </TitleMovies>
            <TextMovie>
              User score: {Math.round(movie.vote_average * 10)}%
            </TextMovie>
          </TitleWrap>
          <OverviewWrap>
            <SubTitleMovies>Overview</SubTitleMovies>
            <TextMovie>{movie.overview}</TextMovie>
          </OverviewWrap>
          <div>
            <SubTitleMovies>Genres</SubTitleMovies>
            <TextMovie>
              {movie.genres.map(genre => genre.name).join()}
            </TextMovie>
          </div>
        </InfoWrap>
      </MainInfoWrap>
      <AddWrap>
        <AddTitle>Additional information</AddTitle>
        <LinkBtnWrap>
          <li>
            <LinkBtn to="cast">Cast</LinkBtn>
          </li>
          <li>
            <LinkBtn to="reviews">Reviews</LinkBtn>
          </li>
        </LinkBtnWrap>
      </AddWrap>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
