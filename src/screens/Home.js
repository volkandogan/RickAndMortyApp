import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import RootContext from '../context/RootContext';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Home = ({ navigation }) => {

    const { characters, currentPage, setCurrentPage, getCharacters, chooseCharachter } = useContext(RootContext);

    useEffect(() => {
        getCharacters(currentPage);
    }, [currentPage]);

    function ons(id) {
        //console.warn(id)
        chooseCharachter(id);
        navigation.navigate("Detail");
    }
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => ons(item.id)} style={{ marginBottom: 15 }}>
                    <Card>
                        <Card.Title title={item.name} />

                        <Card.Cover source={{ uri: item.image }} />
                        {/*<View key={item.id} style={styles.row}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                            resizeMode="contain"
                        />

                        <View style={[styles.column, { marginLeft: 10 }]}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>
                                {item.name}
                            </Text>
                            <Text style={styles.text}>{item.species}</Text>
                        </View>
        </View>*/}
                    </Card>
                </TouchableOpacity>
            </>
        );
    }
    return (
        <>
            <SafeAreaView />
            <StatusBar style="dark" />
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={characters}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={renderItem}
                    ListFooterComponent={() => {
                        return (<Text>-- End --</Text>)
                    }}
                    onEndReachedThreshold={0}
                    onEndReached={() => setCurrentPage(currentPage + 1)}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 10,
        marginTop: 10,
    },
    image: {
        width: 80,
        height: 80,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 18,
    },
});

export default Home;
