import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeEditor from '@/components/internal/codeEditor/codeEditor';

const CONTENT = `public interface Bolo {
    void prepararBolo();
}`;

const AdapterThree = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/adapter/' />
      <ClassTitle title='Aula 1 - Aplicando o Adapter em código' />
      <p className={styles.text}>
        Vamos seguir em nosso contexto confeiteiro e com nossa adoração por
        capivaras! Nossa padaria quer muito servir bolos de capivara, a padaria
        poderia ser o cliente nesse caso e essa seria a interface esperada, já
        que os outros bolos seguem ela:
      </p>
      <CodeEditor content={CONTENT} height='20vh' width='30%' />
      <p className={styles.text}>
        Podemos ver no diagrama apresentado como seria o esqueleto do adapter,
        ou seja, temos uma classe que vamos chamar de cliente, que espera que os
        objetos se comportem de determinada forma, nesse caso, tendo o
        metodoEsperado, mas nosso serviço, que pode ser uma integração de
        terceiros, não tem esse método, apenas o metodoDoServico então, nesse
        caso nós fazemos um adaptador que recebe a instância desse serviço em
        seu construtor e chama o método esperado do serviço, com base no que o
        cliente espera.
      </p>
      <FinishClassButton path='/tracks/adapter/quiz' />
    </div>
  );
};

export default AdapterThree;
