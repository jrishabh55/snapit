import React from 'react';
import { Box } from 'tailwind';

const Loading = () => {
  return (
    <Box
      position="absolute"
      className="bg-blue-900 tracking-widest overflow-hidden select-none bg-opacity-75 z-50 w-screen h-screen justify-center items-center"
    >
      <Box className="text-blue-200 font-mono uppercase">Loading();</Box>
    </Box>
  );
};

export default Loading;
