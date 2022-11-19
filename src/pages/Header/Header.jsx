import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import { Icon } from "@iconify/react";

function Header() {
  let arrowCount = 0;
  let menuCount = 0;

  const projectMenu = () => {
    const arrowMenu = document.getElementById("arrowMenu");
    const ToolTip = document.getElementById("ToolTip");
    if (arrowCount === 0) {
      arrowMenu.style.transform = "rotate(-180deg)";
      ToolTip.style.opacity = "1";
      ToolTip.style.visibility = "visible";
      arrowCount = 1;
    } else if (arrowCount === 1) {
      arrowMenu.style.transform = "rotate(-0deg)";
      ToolTip.style.opacity = "0";
      ToolTip.style.visibility = "hidden";
      arrowCount = 0;
    }
  };

  const Menu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const Icon = document.getElementById("Icon"); // Open Icon
    const IconX = document.getElementById("IconX"); // Close Icon

    if (menuCount === 0) {
      Icon.style.display = "none";
      IconX.style.display = "flex";
      mobileMenu.style.opacity = "1";
      mobileMenu.style.visibility = "visible";
      menuCount = 1;
    } else if (menuCount === 1) {
      Icon.style.display = "flex";
      IconX.style.display = "none";
      mobileMenu.style.opacity = "0";
      mobileMenu.style.visibility = "hidden";
      menuCount = 0;
    }
  };

  return (
    <div className={styles.Container}>
      <div>
        <a href="./">
          <img src={Logo} alt="Logo FliSki" />
        </a>
      </div>

      <div className={styles.menuButtons}>
        <Icon
          onClick={Menu}
          id="Icon"
          className={styles.iconMenu}
          icon="mingcute:menu-fill"
          width="28"
          height="28"
          inline={true}
        />
        <Icon
          onClick={Menu}
          id="IconX"
          className={styles.iconMenuX}
          icon="mingcute:close-fill"
          width="28"
          height="28"
          inline={true}
        />
      </div>

      <div className={styles.Content}>
        <a onClick={projectMenu} href="/#" className={styles.tooltipItem}>
          <span className={styles.Text}>Projekty</span>
          <span id="ToolTip" className={styles.ToolTip}>
            <a
              href="https://github.com/FliSkiDev/PlaneRadar"
              className={styles.textToolTip}
            >
              <Icon
                className={styles.iconToolTip}
                icon="tabler:plane-tilt"
                width="20"
                height="20"
                inline={true}
              />
              PlaneRadar
            </a>
            <a
              href="https://github.com/FliSkiDev/PlaneAPI"
              className={styles.textToolTip}
            >
              <Icon
                className={styles.iconToolTip}
                icon="tabler:api-app"
                width="20"
                height="20"
                inline={true}
              />
              PlaneAPI
            </a>
            <a
              href="https://github.com/FliSkiDev/dev  PlaneRadar"
              className={styles.textToolTip}
            >
              <Icon
                className={styles.iconToolTip}
                icon="material-symbols:code-blocks-rounded"
                width="20"
                height="20"
                inline={true}
              />
              devPlaneRadar
            </a>
          </span>
          <Icon
            className={styles.animationMenu}
            id="arrowMenu"
            icon="ic:round-keyboard-arrow-down"
            width="24"
            height="24"
          />
        </a>
        <a href="/#" className={styles.Item}>
          <span className={styles.Text}>Dokumentacja</span>
        </a>
        <a href="/#" className={styles.Item}>
          <span className={styles.Text}>Cena</span>
        </a>
        <a href="/#" className={styles.Item}>
          <span className={styles.Text}>Github</span>
          <Icon icon="eva:external-link-outline" width="24" height="24" />
        </a>
      </div>
      <div id="mobileMenu" className={styles.Menu}>
        <a
          onClick={projectMenu}
          href="https://github.com/FliSkiDev"
          className={styles.tooltipItem}
        >
          <span className={styles.Text}>Projekty</span>
          <Icon
            className={styles.animationMenu}
            icon="eva:external-link-outline"
            width="24"
            height="24"
          />
        </a>
        <a href="/#" className={styles.Item}>
          <span className={styles.Text}>Dokumentacja</span>
        </a>
        <a href="/#" className={styles.Item}>
          <span className={styles.Text}>Cena</span>
        </a>
        <a href="/#" className={styles.Item}>
          <span className={styles.Text}>Github</span>
          <Icon icon="eva:external-link-outline" width="24" height="24" />
        </a>
      </div>
    </div>
  );
}

export default Header;
