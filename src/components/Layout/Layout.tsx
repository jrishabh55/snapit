import React, { FC } from 'react';
import Box from 'components/tailwind/Box/Box';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Box shadowType="normal" className="bg-blue-500 pl-4 p-2 text-lg text-white font-bold mb-4">
        Rishabh Jain
      </Box>
      <Box display="block" className="container mx-auto">
        {children}
      </Box>
    </>
  );
};

export default Layout;
