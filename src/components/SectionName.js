import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for the resume
const styles = StyleSheet.create({
  section: {
    margin: 2,
    padding: 1,
    borderBottom: "1px solid black"
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Resume component
const SectionName = ({ sectionName }) => {

  return(
  <View style={styles.section} >
    <Text>{sectionName}</Text>
  </View>
);
}

export default SectionName;
