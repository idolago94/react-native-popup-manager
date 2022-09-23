import React from "react"
import { Modal, StyleSheet, View } from "react-native"
import popupManager from "../PopupManager";
import type { PopupOptions } from "../types";

const PopupComponent = React.forwardRef((props, ref) => {
    console.log("PopupComponent ~ props", props)
    const [isVisible, setVisibility] = React.useState(false);
    const [popupData, setPopupData] = React.useState<PopupOptions>({});

    React.useImperativeHandle(ref, () => ({
        isShown: () => isVisible,
        show: (data: PopupOptions) => setPopupData(data),
        hide: () => setPopupData({}),
    }))

    React.useEffect(() => {
        console.log("PopupComponent ~ popupData effect:", popupData)
        if (Object.keys(popupData).length > 0) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }, [popupData])

    return (
        <Modal
            visible={isVisible}
            onDismiss={popupManager.next}
        >
            <View style={s.backdrop}>
                {Object.keys(popupData).length > 0 && popupData}
            </View>
        </Modal>
    )
})

const s = StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    container: {
        width: 300,
        height: 300,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
    }
})

export default PopupComponent