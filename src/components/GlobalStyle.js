import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`  
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body { 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #2B2B2B;   
  background: radial-gradient(circle, rgba(218,226,224,1) 0%, rgba(213,220,220,1) 30%, rgba(184,206,203,1) 63%, rgba(201,208,210,0.9977124638918067) 100%);
}

h1,
h2,
p {
  margin-top: 0px;
  margin-bottom: 0px;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
}

li {
  text-decoration: none;
}
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Container = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Header = styled.header`
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const HeaderNavList = styled.ul`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const HeaderNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 32px;
  text-decoration: none;
  color: #212121;
  &.active {
    color: orangered;
  }
`;

export const Main = styled.main`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ListMovies = styled.ul`
  margin-top: 20px;
  padding-left: 20px;
  list-style-position: inside;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
  border-radius: 10px;
`;

export const MovieLink = styled(Link)`
  font-size: 26px;
  text-decoration: none;
  color: #1b1b1d;
`;

export const MainInfoWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
  border-radius: 10px;
  overflow: hidden;
`;

export const ImgPoster = styled.img`
  width: 360px;
  height: auto;
`;

export const InfoWrap = styled.div`
  padding: 26px;
`;

export const TitleWrap = styled.div`
  margin-bottom: 20px;
`;

export const OverviewWrap = styled.div`
  margin-bottom: 20px;
`;

export const TitleMovies = styled.h1`
  margin-bottom: 10px;
  font-size: 38px;
`;

export const SubTitleMovies = styled.h2`
  margin-bottom: 10px;
  font-size: 30px;
`;

export const TextMovie = styled.p`
  font-size: 20px;
`;

export const LinkBtn = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 5px;
  width: 150px;
  height: 40px;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
  border-radius: 5px;
  color: #2b2b2b;
  &:hover,
  :focus {
    background-color: #a6afb0;
    color: #000000;
  }
`;

export const AddWrap = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
  border-radius: 10px;
`;

export const AddTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LinkBtnWrap = styled.ul`
  display: flex;
  gap: 48px;
  list-style: none;
`;

export const CastWrap = styled.ul`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 30px;
  list-style: none;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
  border-radius: 10px;
  overflow: hidden;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 120px) / 5);
`;

export const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
`;

export const Character = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const InputSearch = styled.input`
  margin-right: 10px;
  padding: 4px;
  font-size: 22px;
  width: 280px;
  height: 32px;
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
`;

export const SearchBtn = styled.button`
  font-size: 22px;
  font-weight: 600;
  width: 100px;
  height: 32px;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
  border-radius: 5px;
  color: #2b2b2b;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 2px;
  &:hover,
  :focus {
    background-color: #a6afb0;
    color: #000000;
  }
`;

export const ReviewsList = styled.ul`
  /* padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 30px; */
  /* list-style: none; */
  padding: 10px 30px 10px;
  box-shadow: 3px 3px 15px 1px rgba(255, 68, 0, 1);
  border-radius: 10px;
`;
