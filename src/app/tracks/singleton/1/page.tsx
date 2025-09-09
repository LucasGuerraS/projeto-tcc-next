import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';
import { validateSession } from '@/_utils/validateSession';

const SingletonOne = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/singleton/' />
      <ClassTitle title='Aula 1 - Introdução ao padrão Singleton' />
      <p className={styles.text}>
        O singleton é um padrão de projeto simples, que tem o objetivo de sempre
        manter apenas uma instância de um objeto criado, ou seja ter apenas uma
        unidade daquele objeto criado durante seu programa.
      </p>{' '}
      <Image
        src='https://dreammaker.co.uk/wp-content/uploads/2022/02/feeling-alone.jpg'
        alt='Singleton Pattern'
        width={450}
        height={300}
      />
      <p className={styles.text}>
        Este pattern promove a confiabilidade de código que precisa de
        gerenciamento de estado ou configurações globais a partir de um único
        objeto. É um dos padrões de projetos mais simples porém com um grande
        impacto e benefícios grandes considerando sua complexidade.
      </p>
      <FinishClassButton path='/tracks/singleton/' trackId={2} number={1} />
    </div>
  );
};

export default SingletonOne;
