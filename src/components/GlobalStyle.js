import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const Main = styled.main`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  width: 1400px;
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

export const HomeList = styled.ul`
  list-style-position: inside;
`;
