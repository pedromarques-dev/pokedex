import { createContext, useState } from "react";

export const themes = {
    light: {
        colors: {
            primary: '#ffffff',
            second: '#000000',
            colorBgHeader: '#7C4DFF',
            colorButton: '#7c4dff',
        },
        backgrounds: {
            homepage: {
                image: "url('./images/fundo-body.png')",
                gradient: 'linear-gradient(to top,#e1f5fe, #81d4fa,#7c4dff, #651fff)'
            },
            pageDetails: {
                image: "url('./images/bg-pokemon-details.png')",
                imageCard: "url('./images/bg-card-details.png')"
            },
        }

    },
    dark: {
        colors: {
            primary: '#000000',
            second: '#ffffff',
            colorBgHeader: '#111111',
            colorButton: '#e1f5fe',
        },

        backgrounds: {
            homepage: {
                image: "url('./images/fundo-body-dark.png')",
                gradient: 'linear-gradient(to bottom, #000000 52%, #616161, #bbdefb )'
            },
            pageDetails: {
                image: "url('./images/bg-pokemon-details-dark.png')",
                imageCard: "url('./images/bg-card-details-dark.png')"
            },
        }

    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}