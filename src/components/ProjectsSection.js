import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import SectionName from './SectionName'

// Define styles for the resume
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  section: {
    margin: 5,
    padding: 2,
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
const ProjectsSection = ({ data,sectionName }) => {

  return(
  <View style={styles.section}>
<SectionName sectionName={sectionName} />
  </View>
);
}

export default ProjectsSection;
