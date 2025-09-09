import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';
import { validateSession } from '@/_utils/validateSession';

const FactoryThree = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/factory/' />
      <ClassTitle title='Aula 3 - Como usar o padrão Factory Method' />
      <p className={styles.text}>
        Agora vamos explorar um pouco mais o esqueleto do pattern, para irmos
        para a prática em seguida. O pattern pode ser dividido da seguinte
        forma: Uma interface que representaria o objeto, no nosso caso seria a
        interface Bolo, a partir dela faríamos as implementações de bolo, como
        por exemplo o bolo de capivara ou bolo de sapo. Em seguida temos a
        classe abstrata criadora que deve possuir o método abstrato de criação
        do objeto e muitas vezes deve possuir também regras de negócio da
        aplicação, como por exemplo a execução de algum método ou definição de
        alguma propriedade do objeto criado.
      </p>
      <Image
        src='/factory.drawio.png'
        alt='Diagrama UML do Factory'
        width={500}
        height={500}
      />
      <p className={styles.text}>
        E por fim temos as classes concretas de criação que vão criar as
        variações dos nossos objetos, sobrescrevendo o método de criação
        obrigatoriamente e algum outro se necessário. Dentro da aplicação em si
        quem deve ser usado sempre a classe concreta de criação de objeto sempre
        usando a interface como base.
      </p>
      <FinishClassButton path='/tracks/factory/quiz' trackId={1} number={3}/>
    </div>
  );
};

export default FactoryThree;
