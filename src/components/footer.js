import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export function Footer({ navigation }) {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Open Sans': require('../../assets/fonts/OpenSans-Bold.ttf'),
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
          <Text style={styles.mapButton}>Início</Text>
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
    height: 60,
    backgroundColor: '#71FE6A',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'flex-end'
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
    fontFamily: 'Open Sans',
    fontSize: 18,
    marginLeft: 4,
  },
  home: {
    width: 28,
    height: 28,
    margin: 4,
  },
  location: {
    width: 20,
    height: 26,
    margin: 4,
  },
});
