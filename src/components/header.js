import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export function Header() {
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
        <Image 
            source={require('../assets/perfilIcon.png')}
            style={styles.perfil}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#939598',
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  appName: {
    fontSize: 20,
    fontWeight: 'normal',
    flex: 1
  },
  logo: {
    width: 50, 
    height: 50,
    borderRadius: 30,
    marginRight: 10
  },
  search: {
    width: 30, 
    height: 30,
  },
  perfil: {
    width: 40, 
    height: 40,
    marginLeft: 10
  },   
});
