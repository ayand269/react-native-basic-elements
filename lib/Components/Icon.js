import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useTheme } from './Theme/theming';
const AppIcon = ({ type, size, name, color, style, onPress }) => {
    switch (type) {
        case 'Fontisto':
            return React.createElement(Fontisto, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'MaterialIcon':
            return React.createElement(MaterialIcon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'EvilIcon':
            return React.createElement(EvilIcon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'Feather':
            return React.createElement(Feather, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'AntDesign':
            return React.createElement(AntDesign, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'SimpleLineIcon':
            return React.createElement(SimpleLineIcon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'ZocialIcon':
            return React.createElement(ZocialIcon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'SimpleLineIcon':
            return React.createElement(SimpleLineIcon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'FoundationIcon':
            return React.createElement(FoundationIcon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'FontAwesome5':
            return React.createElement(FontAwesome5, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'FontAwesome':
            return React.createElement(FontAwesome, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'Ionicon':
            return React.createElement(Ionicon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'MaterialCommunityIcon':
            return React.createElement(MaterialCommunityIcon, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'Entypo':
            return React.createElement(Entypo, { size: size, name: name, color: color, style: style, onPress: onPress });
        case 'Octicons':
            return React.createElement(Octicons, { size: size, name: name, color: color, style: style, onPress: onPress });
        // case 'FontAwesome6':
        //     return <FontAwesome6
        //         size={size}
        //         name={name}
        //         color={color}
        //         style={style}
        //         onPress={onPress}
        //     />;
        default:
            return React.createElement(Ionicon, { size: size, name: name, color: color, style: style, onPress: onPress });
    }
};
const Icon = ({ type, size = 20, name, color, style, onPress }) => {
    const colors = useTheme();
    return React.createElement(AppIcon, { type: type, size: size, name: name, color: color ? color : colors.primaryFontColor, style: style, onPress: onPress ? onPress : undefined });
};
export default Icon;
//# sourceMappingURL=Icon.js.map