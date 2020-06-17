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
  border?: boolean;
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
  shadowType = '',
  children,
  border,
}) => {
  const classes = useMemo(() => {
    const arr: string[] = [
      'focus:outline-none focus:shadow-outline leading-tight',
      `bg-${bgColor}-500`,
      `hover:bg-${bgColor}-700`,
      `text-${textColor}`,
      `px-${px}`,
      `py-${py}`,
    ];
    if (className) arr.push(className);
    if (rounded) arr.push(`rounded`);
    if (bold) arr.push(`font-bold`);
    if (border) arr.push('border border-gray-400 hover:border-gray-500');
    if (shadowType) arr.push(`shadow-${shadowType}`);

    return arr.join(' ');
  }, [className, bgColor, shadowType, px, py, bold, rounded, textColor, border]);

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
