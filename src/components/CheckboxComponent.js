import React from 'react';


const CheckboxComponent = ({title, handleCheck, value}) => {

  const handleChange = () => {
    handleCheck(title)
  }
  return (
    <div>
      <input type='checkbox' value={value} onChange={handleChange} />
      <span>{title}</span> 
    </div>
  );
};

export default CheckboxComponent

