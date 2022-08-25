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
const AppIcon = ({ type, size, name, color, style }) => {
    switch (type) {
        case 'Fontisto':
            return React.createElement(Fontisto, { size: size, name: name, color: color, style: style });
        case 'MaterialIcon':
            return React.createElement(MaterialIcon, { size: size, name: name, color: color, style: style });
        case 'EvilIcon':
            return React.createElement(EvilIcon, { size: size, name: name, color: color, style: style });
        case 'Feather':
            return React.createElement(Feather, { size: size, name: name, color: color, style: style });
        case 'AntDesign':
            return React.createElement(AntDesign, { size: size, name: name, color: color, style: style });
        case 'SimpleLineIcon':
            return React.createElement(SimpleLineIcon, { size: size, name: name, color: color, style: style });
        case 'ZocialIcon':
            return React.createElement(ZocialIcon, { size: size, name: name, color: color, style: style });
        case 'SimpleLineIcon':
            return React.createElement(SimpleLineIcon, { size: size, name: name, color: color, style: style });
        case 'FoundationIcon':
            return React.createElement(FoundationIcon, { size: size, name: name, color: color, style: style });
        case 'FontAwesome5':
            return React.createElement(FontAwesome5, { size: size, name: name, color: color, style: style });
        case 'FontAwesome':
            return React.createElement(FontAwesome, { size: size, name: name, color: color, style: style });
        case 'Ionicon':
            return React.createElement(Ionicon, { size: size, name: name, color: color, style: style });
        case 'MaterialCommunityIcon':
            return React.createElement(MaterialCommunityIcon, { size: size, name: name, color: color, style: style });
        case 'Entypo':
            return React.createElement(Entypo, { size: size, name: name, color: color, style: style });
        case 'Octicons':
            return React.createElement(Octicons, { size: size, name: name, color: color, style: style });
        default:
            return React.createElement(Ionicon, { size: size, name: name, color: color, style: style });
    }
};
const Icon = ({ type, size = 20, name, color, style }) => {
    return React.createElement(AppIcon, { type: type, size: size, name: name, color: color, style: style });
};
export default Icon;
//# sourceMappingURL=Icon.js.map