import React from 'react';
import Select from './Select';

const CustomPlaceholder = () => <div>Select an option...</div>;

const CustomOption = ({ label }) => <div>{label.toUpperCase()}</div>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', component: <CustomOption label="Option 3" /> },
];

const ParentComponent = () => {
  const handleSelectChange = (selectedOptions) => {
    console.log('Selected options:', selectedOptions);
    // Use the selected options as desired in the parent component
  };

  return (
    <div>
      <h1>Select Component Demo</h1>
      <Select
        placeholderComponent={<CustomPlaceholder />}
        options={options}
        onChange={handleSelectChange}
        multiSelect
      />
    </div>
  );
};

export default ParentComponent;
