import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Options = () => {
  const css = StyleSheet.create({
    optsContainer: {
      flex: 1,
      alignItems: 'center',
    },
    block: {flex: 1},
    menuActions: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    row: {flexDirection: 'row'},
  });

  return (
    <View style={css.optsContainer}>
      <View style={css.row}>
        <Image
          style={css.block}
          resizeMode="center"
          source={require('../assets/Logo_telaInicial.png')}
        />
        <View style={css.menuActions}>
          <Image source={require('../assets/buscar.png')} />
          <Image source={require('../assets/config.png')} />
        </View>
      </View>
      <View style={css.block}>
        <Image source={require('../assets/Img_principal_0.png')} />
      </View>
      <View style={css.block}>
        <Image source={require('../assets/Img_principal_1.png')} />
      </View>
      <View style={css.block}>
        <Image source={require('../assets/Img_principal_2.png')} />
      </View>
    </View>
  );
};

export default Options;
