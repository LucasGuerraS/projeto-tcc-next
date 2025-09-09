import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import { validateSession } from '@/_utils/validateSession';

const FactoryTwo = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/factory/' />
      <ClassTitle title='Aula 2 - Quando usar o factory' />
      <div className={styles.text}>
        <p>
          O factory method pode ser usado em alguns casos, os principais casos
          de uso são:
        </p>
        <ul className={styles.list}>
          <li>Delegar criação de objetos para subclasses</li>
          <li>
            Seguir o pilar de fechado para modificação aberto para extensão
          </li>
          <li>Bom para desenvolvimento de frameworks</li>
          <li>Isolar ou encapsular lógica de criação de objetos</li>
          <li>
            Depender de interfaces, promovendo o conceito de código pouco
            acoplado
          </li>
        </ul>
        <p>
          Também é crucial entender os casos em que{' '}
          <b>não se deve usar esse design pattern:</b>
        </p>
        <ul className={styles.list}>
          <li>
            Quando você não espera que os tipos de objetos mudem ou aumentem em
            quantidade
          </li>
          <li>Não é necessário desacoplar a lógica de criação</li>
        </ul>
        <p>
          O factory method é um padrão de projeto simples, mas consegue mostrar
          muito bem os benefícios de um código pouco acoplado e ainda como o
          padrão open/closed (fechado para mudanças, aberto para extensões),
          deve ser usado e seguido em termos de código e lógica. É importante
          refletir nos benefícios de um código que segue o princípio de
          Open/Closed e quando que um código deve seguir esse princípio,
          principalmente partindo do contexto de criação do factory method
          pattern.
        </p>
      </div>
      <FinishClassButton path='/tracks/factory/' trackId={1} number={2}/>
    </div>
  );
};

export default FactoryTwo;
