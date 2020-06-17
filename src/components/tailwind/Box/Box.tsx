import React, { ReactNode, CSSProperties, FC, memo, useMemo } from 'react';
import { ShadowType, DisplayTypes, BorderTypes } from '../TailwindInterfaces';

interface BoxProps {
  className?: string;
  display?: DisplayTypes;
  shadowType?: ShadowType;
  children: ReactNode;
  style?: CSSProperties;
  rounded?: BorderTypes;
}

const Box: FC<BoxProps> = memo(
  ({ children, rounded = 'none', className, style = {}, display = 'flex', shadowType = 'none' }) => {
    const classes = useMemo(() => {
      const arr: string[] = [display, `shadow-${shadowType}`];
      if (rounded) arr.push(`rounded-${rounded}`);
      if (className) arr.push(className);

      return arr.join(' ');
    }, [className, display, rounded, shadowType]);

    return (
      <div style={style} className={classes}>
        {children}
      </div>
    );
  }
);

export default Box;
