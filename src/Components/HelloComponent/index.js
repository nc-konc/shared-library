import {Text} from "react-native";
import React from "react";
{}
export const HelloComponent = ({text, outerStyles}) => {
    console.log("Hello shared-library!!!....")
    const styles = StyleSheet.compose(innerStyles.text, outerStyles.text)
    return (<Text style={styles.text}>{text}</Text>)
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
