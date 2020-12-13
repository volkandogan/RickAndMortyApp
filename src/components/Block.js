/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import {
    StyleSheet, View
} from "react-native";

import { theme } from "../constants";

export default class Block extends Component {
    handleMargins() {
        const { margin } = this.props;
        if (typeof margin === "number") {
            return {
                marginTop: margin,
                marginRight: margin,
                marginBottom: margin,
                marginLeft: margin
            };
        }

        if (typeof margin === "object") {
            const marginSize = Object.keys(margin).length;
            switch (marginSize) {
                case 1:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[0],
                        marginBottom: margin[0],
                        marginLeft: margin[0]
                    };
                case 2:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[0],
                        marginLeft: margin[1]
                    };
                case 3:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[1]
                    };
                default:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[3]
                    };
            }
        }
    }
    handlePosition() {
        const { position } = this.props;
        if (typeof position === "number") {
            return {
                top: position,
                right: position,
                bottom: position,
                left: position
            };
        }

        if (typeof margin === "object") {
            const positionSize = Object.keys(position).length;
            switch (positionSize) {
                case 1:
                    return {
                        top: position[0],
                        right: position[0],
                        bottom: position[0],
                        left: position[0]
                    };
                case 2:
                    return {
                        top: position[0],
                        right: position[1],
                        bottom: position[0],
                        left: position[1]
                    };
                case 3:
                    return {
                        top: position[0],
                        right: position[1],
                        bottom: position[2],
                        left: position[1]
                    };
                default:
                    return {
                        top: position[0],
                        right: position[1],
                        bottom: position[2],
                        left: position[3]
                    };
            }
        }
    }
    render() {
        const {
            flex,
            row,
            column,
            center,
            middle,
            left,
            absolute,
            position,
            right,
            top,
            bottom,
            card,
            shadow,
            color,
            space,
            margin,
            style,
            children,
            ...props
        } = this.props;

        const blockStyles = [
            styles.block,
            flex && { flex },
            flex === false && { flex: 0 }, // reset / disable flex
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            left && styles.left,
            right && styles.right,
            top && styles.top,
            bottom && styles.bottom,
            margin && { ...this.handleMargins() },
            position && { ...this.handlePosition() },
            card && styles.card,
            shadow && styles.shadow,
            absolute && { position: 'absolute' },
            space && { justifyContent: `space-${space}` },
            color && styles[color], // predefined styles colors for backgroundColor
            color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
            style // rewrite predefined styles
        ];

        return (
            <View style={blockStyles} {...props}>
                {children}
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    block: {
        flex: 1
    },
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: "column"
    },
    card: {
        borderRadius: theme.sizes.radius
    },
    center: {
        alignItems: "center"
    },
    middle: {
        justifyContent: "center"
    },
    left: {
        justifyContent: "flex-start"
    },
    right: {
        justifyContent: "flex-end"
    },
    top: {
        justifyContent: "flex-start"
    },
    bottom: {
        justifyContent: "flex-end"
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2
    },
    accent: { backgroundColor: theme.colors.accent },
    red: { backgroundColor: theme.colors.red },
    primary: { backgroundColor: theme.colors.primary },
    secondary: { backgroundColor: theme.colors.secondary },
    tertiary: { backgroundColor: theme.colors.tertiary },
    black: { backgroundColor: theme.colors.black },
    white: { backgroundColor: theme.colors.white },
    gray: { backgroundColor: theme.colors.gray },
    gray2: { backgroundColor: theme.colors.gray2 }
});