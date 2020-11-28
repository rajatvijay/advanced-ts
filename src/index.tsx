import React from "react";

type Option = {
  value: string;
  label: React.ReactNode | string;
};
type SelectProps = {
  options: Option[];
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    return (
      <select ref={ref}>
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  }
);

export { Select, SelectProps, Option };
