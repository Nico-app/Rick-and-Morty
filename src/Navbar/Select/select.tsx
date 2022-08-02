import { useState } from "react";
import "./select.css";

type SelectProps = {
  use: "status" | "gender";
  currentValue?: string;
  options: string[];
  onSelect: (filter: "status" | "gender", value: string) => void;
};

const Select = ({ use, currentValue, options, onSelect }: SelectProps) => {
  const [isOpen, setOpen] = useState(false);

  const selectHandler = (value: string) => {
    onSelect(use, value);
    setOpen(false);
  };

  return (
    <div className="select">
      <div className="control" onClick={() => setOpen(!isOpen)}>
        {currentValue ?? use.charAt(0).toUpperCase() + use.slice(1)}
      </div>
      {isOpen && (
        <div className="options">
          {options.map((o) => (
            <div
              key={o}
              className={`option ${currentValue === o ? "option--selected" : ""}`}
              onClick={() => selectHandler(o)}
            >
              {o.charAt(0).toUpperCase() + o.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
