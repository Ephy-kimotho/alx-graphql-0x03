import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

function NotFound() {
  return (
    <div>
      <ErrorBoundary />
      <h1 className="text-white">Error 404 page not found</h1>
    </div>
  );
}

export default NotFound;
