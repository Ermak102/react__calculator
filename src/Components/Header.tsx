import React, { FC, useEffect, useState } from "react";

import "../styles/header.css";

interface Props {
  currentTheme: boolean;
  setTheme: (theme: boolean) => void;
}

const Header: FC<Props> = ({ currentTheme, setTheme }) => {
  const [storeHistory, setStoreHistory] = useState<string[]>([]);

  const [activeBurger, setActiveBurger] = useState(false);

  useEffect(() => {
    const storeData = localStorage.getItem("history");

    if (storeData === null) {
      localStorage.setItem("history", "");
      return;
    }

    const storeToArray = storeData.split(",");
    const length = storeToArray.length;

    setStoreHistory(storeToArray.slice(length - 6, length - 1));
  }, [localStorage.getItem("history")]);

  return (
    <section className="header">
      <div className="header_wrapper">
        <div
          className={activeBurger === true ? "burger active" : "burger"}
          onClick={() => setActiveBurger(!activeBurger)}
        >
          <span className="burger_line"></span>
          <span className="burger_line"></span>
          <span className="burger_line"></span>
        </div>
        <div
          className={
            activeBurger === true ? "store_wrapper active" : "store_wrapper"
          }
        >
          {storeHistory.map((item, index) => (
            <div className="store_item" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="theme" onClick={() => setTheme(!currentTheme)}>
          <div className="theme_wrapper">
            <img src="img/black.png" alt="" className="theme_img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
