import React, { useState } from "react"
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);
    
    return (
        <View style={styles.container}>
            <View style={styles.imputContainer}>

                <View style={styles.textInput}>
                    <TextInput

                        onChangeText={setSubject}
                        multiline={true}
                        label="What would you like to focus on?" />
                </View>
                <View style={styles.button}>
                    <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)} />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 0.2,
        
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm
    },
    button: {
        justifyContent: 'center'
    },
    imputContainer: {

        padding: spacing.xl,
        flexDirection: 'row'

    },
    text: {
        color: colors.white
    }
})