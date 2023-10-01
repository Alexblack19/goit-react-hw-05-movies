import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Main,
  Container,
  Header,
  HeaderNavList,
  HeaderNavLink,
  HeaderWrap,
} from './GlobalStyle';
import { GiFilmSpool } from 'react-icons/gi';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderWrap>
            <GiFilmSpool fill="#201e1e" size={60} />
            <nav>
              <HeaderNavList>
                <li>
                  <HeaderNavLink to="/">Home</HeaderNavLink>
                </li>
                <li>
                  <HeaderNavLink to="/movies">Movies</HeaderNavLink>
                </li>
              </HeaderNavList>
            </nav>
          </HeaderWrap>
        </Container>
      </Header>

      <Main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
