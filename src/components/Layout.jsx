import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, HeaderNavList, HeaderNavLink } from './GlobalStyle';

export const Layout = () => {
  return (
    <div>
      <Header>
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
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
