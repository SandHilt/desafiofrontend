/**
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const css = StyleSheet.create({
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
    alignSelf: 'flex-end',
    borderRadius: 15,
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

const Login = ({nextIndex}) => {
  const [login, setEmail] = useState('');
  const [cpf, setCPF] = useState();

  return (
    <Fragment>
      <View style={css.containerImage}>
        <Image
          source={require('./assets/Logo_telaInicial.png')}
          resizeMode="center"
        />
      </View>
      <View style={css.oneBlock}>
        <TextInput
          style={css.textEl}
          placeholder="E-mail"
          onSubmitEditing={({nativeEvent: {text}}) => setEmail(text)}
          value={login}
        />
        <TextInput
          style={css.textEl}
          placeholder="CPF"
          onSubmitEditing={({nativeEvent: {text}}) => setCPF(text)}
          value={cpf}
        />
        <Button
          title="Logar"
          onPress={nextIndex}
          color={css.btn.color}
          style={css.btn}
        />
        <Text style={css.forgetPass}>Esqueceu a senha? Nem tem senha.</Text>
      </View>
    </Fragment>
  );
};

export default Login;
