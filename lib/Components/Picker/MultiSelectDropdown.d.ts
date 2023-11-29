import React from 'react';
import { ViewStyle, TextStyle, ColorValue } from 'react-native';
import { PropsOfIcon } from '../Icon';
declare type Props = {
    options: Array<any>;
    modalContainerStyle?: ViewStyle;
    inputContainerStyle?: ViewStyle;
    placeholder?: string;
    placeholderStyle?: TextStyle;
    closeIcon?: PropsOfIcon;
    modalHeading?: string;
    itemContainerStyle?: ViewStyle;
    itemTextStyle?: TextStyle;
    selectedIcon?: PropsOfIcon;
    labelKey?: string;
    valueKey?: string;
    onValueChange: (val: Array<any>) => void;
    returnDataType?: (item: any) => any;
    selectedValues: Array<any>;
    modalHeadingTitleStyle?: TextStyle;
    modalBackgroundColor?: ColorValue;
    modalHeaderShadow?: boolean;
};
declare const MultiSelectDropdown: React.FC<Props>;
export default MultiSelectDropdown;
