import React from 'react';
import { TextStyle, ViewStyle, ColorValue } from 'react-native';
import { PickerProps } from '@react-native-picker/picker';
interface Props extends PickerProps {
    style?: TextStyle;
    options?: Array<any>;
    placeholder?: string;
    showPlaceholder?: boolean;
    labelKey?: string;
    valueKey?: string;
    selectedValue?: string;
    onValueChange?: (val: any) => void;
    mode?: 'dropdown' | 'dialog';
    containerStyle?: ViewStyle;
    iosModalBackGroundColor?: ColorValue;
    textStyle?: TextStyle;
    placeholderColor?: ColorValue;
}
declare const RNPicker: React.FC<Props>;
export default RNPicker;
