import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import type { DefaultTemplateProps } from "react-native-popup-manager/@types";

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
    title,
    content,
    confirmButtonText,
    cancelButtonText,
    onConfirm,
    onCancel
}) => {
    return <View style={s.container}>
        <View style={s.header}>
            {/* here will be the popup header */}
            <Text>{title}</Text>
        </View>
        <View style={s.content}>
            {/* here will be the popup content */}
            <Text>{content}</Text>
        </View>
        <View style={s.row_spacing}>
            {/* here will be the popup confirm button */}
            <Button title={confirmButtonText} onPress={onConfirm} />
            {/* here will be the popup cancel button */}
            <Button title={cancelButtonText} onPress={onCancel} />
        </View>
    </View>
}

const s = StyleSheet.create({
    container: {
        borderRadius: 12,
        backgroundColor: 'white',
        width: 300,
        height: 300,
        padding: 15
    },
    row_spacing: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DefaultTemplate