import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { database } from '../services/firebaseConnection';
import { ref as databaseRef, get } from 'firebase/database';
import { Post } from '../components/post';  // Importe o componente Post

export function Feed({ navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            const postsRef = databaseRef(database, 'products');

            try {
                const snapshot = await get(postsRef);
                if (snapshot.exists()) {
                    const postData = snapshot.val();
                    console.log('Posts carregados:', postData);

                    // Transforma os dados em um array de objetos
                    const postsArray = Object.keys(postData).map(userId => {
                        return Object.keys(postData[userId]).map(postId => ({
                            id: postId,
                            user: userId,
                            ...postData[userId][postId]
                        }));
                    }).flat();

                    setPosts(postsArray);
                } else {
                    console.log('Nenhum dado disponível');
                }
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            }
        };

        loadPosts();
    }, []);

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.headerContent}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('CreatePost')}
                >
                    <Image
                        source={require('../assets/addLight.png')}
                        style={styles.addIcon}
                    />
                    <Text style={styles.addButtonText}>Divulgar</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.feed}>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        user={post.user}
                        image={post.image}
                        description={post.description}
                        category={post.category}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2120',
    },
    headerContent: {
        backgroundColor: '#1C2120',
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#D0D1D4',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 3,
    },
    feed: {
        flex: 1,
        backgroundColor: '#D0D1D4',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1C2120',
        paddingVertical: 10,
        borderRadius: 30,
        elevation: 3,
    },
    addIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    addButtonText: {
        fontSize: 16,
        color: 'white',
    }
});

export default Feed;
