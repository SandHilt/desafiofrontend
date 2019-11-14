import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const Options = () => {
  const css = StyleSheet.create({
    imgContainer: {
      flex: 1,
      alignItems: 'center',
    },
    block: {
      flex: 1,
      position: 'relative',
    },
  });

  return (
    <View style={css.imgContainer}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          style={{flex: 1}}
          resizeMode="center"
          source={require('./assets/Logo_telaInicial.png')}></Image>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image source={require('./assets/buscar.png')}></Image>
          <Image source={require('./assets/config.png')}></Image>
        </View>
      </View>
      <View style={css.block}>
        <Image source={require('./assets/Img_principal_0.png')} />
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 36}}>Hi</Text>
        </View>
      </View>
      <View style={css.block}>
        <Image source={require('./assets/Img_principal_1.png')} />
      </View>
      <View style={css.block}>
        <Image source={require('./assets/Img_principal_2.png')} />
      </View>
    </View>
  );
};

export default Options;
