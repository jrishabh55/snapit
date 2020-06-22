import React, { ReactNode, CSSProperties, HTMLAttributes, FC, memo, useMemo } from 'react';
import { ShadowType, DisplayTypes, BorderTypes } from '../TailwindInterfaces';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  display?: DisplayTypes;
  shadowType?: ShadowType;
  children?: ReactNode;
  style?: CSSProperties;
  rounded?: BorderTypes;
}

const Box: FC<BoxProps> = memo(
  ({ children, rounded = 'none', className, display = 'flex', shadowType = 'none', ...restProps }) => {
    const classes = useMemo(() => {
      const arr: string[] = [display, `shadow-${shadowType}`];
      if (rounded) arr.push(`rounded-${rounded}`);
      if (className) arr.push(className);

      return arr.join(' ');
    }, [className, display, rounded, shadowType]);

    return (
      <div className={classes} {...restProps}>
        {children}
      </div>
    );
  }
);

export default Box;
