/// <reference types="react" />
declare const Picker: import("react").FC<import("@react-native-picker/picker").PickerProps<import("@react-native-picker/picker/typings/Picker").ItemValue> & {
    style?: import("react-native").TextStyle | undefined;
    options?: any[] | undefined;
    placeholder?: string | undefined;
    showPlaceholder?: boolean | undefined;
    labelKey?: string | undefined;
    valueKey?: string | undefined;
    selectedValue?: string | undefined;
    onValueChange?: ((val: any) => void) | undefined;
    mode?: "dialog" | "dropdown" | undefined;
    containerStyle?: import("react-native").ViewStyle | undefined;
    iosModalBackGroundColor?: import("react-native").ColorValue | undefined;
    textStyle?: import("react-native").TextStyle | undefined;
    placeholderColor?: import("react-native").ColorValue | undefined;
}> & {
    Multi: import("react").FC<{
        options: any[];
        modalContainerStyle?: import("react-native").ViewStyle | undefined;
        inputContainerStyle?: import("react-native").ViewStyle | undefined;
        placeholder?: string | undefined;
        placeholderStyle?: import("react-native").TextStyle | undefined;
        closeIcon?: import("../Icon").PropsOfIcon | undefined;
        modalHeading?: string | undefined;
        itemContainerStyle?: import("react-native").ViewStyle | undefined;
        itemTextStyle?: import("react-native").TextStyle | undefined;
        selectedIcon?: import("../Icon").PropsOfIcon | undefined;
        labelKey?: string | undefined;
        valueKey?: string | undefined;
        onValueChange: (val: any[]) => void;
        returnDataType?: ((item: any) => any) | undefined;
        selectedValues: any[];
        modalHeadingTitleStyle?: import("react-native").TextStyle | undefined;
        modalBackgroundColor?: import("react-native").ColorValue | undefined;
        modalHeaderShadow?: boolean | undefined;
    }>;
    Custom: import("react").FC<{
        inputStyle?: import("react-native").ViewStyle | undefined;
        inputTextStyle?: import("react-native").TextStyle | undefined;
        selectedValue: string;
        placeholder?: string | undefined;
        placeholderColor?: import("react-native").ColorValue | undefined;
        options: any[];
        valueKey?: string | undefined;
        labelKey?: string | undefined;
        backdropColor?: import("react-native").ColorValue | undefined;
        backdropOpacity?: number | undefined;
        backdrop?: boolean | undefined;
        modalContainerStyle?: import("react-native").ViewStyle | undefined;
        modalBackgroundColor?: import("react-native").ColorValue | undefined;
        renderItem: (item: any, index: number, onPress: () => void, isSelected: boolean) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        closeIcon?: import("../Icon").PropsOfIcon | undefined;
        modalHeading?: string | undefined;
        modalHeadingTitleStyle?: import("react-native").TextStyle | undefined;
        modalHeaderShadow?: boolean | undefined;
        showHeader?: boolean | undefined;
        onValueSelect?: ((value: any) => void) | undefined;
        inputRightIcon?: import("../Icon").PropsOfIcon | undefined;
    }>;
};
export default Picker;
