import {Text} from "react-native";
import React from "react";

export const HelloComponent = (text) => {
    console.log("Hello shared-library!!!....")
    return (<Text>{text}</Text>)
}
