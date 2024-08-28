import { Primary_button } from "../Buttons/Buttons"
import { Label_text, Title_list } from "../Title/Title"
import styles from "./Footer.module.scss"

const Footer = () => {

    const widht = window.innerWidth
    const dataArr = [{
        Title: "Покупателям",
        list: ["О компании", "Цены", "Калькулятор", "Доставка", "Отзывы", "Контакты"]
    },
    {
        Title: "Каталог товаров",
        list: ["Asic miners", "GPU фермы", "Видеокарты", "Аксессуары", "Компьютерные комплектующие", "Комплектующие для майнинга"]
    }]

    return <div className={styles.Footer_container}>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Title_list
                color="#fff"
                size="22px"
                textTransform="uppercase"
            >mein miner</Title_list>

            {
                (widht < 450) ? <Primary_button appearance="secondary">Заказать звонок</Primary_button>
                    : <Label_text
                        size="15px"
                        color="#B8B8B8"
                    >© Mein Miner, 2022</Label_text>
            }

        </div>

        {
            dataArr.map(({ Title, list }, i) => {
                return <div key={i}>
                    <Label_text
                        style={{ fontWeight: "700" }}
                        color="#B8B8B8"
                        size="16px"
                        textTransform="uppercase"
                    >{Title}</Label_text>
                    <div className={styles.List}>
                        {
                            list.map((items) => {
                                return <Label_text
                                    style={{ cursor: "pointer" }}
                                    key={items}
                                    color="#fff"
                                    size="15px"
                                ><a href=""
                                    style={{ textDecoration: "none", color: "#fff" }}
                                >{items}</a></Label_text>
                            })
                        }
                    </div>
                </div>
            })
        }

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {
                widht < 450 ? null
                    : <Primary_button appearance="secondary">Заказать звонок</Primary_button>
            }
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: widht < 450 ? "start" : "end",
                gap: "10px"
            }}>
                {
                    ["Публичная оферта", "Политика конфиденциальности"].map((value) => {
                        return <Label_text
                            style={{ fontWeight: "400", cursor: "pointer" }
                            }
                            size="15px"
                        > <a href="" style={{ textDecoration: "none", color: "#B8B8B8" }}>{value}</a></Label_text>


                    })
                }

            </div>

        </div>
        {
            (widht < 450) ? <Label_text
                size="15px"
                color="#B8B8B8"
            >© Mein Miner, 2022</Label_text>
                : null
        }
    </div >

}

export default Footer