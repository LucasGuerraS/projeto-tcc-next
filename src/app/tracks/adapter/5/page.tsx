import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeEditor from '@/components/internal/codeEditor/codeEditor';
import CodeRunner from '@/components/internal/codeRunner/codeRunner';

const CONTENT_1 = `public class CapybaraCakeAdapter implements Bolo {
    private CapybaraCakeMaker adaptee;

    public CapybaraCakeAdapter(CapybaraCakeMaker adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void prepararBolo() {
        // Adaptação de método
        adaptee.makeCapybaraCake();
    }
}`;

const CONTENT_2 = `public class Main {
    public static void main(String[] args) {
        // Suponha que seu sistema só trabalha com o tipo Bolo
        Bolo meuBolo = new CapybaraCakeAdapter(new CapybaraCakeMaker());
        // O cliente chama o método esperado, sem saber da adaptação
        meuBolo.prepararBolo();
    }
}

interface Bolo {
    void prepararBolo();
}

class CapybaraCakeMaker {
    public void makeCapybaraCake() {
        System.out.println("Fazendo um delicioso bolo de capivara");
    }
}

class CapybaraCakeAdapter implements Bolo {
    private CapybaraCakeMaker adaptee;

    public CapybaraCakeAdapter(CapybaraCakeMaker adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void prepararBolo() {
        // Adaptação de método
        adaptee.makeCapybaraCake();
    }
}
`;

const AdapterThree = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/adapter/' />
      <ClassTitle title='Aula 2 - Continuando a implementação do Adapter em código' />
      <p className={styles.text}>
        Agora vamos fazer nosso Adapter, ou seja, a classe que faz com que nosso
        cliente seja capaz de usar a classe a ser adaptada!
      </p>
      <CodeEditor
        content={CONTENT_1}
        height='30vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        Agora quando nossa padaria quiser fazer um bolo de capivara podemos
        fazer da seguinte forma:{' '}
        <b>
          PS: Use o código abaixo como referência e o altere conforme desejar
          para explorar sua funcionalidade e satisfazer sua curiosidade
        </b>
      </p>
      <CodeRunner content={CONTENT_2} width={'30'} editorHeight={70} />
      <p className={styles.text}>
        É importante sempre entender quando é necessário introduzir esse nível
        extra de complexidade no código ou não, no nosso caso em especial não
        seria necessário! Mas como o problema foi levantado arbitrariamente não
        é de grande importância, mas assim como resolver problemas complexos é
        importante, também é importante não deixar problemas simples mais
        complicados que o necessário.
      </p>
      <FinishClassButton path='/tracks/adapter/quiz' />
    </div>
  );
};

export default AdapterThree;
