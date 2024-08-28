import styles from "./Bestsellers .module.scss"
import { Product_Card } from "../Cards/Cards"
import { Carusel_menu } from "../Carusel/Carusel"
import { Title_list } from "../Title/Title"
import { Carousel } from "rsuite"
// import "rsuite/Carousel/styles/index.css"
import { useState } from "react"

interface IDataArr {
    text: string,
    img: string,
    prise: string,
    oldPrise: string,
    Tag: string,
    Favorite: boolean,
    in_Pannier: boolean,
    stock: string,
}

const Bestsellers = () => {

    const dataArr = [
        {
            text: "Antminer L7 8800 Mh/s",
            img: "https://s3-alpha-sig.figma.com/img/05bc/bd79/3db9f95d024fab4411ec0de3bb6d2420?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqma-3J57D11qzsI7rWii66RaR7Kw~LP~WHM5JqSGRcjfNDiSOMJCJP24Lg3ESys-L9SfHYAUGffNQly5ECXMyuSsazpconL~jU65oF074IEFyh5no79texgtoGJ~s1ewKaNJ25QtZ8vDWN7CQzEl4ur8biPy7pSVMuhgJqQXc7vIcl6brOqh8j-vh~6RyQGdnkH63d~02lmq17-rCdbBdLfzw8C3pKgUi00Wi1o3Jk6ZCKW4Z6dLlLC-THevckpDPSv1X9pjIF~TeePI1t7t8KsbMYCrOQeUgBAOfH3ra5yDFq~hrZnTQv~c9960n36WVKgqj8ynhuWZ5f4zPvgoA__",
            prise: "615 000",
            oldPrise: "",
            Tag: "хит",
            Favorite: false,
            in_Pannier: false,
            stock: "В наличии"
        },
        {
            text: "Antminer S19j pro 110 Th/s",
            img: "https://s3-alpha-sig.figma.com/img/edb7/5765/a53c82531d5d48d0bf24018169a9f2e4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PketXuEtb8d5sPrx3irrS1-Ngfj7Gsn8Sxq1IQPUO9z02tFMwk9gyiAz48f6wE-N16U1kyezWoJaMAQX5YLJDv8fKkHLM9cteRAhlyxfsZVprA1qiULnb73PJaQw9xaBDsAGhaU8wge8mm4Fff5T~iiYnmfPhmDC6fzq6r3U5SGx4UI7OAXQzNTineF9o7xlOhbWsQ7A5LsxOek9SOq-rdvs7K1dLGNSjw1nQkX5nU6vpiOM1nWKIubigWyvcG32tqqU98K7DfdPX1VBccUu4qZbEu~qmamqOT6YW8Y1g~tr3VJrzo7CLPVjXDZe5XHjHuCllETEmQMHe3yZIaoZcw__",
            prise: "245 000",
            oldPrise: "315 000",
            Tag: "sale",
            Favorite: true,
            in_Pannier: false,
            stock: "Под заказ"
        },
        {
            text: "Whatsminer M3x 12.5 Th/34335662fge",
            img: "https://s3-alpha-sig.figma.com/img/690d/24d1/a1218da9865ce1ff5a801cc0ac2258a4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aM-~bizoD3wIxSdkOJpSUgd86SViBBLkHN50R-sGkrqOoz3dB6w-oKsWNToG-4ghXQ6hOWvQa~0ACJk8gLMLuLmeSIMybioa-cx7lKXajG9~4AenrQPSyRWd8XQ9Ux7OCtpztScemUHIEkHApCUrOl-AMz6TmyLBH67vqG2-aisDMWFy74NeEzqUahfmeyYPM4JB05Mrs-SxEbIpLdKV9AFjQo7qeI-29GR48ME~JyfNVw5NOtmEKCaEBfRk6TFbe4tRTbccQ4KmYfyp~UQCO~oH2-fT4v~8JBd8Kv~NGbUXdbZdHoW2175PoWZ59qwl8v7WdyKsUVR8m9ubBIjA7Q__",
            prise: "14 000",
            oldPrise: "",
            Tag: "new",
            Favorite: false,
            in_Pannier: true,
            stock: "В наличии"
        },
        {
            text: "Antminer Z15e 200 ksol",
            img: "https://s3-alpha-sig.figma.com/img/80f3/c646/8a287fdb50d8a537899388df71db5a6a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQNkHS1aI04s3JiXvQ0M~NXwng6mb2sJZQDgB6M1IoBYmwH35An-LSPxMEa-iqtio8uwC-PLf8YVEEKs-MxQle6Dc4QF3kZGXsf5dA2fxAWW-WJkMPw2u47WwT60RxLlKwL7HgNHcJvqkuyv698yXfkvpnmh7Z17JcdFz1z9bIi~M-zexvnImzZjMmWrSMMclYZUJz23gmhCDXWrMrKiICwh3kbbGt8lBEVJS9CqMC2~PStEzs88ai2VY33AiG1XecY7PhRmwlIDFpJ3HXp~2vGNw48-gmtSZ9MMVowIMAv0Pn6RnFlyabXHY0czkipqW9L2WdMcCnAB7a5ZGwHBHg__",
            prise: "290 000",
            oldPrise: "325 000",
            Tag: "sale",
            Favorite: false,
            in_Pannier: false,
            stock: "В наличии"
        },
        {
            text: "Innosilicon A11 1500 Mh/s32ац",
            img: "https://s3-alpha-sig.figma.com/img/3c14/06c6/80ba92add9ffef33232583095a83ddba?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ig4dOsO9g3qgfrr~HneT2a7DhDBzT5nB9uaNjepzGsApKdAC29I1N7ty6nWGUavy1eJhPjwHUYGZ-aR3bqNWyqcL-vkn0fbE0SMXrKXbjBtOTof9TA7R2BgxuPT4iOVYDBuTiHi6TxDd4O-hOuOK1vSFyCR87nkPOrZMaFZM4D7JK2PP1oErf7XEHvh~xELEeXiM3pKZJpS5dxM2hEvKDUk7afB6AfE1R8HnHpS~q5CrkCPfDxZh~bxQDbsD7H3pSZaFR198gkIQhyMGlEIPJxVoeCbSuMDsefW7xusgsN1HbMF2Lk0GKFaqvm8Xxjrjv~VzaoxO2R-rh0z4va8RUA__",
            prise: "173 000",
            oldPrise: "",
            Tag: "хит",
            Favorite: false,
            in_Pannier: false,
            stock: "Под заказ"
        },
        {
            text: "Whatsminer M3x 1d323",
            img: "https://s3-alpha-sig.figma.com/img/690d/24d1/a1218da9865ce1ff5a801cc0ac2258a4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aM-~bizoD3wIxSdkOJpSUgd86SViBBLkHN50R-sGkrqOoz3dB6w-oKsWNToG-4ghXQ6hOWvQa~0ACJk8gLMLuLmeSIMybioa-cx7lKXajG9~4AenrQPSyRWd8XQ9Ux7OCtpztScemUHIEkHApCUrOl-AMz6TmyLBH67vqG2-aisDMWFy74NeEzqUahfmeyYPM4JB05Mrs-SxEbIpLdKV9AFjQo7qeI-29GR48ME~JyfNVw5NOtmEKCaEBfRk6TFbe4tRTbccQ4KmYfyp~UQCO~oH2-fT4v~8JBd8Kv~NGbUXdbZdHoW2175PoWZ59qwl8v7WdyKsUVR8m9ubBIjA7Q__",
            prise: "14 000",
            oldPrise: "",
            Tag: "new",
            Favorite: false,
            in_Pannier: false,
            stock: "В наличии"
        }
    ]


    function splitArray(arr: IDataArr[], chunkSize: number): IDataArr[][] {
        const result: IDataArr[][] = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    }

    const iswidth = window.innerWidth < 450
    const [index, setIndex] = useState<number>(0)

    const dataArrs = splitArray(dataArr, 5)
    console.log(dataArrs)
    return <div className={styles.Bestsellers_container}>
        <Title_list textTransform="uppercase" size={!iswidth ? "36px" : "26px"} color="#18154B">хиты продаж</Title_list>

        {
            !iswidth ? <Carousel activeIndex={index}>
                <div className={styles.list_item}>
                    {
                        dataArrs.map((item) => {
                            return item.map(({ stock, Tag, img, oldPrise, prise, text, Favorite, in_Pannier }, i) => {
                                return <Product_Card
                                    key={i}
                                    stock={stock}
                                    isFavorite={Favorite}
                                    Title={text}
                                    Image={img}
                                    OldPrice={oldPrise}
                                    Price={prise}
                                    Tag_name={Tag}
                                    in_Pannier={in_Pannier}
                                />
                            })
                        })

                    }

                </div>
            </Carousel>
                :
                <div className={styles.list_item}>
                    {
                        dataArr.slice(0, 6).map(({ stock, Tag, img, oldPrise, prise, text, Favorite, in_Pannier }, i) => {
                            return <Product_Card
                                key={i}
                                stock={stock}
                                isFavorite={Favorite}
                                Title={text}
                                Image={img}
                                OldPrice={oldPrise}
                                Price={prise}
                                Tag_name={Tag}
                                in_Pannier={in_Pannier}
                            />
                        })
                    }
                </div>
        }
        {
            !iswidth ? <Carusel_menu onChange={(e) => setIndex(Number(e.target.value))} length={dataArrs.length} active={index} style={{ margin: "0 auto" }} />
                : <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href="" style={{
                        fontSize: "20px",
                        fontFamily: "Nunito Sans",
                        fontWeight: "600",
                        color: "#18154B",
                        borderRadius: "1px",
                        textDecoration: "none",
                        borderBottom: "2.5px  dashed #18154B"
                    }}>Показать ещё</a>
                </div>

        }

    </div>

}

export default Bestsellers