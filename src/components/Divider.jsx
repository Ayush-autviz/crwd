import React from 'react';

const Divider = () => {
  return (
    <div className="w-[90%] h-[1px] my-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-px"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#868181] to-transparent h-[1px] w-3/4 mx-auto"></div>
    </div>
  );
};

export default Divider;