import React from "react";
import { LuAsterisk } from "react-icons/lu";
import Select from "react-select";

interface IProps {
  options: { label: string; value: string }[];
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const SelectInput: React.FC<IProps> = ({
  options,
  id,
  label = "Select an Option",
  placeholder = "Select an Option",
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <label className="text-lg font-bold text-gray-800" htmlFor={id}>
          {label}
        </label>
        {required && <LuAsterisk size={12} className="text-red-500 mt-1" />}
      </div>
      <Select
        id={id}
        options={options}
        defaultValue={options[0]}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectInput;
