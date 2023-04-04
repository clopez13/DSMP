import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {SideNavigationData} from "./SideNavigationData";
import styles from "./SideNavigation.module.css";


export default function SideNavigation() {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768); // set open state based on screen width
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={open ? styles['side-nav'] : styles['side-nav-closed']}>
      {SideNavigationData.map((item) => {
        return (
          <NavLink key={item.id} className={styles['side-nav-item']} to={item.link}>
            {item.icon}
            <span className={styles['side-nav-title']}>{item.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
}