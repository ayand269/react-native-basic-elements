import React from 'react';
import { ColorValue, StatusBarProps } from 'react-native';
interface Props extends StatusBarProps {
    backgroundColor?: ColorValue;
    barStyle?: 'dark-content' | 'light-content';
    hidden?: boolean;
    translucent?: boolean;
}
declare const StatusBar: React.FC<Props>;
export default StatusBar;
