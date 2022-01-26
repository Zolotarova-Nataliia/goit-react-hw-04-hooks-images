import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

function Loader() {
  return (
    <MutatingDots heigth={100} width={100} color="grey" ariaLabel="loading" />
  );
}

export default Loader;
