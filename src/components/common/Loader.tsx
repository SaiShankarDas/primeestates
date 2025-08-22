import React from 'react';

const Loader: React.FC = () => (
  <div className="flex justify-center items-center min-h-[calc(100vh-180px)]">
    <div className="w-16 h-16 border-4 border-slate-200 border-t-royal rounded-full animate-spin"></div>
  </div>
);

export default Loader;
