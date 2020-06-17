import React, { FC } from 'react';
import Box from './tailwind/Box/Box';

interface CodeWrapperProps {
  enable: boolean;
}

const CodeWrapper: FC<CodeWrapperProps> = ({ children, enable = true }) => {
  if (!enable) {
    return <>{children}</>;
  }
  return <Box className="p-4">{children}</Box>;
};

export default CodeWrapper;
