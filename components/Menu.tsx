import {Button, Image, StyleSheet, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  menu: {flexDirection: 'row', padding: 15, backgroundColor: 'white'},
  containerLogo: {
    flex: 1,
  },
  logo: {
    maxWidth: 150,
    width: undefined,
    height: undefined,
    flex: 1,
  },
  menuActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  menuActionsItem: {
    marginRight: 15,
  },
});

const Menu: React.FC<MenuProps> = ({prevIndex}) => (
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
);

export default Menu;
