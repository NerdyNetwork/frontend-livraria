import { useState } from "react";
import styles from "./styles.module.scss";
import image from "../../../assets/bookimage.jpeg";
import { AmountControllerItem } from "../../AmountControllerItem";

export const ModalItem = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div className={styles["container"]}>
      <img src={image} />
      <div className={styles["subcontainer"]}>
        <div className={styles["row1"]}>
          <h3>Mindset</h3>
          <b>X</b>
        </div>
        <div className={styles["row2"]}>
          <p>R$ 35,90</p>
          <AmountControllerItem amount={amount} setAmount={setAmount} />
        </div>
      </div>
    </div>
  );
};
