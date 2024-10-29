import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinkElement.module.scss"

const LinkElement = ({ to, LinkText, style }: any) => {
    return (
        <>
            <Link className={styles.LinkElement} style={style} to={to}>{LinkText}</Link>
        </>
    )
}

export default LinkElement