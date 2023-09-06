import styles from "./styles.module.scss";

export const AmountControllerItem = ({ amount, setAmount }) => {
  return (
    <div className={styles.container}>
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
