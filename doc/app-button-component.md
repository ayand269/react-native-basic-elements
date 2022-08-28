# AppButton Component
This is button component with perbuild style and some functionality. And it's fully customizable.

# Example
```js
import {AppButton} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <AppButton
            title = "My Button"
            buttonIcon = {{
                position: 'right',
                name: 'home',
                type: 'Ionicon'
            }}
            onPress = {() => {}}
        />
    )
}
```
<!-- image -->
# Properties
| Props                | Description                                                                         | Default   |
|----------------------|-------------------------------------------------------------------------------------|-----------|
| **`title`**          | This the title of the Button.                                                       | undefined |
| **`shadow`**         | It takes **`boolean`** value. If it's **`true`** then button have a shoadow.        | false     |
| **`containerStyle`** | This is the style of the button container.                                          | undefined |
| **`textStyle`**      | This is the style of **`title`**.                                                   | undefined |
| **`loader`**      | It takes a object of [Loader Props](#loader-props).                           | undefined |
| **`buttonIcon`**     | It takes a object of [Button Icon Props](#button-icon-props).              | undefined |
<!-- | **`ripple`**         | It takes a object of [Ripple Props]().                                              | undefined | -->

And also it takes all methods and props of **`Pressable`**.


## Loader Props
| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`position`**    | It defines the position of loader respect to **`title`**. It's Required type of **`enum('left' , 'right')  | **`Required`** |
| **`color`**       | This the color of the loader.                                                       | undefined |
| **`size`**        | This is the size of loader. Value type of **`enum('large' , 'small')                | **`small`** |
| **`style`**       | This is the style of loader                                                         | undefined |


## Button Icon Props
| Props             | Description                                                                         | Default   |
|-------------------|-------------------------------------------------------------------------------------|-----------|
| **`position`**    | It defines the position of **`Icon`** respect to **`title`**. It's Required type of **`enum('left' , 'right')  | **`Required`** |
| **`...props`**    | And it takes all [Icon Props](Icon-component.md#properties)                         |           |