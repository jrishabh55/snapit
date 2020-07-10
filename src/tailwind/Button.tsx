import React, { FC, useMemo } from 'react';
import Box, { BoxProps } from './Box/Box';

export interface ButtonProps extends BoxProps<HTMLButtonElement> {
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  bold?: boolean;
  rounded?: boolean;
  className?: string;
  border?: boolean;
}

const Button: FC<ButtonProps> = ({
  bgColor = 'bg-blue-500',
  hoverBgColor = 'bg-blue-700',
  className,
  onClick,
  textColor = 'text-white',
  bold = true,
  px = '4',
  py = '2',
  children,
  border,
  ...rest
}) => {
  const classes = useMemo(() => {
    const arr: string[] = [
      'focus:outline-none focus:shadow-outline leading-tight',
      bgColor,
      `hover:${hoverBgColor}`,
      textColor,
    ];
    if (className) arr.push(className);
    if (bold) arr.push(`font-bold`);
    if (border) arr.push('border border-gray-400 hover:border-gray-500');

    return arr.join(' ');
  }, [className, bgColor, hoverBgColor, bold, textColor, border]);

  return (
    <Box componentType="button" type="button" className={classes} onClick={onClick} px={px} py={py} {...rest}>
      {children}
    </Box>
  );
};

export default Button;
