import React from 'react'
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native'




export const Content = ({ navigation }) => {
    const id = navigation.getParam('id')
    const image = navigation.getParam('image')
    const date = navigation.getParam('date')
    console.log(id, image, date)

    const remove = () => {
        Alert.alert('Warning', 'Deletion is irreversible! Still proceed?', [{
            text: 'Cancel',
            style: 'cancel'
        },{
            text: 'Delete',
            style: 'destructive',
            onPress: () => console.log('Deleted')
        }])
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Image source={{url: image}} style={{width: 200, height: 200, resizeMode: 'contain'}} />
            </View>
            <View style={styles.block}>
                <Text>Post {id}</Text>
            </View>
            <View style={styles.block}>
                <Text>Uploaded at {new Date(date).toLocaleString()}</Text>
            </View>
            <View style={styles.block}>
                <Button title="Delete" onPress={remove}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    block: {
        marginVertical: 4,
    }
})



