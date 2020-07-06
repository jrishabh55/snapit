import React, { FC, memo } from 'react';
import Box from 'tailwind/Box/Box';

interface HeaderProps {
  title: string;
  className?: string;
}

const Header: FC<HeaderProps> = memo(({ title, className }) => {
  return (
    <Box
      componentType="header"
      display="block"
      rounded="md"
      className={`text-4xl font-semibold text-center w-100 p-2 my-2 ${className}`}
    >
      {title}
    </Box>
  );
});

export default Header;
