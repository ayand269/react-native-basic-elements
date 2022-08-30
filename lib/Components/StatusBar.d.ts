import React from 'react';
import { ColorValue } from 'react-native';
declare type Props = {
    backgroundColor?: ColorValue;
    barStyle?: 'dark-content' | 'light-content';
    hidden?: boolean;
    translucent?: boolean;
};
declare const StatusBar: React.FC<Props>;
export default StatusBar;
