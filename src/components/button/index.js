import { BoxButton } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-toggler"

export const Button = (props) => {
    const { theme } = useContext(ThemeContext) 

    return (
        <BoxButton>
            <button {...props} 
            style={{backgroundColor: theme.colors.colorButton, color: theme.colors.primary}}/>
        </BoxButton>
    )
}