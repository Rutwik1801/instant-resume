import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for the resume
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
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
const AchievementsSection = ({ data,sectionName }) => {


  return(
  <View>
 {data.name}
  </View>
);
}

export default AchievementsSection;
