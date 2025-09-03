import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';

const AdapterThree = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/adapter/' />
      <ClassTitle title='Aula 3 - Como usar o padrão Adapter' />
      <p className={styles.text}>
        O Adapter pode ser representado da seguinte forma em um diagrama UML:
      </p>
      <Image
        src='/adapter.drawio.png'
        alt='Diagrama UML do Adapter'
        width={500}
        height={500}
      />
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
