import React, { useState } from "react"
import styles from './Carusel.module.scss'

interface ICaruselMenuProps {

    active?: Number
    length?: Number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string,
    style?: React.CSSProperties,
    color?: "prymary" | "secondery",
}

export const Carusel_menu: React.FC<ICaruselMenuProps> = ({ color = "prymary", length = 0, onChange, className, style, active = 1 }) => {

    const [Active, setActive] = useState<Number | undefined>(active || undefined)
    const Cheked = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        await setActive(newValue)
        if (onChange) {
            onChange(e);
        }
    }

    return <div className={`${styles.Carusel_Menu} ${className}`} style={style}>
        {
            Array.from(Array(length).keys()).map((value) => {
                return <input key={value} type="radio" className={`${styles.Radio_menu} ${styles[`Radio_color_${color}`]}`} checked={Active === value} name={`Carusel_${length}`} value={value} onChange={Cheked} />
            })
        }
    </div>

}