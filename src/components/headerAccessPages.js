import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/logoIcon.png')}
        style={styles.image}
      />
      <Text style={styles.appName}>DescarTech</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 26,
    fontWeight: 'normal',
    marginLeft: 6,
    paddingTop: 8,
  },
  image: {
    width: 50, 
    height: 50,
    marginLeft: 0,
    borderRadius: 30,
  },   
});
