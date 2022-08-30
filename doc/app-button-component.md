# AppButton Component
This is button component with perbuild style and some functionality. And it's fully customizable.

# Example
```js
import {AppButton} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <AppButton
            shadow = {true}
            title = "My Button"
            buttonIcon = {{
                position: 'left',
                name: 'home',
                type: 'Ionicon'
            }}
            onPress = {() => {}}
        />
    )
}
```

![Screenshot 2022-08-29 at 2 32 11 AM](https://user-images.githubusercontent.com/59437316/187094383-460f23c1-4919-40dc-9041-bf1d0b887a3f.png)

Example Gradient Button: 
```js
import {AppButton} from 'react-native-basic-elements';

const MyComponent = () => {
    return (
        <AppButton
            title="Gradient Button"
            buttonIcon={{
                position: 'left',
                name: 'home',
                type: 'Ionicon'
            }}
            gradient = {true}
            gradientColors = {['#4c669f', '#3b5998', '#192f6a']}
        />
    )
}
```
![Screenshot 2022-08-30 at 10 41 37 PM](https://user-images.githubusercontent.com/59437316/187531143-67c1e884-94a7-49ce-b9ca-c13eb120c971.png)

# Properties
| Props                | Description                                                                         | Default   |
|----------------------|-------------------------------------------------------------------------------------|-----------|
| **`title`**          | This the title of the Button.                                                       | undefined |
| **`shadow`**         | It takes **`boolean`** value. If it's **`true`** then button have a shoadow.        | false     |
| **`containerStyle`** | This is the style of the button container.                                          | undefined |
| **`textStyle`**      | This is the style of **`title`**.                                                   | undefined |
| **`loader`**      | It takes a object of [Loader Props](#loader-props).                           | undefined |
| **`buttonIcon`**     | It takes a object of [Button Icon Props](#button-icon-props).              | undefined |
| **`gradient`**       | It defines button accept **`Gradient Color`** or not.                      | false     |
| **`gradientColors`** | It takes colors array. Ex: ['#4c669f', '#3b5998', '#192f6a']               | []        |
| **`gradientStart`**  | An optional object of the following type: { x: number, y: number }         | undefined |
| **`gradientEnd`**    | Same as **`start`**, but for the end of the gradient.                      | undefined |
| **`gradientLocation`** | An optional array of numbers defining the location of each gradient color stop, mapping to the **`color`** with the same index in colors prop.                                                 | undefined |

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
