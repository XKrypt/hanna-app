import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { Button } from "react-native-paper";
import { Icon } from "react-native-elements";
import {Ionicons} from '@expo/vector-icons'

export function Apps() {
    const [apps, setApps] = useState(
        [
            { key: 'Battelfield 4' },
            { key: 'Warzone' },
            { key: 'Chorme' },
        ]
    );


    function openApp(id) {
        axios.post(`http://192.168.1.5:3000/apps/exec/${id}`).then((response) => {
            ToastAndroid.show(`${response.data}`, ToastAndroid.SHORT);
        }).catch((error) => {
            ToastAndroid.show(`${error}`, ToastAndroid.SHORT);
        })
    }

    function loadApps() {
        axios.get("http://192.168.1.5:3000/apps").then((response) => {
            let napps = [];
            response.data.forEach(element => {
                napps.push(
                    { key: element.name, id: element.id }
                )
            });
            setApps([...napps]);
            ToastAndroid.show(`${response.data}`, ToastAndroid.SHORT);
        }).catch((error) => {
            ToastAndroid.show(`${error}`, ToastAndroid.SHORT);
        })
    }

    function Item({ item }) {
        return (
            <TouchableOpacity
                onPress={
                    () => openApp(item.id)
                }
            >
                <Text style={styles.itemList}>
                    {item.key}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.appsContainer}>
            <FlatList
                data={apps}

                renderItem={
                    Item
                }

            />
            <TouchableOpacity style={styles.floatingButton} onPress={loadApps} > 
            <Ionicons name="reload" size={36} color="white" />
             </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    appsContainer: {
        paddingTop: 35,
        height : "100%"
    },

    floatingButton : {
        position : "absolute",
        width : 75,
        bottom : 25,
        right: 25,
        height: 75,
        backgroundColor : "#595959",
        borderRadius: 100,
        justifyContent : 'center',
        alignItems : "center",
      

    },
    floatingButtonText : {
        color : "#FFF",
        fontSize : 45
    },

    itemList: {
        padding: 18

    }
})
