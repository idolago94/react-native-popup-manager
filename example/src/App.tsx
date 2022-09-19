import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { PopupProvider, popupManager } from 'react-native-popup-manager';

export default function App() {

  React.useEffect(() => {
    popupManager.add({ id: '1' })
    popupManager.add({ id: '2' })
    popupManager.add({ id: '3' })
    popupManager.add({ id: '4' })
    popupManager.next();

    setInterval(popupManager.next, 5000)
  }, []);

  return (
    <View style={styles.container}>
      <PopupProvider>
        <Text>{"react-native-popup-manager"}</Text>
      </PopupProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
