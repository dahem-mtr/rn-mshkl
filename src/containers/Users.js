import React, { PureComponent, useEffect, useState } from 'react';

import { StyleSheet, Text, View, InteractionManager, TouchableOpacity, Image } from 'react-native';
import { theme } from '../utils/theme';
import userImage from "../assets/user.png";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },  {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    }
    , {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    }
];
const renderItem = ({ item }) => {
    const backgroundColor = "#f9c2ff";

    return (
        <List
            item={item}
            onPress={() => {}}
            style={{ backgroundColor }}
        />
    );
};
export  class List extends PureComponent {
    render() {

        return DATA.map((item, i) => {
            return (
                
                    <TouchableOpacity key={i} style={[styles.item]}>
                    <Image
                        style={styles.userImage}
                        source={userImage}
                    />
                    </TouchableOpacity>
            );
        });

    }
}


const Users = () => {
    const [interactionsComplete, setInteractionsComplete] = useState(false);

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setInteractionsComplete(true);
        });
    });
    if (interactionsComplete)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>أفضل اللاعبين </Text>
            <View style={styles.row}>
                <List />
            </View>

        </View>
    )
    else  return null
}

export default Users

const styles = StyleSheet.create({
    container: {
       paddingTop:10,
        paddingBottom: 100,

        borderRadius: 7,
        marginTop: 5
    }, text: {
        marginTop: 10,
        fontFamily: theme.fonts.main.ar
    },
    text: {
        alignSelf: 'flex-end',
        fontSize: 16,
        marginHorizontal: 10,
        // color: "#55a630",

        fontFamily: theme.fonts.main.ar,
    },
    row: {
        flexDirection: 'row-reverse',
        flexWrap: "wrap",
        justifyContent: "center",
    },item: {
        width: 70,
        height: 70, 
        marginHorizontal: 10,
        marginVertical:10,
        // backgroundColor: "#ddd",
        justifyContent: 'center',
        alignItems:"center"

    }, userImage: {
        height: '100%',
        width:'100%'
    }
})