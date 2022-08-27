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