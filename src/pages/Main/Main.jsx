import React from "react";
import styles from "./Main.module.scss";
import Plane from "../../assets/plane.svg";

function Main() {
  window.onload = function () {
    const Title = document.getElementById("Title");
    const Description = document.getElementById("Description");
    let switched = false;

    let textTitle1 = "Plane Radar";
    let textTitle2 = "PlaneAPI";
    let textDesc1 =
      "Aplikacja do śledzenia samolotów przy użyciu API. PlaneRadar w pełnej wersji używa swojego własnego API, które aktualizuje wszystkie informacje na bieżąco. Więcej informacji w Dokumentacji.";
    let textDesc2 =
      "PlaneAPI to jeden z niewielu darmowych API do śledzenia samolotów publicznych oraz prywatnych. Wersja START posiada 1.500 dostępnych requestów na jeden miesiąc!";

    function switchContent() {
      if (switched === false) {
        Title.innerHTML = textTitle1;
        Description.innerHTML = textDesc1;
      } else {
        Title.innerHTML = textTitle2;
        Description.innerHTML = textDesc2;
      }
      switched = !switched;
      setTimeout(() => {
        switchContent();
      }, 10000);
    }
    switchContent();
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <span id="Title" className={styles.Title}>
          Plane Radar
        </span>
        <span id="Description" className={styles.Description}>
          Aplikacja do śledzenia samolotów przy użyciu API. PlaneRadar w pełnej
          wersji używa swojego własnego API, które aktualizuje wszystkie
          informacje na bieżąco. Więcej informacji w Dokumentacji.
        </span>
      </div>
      <div className={styles.Image}>
        <img src={Plane} alt="Plane" />
      </div>
    </div>
  );
}

export default Main;
