import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { database, storage } from '../services/firebaseConnection';
import { ref as databaseRef, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Footer } from '../components/footer';

export function CreatePost({ navigation, route }) {
    const { user } = route.params;
    const userId = user.uid; 
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('ImagePicker result:', result);

        if (!result.cancelled && result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
            console.log('Image selected:', result.assets[0].uri);
        } else {
            console.log('Image selection cancelled');
        }
    };

    const uploadImage = async (uri) => {
        try {
            console.log('Fetching image from URI:', uri);
            const response = await fetch(uri);
            const blob = await response.blob();
            console.log('Blob created:', blob);
    
            console.log('User ID:', userId);
    
            const imageRef = storageRef(storage, `images/${userId}/${Date.now()}`);
            console.log('Uploading image to storage at reference:', imageRef);
    
            await uploadBytes(imageRef, blob);
            console.log('Image uploaded to storage');
    
            const downloadURL = await getDownloadURL(imageRef);
            console.log('Download URL:', downloadURL);
    
            return downloadURL;
        } catch (error) {
            console.error('Erro ao enviar imagem:', error.code, error.message, error.serverResponse);
            throw error;
        }
    };    

    const handleSubmit = async () => {
        try {
            let imageUrl = '';
            if (image) {
                console.log('Starting image upload');
                imageUrl = await uploadImage(image);
                console.log('Image upload completed, URL:', imageUrl);
            }

            const postsRef = databaseRef(database, `products/${userId}`);
            const newPostRef = push(postsRef);

            await set(newPostRef, {
                image: imageUrl,
                description: description,
                category: category
            });

            console.log('Product created');
            navigation.navigate('Feed');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image
                source={require('../assets/greenAddIcon.png')}
                style={styles.addIcon}
                />
                <Text style={styles.title}>Nova publicação</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.productInfos}>
                    <Text style={styles.subtitles}>Informe a categoria do seu dispositivo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Categoria"
                        value={category}
                        onChangeText={setCategory}
                    />
                    <Text style={styles.subtitles}>Informe a descrição do seu dispositivo:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        value={description}
                        onChangeText={setDescription}
                    />
                    <TouchableOpacity onPress={pickImage} style={styles.button}>
                        <Text style={styles.buttonsText}>Selecionar imagem</Text>
                    </TouchableOpacity>
                    {image && <Image source={{ uri: image }} style={styles.image} />}                    
                </View>
                <View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')} style={styles.button}>
                        <Text style={styles.buttonsText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
                  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#1C2120',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#71FE6A',
        textAlign: 'center',
        paddingLeft: 10,
    },
    subtitles: {
        color: 'black',
        fontSize: 15,
        marginVertical: 10,
    },
    productInfos: {
        display: 'flex',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        width: 45,
        height: 45,
    },
    content: {
        backgroundColor: '#D0D1D4',
        width: '95%',
        height: '55%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    input: {
        height: 40,
        width: 270,
        borderColor: '#1C2120',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1C2120',
        padding: 10,
        width: 200,
        borderRadius: 15,
        marginVertical: 5,
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#71FE6A',
        padding: 10,
        width: 200,
        borderRadius: 15,
        marginVertical: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        alignSelf: 'center',
    },
    buttonsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default CreatePost;
