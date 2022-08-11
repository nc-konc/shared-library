import React from "react";
import {Text, StyleSheet} from "react-native";

export const HelloComponent = ({text, outerStyles}) => {
    console.log("Hello shared-library!!!....")
    const styles = StyleSheet.compose(innerStyles.text, outerStyles.text)
    return (<Text style={styles}>{text}</Text>)
}

const innerStyles = StyleSheet.create(
    {
        text: {
            backgroundColor: "red",
            fontSize: 20,
            fontStyle: "italic"
        }
    }
)
