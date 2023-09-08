import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const BookItem = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/books/${book.id}}`)}>
      <img src={book.image} alt={book.alt} />
      <p className={styles["title"]}>Mindset</p>
      <p className={styles["price"]}>R$ 35,90</p>
      <button>Comprar</button>
    </div>
  );
};
