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
        modalHeadingTitle?: import("react-native").TextStyle | undefined;
    }>;
};
export default Picker;
