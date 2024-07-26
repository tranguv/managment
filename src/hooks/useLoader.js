import { useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderProvider';

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return {
    isLoading: context.isLoading,
    loaderMessage: context.loaderMessage,
    showLoader: context.showLoader,
    hideLoader: context.hideLoader,
  };
};
