import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
    </div>
  );
};

export default SkeletonLoader;