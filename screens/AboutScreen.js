import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const AboutScreen = ({ navigation }) => {
    const navigate = () => {
        console.log(navigation)
        navigation.navigate('Create')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Know About Us</Text>
            <Button title="Force" onPress={navigate} />
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