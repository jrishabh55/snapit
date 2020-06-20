import React, { FC, useMemo } from 'react';
import Box from './tailwind/Box/Box';
import MacWrapper from './MacWrapper/MacWrapper';

interface CodeWrapperProps {
  enable?: boolean;
  bgColor?: string;
}

const CodeWrapper: FC<CodeWrapperProps> = ({ children, enable = true, bgColor = 'rgb(76, 165, 242)' }) => {
  const styles = useMemo(
    () => ({
      background: `0% 0% / auto repeat ${bgColor}`,
    }),
    [bgColor]
  );
  if (!enable) {
    return <>{children}</>;
  }
  return (
    <Box style={styles} rounded="md" className="p-12" id="codeation-code-wrapper">
      <MacWrapper>{children}</MacWrapper>
    </Box>
  );
};

export default CodeWrapper;
