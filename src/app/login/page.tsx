import type { NextPage } from 'next';
import styles from './index.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.navigation}>
        <div className={styles.items}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.designpatternsfactory}>
          DesignPatternsFactory
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.heading}>
          <div className={styles.crieSuaConta}>Entre com sua conta!</div>
        </div>
        <div className={styles.input1}>
          <div className={styles.nomeDeUsurio}>Enderço de email</div>
          <div className={styles.field}>
            <div className={styles.label}>email@janesfakedomain.net</div>
          </div>
        </div>
        <div className={styles.input2}>
          <div className={styles.nomeDeUsurio}>Senha</div>
          <div className={styles.field2}>
            <div className={styles.label}>12345678@a</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.criar}>Entrar</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
