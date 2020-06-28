import React, { FC, memo } from 'react';
import Box from './Box/Box';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = memo(({ title }) => {
  return (
    <Box
      componentType="header"
      display="block"
      rounded="md"
      className="text-4xl font-semibold text-center w-100 p-2 my-2 border-solid border-2"
    >
      {title}
    </Box>
  );
});

export default Header;
