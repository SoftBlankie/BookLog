import React, { useState, useEffect } from 'react';

const Layout = () => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <div id="root">
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div>

        </div>
      )}
    </div>
  );
};

export default Layout;
