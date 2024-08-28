import React from "react"
import { Label_text, Title_list } from "../Title/Title"
import styles from "./Advantages.module.scss"
import { Input_Custom } from "../Inputs/Inputs"
import { Primary_button } from "../Buttons/Buttons"

interface IA {
    text?: React.ReactNode,
    icon?: React.ReactNode
}

export const Advantages_item: React.FC<IA> = ({ text, icon }) => {

    return <div className={styles.Advantages_item} >
        {icon}
        {text}
    </div>

}


const Advantages = () => {
    const iswidth = window.innerWidth < 450
    return <div className={`${styles.Advantages_container} ${styles.bacground}`}>

        {/* <img src="/Vector.svg" style={{ position: "absolute", bottom: "0", left: "0", }} /> */}

        <div style={{ padding: "5px 25px" }}>
            <Title_list size={!iswidth ? "36px" : "26px"}
                textTransform="uppercase" color="#fff">наши преимущества</Title_list>
        </div>
        <svg className={styles.SVG}>
            <image href="./video_svg.svg" />
        </svg>
        <div className={styles.list_Advantag}>
            <Advantages_item
                icon={<div style={{
                    backgroundColor: "#25307B",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src="./Check.svg" alt="" />
                </div>}
                text={<Label_text
                    color="#fff"
                    size="16px"
                    textTransform="capitalize"
                >Более 5 лет успешной работы</Label_text>} />
            <Advantages_item
                icon={<div style={{
                    backgroundColor: "#25307B",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src="./Check.svg" alt="" />
                </div>}
                text={
                    <Label_text
                        color="#fff"
                        size="16px"
                        textTransform="capitalize"
                    >Сотни положительных отзывов</Label_text>
                } />
            <Advantages_item
                icon={<div style={{
                    backgroundColor: "#25307B",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src="./Check.svg" alt="" />
                </div>}
                text={<Label_text
                    color="#fff"
                    size="16px"
                    textTransform="capitalize"
                >Работаем по всей России</Label_text>} />
            <Advantages_item
                icon={<div style={{
                    backgroundColor: "#25307B",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src="./Check.svg" alt="" />
                </div>}
                text={<Label_text
                    color="#fff"
                    size="16px"
                    textTransform="capitalize"
                >Сотрудничество с производителем</Label_text>} />
            <Advantages_item
                icon={<div style={{
                    backgroundColor: "#25307B",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src="./Check.svg" alt="" />
                </div>}
                text={<Label_text
                    color="#fff"
                    size="16px"
                    textTransform="capitalize"
                >Гарантия на оборудование</Label_text>} />
            <Advantages_item
                icon={<div style={{
                    backgroundColor: "#25307B",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <img src="./Check.svg" alt="" />
                </div>}
                text={
                    <Label_text
                        color="#fff"
                        size="16px"
                        textTransform="capitalize"
                    >Собственный склад в Москве</Label_text>
                } />
        </div>


    </div>

}

export default Advantages

export const Block_Contact_Us = () => {

    const iswidth = window.innerWidth < 450

    return <div className={`${styles.Block_Contact_Us_container}`}>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

            <Title_list textTransform="uppercase"
                color="#fff"
                size={!iswidth ? "28px" : "22px"}
            >не нашли то, что искали?</Title_list>
            <Title_list textTransform="uppercase"
                color="#fff"
                size={!iswidth ? "28px" : "22px"}
            >свяжитесь с нами, мы вам поможем!</Title_list>
            <Label_text
                size={!iswidth ? "18px" : "14px"}
                color="#fff"
            >Заполните форму и мы свяжемся с Вами в ближайшее время</Label_text>
        </div>

        <div className={styles.Input_container}>
            <Input_Custom
                required
                style={{ gridArea: "inputText" }}
                type="text"
                placeholder="Ваше имя"
            ></Input_Custom>
            <Input_Custom
                required
                style={{ gridArea: "inputPhone" }}
                type="phone"
                placeholder="Ваш телефон"
            ></Input_Custom>
            <label htmlFor="Agree" className={styles.Chack_Agree}
                style={{ gridArea: "Check" }}
            >
                <input id="Agree " type="checkbox" />
                <label>Согласен на обработку <a href="">персональных данных</a></label>
            </label>
            <Primary_button
                style={{ gridArea: "Button" }}
                appearance="secondary"
            >
                Отправить
            </Primary_button>
        </div>


    </div>

}