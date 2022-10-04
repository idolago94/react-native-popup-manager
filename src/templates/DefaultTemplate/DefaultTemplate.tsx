import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import type { DefaultTemplateProps } from "react-native-popup-manager/@types";

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
    title,
    content,
    confirmButtonText,
    cancelButtonText,
    onConfirm = () => { console.log("This popup didn't get a callback function for the confirm event") },
    onCancel = () => { console.log("This popup didn't get a callback function for the cancel event") }
}) => {
    const showConfirmButton = confirmButtonText
    const showCancelButton = cancelButtonText
    const showFooter = showConfirmButton || showCancelButton
    return <View style={s.container}>
        {title && <View style={s.header}>
            {/* here will be the popup header */}
            <Text>{title}</Text>
        </View>}
        {content && <View style={s.content}>
            {/* here will be the popup content */}
            <Text>{content}</Text>
        </View>}
        {showFooter && <View style={s.row_spacing}>
            {/* here will be the popup confirm button */}
            {showConfirmButton && <Button title={confirmButtonText} onPress={onConfirm} />}
            {/* here will be the popup cancel button */}
            {showCancelButton && <Button title={cancelButtonText} onPress={onCancel} />}
        </View>}
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