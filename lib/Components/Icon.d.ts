import React from 'react';
import { ColorValue, TextStyle } from 'react-native';
interface PropsOfIcon {
    type?: 'Fontisto' | 'MaterialIcon' | 'EvilIcon' | 'Feather' | 'AntDesign' | 'SimpleLineIcon' | 'ZocialIcon' | 'SimpleLineIcon' | 'FoundationIcon' | 'FontAwesome5' | 'FontAwesome' | 'Ionicon' | 'MaterialCommunityIcon' | 'Entypo' | 'Octicons';
    size?: number;
    name: string;
    color?: ColorValue;
    style?: TextStyle;
}
declare const Icon: React.FC<PropsOfIcon>;
export default Icon;
export { PropsOfIcon };
