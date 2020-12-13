import React, { useContext, useEffect } from 'react'
import { StyleSheet, Image, Dimensions, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import RootContext from '../context/RootContext';
import { Block, Text } from "../components";


const { width, height } = Dimensions.get("window");

const Detail = ({ navigation }) => {
    const { characterDetail, getCharacter } = useContext(RootContext);
    useEffect(() => {
        getCharacter();
    }, []);
    return (
        <>
            <ImageBackground source={require('../assets/background/bg1.png')} style={styles.image} imageStyle=
                {{ opacity: 0.4 }}>

                <Block flex={false} center style={styles.location}>
                    <Ionicons name="location-outline" size={32} color="white" />
                    <Text size={15} color="white" bold>{characterDetail.origin && characterDetail.origin.name}</Text>
                </Block>
                <Text white bold size={24} color="white" style={styles.text}>{characterDetail.name}</Text>
                <Image
                    source={{ uri: characterDetail.image }}
                    style={styles.profilImage}
                    resizeMode="contain"
                />
            </ImageBackground>

            <Block flex={false} center style={styles.liftUp} margin={[-50, 0, 0, 0]} color="white">
                <Text size={24} >Bulunduğu Bölümler</Text>
                {
                    characterDetail && characterDetail.episode.slice(-5).map(episode =>
                        <Text>{episode.replace('https://rickandmortyapi.com/api/episode/', "")}</Text>
                    )

                }
            </Block>
        </>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8'
    },
    image: {
        width: width,
        height: 400,
        aspectRatio: 1.7,
        backgroundColor: "#000000a0",
    },
    liftUp: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: height,
    },
    text: {
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
        right: 300,
        bottom: 60
    },
    location: {
        position: 'absolute',
        right: 300,
        top: 30,
    }
})
