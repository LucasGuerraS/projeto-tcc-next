'use client'

import type { NextPage } from 'next';
import styles from './index.module.css';

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.navigation}>
        <div className={styles.items3}>
          <div className={styles.button}>
            <div className={styles.home} onClick={() => window.location.href = '/login'}>Login</div>
          </div>
        </div>
        <div className={styles.designpatternsfactory}>
          DesignPatternsFactory
        </div>
      </div>
      <div className={styles.oQueVoc}>O que você vai ver aqui?</div>
      <div className={styles.copyParent}>
        <div className={styles.copy}>
          <div className={styles.page}>Sistema de progressão</div>
          <div className={styles.dentroDoSeu}>
            Dentro do seu perfil é possível acompanhar sua progressão geral e
            nas trilhas individuais.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.copy1}>
            <div className={styles.page}>Três trilhas principais</div>
            <div className={styles.dentroDoSeu}>
              Cada trilha corresponde à um design pattern de um tipo específico.
            </div>
          </div>
        </div>
        <div className={styles.copy2}>
          <div className={styles.aulasInterativas}>Aulas interativas</div>
          <div className={styles.nossasTrilhasSo}>
            Nossas trilhas são divididas em módulos que ensinam em bloquinhos o
            conceito por trás de cada módulo.
          </div>
        </div>
      </div>
      <div className={styles.qualOObjetivo}>Qual o objetivo desse projeto?</div>
      <div className={styles.text}>
        <div className={styles.text1}>
          <div className={styles.ensinoDeFcil}>Ensino de fácil absroção</div>
          <div className={styles.oContedo}>
            O conteúdo é separado em tamanhos pequenos, para que possa ser
            consumido na velocidade de cada um, independente da janela de tempo
            disponível.
          </div>
        </div>
        <div className={styles.text1}>
          <div className={styles.page}>Acesso à informação</div>
          <div className={styles.dentroDoSeu}>
            Buscamos oferecer um conteúdo de qualidade para todos com uma sede
            de conhecimento, por isso todo o acesso é totalmente gratuito!
          </div>
        </div>
      </div>
      <div className={styles.copy3}>
        <div className={styles.pageTitle}>
          <b className={styles.simplificandoPadresDe}>
            Simplificando padrões de design para iniciantes e gurus
          </b>
          <div className={styles.aprendaEAplique}>
            Aprenda e aplique o conhecimento de design patterns de maneira
            simples e didática, atravé de uma experiência imersiva e intuitiva!
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.home} onClick={() => window.location.href = '/signup'}>Crie uma conta</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
