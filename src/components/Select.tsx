import { ChangeEvent } from 'react';
import { Input } from 'reactstrap';

interface SelectProps {
  options: Array<{ label: string; value: string }>;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string | null) => void;
}

const Select = (props: SelectProps) => {
  const {
    options,
    name,
    placeholder = 'Select',
    disabled = false,
    defaultValue = '',
    onChange,
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (onChange) onChange(value === placeholder ? null : e.target.value);
  };

  return (
    <Input
      type="select"
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
      disabled={disabled}
    >
      <option>{placeholder}</option>
      {options.map((option) => {
        const { label, value } = option;

        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </Input>
  );
};

export default Select;
