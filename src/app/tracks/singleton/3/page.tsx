import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';

const SingletonThree = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/singleton/' />
      <ClassTitle title='Aula 3 - Como usar o padrão Singleton' />
      <p className={styles.text}>
        Primeiramente um bom exemplo de um caso que o singleton é necessário
        seria uma classe de configurações de um jogo, que define a seed do jogo
        por exemplo, se o programa criar uma instância diferente dessa classe
        com o operador new essa informação pode se perder dentro da aplicação.
      </p>
      <Image
        src='/singleton.drawio.png'
        alt='Diagrama UML do Singleton'
        width={500}
        height={500}
      />
      <p className={styles.text}>
        Por isso o padrão singleton traz uma solução simples e prática para esse
        tipo de problema. A classe na qual é necessário ter apenas uma instância
        vai ter um construtor privado e um método estático que retorna a
        instância, simples né?
      </p>
      <FinishClassButton path='/tracks/singleton/quiz' />
    </div>
  );
};

export default SingletonThree;
