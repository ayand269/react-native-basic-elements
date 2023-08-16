# react-native-basic-components
*Note: This README is only relevant to the latest version of our plugin. If you are using an older version, please switch to the relevant tag on [our GitHub repo](https://github.com/ayand269/react-native-basic-elements) to view the docs for that particular version.*
This plugin provides basic components of React Native for ***Easy Design*** and smooth experience to your React Native app(s).
# Table of Contents
* [Getting Started](#getting-started)
* [Components](#components)


## Getting Started
Follow the instruction given bellow 

```shell
npm install react-native-basic-elements
```
After run this command you have successfully install this plugin. Now you have to install react-native-vector-icons because we use icon internally.
```shell
npm install --save react-native-vector-icons
```
After installing react-native-vector-icons you have to configure it. Read the configuration process of [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Components
* [Theme](https://github.com/ayand269/react-native-basic-elements/blob/v1.0.6/doc/theme-component.md)
* [Icon](https://github.com/ayand269/react-native-basic-elements/blob/master/doc/Icon-component.md)
* [TextInput]()
    * [AppTextInput](https://github.com/ayand269/react-native-basic-elements/blob/master/doc/app-textInput-component.md)
    * [Outlined TextInput](https://github.com/ayand269/react-native-basic-elements/blob/master/doc/outlined-text-input.md)
* [AppButton](https://github.com/ayand269/react-native-basic-elements/blob/master/doc/app-button-component.md)
* [CheckBox](#checkbox-component)
* [RadioButton](#radiobutton-component)
* [Card](#card-component)
* [StatusBar](#statusbar-component)
<!-- * [App Bars](#app-bars)
    * [AppBar](#appbar)
    * [AppBar.Back](#appbarback) -->
* [List]()
* [Dropdown Picker](#dropdown-picker)
    * [Select Dropdown](#select-dropdown)
    * [Multi Select Dropdown](#multi-select-dropdown)
* [Text Components](#text-components)
    * [Text](#text)
    * [Heading](#heading--subheading)
    * [SubHeading](#heading--subheading)
* [Accordion](#accordion)
    * [Accordion Item](#accordion-item)

# CheckBox Component

## Example
```js
import React, { useState } from 'react'
import {CheckBox} from 'react-native-basic-elements';

const MyComponent = () => {
    const [check, setCheck] = useState(false);
    return (
        <CheckBox
            checked = {check}
            onChange = {(val) => setCheck(val)}
            size = {25}
        >
    )
}
```

![ezgif com-gif-maker](https://user-images.githubusercontent.com/59437316/187244418-f82ea90e-3df1-4453-ab92-64e262f3d68d.gif)

## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`checked`**     | This is the default value of CheckBox. Props type **`boolean`**                     | false     |
| **`activeColor`** | This color show when **`checked`** is set to **`true`**                             | 'blue'    |
| **`inactiveColor`**| This color show when **`checked`** is set to **`false`**                           | '#999'    |
| **`tintColor`**   | Color of check icon.                                                                | '#fff'    |
| **`size`**        | Size of checkBox                                                                    | 16        |
| **`containerStyle`**| With this you can change the style of checkbox                                    | undefined |

## Method
| Props                        | Description                                                                         |
|------------------------------|-------------------------------------------------------------------------------------|
| **`onChnage`**               | This callback function is called when you click on checkbox. It returns boolean value|


# RadioButton Component

## Example
```js
import React, { useState } from 'react'
import {RadioButton} from 'react-native-basic-elements';

const MyComponent = () => {
    const [selected, setSelected] = useState(false);
    return (
        <RadioButton
            selected = {selected}
            onChange = {(val) => setSelected(val)}
            size = {25}
        >
    )
}
```

![ezgif com-gif-maker-2](https://user-images.githubusercontent.com/59437316/187244725-4aa59360-cf7d-4c2f-ab89-113f82890aba.gif)


## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`selected`**    | This is the default value of RadioButton. Props type **`boolean`**                  | false     |
| **`activeColor`** | This color show when **`selected`** is set to **`true`**                            | 'blue'    |
| **`inactiveColor`**| This color show when **`selected`** is set to **`false`**                          | '#999'    |
| **`size`**        | Size of RadioButton                                                                 | 20        |
| **`containerStyle`**| With this you can change the style of RadioButton                                 | undefined |

## Method
| Props                        | Description                                                                         |
|------------------------------|-------------------------------------------------------------------------------------|
| **`onChnage`**               | This callback function is called when you click on RadioButton. It returns boolean value|


# Card Component
This is a card with pre-styled and clickable.

## Example
```js
import {Card} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <Card>
            {/* Your JSX Elements */}
        </Card>
    )
}
```

## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`style`**       | For styling the card.                                                               | undefined |
| **`shadow`**      | This is for enabling or disabling pre defined shadow. Also you can overwrite them with defining shadow in **`style`**. It take **`boolean`** value.  | true   |

And it also support all **`View`** and **`Pressable`** props.


# StatusBar Component
This is for status bar that configured on android and ios both.

## Example
```js
import {StatusBar} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <StatusBar
            backgroundColor={'green'}
            barStyle = 'light-content'
        />
    )
}
```
## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`backgroundColor`** | For statusbar color.                                                            | #fff      |
| **`barStyle`**    | For StatusBar content color. Value type **`enum('dark-content', 'light-content')    | 'dark-content' |
| **`hidden`**      | This is used for show or hide the statusbar.                                        | false     |
| **`translucent`** | If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color. | false |

<!-- # App Bars

## AppBar

## AppBar.Back -->


# Text Components

![Screenshot 2022-09-12 at 10 47 55 PM](https://user-images.githubusercontent.com/59437316/189748956-ede274a7-4e20-4ec9-88f3-c6a0c8a97de0.png)

```js
import {Container, Text} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <Container
            style = {{
                alignItems: 'center'
            }}
        >
            <Text>
                This is my Text
            </Text>

            <Text.Heading
                title='This is my Heading'
            />

            <Text.SubHeading
                title='This is my SubHeading'
            />
        </Container>
    )
}

export default MyComponent;
```
We have 3 types of pre-configured Text Components bellow :
## Text
It's same as **`react-native`** **`Text`** component but it takes color autometic from theme.


## Heading & SubHeading

| Props             | Description                                                |
|-------------------|------------------------------------------------------------|
| **`title`**       | It takes string in title.                                  |
| **`style`**       | It is for styling the text.                                |   

And all **`Text`** props are available in those components.

# Accordion

## Example
```js
import { Accordion } from 'react-native-basic-components';

const MyComponent = () => {
    return (
        <Accordion
            leftIcon={{
                name: 'home',
                size: 25
            }}
            title='Home'
            containerStyle={{
                margin: 10
            }}
            shadow={true}
        >
            {/* your design */}
        </Accordion>
    )
}

export default MyComponent;
```
## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`title`**       | Title of the accordion.                                                             | undefined |
| **`leftIcon`**    | Icon in the left side of the Title. Type of [Icon Props](Icon-component.md#properties) | undifined |
| **`openIcon`**    | It is used for right indicator when accordion is oppned                             | 'chevron-up' |
| **`closeIcon`**   | It is used for right indicator when accordion is closed                             | 'chevron-down' |
| **`titleStyle`**  | Style for title.                                                                    | undefined |
| **`containerStyle`** | Style for accordion container                                                    | undefined |
| **`shadow`**      | If it is **`true`** then accordion has a shadow                                     | false     |


# Accordion-Item

## Example
```js
import { Accordion } from 'react-native-basic-components';

const MyComponent = () => {
    return (
        <Accordion
            leftIcon={{
                name: 'home',
                size: 25
            }}
            title='Home'
            containerStyle={{
                margin: 10
            }}
            shadow={true}
        >
            <Accordion.Item
                title='Home 1'
                leftIcon={{
                    name: 'thumbs-up',
                    type: 'Feather'
                }}
            />

            <Accordion.Item
                title='Home 2'
                leftIcon={{
                    name: 'upload',
                    type: 'Feather'
                }}
            />

            <Accordion.Item
                title='Home 2'
                leftIcon={{
                    name: 'upload',
                    type: 'Feather'
                }}
            />
        </Accordion>
    )
}

export default MyComponent;
```

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/59437316/189750723-596ef244-5a26-46b2-b7ea-48faca118a3a.gif)


## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`title`**       | Title of the accordion item.                                                        | undefined |
| **`leftIcon`**    | Icon in the left side of the Title. Type of [Icon Props](Icon-component.md#properties) | undifined |
| **`titleStyle`**  | Style for title.                                                                    | undefined |
| **`style`**       | Style for accordion item container                                                  | undefined |
| **`leftSpacing`**    | If it is **`true`** then the item take some spacing from left                    | true      |

# Dropdown Picker

## Select Dropdown

### Example
```js
import {Picker} from 'react-native-basic-components';

const MyComponent = () => {
    const [dropdownValue, setDropdownValue] = useState('');
    return (
        <Picker
            options={[
                {
                    label: 'Item 1',
                    value: 'item1'
                },
                {
                    label: 'Item 2',
                    value: 'item2'
                },
                {
                    label: 'Item 3',
                    value: 'item3'
                },
                {
                    label: 'Item 4',
                    value: 'item4'
                },
                {
                    label: 'Item 5',
                    value: 'item5'
                },
            ]}
            placeholder="PlaceHolder"
            textStyle={{
                fontSize: 15
            }}
            selectedValue={dropdownValue}
            onValueChange={(val) => setDropdownValue(val)}
        />
    )
}
```

## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`style`**       | Style of the Picker Component.                                          | undefined |
| **`options`**     | It takes an **`Array`** as options for the picker.                      | []        |
| **`placeholder`**  | Placeholder for the Picker Input                                       | undefined |
| **`showPlaceholder`**       | Show the placeholder or not.                                  | undefined |
| **`labelKey`**    | It takes that key as the lebel key from **`options`** Array             |'label'    |
| **`valueKey`**    | It takes that key as the value key from **`options`** Array             |'value'    |
| **`selectedValue`**    | It takes the defalut value(Required)                               |''         |
| **`mode`**  | This is the mode of the Picker. Value type **`enum('dropdown', 'dialog')      |dropdown   |
| **`containerStyle`**  | This is the Style of the input container                            |undefined  |
| **`iosModalBackGroundColor`** | This is for ios. It change the modal background color.                              |Theme card color  |
| **`onValueChange`** | Callback that is called when the picker change it's value. Changed item value is passed as a single string argument to the callback handler.              |undefined   |


## Multi Select Dropdown

### Example
```js
import {Picker} from 'react-native-basic-components';

const MyComponent = () => {
    const [dropdownValue, setDropdownValue] = useState([]);
    return (
        <Picker.Multi
                options={[
                    {
                        label: 'Item 1',
                        value: 'item1'
                    },
                    {
                        label: 'Item 2',
                        value: 'item2'
                    },
                    {
                        label: 'Item 3',
                        value: 'item3'
                    },
                    {
                        label: 'Item 4',
                        value: 'item4'
                    },
                    {
                        label: 'Item 5',
                        value: 'item5'
                    },
                    {
                        label: 'Item 6',
                        value: 'item6'
                    },
                    {
                        label: 'Item 7',
                        value: 'item7'
                    },
                    {
                        label: 'Item 8',
                        value: 'item8'
                    },
                    {
                        label: 'Item 9',
                        value: 'item9'
                    },
                    {
                        label: 'Item 10',
                        value: 'item10'
                    },
                ]}
                returnDataType={(item) => { return {value: item.value} }}
                onValueChange={(val) => {
                    setDropdownValue(val)
                }}
                selectedValues={dropdownValue}
            />
    )
}
```

## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`modalContainerStyle`** | Style for modal container.                                      | undefined |
| **`options`**     | It takes an **`Array`** as options for the picker.                      | []        |
| **`placeholder`**  | Placeholder for the Picker Input                                       | undefined |
| **`placeholderStyle`**  | Style for picker placeholder.                                     | undefined |
| **`labelKey`**    | It takes that key as the lebel key from **`options`** Array             |'label'    |
| **`valueKey`**    | It takes that key as the value key from **`options`** Array             |'value'    |
| **`selectedValues`**    | It takes the defalut value(Required)                              |[]         |
| **`closeIcon`**  | Modal Close Icon. Type of [Icon Props](Icon-component.md#properties)     |undefined  |
| **`modalHeading`**  | Heading of the Selection modal                                        |'Choose'   |
| **`modalHeadingTitle`**  | Heading text style of the Selection modal                        |undefined  |
| **`itemContainerStyle`** | This is the Item List style.                                     |undefined  |
| **`itemTextStyle`** | This is the Item List text style.                                     |undefined  |
| **`selectedIcon`** | This is the selected item icon. Type of [Icon Props](Icon-component.md#properties)       |undefined  |
| **`itemTextStyle`** | This is the Item List text style.                                     |undefined  |
| **`onValueChange`** | Callback that is called when the picker change it's value. Changed item value is passed as a single string argument to the callback handler.              |undefined   |
| **`returnDataType`** | Takes an item from **`options`**, and which data type you return that will be give as value in **`onValueChange`**.            |(item) => {return item[valueKey]}   |