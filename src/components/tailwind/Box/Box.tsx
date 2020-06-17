import React, { ReactNode, CSSProperties, FC, memo, useMemo } from 'react';
import { ShadowType, DisplayTypes } from '../TailwindInterfaces';

interface BoxProps {
  className?: string;
  display?: DisplayTypes;
  shadowType?: ShadowType;
  children: ReactNode;
  style?: CSSProperties;
}

const Box: FC<BoxProps> = memo(({ children, className, style = {}, display = 'flex', shadowType = 'none' }) => {
  const classes = useMemo(() => {
    const arr: string[] = [display, `shadow-${shadowType}`];
    if (className) arr.push(className);

    return arr.join(' ');
  }, [className, display, shadowType]);

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
});

export default Box;
