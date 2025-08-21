import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';

const AdapterOne = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/adapter/' />
      <ClassTitle title='Aula 1 - Introdução ao padrão Adapter' />
      <p className={styles.text}>
        Diferente dos outros dois design patterns apresentados, o Adapter é um
        design pattern estrutural, ou seja, um tipo de design pattern que se
        foca em relações entre objetos e classes, fazendo com que estas formem
        um sistema mais flexível. Já padrões de projeto criacionais tem o
        objetivo de abstrair a lógica de criação de objetos. Por fim existe um
        terceiro tipo de padrão de projeto não abordado nas trilhas que é o
        comportamental, este é focado em comunicação entre objetos, diminuir o
        acoplamento e melhorar extensão de comportamento dos objetos.
      </p>{' '}
      <Image
        src='https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/zurojqnv/file.png'
        alt='Adapter Pattern'
        width={250}
        height={100}
      />
      <p className={styles.text}>
        Voltando ao adapter, este é um design pattern que faz com que duas
        interfaces incompatíveis possam funcionar juntas, adaptando uma
        interface para funcionar com a outra, parece complicado mas é mais
        simples e efetivo do que parece! Quase como um adaptador de tomada, mas
        com uma pitada de código!
      </p>
      <FinishClassButton/>
    </div>
  );
};

export default AdapterOne;
