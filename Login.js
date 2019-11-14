/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
  Alert,
  Text,
} from 'react-native';

const css = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
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
});

const Login = ({hidden: index}) => {
  const [login, setEmail] = useState('');
  const [cpf, setCPF] = useState();

  const next = () => Alert.alert('Show index', `This is my index ${index}`);

  return (
    <SafeAreaView style={css.main}>
      <View style={css.containerImage}>
        <Image
          source={require('./assets/Logo_telaInicial.png')}
          resizeMode="center"
        />
      </View>
      <View style={{flex: 1}}>
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
          value={login}
        />
        <Button
          title="Logar"
          onPress={next}
          color={css.btn.color}
          style={css.btn}
        />
        <Text style={css.forgetPass}>Esqueceu a senha? Nem tem senha.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
