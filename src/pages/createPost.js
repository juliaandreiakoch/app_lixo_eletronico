import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { database, storage } from '../services/firebaseConnection';
import { ref as databaseRef, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

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
            <TouchableOpacity onPress={pickImage} style={styles.button}>
                <Text>Select Image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')} style={styles.button}>
                <Text>Exit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        alignSelf: 'center',
    },
});

export default CreatePost;
