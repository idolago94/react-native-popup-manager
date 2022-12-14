import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { PopupProvider, PopupManager, closeAction, clearPopupsAction } from 'react-native-popup-manager';
import type { DefaultTemplateProps, PopupOptions } from 'react-native-popup-manager/@types';

interface WarningTemplateProps extends PopupOptions {
  content: string
}

const WarningTemplate: React.FC<WarningTemplateProps> = ({ content }) => {
  return <View style={{ height: 300, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ fontWeight: 'bold' }}>Warning Popup</Text>
    <Text style={{ color: 'red', padding: 7 }}>{content}</Text>
    <Button onPress={closeAction()} title='OK, close this popup!' />
  </View>
}

export default function App() {

  React.useEffect(() => {
    showPopups()
  }, []);

  const showPopups = () => {
    const newPopup: DefaultTemplateProps = {
      title: 'My new popup',
      content: "Popup content",
      confirmButtonText: "confirm",
      cancelButtonText: "cancel",
      onConfirm: closeAction(() => { console.log("Confirm!!") }),
      onCancel: clearPopupsAction(() => console.log("Cancel!!"))
    }
    const warningPopup: WarningTemplateProps = {
      type: 'warning',
      content: "This is warning popup with content!"
    }

    PopupManager.add(newPopup)
    PopupManager.add(warningPopup)
    PopupManager.next(); // for start show the popups
  }

  const customTemplates = {
    warning: WarningTemplate
  }

  return (
    <View style={styles.container}>
      <PopupProvider templates={customTemplates}>
        <Text>{"react-native-popup-manager"}</Text>
        <Button color={'white'} onPress={showPopups} title='show' />
      </PopupProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
