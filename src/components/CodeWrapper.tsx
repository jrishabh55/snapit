import React, { FC, useMemo } from 'react';
import Box from '../tailwind/Box/Box';
import MacWrapper from './MacWrapper/MacWrapper';

interface CodeWrapperProps {
  id: string;
  enable?: boolean;
  bgColor?: string;
}

const CodeWrapper: FC<CodeWrapperProps> = ({ id, children, enable = true, bgColor = 'rgb(76, 165, 242)' }) => {
  const styles = useMemo(
    () => ({
      background: `0% 0% / auto repeat ${bgColor}`,
    }),
    [bgColor]
  );
  if (!enable) {
    return (
      <>
        <Box style={styles} rounded="md" className="p-0 w-full" id={id}>
          {children}
        </Box>
      </>
    );
  }
  return (
    <Box style={styles} rounded="md" className="p-12 w-full" id={id}>
      <MacWrapper>{children}</MacWrapper>
    </Box>
  );
};

export default CodeWrapper;
