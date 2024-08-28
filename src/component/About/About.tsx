import React from "react"
import styles from "./About.module.scss"
import { Label_text, Title_list } from "../Title/Title"
import { Advantages_item } from "../Advantages/Advantages"

interface IAboutProps {

}

export const About: React.FC<IAboutProps> = ({ }) => {

    const arr = [{
        text: "Работаем без выходных – 7 дней в неделю",
        icon: "/Calendar.svg"
    },
    {
        text: "Прямое сотрудничество с поставщиками",
        icon: "/Group.svg"
    },
    {
        text: "Быстрая авиадоставка от 14 дней",
        icon: "/Air.svg"
    },
    {
        text: "Предоплата за предзаказ от 30%",
        icon: "/Graf.svg"
    },
    {
        text: "Официальный договор, полная защита средств",
        icon: "/List.svg"
    },
    {
        text: "Видеопроверка для удаленных клиентов",
        icon: "/Camera.svg"
    }]

    const iswidth = window.innerWidth < 450

    return <div className={styles.About_container}>

        <div className={styles.About_info}>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "25px" }}>
                <Title_list size={!iswidth ? "36px" : "26px"}
                    color="#18154B"
                    textTransform="uppercase"
                >О компании</Title_list>
                <p>
                    С 2017 года Main-miner поставляет технику для майнинга на российский рынок оптом. За пять лет мы смогли укрепить свои позиции на рынке оборудования, вырастили персонал, прекрасно разбирающийся в каждом типе асиков и комплектующих.
                    <br /><br />
                    Если вы хотите купить асики оптом, то с нами можете быть уверены как в качестве техники, так и в надёжности сотрудничества. Лучше всего о нас говорит репутация!
                </p>
            </div>
            <img src="/CPUs1.svg" height={"100%"} className={styles.Image} />

        </div>
        <div className={styles.About_info_Items}>
            {
                arr.map(({ icon, text }, i) => {
                    return <Advantages_item key={i}
                        icon={<div style={{
                            backgroundColor: "#fff",
                            width: "70px",
                            height: "70px",
                            borderRadius: "50px",
                            boxSizing: "border-box",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 20px 0 hsla(236,100%,18%,.1)"
                        }}><div style={{
                            backgroundColor: "#F0F5FB",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}><img src={icon} width={25} alt="" /></div></div>}
                        text={<Label_text>{text}</Label_text>}
                    />
                })
            }



        </div>

    </div >

}