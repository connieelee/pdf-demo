import React from 'react';

const Page = ({ pageNumber, totalPages, children }) => (
  <div className="page">
    {children}
    <span className="page-count">
      Page {pageNumber} of {totalPages}
    </span>
  </div>
);

export default Page;
