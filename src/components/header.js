import { StyleSheet, View, Text, Image } from 'react-native';

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
    padding: 50,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'normal',
    marginLeft: 8,
    paddingTop: 12,
  },
  image: {
    width: 60, 
    height: 60,
    marginLeft: 0,
    borderRadius: 30,
  },   
});
