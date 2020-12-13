import React, { useEffect, useContext } from 'react';
import { StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import RootContext from '../context/RootContext';
import { StatusBar } from 'expo-status-bar';
import { Card } from 'react-native-paper';
import { Block, Text } from "../components";


const Home = ({ navigation }) => {

    const { characters, currentPage, setCurrentPage, getCharacters, chooseCharachter } = useContext(RootContext);

    useEffect(() => {
        getCharacters(currentPage);
    }, [currentPage]);

    function setChrachterID(id) {
        chooseCharachter(id);
        navigation.navigate("Detail");
    }
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => setChrachterID(item.id)} style={{ marginBottom: 15 }}>
                    <Card>
                        <Block center row key={item.id} margin={[10, 0, 10, 10]}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.image}
                                resizeMode="contain"
                            />
                            <Text bold h3>
                                {item.name}
                            </Text>
                        </Block>
                    </Card>
                </TouchableOpacity>
            </>
        );
    }
    return (
        <>
            <SafeAreaView />
            <StatusBar style="dark" />
            <Block center middle>
                <FlatList
                    style={styles.list}
                    data={characters}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={renderItem}
                    ListFooterComponent={() => {
                        return (<Text>loading...</Text>)
                    }}
                    onEndReachedThreshold={0}
                    onEndReached={() => setCurrentPage(currentPage + 1)}
                />
            </Block>
        </>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
        padding: 10,
        marginTop: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10
    },
});

export default Home;
