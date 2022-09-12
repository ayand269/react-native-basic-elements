import React from 'react';
import { ViewStyle, ViewProps } from 'react-native';
interface Props extends ViewProps {
    style?: ViewStyle;
    children?: React.ReactNode;
}
declare const Container: React.FC<Props>;
export default Container;
