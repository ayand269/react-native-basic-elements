import { TextStyle, ViewStyle } from 'react-native';
import { PropsOfIcon } from '../Icon';
declare type Props = {
    title?: string;
    titleStyle?: TextStyle;
    leftSpacing?: boolean;
    leftIcon?: PropsOfIcon;
    style?: ViewStyle;
    onPress?: () => void;
};
declare const SubAccordion: ({ title, titleStyle, leftSpacing, leftIcon, style, onPress }: Props) => JSX.Element;
export default SubAccordion;
