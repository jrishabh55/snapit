import React, { FC } from 'react';
import Box, { BoxProps } from './Box/Box';

export interface OptionProps {
  id?: string | number;
  name: string;
  value: number | string;
}

export const Option: FC<OptionProps> = ({ name, value }) => <option value={value}>{name}</option>;

export interface SelectProps extends BoxProps<HTMLSelectElement> {
  options: OptionProps[];
  value: number | string;
  containerProps?: BoxProps<HTMLDivElement>;
}

const Select: FC<SelectProps> = ({ options, value, containerProps = {}, onChange }) => {
  return (
    <Box display="inline-block" position="relative" {...containerProps}>
      <Box
        componentType="select"
        onChange={onChange}
        value={value}
        display="block"
        rounded
        shadow
        className="appearance-none max-w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <Option key={option.id || option.value} name={option.name} value={option.value} />
        ))}
      </Box>
      <Box
        position="absolute"
        display="flex"
        className="pointer-events-none inset-y-0 right-0 items-center px-2 text-gray-700"
      >
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </Box>
    </Box>
  );
};

export default Select;
