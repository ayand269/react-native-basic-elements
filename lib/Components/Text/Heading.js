//import liraries
import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../Theme/theming';
const Heading = ({ title, style, ...props }) => {
    const colors = useTheme();
    return (React.createElement(Text, { style: [
            {
                color: colors.primaryFontColor,
                fontSize: 18,
            },
            style
        ], ...props }, title));
};
export default Heading;
//# sourceMappingURL=Heading.js.map