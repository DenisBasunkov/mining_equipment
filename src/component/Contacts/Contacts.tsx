import React from "react"
import styles from "./Contacts.module.scss"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import L from "leaflet"
import 'leaflet/dist/leaflet.css';
import { Label_text, Title_list } from "../Title/Title";
import { ButtonIcon } from "../Buttons/Buttons";
import { FaTelegram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { SiMoscowmetro } from "react-icons/si";
import { MdWatchLater } from "react-icons/md";

export const Contacts: React.FC = () => {

    const customIcon = new L.Icon({
        iconUrl: "./location.svg",
        iconSize: [38, 38],
        iconAnchor: [19, 38]
    })

    const Contact_arr = [{
        text: "г. Москва, ул. Покровка, 47А",
        icon: <FaMapMarkerAlt size={"1em"} color="#18154B" />
    },
    {
        text: "м. Курская",
        icon: <SiMoscowmetro size={"1em"} color="#18154B" />
    },
    {
        text: "mein@miner.com",
        icon: <IoMdMail size={"1em"} color="#18154B" />
    },
    {
        text: "+7 (999) 999-99-99",
        icon: <FaPhoneAlt size={"1em"} color="#18154B" />
    },
    {
        text: "График работы: ежедневно с 9:00 до 20:00",
        icon: <MdWatchLater size={"1.25em"} color="#18154B" />
    }
    ]

    return <div className={styles.Contacnts_container}>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "25px" }}>
            <Title_list
                textTransform="uppercase"
                color="#18154B"
                size="36px"
            >контакты</Title_list>
            <div className={styles.list_contact}>
                {
                    Contact_arr.map(({ text, icon }, i) => {
                        return <div style={{ display: "flex", flexDirection: "row", gap: "25px", alignItems: "center" }}>
                            {icon}
                            <Label_text
                                size="18px"
                                color="#303239"
                                style={{
                                    wordBreak: "break-all"
                                }}
                                key={i}>{text}</Label_text>
                        </div>
                    })
                }

            </div>
            <div style={{ display: "flex", gap: "15px" }}>
                <ButtonIcon style={{ fontSize: "40px" }} Icon={
                    <FaTelegram color="#18154B" />
                } />
                <ButtonIcon style={{ fontSize: "40px" }} Icon={
                    <IoLogoWhatsapp color="#18154B" />
                } />
            </div>
        </div>
        <div>
            <MapContainer className={styles.Map}
                // scrollWheelZoom={true}
                zoom={15}
                center={[55.763331, 37.653262]}
            >
                <TileLayer
                    attribution='&copy; <a href="https://maps.google.com/">Google Maps</a> contributors'
                    url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                    subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                />
                <Marker
                    position={[55.763331, 37.653262]}
                    icon={customIcon}
                >

                </Marker>
            </MapContainer>
        </div>

    </div>

}