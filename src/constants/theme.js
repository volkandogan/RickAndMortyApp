/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
const colors = {
    accent: '#F3534A',
    red: '#ca273d',
    primary: '#afca27',
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#323643",
    black2: "#4d4c4c",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#b8b8b8",
    gray3: "#f8f8f8"
};

const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 15,
    border: 15,
    padding: 25,
    cardHeight: 60,

    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 17,
    header: 16,
    body: 13,
    caption: 12,
};

const fonts = {
    h1: {
        fontSize: sizes.h1
    },
    h2: {
        fontSize: sizes.h2
    },
    h3: {
        fontSize: sizes.h3
    },
    header: {
        fontSize: sizes.header
    },
    title: {
        fontSize: sizes.title
    },
    body: {
        fontSize: sizes.body
    },
    caption: {
        fontSize: sizes.caption
    }
};

export { colors, sizes, fonts };