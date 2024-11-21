import { useState } from "react";

export default function RadioButton({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleChange = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={selected === option.value}
              onChange={() => handleChange(option.value)}
            />
            {option.label}
          </label>
      ))}
    </div>
  );
}