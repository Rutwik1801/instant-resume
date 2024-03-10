import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Resume from './components/Resume';
import Options from './components/Options'

const App = () => {
  const [options, setOptions] = useState({
    experience: false,
    projects: false,
    certifications: false,
    skills: false,
    education: false,
    achievements: false  
  })
  const [resumeData, setResumeData] = useState({
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
      achievements: [],
      options: {
        experience: false,
        projects: false,
        certifications: false,
        skills: false,
        education: false,
        achievements: false  
      }
  })
  // const resumeDataa = {
  //   name: 'John Doe',
  //   email: 'john.doe@example.com',
  //   phone: '123-456-7890',
  //   education: [
  //     { degree: 'Bachelor of Science', school: 'University A', year: '2015' },
  //     { degree: 'Master of Business Administration', school: 'University B', year: '2017' },
  //   ],
  //   experience: [
  //     { title: 'Software Engineer', company: 'Company A', duration: '2016-2018', description: 'Worked on various projects.' },
  //     { title: 'Product Manager', company: 'Company B', duration: '2018-present', description: 'Responsible for product development.' },
  //   ],
  // };
  const handleGenerateResume = (optionsData, data) => {
    console.log({data, options})
    console.log({...data, options: {...optionsData}},"checksss")
    setResumeData({...data, options: {...optionsData}})
  }

  return (
    <div style={{display:"flex", justifyContent:"space-between",alignItems:"flex-start"}}>
      <Options handleGenerateResume={handleGenerateResume} resumeData={resumeData} />
    <PDFViewer width="595" height="842">
      <Resume data={resumeData} />
    </PDFViewer>
    </div>
  );
};

export default App;

