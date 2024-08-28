import React from 'react'
import { Primary_button } from '../Buttons/Buttons'
import styles from './Cards.module.scss'
import { SlBasket } from "react-icons/sl";

interface ICard_CategoryProps {
    Title?: string,
    Img?: string
}

export const Card_Category: React.FC<ICard_CategoryProps> = ({ Img, Title }) => {

    return <div className={styles.CardCategory_container}>
        <svg x={0} y={0} className={styles.Svg}>
            <defs>
                <linearGradient id="grad1" cx="50%" cy="50%" >
                    <stop offset="0%" style={{ stopColor: "#0D748B", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1A0B73", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <ellipse cx="5%" cy="50%" rx={113} ry={113} fill="url(#grad1)" />
        </svg>

        <div className={styles.CardCategory_Info}>

            <img src={Img} />
            <div>
                <p>{Title}</p>
                <Primary_button appearance='link' style={{ fontSize: "16px" }}>В каталог →</Primary_button>
            </div>
        </div>

    </div>

}

interface IProduct_CardProps {
    Tag_name?: string,
    Price?: string,
    OldPrice?: string,
    Title?: string,
    Image?: string,
    isFavorite?: boolean,
    in_Pannier?: boolean,
    stock?: string,
}

export const Product_Card: React.FC<IProduct_CardProps> = ({ stock, isFavorite, in_Pannier, Title, Tag_name, Price, OldPrice, Image }) => {
    return <div className={styles.Product_Card_container}>
        <div>
            <p className={styles.Tag}>{Tag_name}</p>
            <img src={!isFavorite ? "./heart.svg" : "./heart_fill.svg"}
                style={{ height: "20px", width: "20px" }}
                className={styles.favorite} />
        </div>
        <div className={styles.Image_card}>
            <img src={Image} alt="" />
        </div>
        <div style={{ width: "100%" }}>
            <p className={styles.Title_Product}>{Title}</p>
            <label className={styles.Lable_w}>{stock}</label>
            <div className={styles.Basket}>
                <div style={{ display: "flex", alignItems: "center", gap: "", flexWrap: "wrap" }}>
                    <p id={styles.Price}>{Price} ₽</p>
                    {
                        OldPrice ? <p id={styles.OldPrice}>{OldPrice} ₽</p> : null
                    }
                </div>
                <button className={`${styles.SlBasket} ${in_Pannier ? styles.isBasket : ""}`}>
                    <SlBasket size={"1.5em"} color={in_Pannier ? '#fff' : "#18154B"} />
                    {/* <svg width="18" height="18" >
                        <image href="/SlBasket.svg" x={0} y={0} width="100%" height="100%" />
                    </svg> */}
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                <Primary_button >Купить в 1 клик</Primary_button>
            </div>
        </div>
    </div >
}