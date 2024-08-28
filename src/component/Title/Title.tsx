import React from "react"
import styles from "./Title.module.scss"

interface ITitleListProps {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    size?: string,
    color?: string,
    textTransform?: "uppercase" | "capitalize" | "lowercase" | "none"
}

export const Title_list: React.FC<ITitleListProps> = ({ textTransform = "none", color = "#000", children, style, size = "15px" }) => {

    const colors = { color: color }
    const sizes = { fontSize: size }
    const text_Transform = { textTransform: textTransform }
    const custonStyle = { ...sizes, ...colors, ...style, ...text_Transform }
    return <label
        className={`${styles.Title_all}`}
        style={custonStyle}
    >{children}</label>

}

interface ILabel_textProps {
    children?: React.ReactNode,
    color?: string,
    style?: React.CSSProperties,
    size?: string,
    textTransform?: "uppercase" | "capitalize" | "lowercase" | "none"
}

export const Label_text: React.FC<ILabel_textProps> = ({ size = "15px", children, color = "#000", style, textTransform = "none" }) => {
    const colors = { color: color }
    const sizes = { fontSize: size }
    const text_Transform = { textTransform: textTransform }
    const custonStyle = { ...colors, ...style, ...sizes, ...text_Transform }
    return <label style={custonStyle} className={styles.Label_all}>{children}</label>

}