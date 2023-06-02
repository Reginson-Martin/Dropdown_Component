import React, { useState } from 'react';

const Select = ({ placeholderComponent, options, onChange, multiSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleApplySelection = () => {
    onChange(selectedOptions);
    toggleDropdown();
  };

  return (
    <div className="select">
      <div className="select-placeholder" onClick={toggleDropdown}>
        {placeholderComponent}
      </div>
      {isOpen && (
        <div className="select-dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className={`select-option ${selectedOptions.includes(option) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.component || option.label}
            </div>
          ))}
          <button onClick={handleApplySelection}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default Select;