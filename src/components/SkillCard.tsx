import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skills: string;
  
}

export function SkillCard({ skills, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skills}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10
  },

  textSkill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

