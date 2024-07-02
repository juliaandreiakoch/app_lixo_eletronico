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

  const currentRoute = navigation.getState().routes[navigation.getState().index].name;
  const isNotDisposalScreen = currentRoute != 'Disposal';
  const isNotFeedScreen = currentRoute != 'Feed'

  return (
    <View style={styles.footer}>
       {isNotFeedScreen && 
      <TouchableOpacity style={styles.footerComponent} onPress={() => navigation.navigate('Feed')}>
        <View style={styles.buttonContent}>
          <Image
            source={require('../assets/homeIcon.png')}
            style={styles.home}
          />
          <Text style={styles.mapButton}>Início</Text>
        </View>
      </TouchableOpacity>
      }
      {isNotDisposalScreen && 

        <TouchableOpacity style={styles.footerComponent} onPress={() => navigation.navigate('Disposal')}>
          <View style={styles.buttonContent}>
            <Image
              source={require('../assets/locationIcon.png')}
              style={styles.location}
            />
            <Text style={styles.mapButton}>Descarte</Text>
          </View>
        </TouchableOpacity>

      }
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#71FE6A',
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
