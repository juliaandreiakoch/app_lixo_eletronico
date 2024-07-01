import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const handleOnPress = ({ navigation }) => {
  navigation.navigate('Welcome')
}

export function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => handleOnPress({navigation})}>
      <View style={styles.footerContainer}>
        <Image
          source={require('../assets/backArrow.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Página inicial</Text>
      </View>
        </TouchableOpacity>
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
    marginBottom: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
    marginRight: 12
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 5,
    marginLeft: 12
  }
});
