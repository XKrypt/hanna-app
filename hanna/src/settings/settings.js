import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';


export function Settings() {
    return (
        <ScrollView style={styles.settingsView} >
            <View style={styles.ipView}>
                <Text style={styles.titles}>Server IP</Text>
                <TextInput keyboardType="numeric" style={styles.inputs} placeholder="Ex.192.168.3.1" />
            </View>
            <View style={styles.ipView}>
                <Text style={styles.titles}>User</Text>
                <TextInput style={styles.inputs} placeholder="User name" />
            </View>
            <View style={styles.ipView}>
                <Text style={styles.titles}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.inputs} placeholder="Your Password" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    settingsView: {
        paddingTop: 24,
        backgroundColor: "#D9D9D9"

    },

    ipView: {
        padding: 15
    },
    inputs: {
        borderBottomWidth: 1,
        height: 45,
    },
    titles: {
        color: "#595959",
        fontSize: 17
    }

})

