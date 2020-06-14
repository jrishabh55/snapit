import React, { FC } from 'react';
import Box from 'components/tailwind/Box/Box';

const Layout: FC = ({ children }) => {
  return (
    <Box display="block" className="container mx-auto">
      {children}
    </Box>
  );
};

export default Layout;
