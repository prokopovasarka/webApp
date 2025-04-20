import React, { useState } from 'react';
import Select from 'react-select';
import './SelectBar.css'

const SelectBar = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (items) => {
    setSelectedOptions(items || []);
    onChange(items);
  };

  return (
    <div>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        placeholder="Vyber"
      />
    </div>
  );
};

export default SelectBar;