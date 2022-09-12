import React from 'react';
import { ColorValue, ViewStyle, TextStyle, ImageSourcePropType, ImageStyle } from 'react-native';
declare type RightActionProps = {
    icon?: React.ReactNode;
    onPress?: () => void;
};
declare type Props = {
    title?: string;
    titlePosition?: 'middle' | 'left';
    leftImage?: ImageSourcePropType;
    leftImageStyle?: ImageStyle;
    backgroundColor?: ColorValue;
    style?: ViewStyle;
    barStyle?: 'dark-content' | 'light-content';
    titleStyle?: TextStyle | ViewStyle;
    titleType?: 'image' | 'text';
    titleImage?: ImageSourcePropType;
    titleImageStyle?: ImageStyle;
    rightActions?: RightActionProps[];
    shadow?: boolean;
};
declare const MainAppBar: React.FC<Props>;
export default MainAppBar;
