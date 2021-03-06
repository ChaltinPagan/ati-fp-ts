// @flow

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from '../../../primitives';

const BUTTON_TEXT = 'Sign Up';

interface Props {
  onPress: () => void;
}

const SubmitButton = ({ onPress }: Props) => (
  <TouchableOpacity
    accessibilityRole="button"
    accessibilityLabel={'Sign up for ATI newsletter'}
    accessible={true}
    style={styles.buttonWrap}
    onPress={onPress}
  >
    <View style={styles.button}>
      <Text style={styles.buttonText}>{BUTTON_TEXT}</Text>
    </View>
  </TouchableOpacity>
);

export default SubmitButton;

const styles = StyleSheet.create({
  buttonWrap: {
    padding: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%'
  },
  button: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  buttonText: {
    color: 'white'
  }
});
