import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import { FeedData } from '../components/feedData';
import { postList } from '../mocks/postList';
import { UserPost } from '../components/userPost';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebaseConnection';

export function User({ navigation, route }) {
    const { user, changeStatus } = route.params;

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Open Sans': require('../../assets/fonts/OpenSans-Bold.ttf'),
            });
        }
        loadFonts();
    }, []);

    const email = user.email;

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                const user = null;
                changeStatus(user);
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };

    return (
        <View style={styles.container}>
            <View>
                <Header navigation={navigation} />
                <View style={styles.perfil}>
                    <View style={styles.identification}>
                        <Image
                            source={require('../assets/perfilIcon.png')}
                            style={styles.perfilIcon}
                        />
                        <Text style={styles.name}>{email}</Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity>
                            <Text style={styles.optionButton} onPress={() => navigation.navigate('User')}>Editar Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSignOut}>
                            <Text style={styles.optionButton}>Sair da conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.messages} onPress={() => navigation.navigate('User')}>Ver Mensagens</Text>
                    <Image
                        source={require('../assets/chatIcon.png')}
                        style={styles.chatIcon}
                    />
                </TouchableOpacity>
                <View style={styles.posts}>
                    <ScrollView>
                        <FeedData Post={UserPost} postList={postList} navigation={navigation} />
                    </ScrollView>
                </View>
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0D1D4',
    },
    posts: {
        height: '60%',
        marginLeft: 15,
        marginRight: 15,
    },
    perfil: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
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
    name: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        marginLeft: 10,
    },
    messages: {
        justifyContent: 'flex-start',
        fontSize: 11,
        backgroundColor: '#71FE6A',
        color: 'black',
        fontWeight: 'bold',
    },
    buttons: {
        flexDirection: 'column',
    },
    identification: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    chatIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    chatButton: {
        flexDirection: 'row',
        backgroundColor: '#71FE6A',
        marginTop: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        marginLeft: 10,
        width: 150,
    },
});
