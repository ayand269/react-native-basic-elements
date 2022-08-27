# AppTextInput Component
This is a TextInput with prebuild functionality like title, icon and action button. It is very easy to use.

## Example
```js
import {AppTextInput, Icon} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <AppTextInput
            title = "My Title"
            rightAction = {<Icon
                type='Ionicon'
                name='eye'
            />}
        />
    )
}
```
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

