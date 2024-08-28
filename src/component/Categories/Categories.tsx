import { Card_Category } from "../Cards/Cards"
import { Title_list } from "../Title/Title"
import styles from "./Categories.module.scss"

const Categories = () => {
    const iswidth = window.innerWidth < 450

    return <div className={styles.Categories_container}>
        <Title_list textTransform="uppercase" size={!iswidth ? "36px" : "22px"} color="#18154B">Категории товаров</Title_list>
        <div className={styles.List_category} >
            <Card_Category Img="./Asic.png" Title="Asic miners оптом" />
            <Card_Category Img="./GPU.png" Title="GPU фермы оптом" />
            <Card_Category Img="./VideoCard.png" Title="Видеокарты оптом" />
            <Card_Category Img="./Accessories.png" Title="Аксессуары оптом" />
            <Card_Category Img="./CPU.png" Title="Компьютерные комплектующие оптом" />
            <Card_Category Img="./Mining.png" Title="Комплектующие для майнинга оптом" />
        </div>
    </div>

}

export default Categories