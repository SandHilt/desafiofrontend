/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEl: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const App = () => {
  const [login, setLogin] = useState('');

  return (
    <View style={styles.main}>
      <Text>Hello, world foobar!</Text>
      <br/>
      <TextInput
        style={styles.textEl}
        placeholder="Login"
        onSubmitEditing={({nativeEvent: {text}}) => setLogin(text)}
        value={login}
      />
    </View>
  );
};

export default App;
