# Theme
This is the main beauty of this package. If you properly configured the thiming color object then you don't need to think about color in dark mode or light mode. If you done the configuration then you can easily use our all component and it takes color acording to the theme object but also you can change color with the corresponding style props of the component . **` Note: We are working on adding the fonts in theme it will release in the next update. `**

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/59437316/189750437-ed884287-4468-43ca-b19b-520301863ecf.gif)

## Example
In **`App.js`** file.
```js
import React, { useState } from 'react'
import {Theme} from 'react-native-basic-components';

const App = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <Theme.Provider
                theme={{
                light: {
                    primaryThemeColor: '#fff',
                    secondaryThemeColor: '#fff',
                    primaryFontColor: '#000',
                    secondaryFontColor: '#666',
                    cardColor: '#fff',
                    headerColor: '#fff',
                    pageBackgroundColor: '#fff',
                    tabBarColor: '#fff',
                    shadowColor: '#999',
                    statusBarStyle: 'dark-content',
                    buttonColor: '#fff',
                    borderColor: '#999'
                },
                dark: {
                    primaryThemeColor: 'black',
                    secondaryThemeColor: '#000',
                    primaryFontColor: '#fff',
                    secondaryFontColor: '#999',
                    cardColor: '#000',
                    headerColor: '#000',
                    pageBackgroundColor: '#0A0A0A',
                    tabBarColor: '#000',
                    shadowColor: '#1E1E1E',
                    statusBarStyle: "light-content",
                    buttonColor: '#000',
                    borderColor: '#999'
                },
                }}
                mode={isDark ? 'dark' : 'light'}
            >
                <Test
                    onChange={() => setIsDark(!isDark)}
                />
            </Theme.Provider>
        </View>
    )
}

export default App;
```

In **`Test.js`** file.

```js
import React, { useState } from 'react';
import { AppBar, AppButton, AppTextInput, Container, Icon, Text, Card, CheckBox, RadioButton, Accordion } from 'react-native-basic-components'

const Test = () => {
    const [passwordShow, setPasswordShow] = useState(true);
    const [check, setCheck] = useState(false);

    return (
        <Container>
            <AppBar
                title='My AppBar'
                titlePosition='left'
                titleStyle={{
                    fontWeight: 'bold'
                }}
                leftImage={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png' }}
                titleType='text'
                shadow={true}
                rightActions={[
                    {
                        icon: <Icon
                            name='notifications'
                            style={{
                                marginRight: 10
                            }}
                        />,
                        onPress: () => console.log("bal")
                    },
                    {
                        icon: <Icon
                            name='cart'
                        />,
                        onPress: () => console.log("bal")
                    }
                ]}
            />

            <Text>
                This is my Text
            </Text>

            <Text.Heading
                title='This is my Heading'
            />

            <Text.SubHeading
                title='This is my SubHeading'
            />

            <AppTextInput
                mainContainerStyle={{
                    marginHorizontal: 10,
                    marginVertical: 10
                }}
                title="Password"
                placeholder='Enter Password'
                leftIcon={{
                    name: 'key',
                    type: 'Ionicon',
                    size: 25
                }}
                rightAction={
                    passwordShow ?
                        <Icon
                            name='eye'
                            type='Ionicon'
                        />
                        :
                        <Icon
                            name='eye-off'
                            type='Ionicon'
                        />
                }
                onRightIconPress={() => setPasswordShow(!passwordShow)}
                secureTextEntry={passwordShow}
            />

            <Card
                style={{
                    margin: 10
                }}
            >
                <Text.Heading
                    style={{
                        margin: 10
                    }}
                    title='This is my Card'
                />
                <Text.SubHeading
                    style={{
                        margin: 10
                    }}
                    title='This is my Card subheading'
                />

                <CheckBox
                    checked={check}
                    onChange={() => setCheck(!check)}
                    size={30}
                    containerStyle={{
                        borderRadius: 5
                    }}
                />

                <RadioButton
                    selected={check}
                    onChange={() => setCheck(!check)}
                    size={30}
                    containerStyle={{
                        marginTop: 10
                    }}
                />
            </Card>

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

            <AppButton
                title='Press Me'
                onPress={onChange}
                shadow={true}
                style={{
                    marginTop: 10
                }}
            />
        </Container>
    )
}
```

## Properties

| Props             | Description                                                |
|-------------------|------------------------------------------------------------|
| **`theme`**       | It takes two objects [ThemeColor](#themecolor-object). one is **`light`** and another is **`dark`** |
| **`mode`**        | This is the mode theme mode. **`enum`** 'light' or 'dark'  |

## ThemeColor Object

* **`primaryThemeColor`**
* **`secondaryThemeColor`**
* **`primaryFontColor`**
* **`secondaryFontColor`**
* **`cardColor`**
* **`headerColor`**
* **`pageBackgroundColor`**
* **`tabBarColor`**
* **`shadowColor`**
* **`statusBarStyle`**
* **`buttonColor`**
* **`borderColor`**

## Hooks

| Hook              | Description                                                |
|-------------------|------------------------------------------------------------|
| useTheme          | It returns current [ThemeColor](#themecolor-object) Object |
