import React from "react"
import { Modal, ModalProps, StyleSheet, View } from "react-native"
import popupManager from "../PopupManager";
import type { PopupOptions } from "../types";

const PopupComponent = React.forwardRef((props: ModalProps, ref) => {
    const [isVisible, setVisibility] = React.useState(false);
    const [popupComponent, setPopupComponent] = React.useState<PopupOptions>({});
    const [popupConfig, setPopupConfig] = React.useState<PopupOptions>({});

    React.useImperativeHandle(ref, () => ({
        isShown: () => isVisible,
        show: (popupComponent: Element, configObj: PopupOptions) => {
            setPopupConfig(configObj)
            setPopupComponent(popupComponent)
        },
        hide: () => setPopupComponent({}),
    }))

    React.useEffect(() => {
        if (Object.keys(popupComponent).length > 0) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }, [popupComponent])

    const onDismiss = () => {
        props.onDismiss && props.onDismiss()
        popupConfig.onDismiss && popupConfig.onDismiss()
        popupManager.next()
    }

    return (
        <Modal
            transparent
            {...props}
            {...popupConfig}
            visible={isVisible}
            onDismiss={onDismiss}
        >
            <View style={s.backdrop}>
                {Object.keys(popupComponent).length > 0 && popupComponent}
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