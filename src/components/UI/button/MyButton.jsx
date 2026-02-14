import React, { Children } from "react";
import styles from "./MyButton.module.css"

function MyButton({children, ...props}) {
    return (
        <button className={styles.myBtn}>
            {children}
        </button>
    )
}

export default MyButton;