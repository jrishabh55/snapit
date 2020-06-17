import React, { useMemo } from 'react';
import ReactSyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children, style, ...rest }) => {
  const $themes: Record<any, any> = themes;
  const theme = useMemo(() => $themes[style], [style, $themes]);
  return (
    <ReactSyntaxHighlighter language="javascript" style={theme} showLineNumbers {...rest}>
      {children}
    </ReactSyntaxHighlighter>
  );
};

export default SyntaxHighlighter;
