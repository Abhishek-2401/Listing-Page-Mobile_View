import React, { useEffect, useState } from 'react';

const ListingPage = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {viewportWidth < 768 ? (
        
        <p>This is the mobile view</p>
      ) : (
        
        <p>This is for medium and large screens</p>
      )}
    </div>
  );
};

export default ListingPage;
