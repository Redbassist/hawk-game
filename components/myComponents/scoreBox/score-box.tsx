import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IScoreBoxProps {
    name: string;
    score: number;
}

export const ScoreBox: React.FC<IScoreBoxProps> = ({
    name,
    score,
}) => {
    return (<View style={styles.container}>
        <Text>{name}</Text>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "#111111"
    }
})
