import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Text, Image} from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import React, { useEffect } from 'react';
import * as Font from 'expo-font';

export function User({ navigation }) {
    useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Open Sans': require('../../assets/fonts/OpenSans-Bold.ttf'),
          });
        }
        loadFonts();
    }, []);

    return(
        <View style={styles.container}>
            <Header style={styles.background}/>
            <View style={styles.perfil}>
                <Image
                source={require('../assets/perfilIcon.png')}
                style={styles.perfilIcon}
                />
                <Text style={styles.name}>Jiara Martins</Text>
                <TouchableOpacity>
                    <Text style={styles.editPerfil} onPress={() => navigation.navigate('User')}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.messages} onPress={() => navigation.navigate('User')}>Ver Mensagens</Text>
            </TouchableOpacity>
            <View style={styles.posts}>
            </View>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0D1D4',
    },
    background: {
        flex: 1,
        backgroundColor: '#939598',
        marginTop: 100
    },
    posts: {
        flex: 1,
        backgroundColor: '#939598',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
    },
    perfil: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: '#D0D1D4',
        marginLeft: 20,
        marginRight: 20
    },
    perfilIcon: {
        width: 70, 
        height: 70,
    },
    editPerfil: {
        fontSize: 10,
        backgroundColor: '#939598',
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
        borderRadius: 12,
        overflow: 'hidden',
    },
    name:{
        fontFamily: 'Open Sans',
        fontSize: 16
    },
    messages: {
        justifyContent: 'flex-start',
        fontSize: 11,
        backgroundColor: '#71FE6A',
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 5,
        textAlign: 'center',
        borderRadius: 12,
        overflow: 'hidden',
        width: 150,
        marginLeft: 20,
        marginBottom: 10
    }
});
