import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import RootContext from '../context/RootContext';

const { width, height } = Dimensions.get("window");

const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Detail = ({ navigation }) => {
    const { characterDetail, getCharacter } = useContext(RootContext);
    useEffect(() => {
        getCharacter();
    }, []);
    return (
        <View>
            <ImageBackground source={require('../assets/background/bg1.png')} style={styles.image}>
                <Text style={styles.text}>{characterDetail.name}</Text>
                <Image
                    source={{ uri: characterDetail.image }}
                    style={styles.profilImage}
                    resizeMode="contain"
                />
            </ImageBackground>

            <View style={styles.personal}>
                <Text>{characterDetail.name}</Text>
                <Text>{characterDetail.origin && characterDetail.origin.name}</Text>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8'
    },
    image: {
        width: undefined,
        height: 400,
        aspectRatio: 1.7,
        resizeMode: 'cover'
    },
    personal: {
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: height,
        marginTop: - 50,
        alignItems: 'center'

    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "left",
        backgroundColor: "#000000a0",
        position: 'absolute',
        left: 15,
        bottom: 60

    },
    profilImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'contain',
        position: 'absolute',
        backgroundColor: "#000000a0",
        right: 300,
        bottom: 60
    }
})
