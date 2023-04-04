import React from "react";
import styles from "./Avatar.module.css";

function Avatar({ src, alt, name }) {
  return (
    <div className={styles.avatar}>
      <img src={src} alt={alt} className={styles['avatar-img']} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default Avatar;