# react-native-popup-manager
Popup manager for react native apps
## Installation

##### If you use npm:
```sh
npm install react-native-popup-manager
```
##### Or if you use Yarn:
```sh
yarn add react-native-popup-manager
```
## Usage
##### 1. Wrap your app with the `PopupProvider` component.
```js
import React from 'react';
import { PopupProvider } from 'react-native-popup-manager';

export default function App() {
	return (
		<PopupProvider> ... </PopupProvider>
	)
}
```

##### 2. Now you can use the `PopupManager` from everywhere you want to show popup or popups in parallel.
```js
import React from 'react';
import { PopupProvider, PopupManager, closeAction, clearPopupsAction } from 'react-native-popup-manager';

function showThreePopupsInParallel() {
	   const popupOne: DefaultTemplateProps = {
		  title: 'Popup 1',
		  content: "Popup content",
		  confirmButtonText: "confirm",
		  cancelButtonText: "cancel",
		  onConfirm: closeAction(() => { console.log("Confirm!!") }),
		  onCancel: clearPopupsAction(() => console.log("Cancel!!"))
		}
		PopupManager.add(popupOne)
		
		const popupTwo: DefaultTemplateProps = {
		  title: 'Popup 2',
		  confirmButtonText: "confirm",
		  cancelButtonText: "cancel",
		  onConfirm: closeAction(() => { console.log("Confirm!!") }),
		  onCancel: clearPopupsAction(() => console.log("Cancel!!"))
		}
		PopupManager.add(popupTwo)
		
		const popupThree: DefaultTemplateProps = {
		  title: 'Popup 3',
		  content: "Popup content"
		}
		PopupManager.add(popupThree)
		
		PopupManager.next() // This function will start show all the popups in parallel.
}
```
Add the popups object config to the popup manager, 
after that you can call the `next` function to start show the popups in parallel.

##### Popup manager has a default template for all the popups(or with type `default`) that will expect to get this properties.
###### Default Template Props:
| Name | Type | Default | Description |
| -------------------------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| title | string | - | Popup title
| content | string | - | Popup content
| confirmButtonText | string | - | Popup confirm button text
| cancelButtonText | string | - | Popup cancel button text
| onConfirm | string | - | Popup confirm button callback
| onCancel | string | - | Popup cancel button callback

#### Or we can build our own custom template:
For example:
```js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { PopupManager } from 'react-native-popup-manager';
import type { DefaultTemplateProps, PopupOptions } from 'react-native-popup-manager/@types';

interface WarningTemplateProps extends PopupOptions {
  content: string
}

const WarningTemplate: React.FC<WarningTemplateProps> = ({ content }) => {
  return <View style={{ height: 300, width: 300, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ fontWeight: 'bold' }}>Warning Popup</Text>
    <Text style={{ color: 'red', padding: 7 }}>{content}</Text>
    <Button onPress={PopupManager.next} title='OK, close this popup!' />
  </View>
}
```
###### Notice that the component props will get from the popup config opject that we send to the `PopupManager`.

##### We can use some helpers for generate our custom template.
###### closeAction:
```js
import { closeAction } from 'react-native-popup-manager';
<Button onPress={closeAction(/*function will call before close popup*/)} title='close button' />
```
###### clearPopupsAction:
```js
import { clearPopupsAction } from 'react-native-popup-manager';
<Button onPress={clearPopupsAction(/*function will call before close popup*/)} title='clear popups button' />
```

##### Now we have to send this template to the `PopupProvider` like that:
```js
const customTemplates = {
    warning: WarningTemplate
}
  
return (
	<PopupProvider templates={customTemplates}> ... </PopupProvider>
)
```
We provide the popup manager our `WarningTemplate` component, that will show when we add a popup config to the `PopupManager` with type `warning`.
##### Finally we can use our custom template with the `Popupmanager`:
```js
const warningPopup: WarningTemplateProps = {
	type: 'warning',
	content: "This is warning popup with content!"
}

PopupManager.add(warningPopup)
```

#### PopupManager functions:
| Function | Description |
| -------------------------------- | --------------------------------------------------------------------------------- |
| add | Add new popup config.
| addFirst | Add new popup config and force the popup to be the next.
| clear | Delete all the popups.
| next | Close the current popup(if exist) and show the next one(if exist).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
