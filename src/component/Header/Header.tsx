import styles from "./Header.module.scss"
import { FaTelegram, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoIosMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoSearchSharp, IoCloseOutline } from "react-icons/io5";
import { ButtonIcon, Primary_button } from "../Buttons/Buttons";
import React, { useState } from "react";
import _ from "lodash";
import { Badge, Dropdown, IconButton, } from "rsuite";
import "rsuite/IconButton/styles/index.css"
import "rsuite/DropDown/styles/index.css"
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Label_text } from "../Title/Title";
import { DragDrop } from "../DragDrop/DragDrop";

export const Header = () => {

    return <header className={styles.Header_container}>
        <div style={{ width: "82%", display: "flex", flexDirection: "row", margin: "0 auto", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "50px" }}>
                <label className={styles.Label_info}><MdEmail /> mein@miner.com</label>
                <label className={styles.Label_info}><FaPhoneAlt /> +7 (999) 999-99-99</label>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
                <ButtonIcon Icon={<FaTelegram color="#fff" />} />
                <ButtonIcon Icon={<IoLogoWhatsapp color="#fff" />} />
            </div>
        </div>
    </header>

}


interface IHeaderNavProps {

}

export const HeaderNav: React.FC<IHeaderNavProps> = () => {

    const dropData = [
        "Asic miners оптом",
        "GPU фермы оптом",
        "Видеокарты оптом",
        "Аксессуары оптом",
        "Компьютерные комплектующие оптом",
        "Комплектующие для майнинга оптом"
    ]

    const data = [
        {
            "label": "Цены",
        },
        {
            "label": "Калькулятор",
        },
        {
            "label": "Доставка",
        },
        {
            "label": "Отзывы",
        }
    ]

    const icons = [{
        icon: <IoSearchSharp color="black" />,
        badge: false
    },
    {
        icon: <FaRegHeart color="black" />,
        badge: 6
    },
    {
        icon: <SlBasket color="black" />,
        badge: 3
    }
    ]

    const [DropDownIsOpen, setDropDownIsOpen] = useState(false)

    return <header className={styles.HeaderNav_container}>
        <div style={{ width: "82%", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "25px" }}>
                <label className={styles.Title}>MEIN MINER</label>
                <Dropdown
                    open={DropDownIsOpen}
                    renderToggle={
                        () => <Primary_button onClick={() => setDropDownIsOpen(item => !item)} appearance={"link"} style={{ fontSize: "16px" }}>Каталог товаров {DropDownIsOpen ? "▲" : "▼"}</Primary_button>
                    }
                >
                    {
                        _.map(dropData, (item) => {
                            return <Dropdown.Item >
                                <Label_text
                                    size="16px"
                                    color="#303239"
                                >{item}</Label_text>
                            </Dropdown.Item>
                        })
                    }

                </Dropdown>
                {/* <Primary_button appearance={"link"} style={{ fontSize: "16px" }}>Каталог товаров</Primary_button> */}
                {
                    _.map(data, ({ label }, i) => {
                        return <Primary_button key={i} appearance={"link"} style={{ fontSize: "16px" }}>{label}</Primary_button>
                    })
                }
                <Primary_button appearance="primary" style={{ fontSize: "16px" }}>Заказать звонок</Primary_button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                {
                    icons.map(({ badge, icon }) => {
                        return <Badge content={badge}
                            color="blue"
                        >
                            <IconButton
                                style={{ backgroundColor: "#F0F5FB" }}
                                appearance="primary"
                                circle
                                size="lg"
                                icon={icon} />
                        </Badge>
                    })
                }

            </div>
        </div>
    </header >

}

interface IMenuMobileProps {

}

export const MenuMobile: React.FC<IMenuMobileProps> = () => {

    const data = [
        {
            "label": "Цены",
        },
        {
            "label": "Калькулятор",
        },
        {
            "label": "Доставка",
        },
        {
            "label": "Отзывы",
        }
    ]

    const dropData = [
        "Asic miners оптом",
        "GPU фермы оптом",
        "Видеокарты оптом",
        "Аксессуары оптом",
        "Компьютерные комплектующие оптом",
        "Комплектующие для майнинга оптом"
    ]

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    return <header className={styles.MenuMobile_container}

    >
        <div className={styles.NavMenu}>

            <label className={styles.Title}>MEIN MINER</label>


            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
                <Badge content={6} color="blue">
                    <IconButton
                        style={{ backgroundColor: "#F0F5FB" }}
                        appearance="primary"
                        size="lg"
                        circle icon={<FaRegHeart color="black" size={"1.5em"} />} />
                </Badge>
                <Badge content={3} color="blue">
                    <IconButton
                        style={{ backgroundColor: "#F0F5FB" }}
                        appearance="primary"
                        size="lg" circle icon={<SlBasket color="black" size={"1.5em"} />} />
                </Badge>
                <IconButton appearance="primary" size="lg"
                    circle
                    style={{ backgroundColor: "#F0F5FB" }}
                    onClick={() => setIsOpenMenu(item => !item)}
                    icon={isOpenMenu ? <IoCloseOutline color="black" size={"1.5em"} /> : <IoIosMenu color="black" size={"1.5em"} />}
                />
            </div>
        </div>
        {
            !isOpenMenu ? null :
                <div className={styles.DropDownMenu}>
                    <div className={styles.Input}>
                        <input type="text" placeholder="Поиск" />
                        <IoSearchSharp color="black" size={"1.5em"} />
                    </div>
                    <DragDrop title="Каталог товаров" items={dropData} />
                    <hr style={{ border: "1px solid #F0F5FB" }} />
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "5px", }}>
                        {
                            data.map(({ label }) => {
                                return <div className={styles.Mobile_button}>
                                    <Primary_button
                                        appearance="secondary"
                                        style={{ textAlign: "left", width: "100%", fontWeight: "400", fontSize: "16px", paddingLeft: "0" }}
                                    >{label}</Primary_button>
                                    <hr style={{ border: "1px solid #F0F5FB", }} />
                                </div>

                            })
                        }
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5px" }}>
                        <div className={styles.Label_info_mobile}><MdEmail /><Label_text size="14px">mein@miner.com</Label_text></div>
                        <div className={styles.Label_info_mobile}><FaPhoneAlt /><Label_text size="14px">+7 (999) 999-99-99</Label_text></div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 5px" }}>
                        <Primary_button>Заказать звонок</Primary_button>
                        <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                            <ButtonIcon Icon={<FaTelegram color="#1A0B73" size={"1.9em"} />} />
                            <ButtonIcon Icon={<IoLogoWhatsapp color="#1A0B73" size={"1.9em"} />} />
                        </div>
                    </div>
                </div>
        }

    </header>

}