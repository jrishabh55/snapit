import React, { FC, MouseEvent, useMemo } from 'react';
import { ShadowType } from './TailwindInterfaces';

interface ButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  textColor?: string;
  bold?: boolean;
  rounded?: boolean;
  px?: number;
  py?: number;
  className?: string;
  shadowType?: ShadowType;
}

const Button: FC<ButtonProps> = ({
  bgColor = 'blue',
  className,
  onClick,
  textColor = 'white',
  rounded = true,
  bold = true,
  px = 4,
  py = 2,
  shadowType = 'none',
  children,
}) => {
  const classes = useMemo(() => {
    const arr: string[] = [
      `shadow-${shadowType}`,
      `bg-${bgColor}-500`,
      `hover:bg-${bgColor}-700`,
      `text-${textColor}`,
      `px-${px}`,
      `py-${py}`,
    ];
    if (className) arr.push(className);
    if (rounded) arr.push(`rounded`);
    if (bold) arr.push(`font-bold`);

    return arr.join(' ');
  }, [className, bgColor, shadowType, px, py, bold, rounded, textColor]);

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
