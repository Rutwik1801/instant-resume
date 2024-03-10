import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PersonalSection from './PersonalSection'
import ExperienceSection from './ExperienceSection'
import ProjectsSection from './ProjectsSection'
import AchievementsSection from './AchievementsSection'
import EducationSection from './EducationSection'
import SkillsSection from './SkillsSection'
import CertificationsSection from './CertificationsSection'

// Define styles for the resume
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 2
  },
  section: {
    margin: 2,
    // padding: 2,
    // flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Resume component
const Resume = ({ data }) => {
const { options } = data
console.log({options}, "here")
  return(
  <Document>
    <Page size="A4" style={styles.page}>
      <PersonalSection data={data.personalInformation} sectionName=" Details" />
      {options.experience && <ExperienceSection data={data.experience} sectionName= "Experience" />}
      {options.projects && <ProjectsSection data={data.projects} sectionName= "Projects" />}
      {options.achievements && <AchievementsSection data={data.achievements} sectionName= "Achievements" />}
      {options.education && <EducationSection data={data.education} sectionName= "Education" />}
      {options.certifications && <CertificationsSection data={data.certifications} sectionName= "Certifications" />}
      {options.skills && <SkillsSection data={data.skills} sectionName= "Skills" />}
      {/* <View style={styles.section}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        {data.education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.text}>{edu.degree}</Text>
            <Text style={styles.text}>{edu.school}</Text>
            <Text style={styles.text}>{edu.year}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        {data.experience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.text}>{exp.title}</Text>
            <Text style={styles.text}>{exp.company}</Text>
            <Text style={styles.text}>{exp.duration}</Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View> */}
    </Page>
  </Document>
);
}

export default Resume;
