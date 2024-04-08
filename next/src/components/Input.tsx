import React, { SetStateAction } from 'react';

interface IProps {
  placeholder?: string;
  value: any;
  setValue: SetStateAction<any>;
  pattern?: string;
  name: string;
  required?: boolean;
};

export const Input = ({ placeholder, value, setValue, pattern, name, required }: IProps) => {
  const isValidInput = (inp: string, regexp: string) => {
    return new RegExp(regexp).test(inp);
  };

  const isRequired = (required !== undefined && required !== false);

  return (
    <input 
      className={`w-full py-1 px-2 rounded-lg border-2 opacity-75 focus:opacity-100 outline-none ${ isValidInput(value[name], pattern || ".*") ? 'valid:border-green-500' : 'border-red-500' }  `} 
      type="text" 
      name={ name }
      placeholder={ `${placeholder}${ isRequired ? ' *' : '' }` || "input" }
      pattern={ pattern?.toString() || ".*" }
      value={ value[name] } 
      onChange={e => setValue({ ...value, [e.target.name]: e.target.value })} 
      required={ isRequired }
    />
  )
}

export default Input;