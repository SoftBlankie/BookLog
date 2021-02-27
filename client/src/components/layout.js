import React, { useState, useEffect } from 'react';
import { Loader, Nav } from '@components';

const Layout = () => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <div id="root">
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div>
          <Nav />
        </div>
      )}
    </div>
  );
};

export default Layout;
