import React from 'react';
import { ColorValue, ViewStyle, TextStyle, ImageSourcePropType, ImageStyle } from 'react-native';
import { PropsOfIcon } from '../Icon';
declare type RightActionProps = {
    icon?: React.ReactNode;
    onPress?: () => void;
};
declare type Props = {
    title?: string;
    titlePosition?: 'middle' | 'left';
    backgroundColor?: ColorValue;
    style?: ViewStyle;
    barStyle?: 'dark-content' | 'light-content';
    titleStyle?: TextStyle | ViewStyle;
    titleType?: 'image' | 'text' | 'textWithImage';
    titleImage?: ImageSourcePropType;
    titleImageStyle?: ImageStyle;
    rightActions?: RightActionProps[];
    icon?: PropsOfIcon;
    onLeftIconPress?: () => void;
    shadow?: boolean;
    statusBarHidden?: boolean;
    statusBarTranslucent?: boolean;
    subTitle?: string;
    subTitleStyle?: TextStyle;
    imageTitleContainerStyle?: ViewStyle;
};
declare const BackAppBar: React.FC<Props>;
export default BackAppBar;
