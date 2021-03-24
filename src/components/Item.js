import React, { PureComponent } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { theme } from "../utils/theme";

export  default class Item extends PureComponent {
    render(props) {
        return (
            <View
            style={[
              styles.itemContent,
              { flexDirection: this.props.isRTL ? "row-reverse" : "row" },
            ]}
          >
            <View style={styles.item}>
              <View style={{ flexDirection: this.props.isRTL ? "row-reverse" : "row" }}>
                <View style={styles.iconContent}>{this.props.item.icon}</View>
                <Text style={styles.itemTitle}>{this.props.item.title}</Text>
              </View>
            </View>
  
            <View style={styles.item}>{this.props.item.button}</View>
          </View>
        )
    }
}



const styles = StyleSheet.create({
    itemContent: {
        height: 60,
        borderWidth: 0.3,
        borderColor: "#dcdcdc",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      },
    item: {
        // backgroundColor: '#ddd',
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      iconContent: {
        height: 40,
        width: 40,
        borderRadius: 40 / 3,
        // backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
      },
      itemTitle: {
        fontSize: 13,
        marginHorizontal: 6,
        alignSelf: "center",
        fontWeight: "bold",
        // color: "#545F62",
        fontFamily: theme.fonts.main.ar,
      },
      ItemsTitle: {
        fontSize: 20,
        // color: "#29ABE2",
        // color: "silver",
        fontWeight: "bold",
        marginTop: 18,
        marginHorizontal: 10,
        fontFamily: theme.fonts.main.ar,
      },
})
