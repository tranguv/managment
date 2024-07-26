import React, { createContext, useState } from 'react';
import { Spinner } from '../layouts';

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const showLoader = (message) => {
    setLoaderMessage(message);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      {isLoading && <Spinner loaderMessage={loaderMessage}></Spinner>}
    </LoaderContext.Provider>
  );
};
