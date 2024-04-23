import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import React, { useEffect } from 'react';

export function Header({ navigation }) {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Quattrocento': require('../../assets/fonts/Quattrocento-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);

  return (
    <View style={styles.header}>
        <Image 
            source={require('../assets/logoIcon.png')}
            style={styles.logo}
        />
        <Text style={styles.appName}>DescarTech</Text>
        <Image 
            source={require('../assets/searchIcon.png')}
            style={styles.search}
        />
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <View >
            <Image
              source={require('../assets/perfilIcon.png')}
              style={styles.perfil}
            />
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    flexDirection: 'row',
    alignItems:'flex-end',
    backgroundColor: '#939598',
    paddingHorizontal: 10,
    paddingBottom: 5,
    justifyContent: 'space-between'
  },
  appName: {
    fontFamily: 'Quattrocento',
    fontSize: 25,
    fontWeight: 'normal',
    flex: 1,
  },
  logo: {
    width: 43, 
    height: 43,
    borderRadius: 30,
    marginRight: 10
  },
  search: {
    width: 28, 
    height: 28,
  },
  perfil: {
    width: 38, 
    height: 38,
    marginLeft: 10
  },   
});
