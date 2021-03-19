import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 50px;
`

function Layout({ children }) {
  return <Main>{children}</Main>;
}

export default Layout;
