import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";

export default class Typography extends Component {
    render() {
        const {
            h1,
            h2,
            h3,
            title,
            body,
            caption,
            small,
            size,
            // styling
            bold,
            center,
            // colors
            color,
            black,
            white,
            style,
            children,
            ...props
        } = this.props;

        const textStyles = [
            styles.text,
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            title && styles.title,
            body && styles.body,
            caption && styles.caption,
            small && styles.small,
            size && { fontSize: size },
            bold && styles.bold,
            center && styles.center,
            color && styles[color],
            color && !styles[color] && { color },
            // color shortcuts
            black && styles.black,
            white && styles.white,

            style
        ];

        return (
            <Text style={textStyles} {...props}>
                {children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({

    text: {
        fontSize: theme.sizes.font,
        color: theme.colors.black
    },
    bold: {
        fontWeight: "bold"
    },
    // colors
    black: { color: theme.colors.black },
    white: { color: theme.colors.white },
    // fonts
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,
    title: theme.fonts.title,
    body: theme.fonts.body,
    caption: theme.fonts.caption,
    small: theme.fonts.small
});