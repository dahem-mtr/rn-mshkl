import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native'
import { theme } from "../utils/theme";

export class Game extends PureComponent {
    render(props) {
        return (
            <View style={{ alignItems: this.props.app.isRTL ? "flex-end" : "flex-start" }}>
                <TouchableWithoutFeedback onPress={() => this.props.onPress(this.props.item)}>
                    <View key={this.props.index} style={styles.imageContent}>
                        <Image style={styles.image} source={this.props.item.image} />
                        <View></View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default Game

const styles = StyleSheet.create({
    imageContent: {
        height: 120,
        width: 159,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 7,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        // resizeMode: 'stretch',
    },
    gameTitle: {
        marginHorizontal: 7,
        fontFamily: theme.fonts.main.ar,
        fontSize: 13,
        color: "#fff",
    },
})
