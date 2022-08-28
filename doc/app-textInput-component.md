# AppTextInput Component
This is a TextInput with prebuild functionality like title, icon and action button. It is very easy to use.

## Example
```js
import {AppTextInput, Icon} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <AppTextInput
            title='This is the title'
            titleStyle={{
              color: 'blue'
            }}
            leftIcon = {{
              name: 'key',
              type: 'Ionicon'
            }}
            placeholder = "Enter password"
            secureTextEntry = {true}
            rightAction={<Icon
              name='eye'
              type='Ionicon'
            />}
        />
    )
}
```
![Screenshot 2022-08-28 at 12 38 40 PM](https://user-images.githubusercontent.com/59437316/187062113-5c25bd43-8792-41f3-b043-c67188f024b1.png)

# Properties
| Props                        | Description                                                                         | Default   |
|------------------------------|-------------------------------------------------------------------------------------|-----------|
|**`value`**                   | This is the default value of text input.                                            | null      |
|**`title`**                   | This title/heading on text input.                                                   | ''        |
|**`inputStyle`**              | This is the style of the text input only                                            | none      |
|**`mainContainerStyle`**      | It is the style of the whole container including **`title`** .                      | none      |
|**`leftIcon`**                | This is for Icon before text input. It takes [Icon Props](Icon-component.md#properties) within object. Ex: {type: 'Ionicon', name: 'eye'}     | null      |
|**`rightAction`**             | This is a action button. It show after text input and it takes a **`React Element`**| undefined |
|**`rightActionButtonStyle`**  | This is for styling the **`rightAction component`**.                                | undefined |
|**`inputContainerStyle`**     | This is for styling the input container which contain text input, **`liftIcon`** and **`rightAction`**.  | undefined |
|**`allowFontScaling`**        | Specifies whether fonts should scale to respect Text Size accessibility settings.   | false     |
|**`titleStyle`**              | This is for styling the **`title`** text style.                                     | undefined |

# Methods
| Props                        | Description                                                                         |
|------------------------------|-------------------------------------------------------------------------------------|
|**`onChangeText`**            | Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.  |
|**`onRightIconPress`**        | Callback that is called when the **`rightAction`** press.                           |

This all props are accepted in this component and all TextInput props are also available.

