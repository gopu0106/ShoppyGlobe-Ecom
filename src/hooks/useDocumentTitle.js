import { useEffect } from 'react';

// Custom hook to dynamically set page title
// Usage: useDocumentTitle('Home Page')
const useDocumentTitle = (title) => {
  useEffect(() => {
    // Update browser tab title when title prop changes
    document.title = title;
  }, [title]); // Re-run when title changes
};

export default useDocumentTitle;
