import React from "react"
import styles from "./Banner.module.scss"
import { Primary_button } from "../Buttons/Buttons"
import { Carusel_menu } from "../Carusel/Carusel"


export const Banner: React.FC = () => {
    return <div className={styles.Banner_container}>

        <div className={styles.Info_Banner}>
            <div className={styles.Text_Banner}>
                <h1>оборудование для майнинга оптом</h1>
                <p>с гарантией 12 месяцев</p>
                <Primary_button appearance="secondary">Перейти в каталог</Primary_button>
            </div>
            <div className={styles.Img_Banner} >
                <img src="./Equipment.png" alt="" />
            </div>
        </div>
        <Carusel_menu length={4} className={styles.position} active={1} />

        <svg className={styles.Svg}>
            <ellipse cx={"110%"} cy={"50%"} rx={"40%"} ry={"60%"} className={styles.Back_svg} />
            <ellipse cx={15} cy={15} rx={15} ry={15} className={styles.Back_svg_m} />
        </svg>

    </div>
}

export const Banner_f = () => {

    return <div className={styles.Banner_f_container}>
        <div style={{
            position: "absolute",
            top: "45px",
            left: "45px"
        }}>
            <h1>выгодное предложение</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                <p style={{ fontSize: "56px" }}>-20%</p>
                <p style={{ fontSize: "18px", fontWeight: "600" }}>на все товары Antminer</p>
            </div>
        </div>
        <img src="/svg.svg" width={216} style={{ position: "absolute", bottom: "25px", left: "8px" }} />
        <Primary_button appearance="link_secondary" style={{ fontSize: "20px", position: "absolute", bottom: "25px", right: "8px", display: "flex", alignItems: "center" }}>В каталог  <strong >→</strong></Primary_button>
    </div>

}

export const Banners = () => {

    return <div className={styles.Banners_container}>
        <Banner />
        <Banner_f />
    </div>

}