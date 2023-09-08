import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useHome } from "../../pages/Home/useHome";
import { BookItem } from "./BookItem";

export const BestSellersSection = () => {
  const { books } = useHome();

  return (
    <section className={styles["container"]}>
      <h1 className={styles.title}>Livros mais vendidos</h1>
      <div className={styles.subcontainer}>
        {books.map((book, i) => (
          <div key={i}>
            <BookItem book={book} />
          </div>
        ))}
      </div>
    </section>
  );
};
