import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Game from "../components/game";

const GamesList = ({ navigation, string1, string2, isRTL}) => {
    const offers = [
        1,   
    ];

    const getItemLayout = (data, index) => {
        return {
            length: 246,
            offset: index * 93,
            index,
        };
    }
        return (
            <View>
                <FlatList
                    style={{
                        borderTopRightRadius: 60 / 4,
                        borderTopLeftRadius: 60 / 4,
                        backgroundColor: '#29ABE2',
                       
                        width: 230,
             height:1000
                    }}
                    // getItemLayout={getItemLayout}
                    data={offers}
                    renderItem={({ item, index }) => <Game isRTL={isRTL} string1={" إتجاه السهم"} string2={string2} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                    // extraData={offers}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    
}

const styles = StyleSheet.create({
    
})

export default GamesList
