# Icon Component
This is a very usefull component for using Icon in React Native App(s).
```js
import {Icon} from 'react-native-basic-elements';

const MyIcon = () => {
  return(
    <Icon
      name = 'home'
      type = 'AntDesign'
      color = {'red'}
    />
  )
}
```

# Properties

| Prop        | Required | Description                                                                                                       | Default       |
|-------------|----------|-------------------------------------------------------------------------------------------------------------------|-------------|
| **`name`**  | true      | What icon to show, see Icon Explorer app or [Click Here](https://oblador.github.io/react-native-vector-icons/).  | none        |
| **`type`**  | false     | This is the name of that particular Font Family                                                                  | Ionicons        |
| **`size`**  | false     | Size of the icon, can also be passed as `fontSize` in the style object.                                          | 20          |
| **`style`** | false     | You can use all `TextStyle` props for design your Icon.                                                          | none          |
