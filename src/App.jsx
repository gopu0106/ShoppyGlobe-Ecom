import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

// Main App component - sets up routing for the entire application
function App() {
  return (
    <div className="app">
      {/* RouterProvider enables navigation between different pages */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
