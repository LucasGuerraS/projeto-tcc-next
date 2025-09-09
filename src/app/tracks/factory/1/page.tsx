import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';
import { validateSession } from '@/_utils/validateSession';

const FactoryOne = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/factory/' />
      <ClassTitle title='Aula 1 - Introdução ao padrão Factory Method' />
      <p className={styles.text}>
        O factory method é um pattern que permite uma implementação flexível e
        evita reescrita de código, programando para uma interface e depois
        definindo ao longo da execução ou durante o código a implementação
        concreta da classe. Ajuda a separar o código que cria objetos do código
        que usa aqueles objetos e também do código que define o comportamento
        dos objetos em questão
      </p>{' '}
      <Image
        src='https://pocketstop.com/wp-content/uploads/2021/07/Factory%20against%20blue%20cloudy%20sky-1.jpeg'
        alt='Factory Pattern'
        width={450}
        height={300}
      />
      <p className={styles.text}>
        Para ajudar na compreensão vamos continuar na linha de bolos vamos supor
        que precisamos fazer uma aplicação de uma padaria conhecida por seus
        bolos de formas diferentes.
      </p>
      <FinishClassButton path='/tracks/factory/' trackId={1} number={1}/>
    </div>
  );
};

export default FactoryOne;
