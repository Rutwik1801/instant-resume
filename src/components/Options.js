import React, { useState } from 'react';
import CheckboxComponent from './CheckboxComponent'

const Options = (handleGenerateResume) => {
  const [options, setOptions] = useState({
    experience: false,
    projects: false,
    certifications: false,
    skills: false,
    education: false,
    achievements: false   
  })
  const [data, setData] = useState({
    personalInformation: {
    name: "John Doe",
    email: "example@gmail.com",
    number: "1234567890",
    links: []
    },
    experience: [],
    projects: [],
    certifications: [],
    skills: [],
    education: [],
    achievements: []
  })
  const handleCheck = (title) => {
    setOptions(prev => {
      return {...prev, [title]: !prev[title]}
    })
  }

  const handleClick = () => {
    handleGenerateResume(options,data)
  }

  return (
    <div>
    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"flex-start"}}>
      <div>
      {Object.entries(options).map(key => {
      return <CheckboxComponent title={key[0]} value={key[1]} handleCheck={handleCheck} />
     })}
      </div>
     <div>
     {options.experience && <h1>experience</h1> }
    {options.projects && <h1>Projects</h1>}
     </div>
    </div>
    <button onClick={handleClick}>Generate PDF</button>
    </div>
  );
};

export default Options;

