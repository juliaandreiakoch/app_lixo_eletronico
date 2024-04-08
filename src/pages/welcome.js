import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export function Welcome({ navigation }) {
  return (
    <View style={styles.page}>
        <Image 
          source={require('../assets/telaInicial.jpg')}
          style={styles.image}
        />
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Bem-vindo ao DescarTech!</Text>
        <Text style={styles.subtitle}>Transforme o seu eletrônico em uma nova oportunidade</Text>
        <TouchableOpacity>
          <Text style={styles.button} onPress={() => navigation.navigate('Login')}>Já possuo uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button} onPress={() => navigation.navigate('Signup')}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  title: {
    top: 20, 
    fontSize: 35,
    fontWeight: '600',
    paddingTop: 8,
    textAlign: 'center',
  },
  subtitle: {
    top: 40,
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  image: {
    width: '100%', 
    height: '60%'
  },   
  welcomeContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    backgroundColor: '#71FE6A',
    width: '100%', 
    height: '45%',
    borderRadius: 25,
    marginTop: -20,
  },
  button: {
    top: 90,
    fontSize: 12,
    backgroundColor: '#1C1C1C',
    color: 'white',
    fontWeight: '500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 10,
    width: 167,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
