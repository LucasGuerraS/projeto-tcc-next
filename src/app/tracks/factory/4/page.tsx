import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeEditor from '@/components/internal/codeEditor/codeEditor';
import { validateSession } from '@/_utils/validateSession';

const CONTENT_1 = `public interface Cake {
    void decorar();
}`;

const CONTENT_2 = `public class FrogCake implements Cake {
    @Override
    public void decorar() {
        System.out.println("Decorando um bolo de sapo");
    }
}

public class CapybaraCake implements Cake {
    @Override
    public void decorar() {
        System.out.println("Decorando um bolo de capivara");
    }
}`;

const FactoryFour = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/factory/' />
      <ClassTitle title='Aula 1 - Aplicando o Factory em código' />
      <p className={styles.text}>
        Agora vamos exemplificar a aplicação desse pattern em código, começando
        pelo básico, a interface do objeto base:
      </p>
      <CodeEditor
        content={CONTENT_1}
        height='10vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        O objeto base é o começo de tudo e o ponto inicial do padrão, a
        interface deve ser simples e conter apenas o necessário para a entidade
        sendo criada, nesse caso apenas o método para decorar o bolo. Em seguida
        temos que criar os objetos concretos:
      </p>
      <CodeEditor
        content={CONTENT_2}
        height='30vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        Aqui implementamos as classes que utilizam nossa interface como base e
        definimos os métodos base e propriedades necessárias do objeto como
        qualquer outra classe.
      </p>
      <FinishClassButton path='/tracks/factory/' trackId={1} number={4}/>
    </div>
  );
};

export default FactoryFour;
