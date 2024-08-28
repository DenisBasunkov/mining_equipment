import React, { useState } from "react"
import styles from "./DragDrop.module.scss"
import { Label_text } from "../Title/Title";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { Primary_button } from "../Buttons/Buttons";

interface IDragDropProps {
    title?: string,
    items?: string[];
}

export const DragDrop: React.FC<IDragDropProps> = ({ title = "", items = [] }) => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    return <div>

        <div onClick={() => setIsOpenMenu(item => !item)}
            className={styles.button_Drop}
        >
            <Label_text
                size="16px"
                color="#303239"
            >{title}</Label_text>
            {isOpenMenu ? <GoChevronUp size={"1.5em"} /> : <GoChevronDown size={"1.5em"} />}
        </div>

        {
            !isOpenMenu ? null :
                <div className={styles.Drop_menu}>
                    {
                        items.map((value) => {
                            return <Primary_button appearance="secondary"
                                style={{ width: "100%", textAlign: "left" }}
                            >
                                {value}
                            </Primary_button>
                        })
                    }
                </div>
        }

    </div>

}