/**
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  textEl: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    minWidth: '80%',
    marginBottom: 5,
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    color: '#f77737',
  },
  forgetPass: {
    color: '#6c757d',
    textAlign: 'right',
  },
  oneBlock: {
    flex: 1,
  },
});

const Login: React.FC<LoginProp> = ({nextIndex}) => {
  const [login, setEmail] = useState('');
  const [cpf, setCPF] = useState();

  return (
    <Fragment>
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/Logo_telaInicial.png')}
          resizeMode="center"
        />
      </View>
      <View style={styles.oneBlock}>
        <TextInput
          style={styles.textEl}
          placeholder="E-mail"
          onSubmitEditing={({nativeEvent: {text}}): void => setEmail(text)}
          value={login}
        />
        <TextInput
          style={styles.textEl}
          placeholder="CPF"
          onSubmitEditing={({nativeEvent: {text}}): void => setCPF(text)}
          value={cpf}
        />
        <Button title="Logar" onPress={nextIndex} color={styles.btn.color} />
        <Text style={styles.forgetPass}>Esqueceu a senha? Nem tem senha.</Text>
      </View>
    </Fragment>
  );
};

export default Login;
