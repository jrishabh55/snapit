import React, { FC, useMemo } from 'react';
import Box, { BoxProps } from './Box/Box';
import { ShadowType } from './TailwindInterfaces';

interface ButtonProps extends BoxProps<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  bold?: boolean;
  rounded?: boolean;
  className?: string;
  shadowType?: ShadowType;
  border?: boolean;
}

const Button: FC<ButtonProps> = ({
  bgColor = 'blue',
  className,
  onClick,
  textColor = 'white',
  bold = true,
  px = '4',
  py = '2',
  shadowType = '',
  children,
  border,
  ...rest
}) => {
  const classes = useMemo(() => {
    const arr: string[] = [
      'focus:outline-none focus:shadow-outline leading-tight',
      `bg-${bgColor}-500`,
      `hover:bg-${bgColor}-700`,
      `text-${textColor}`,
    ];
    if (className) arr.push(className);
    if (bold) arr.push(`font-bold`);
    if (border) arr.push('border border-gray-400 hover:border-gray-500');

    return arr.join(' ');
  }, [className, bgColor, bold, textColor, border]);

  return (
    <Box componentType="button" type="button" className={classes} onClick={onClick} px={px} py={py} {...rest}>
      {children}
    </Box>
  );
};

export default Button;
