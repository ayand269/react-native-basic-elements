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
* [AppTextInput](https://github.com/ayand269/react-native-basic-elements/blob/master/doc/app-textInput-component.md)
* [AppButton](https://github.com/ayand269/react-native-basic-elements/blob/master/doc/app-button-component.md)
* [CheckBox](#checkbox-component)
* [RadioButton](#radiobutton-component)
* [Card](#card-component)
* [StatusBar](#statusbar-component)
<!-- * [App Bars](#app-bars)
    * [AppBar](#appbar)
    * [AppBar.Back](#appbarback) -->
* [List]()
* [Accordion]()
* [DropdownPicker]()
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

https://user-images.githubusercontent.com/59437316/189748711-472cd4ec-0efc-4a9a-8de6-9cd1ec4782a9.mov

## Properties

| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`title`**       | Title of the accordion item.                                                        | undefined |
| **`leftIcon`**    | Icon in the left side of the Title. Type of [Icon Props](Icon-component.md#properties) | undifined |
| **`titleStyle`**  | Style for title.                                                                    | undefined |
| **`style`**       | Style for accordion item container                                                  | undefined |
| **`leftSpacing`**    | If it is **`true`** then the item take some spacing from left                    | true      |
