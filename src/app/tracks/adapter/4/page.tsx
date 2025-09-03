import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeEditor from '@/components/internal/codeEditor/codeEditor';

const CONTENT_1 = `public interface Bolo {
    void prepararBolo();
}`;

const CONTENT_2 = `public class CapybaraCakeMaker {
    public void makeCapybaraCake() {
        System.out.println("Fazendo um delicioso bolo de capivara");
    }
}`;

const AdapterFour = () => {
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
      <CodeEditor
        content={CONTENT_1}
        height='10vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        Porém, o bolo de capivara não é do tipo Bolo, nem segue a interface
        esperada, tendo o seguinte código:
      </p>
      <CodeEditor
        content={CONTENT_2}
        height='10vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        Sendo assim precisamos fazer um adapter que seja capaz de fazer com que
        nosso cliente seja capaz de criar um bolo de capivara sem alterar
        nenhuma classe ou interface. É importante ressaltar que nesse casos nós
        poderemos alterar a classe do bolo de capivara e não precisar aumentar a
        complexidade do nosso código, porém, estamos apenas dando um exemplo,
        mas em casos como esse é importante ponderar essa necessidade de
        retrabalho.
      </p>
      <FinishClassButton path='/tracks/adapter/' />
    </div>
  );
};

export default AdapterFour;
