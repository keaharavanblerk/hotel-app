import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

function Email() {
  const [Email, setEmail] = useState('');

  function ResetPassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

  return (
    <View>
      <Text>Forgot Password</Text>
      <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(email) => setEmail(email)}
      />
      <Button title="Reset Password" onPress={ResetPassword} />
    </View>
  );
}

export default Email;

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#366AAA',
    marginTop: 5,
    height: 40,
    paddingLeft: 10,
  },
});
