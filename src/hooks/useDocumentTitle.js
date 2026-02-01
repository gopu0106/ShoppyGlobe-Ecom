import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ShoppyGlobe`;
  }, [title]);
};

export default useDocumentTitle;
