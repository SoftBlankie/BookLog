import React, { useState, useEffect } from 'react';

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
