import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const CreateScreen = ({ navigation }) => {
    const navigate = () => {
        console.log(navigation)
        navigation.navigate('Main')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Creator</Text>
            <Button title="Strength" onPress={navigate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})