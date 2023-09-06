import styles from "./styles.module.scss";
import image from "../../../assets/bookimage.jpeg";

export const ModalItem = () => {
  return (
    <div className={styles["container"]}>
      <img src={image} />
      <div className={styles["subcontainer"]}>
        <h3>Mindset</h3>
        <span>R$ 35,90</span>
      </div>
    </div>
  );
};
