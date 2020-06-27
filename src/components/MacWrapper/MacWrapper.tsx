import React, { FC } from 'react';

import './MacWrapper.scss';
import Box from 'components/tailwind/Box/Box';

interface MacWrapperProps {
  dark?: boolean;
}

const MacWrapper: FC<MacWrapperProps> = ({ children, dark = true }) => {
  return (
    <Box display="block" shadow="normal" rounded="md" className="window bg-gray-800">
      <Box className="titlebar py-2 align-center">
        <Box className="buttons pl-2 align-center">
          <Box rounded="lg" className="w-3 h-3 mr-1 bg-red-600 border-red-700 hover:bg-red-700" />
          <Box rounded="lg" className="w-3 h-3 mr-1 bg-orange-400 border-orange-500 hover:bg-orange-500" />
          <Box rounded="lg" className="w-3 h-3 mr-1  bg-green-500 border-green-600 hover:bg-green-600" />
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default MacWrapper;
