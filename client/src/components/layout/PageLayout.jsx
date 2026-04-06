import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen lg:ml-[260px] pb-16 lg:pb-0 relative z-10 w-full lg:w-[calc(100%-260px)]">
      {children}
    </div>
  );
};

export default PageLayout;
