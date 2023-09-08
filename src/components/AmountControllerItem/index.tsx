import { Dispatch } from "react";
import styles from "./styles.module.scss";

type AmountControllerItemProps = {
  amount: number;
  setAmount: Dispatch<number>;
  size?: "small" | "normal";
};

export const AmountControllerItem = ({
  amount,
  setAmount,
  size = "normal",
}: AmountControllerItemProps) => {
  return (
    <div className={`${styles.container} ${styles[`${size}-size`]}`}>
      <button onClick={() => setAmount(Math.max(1, amount - 1))}>-</button>
      <input
        min={1}
        max={999}
        type="number"
        value={amount}
        onChange={(ev) =>
          setAmount(Math.min(999, Math.max(1, parseInt(ev.target.value))))
        }
      />
      <button onClick={() => setAmount(Math.min(999, amount + 1))}>+</button>
    </div>
  );
};
