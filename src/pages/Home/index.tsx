import { Player } from "@lottiefiles/react-lottie-player";
import { useHome } from './useHome';

import styles from "./styles.module.scss";
import { BestSellersSection } from "../../components/BestSellersSection";

export const Home = () => {
  const { navigate, spamPhrases } = useHome();

  return (
    <div>
      <section className={styles["container-1"]}>
        <div className={styles.subcontainer}>
          <p className={styles.title}>Descubra novas histórias!</p>
          <span>
            Abra as portas da sua imaginação e mergulhe no mundo dos livros
            conosco, abra um livro e comece uma aventura!
          </span>
          <div className={styles["search-input"]}>
            <input type="text" placeholder="Pesquisar livro" />
            <button>Pesquisar</button>
          </div>
        </div>
        <Player
          src="https://assets2.lottiefiles.com/packages/lf20_cpeiwzvb.json"
          loop
          autoplay
        />
      </section>

      <div className={styles["infinite-animation"]}>
        <p>
          <span>
            {spamPhrases.map((v, i) => (
              <span key={i} style={{ marginRight: 10 }}>{v}</span>
            ))}
          </span>
          <span>
            {spamPhrases.map((v, i) => (
              <span key={i} style={{ marginRight: 10 }}>{v}</span>
            ))}
          </span>
        </p>
      </div>

      <BestSellersSection />
    </div>
  );
};
