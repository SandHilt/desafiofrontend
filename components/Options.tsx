import React from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  menuActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  menuActionsItem: {
    marginRight: 15,
  },
  menu: {
    flexDirection: 'row',
    padding: 15,
  },
  item: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  containerImages: {
    flex: 1,
    width: '100%',
    maxWidth: 768,
  },
  fluidImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  containerHeader: {
    backgroundColor: 'rgba(255,255,255,.5)',
    padding: 15,
  },
  header: {
    fontSize: 36,
    shadowOpacity: 10,
  },
  containerLogo: {
    flex: 1,
  },
  logo: {
    maxWidth: 150,
    width: undefined,
    height: undefined,
    flex: 1,
  },
});

const Options: React.FC<OptionsProp> = ({prevIndex}) => (
  <View style={styles.item}>
    <View style={styles.menu}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          resizeMode="stretch"
          source={require('../assets/Logo_telaInicial.png')}
        />
      </View>
      <View style={styles.menuActions}>
        <Image
          style={styles.menuActionsItem}
          source={require('../assets/buscar.png')}
        />
        <Image
          style={styles.menuActionsItem}
          source={require('../assets/config.png')}
        />
        <Button title="Sair" onPress={prevIndex} />
      </View>
    </View>
    <View style={styles.containerImages}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.fluidImage}
        source={require('../assets/Img_principal_0.png')}>
        <View style={styles.containerHeader}>
          <Text style={styles.header}>CORP</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        resizeMode="stretch"
        style={styles.fluidImage}
        source={require('../assets/Img_principal_1.png')}>
        <View style={styles.containerHeader}>
          <Text style={styles.header}>DMD</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        resizeMode="stretch"
        style={styles.fluidImage}
        source={require('../assets/Img_principal_2.png')}>
        <View style={styles.containerHeader}>
          <Text style={styles.header}>haTTR</Text>
        </View>
      </ImageBackground>
    </View>
  </View>
);

export default Options;
