import { useState } from "react";

import styles from "./ApplyColor.module.css";
import SelectColor from "../selectColor/SelectColor";
import { NavLink } from "react-router-dom";
const ApplyColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(["red", "green", "blue", "black", "grey"]);
  const [text, setText] = useState("");

  const clickHandler = (clr) => {
    setBgColor(clr);
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const btnClickHandler = () => {
    const newColor = [...color];
    const trimText = text.trim();
    if (trimText) {
      newColor.push(trimText);
      setColor(newColor);
    }
    setText("");
  };

  const keyUpHandler = (e) => {
    console.log("keyup");
    if (e.key === "Enter") {
      btnClickHandler();
    }
  };

  const smallColorButton = color.map((shade, index) => {
    return <SelectColor key={index} clr={shade} clickHandler={clickHandler} />;
  });

  return (
    <>
      <div className={styles.disply}>
        <div>
          <input
            className={styles.input}
            placeholder="Enter Color Name"
            type="text"
            onChange={changeHandler}
            value={text}
            onKeyUp={keyUpHandler}
          />
          <span style={{ margin: "0 10px" }}>
            <button
              className={styles.addbtn}
              onClick={() => {
                btnClickHandler();
              }}
              disabled={!text}
            >
              Add Color
            </button>
          </span>

          <button className={styles.ebtn}>
            <NavLink to={"/exit"} className={styles.exitbtn}>
              Exit
            </NavLink>
          </button>
        </div>
        <div
          className={styles.displycont}
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
      <div className={styles.butn}>
        <div>{smallColorButton}</div>
      </div>
    </>
  );
};
export default ApplyColor;
