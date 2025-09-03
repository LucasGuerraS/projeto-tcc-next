import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';

const SingletonTwo = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/singleton/' />
      <ClassTitle title='Aula 2 - Quando usar o padrão Singleton' />
      <div className={styles.text}>
        <p>
          O Singleton tem alguns casos de uso, em sua maioria bem específicos,
          porém efetivos, eles são:
        </p>
        <ul className={styles.list}>
          <li>Construindo um logger</li>
          <li>Gerenciador de configurações globais</li>
          <li>Central de eventos ou notificações</li>
          <li>Conexão com banco de dados</li>
        </ul>
        <p>
          Também é crucial entender os casos em que{' '}
          <b>não se deve usar esse design pattern:</b>
        </p>
        <ul className={styles.list}>
          <li>
            Ambiente de muitas threads (Pode ser solucionado usando thread
            safety)
          </li>
          <li>Uso de injeção de dependência</li>
          <li>São necessária muitas instâncias com diferentes parâmetros</li>
          <li>Quando a classe quebra regras de encapsulamento</li>
        </ul>
        <p>
          O Adapter pode ser utilizado de maneira bem versátil, e não tem apenas
          um caso de uso muito comum. É importante sempre usar o adapter ou
          qualquer tipo de pattern estrutural, refletir se seu uso é adequado,
          ou se essa escolha está sendo feita de muleta para disfarçar escolhas
          ruim de design de Software.
        </p>
      </div>
      <FinishClassButton path='/tracks/adapter/' />
    </div>
  );
};

export default SingletonTwo;
