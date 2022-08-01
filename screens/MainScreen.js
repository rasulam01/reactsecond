import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const MainScreen = ({ navigation }) => {
    const navigate = () => {
        console.log(navigation)
        navigation.navigate('Post')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Main One</Text>
            <Button title="Menace" onPress={navigate} />
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