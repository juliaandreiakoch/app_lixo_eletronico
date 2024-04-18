import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export function Footer({ navigation }) {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Open Sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerComponent} onPress={() => navigation.navigate('Feed')}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../assets/homeIcon.png')}
            style={styles.home}
          />
          <Text style={styles.homeButton}>Início</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerComponent} onPress={() => navigation.navigate('Feed')}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../assets/locationIcon.png')}
            style={styles.location}
          />
          <Text style={styles.mapButton}>Descarte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 80,
    backgroundColor: '#71FE6A',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  footerComponent: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  homeButton: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    marginLeft: 4,
  },
  mapButton: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    marginLeft: 4,
  },
  home: {
    width: 30,
    height: 30,
    margin: 5,
  },
  location: {
    width: 23,
    height: 31,
    margin: 5,
  },
});
