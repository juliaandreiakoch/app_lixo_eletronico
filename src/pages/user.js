import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import { FeedData } from '../components/feedData';
import { postList } from '../mocks/postList';
import { UserPost } from '../components/userPost';

export function User({ navigation }) {
    useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Open Sans': require('../../assets/fonts/OpenSans-Bold.ttf'),
          });
        }
        loadFonts();
    }, []);

    const handleUserPosts = (userName, postList) => { 
        const userPosts = postList.filter(post => post.usuario === userName);
        console.log(userPosts);
        return userPosts;
    }

    const name = "Jiara Martins"

    return(
        <View style={styles.container}>
            <Header style={styles.background}/>
            <View style={styles.perfil}>
                <View style={styles.identification}>
                    <Image
                    source={require('../assets/perfilIcon.png')}
                    style={styles.perfilIcon}
                    />
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity>
                        <Text style={styles.optionButton} onPress={() => navigation.navigate('User')}>Editar Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.optionButton} onPress={() => navigation.navigate('Login')}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={styles.messages} onPress={() => navigation.navigate('User')}>Ver Mensagens</Text>
            </TouchableOpacity>
            <View style={styles.posts}>
                <ScrollView>
                    <FeedData Post={UserPost} postList={handleUserPosts(name, postList)}/> 
                </ScrollView>
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
        marginTop: 100,
    },
    posts: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        height: 'auto'
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
    optionButton: {
        fontSize: 10,
        backgroundColor: '#939598',
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 10,
    },
    name:{
        fontFamily: 'Open Sans',
        fontSize: 16,
        marginLeft: 10
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
    },
    buttons: {
        flexDirection: 'column',
    },
    identification: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});
