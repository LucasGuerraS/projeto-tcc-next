import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';

const AdapterTwo = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/adapter/' />
      <ClassTitle title='Aula 2 - Continuação do padrão Adapter' />
      <div className={styles.text}>
        <p>
          O Adapter tem casos de uso bem diversos e flexíveis e pode ser usado,
          por exemplo, nas seguintes situações:
        </p>
        <ul className={styles.list}>
          <li>Integrar código legado</li>
          <li>Integrar código de terceiros</li>
          <li>Classes com interfaces incompatíveis</li>
          <li>Compatibilidade de versões antigas</li>
        </ul>
        <p>
          Também é crucial entender os casos em que <b>não se deve usar esse design
          pattern:</b>
        </p>
        <ul className={styles.list}>
          <li>Quando performance é um fator muito importante</li>
          <li>Lógica do adaptador se torna muito complexa</li>
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

export default AdapterTwo;
