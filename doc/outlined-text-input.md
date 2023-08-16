# Outlined TextInput Component
This is a TextInput with outlined bordered title with nice animation.

![WhatsApp Video 2023-08-16 at 5 19 35 PM (1)](https://github.com/ayand269/react-native-basic-elements/assets/59437316/f5882dbb-cc4d-4b1b-9da3-c36b7863b279)

## Example

```js
import {AppTextInput, Icon} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <AppTextInput.Outlined
            placeholder="Enter password"
            secureTextEntry={false}
            rightAction={<Icon
                name='eye'
                type='Ionicon'
            />}
            containerStyle={{
                marginHorizontal: 10
            }}
        />
    )
}
```

# Properties
| Props                        | Description                                                                         | Default   |
|------------------------------|-------------------------------------------------------------------------------------|-----------|
|**`value`**                   | This is the default value of text input.                                            | null      |
|**`inputStyle`**              | This is the style of the text input only                                            | none      |
|**`containerStyle`**      | It is the style of the whole container including.                      | none      |
|**`rightAction`**             | This is a action button. It show after text input and it takes a **`React Element`**| undefined |
|**`rightActionButtonStyle`**  | This is for styling the **`rightAction component`**.                                | undefined |
|**`borderWidth`**             | This is the border width of the Input                                | 1 |
|**`placeholder`**             | This is the placeholder of the Input. And this is the text that should be outlined.                                | 'Placeholder' |
|**`placeholderTextStyle`**             | This is tha style for styling the **`placeholder`** text.    |null |
|**`inputHeight`**             | This is the height for the text input.                               |55 |
|**`backgroundColor`**             | This is the background color for the input                               |white |
|**`placeholderTextSize`**             | This is the size of the **`placeholder`** text.                               |18 |
|**`placeholderTextColor`**         | This is the color of the **`placeholder`** text.            |18 |
|**`activeBorderColor`**  | This is the color of the input border when the input is Focused       |'blue' |
|**`inactiveBorderColor`**| This is the color of the input border when the input is not Focused   |'#000' |

# Methods
| Props                        | Description                                                                         |
|------------------------------|-------------------------------------------------------------------------------------|
|**`onChangeText`**            | Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.  |
|**`onRightIconPress`**        | Callback that is called when the **`rightAction`** press.                           |

This all props are accepted in this component and all TextInput props are also available.
