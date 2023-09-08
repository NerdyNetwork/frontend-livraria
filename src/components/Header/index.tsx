import { MenuIcon } from "../MenuIcon";
import { Modal } from "../Modal";
import { Link } from "react-router-dom";
import { useHeader } from "./useHeader";

import styles from "./styles.module.scss";
import { useAuth } from "../../contexts/authContext";

export const Header = () => {
  const authContext = useAuth();

  const { navigate, setIsModalOpen, isModalOpen } = useHeader();

  return (
    <div className={styles.container}>
      <div className={styles["menu"]}>
        <Link to="/" className={styles.title}>
          BOOKSTORE
        </Link>

        <MenuIcon />

        <span className={styles["menu-label"]}>Busque por categoria</span>
      </div>
      <div className={`${styles["menu"]} ${styles["right"]}`}>
        <b>Meus Pedidos</b>
        {authContext?.isSigned ? (
          <b onClick={() => {}}>Minha Conta</b>
        ) : (
          <>
            <b onClick={() => navigate("/login")}>Entrar</b>
            <b onClick={() => navigate("/register")}>Cadastrar</b>
          </>
        )}
        <b onClick={() => setIsModalOpen(true)}>Minha cesta</b>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};
