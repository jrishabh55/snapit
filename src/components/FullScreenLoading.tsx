/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { Box } from 'tailwind';

const Loading = () => {
  useEffect(() => {
    const el = document.querySelector('body');
    el?.classList.add('overflow-hidden');
    return () => {
      el?.classList.remove('overflow-hidden');
    };
  }, []);
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
