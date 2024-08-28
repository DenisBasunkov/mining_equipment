import React, { useEffect, useState } from "react"
import styles from "./Buttons.module.scss"

interface IPrimatyButtonProps {
    Disabled?: boolean,
    children?: React.ReactNode,
    onClick?: () => void,
    appearance?: "default" | "primary" | "secondary" | "link" | "link_secondary",
    style?: React.CSSProperties,
    RightIcon?: JSX.Element,
    className?: string,
}

export const Primary_button: React.FC<IPrimatyButtonProps> = ({
    Disabled = false,
    children,
    onClick,
    appearance = "primary",
    style,
    className = ""
}) => {

    const [ClassName, setClassName] = useState<string>(styles.Primary)

    useEffect(() => {
        if (className === "") {
            switch (appearance) {
                case "primary":
                    setClassName(styles.Primary)
                    break;
                case "secondary":
                    setClassName(styles.Secondary)
                    break;
                case "link":
                    setClassName(styles.Link)
                    break;
                case "link_secondary":
                    setClassName(styles.Link_secondary)
                    break;
                default:
                    setClassName(styles.Default)
                    break;

            }
        } else {
            setClassName(className)
        }
    })

    return <button
        style={style}
        className={`${ClassName} ${Disabled ? styles.disabled : ""} `}
        disabled={Disabled}
        onClick={Disabled ? undefined : onClick}
    >
        {children}
    </button>

}

interface IButtonIconProps {
    Icon?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({ Icon, style, className }) => {

    return <button className={`${styles.ButtonIcon} ${className}`} style={style}>
        {Icon}
    </button>

}