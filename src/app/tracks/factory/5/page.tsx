import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeEditor from '@/components/internal/codeEditor/codeEditor';
import CodeRunner from '@/components/internal/codeRunner/codeRunner';

const CONTENT_1 = `public abstract class CakeFactory {
    public abstract Cake createCake();

    public void prepareCake() {
        Cake cake = createCake();
        System.out.println("Cozinhando o bolo base...");
        cake.decorar();
        System.out.println("O bolo esta pronto!");
    }
}`;

const CONTENT_2 = `public class FrogCakeFactory extends CakeFactory {
    @Override
    public Cake createCake() {
        return new FrogCake();
    }
}

public class CapybaraCakeFactory extends CakeFactory {
    @Override
    public Cake createCake() {
        return new CapybaraCake();
    }
}
`;

const CONTENT_3 = `public class Bakery {
    public static void main(String[] args) {
        CakeFactory frogFactory = new FrogCakeFactory();
        frogFactory.prepareCake();

        CakeFactory capybaraFactory = new CapybaraCakeFactory();
        capybaraFactory.prepareCake();
    }
}

public class FrogCakeFactory extends CakeFactory {
    @Override
    public Cake createCake() {
        return new FrogCake();
    }
}

public class CapybaraCakeFactory extends CakeFactory {
    @Override
    public Cake createCake() {
        return new CapybaraCake();
    }
}

public abstract class CakeFactory {
    public abstract Cake createCake();

    public void prepareCake() {
        Cake cake = createCake();
        System.out.println("Cozinhando o bolo base...");
        cake.decorar();
        System.out.println("O bolo esta pronto!");
    }
}

public class FrogCake implements Cake {
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
}

public interface Cake {
    void decorar();
}
`;

const FactoryFive = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/factory/' />
      <ClassTitle title='Aula 2 - Continuando a implementação do Factory em código' />
      <p className={styles.text}>
        Agora que já temos a base, precisamos partir para a criação do factory
        method em si.
      </p>
      <CodeEditor
        content={CONTENT_1}
        height='22vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        A classe abstrata tem a função de definir a base do objeto criado, assim
        como também encapsular regras de negócio e lógica comum de todos os
        objetos a serem criados, como no nosso caso, todo objeto criado terá o
        método decorar chamado. É importante observar como é possível aqui
        aplicar o fundamento de separar o que é fixo do que é variável
        dependendo do caso.
        <b>
          Em seguida partimos para a criação das classes concretas de factory:
        </b>
      </p>
      <CodeEditor
        content={CONTENT_2}
        height='30vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        Pode-se observar que nas classes concretas de factory, nós apenas
        implementamos o método de criar o objeto, que antes era abstrato, é
        importante ressaltar que o factory method se beneficia muito mais quando
        é possível repassar regras de negócio também para dentro dos criadores.
        <b>
          Por fim temos um exemplo executável deste código caso você queira
          explorá-lo:
        </b>
      </p>
      <CodeRunner content={CONTENT_3} editorHeight={70} />
      <p className={styles.text}>
        É importante ressaltar que quanto mais complexo o caso for, mais o
        factory method vai nos ajudar a encurtar e desacoplar o código, deixando
        nosso programa mais limpo, fácil de se entender e extender, como nosso
        exemplo é simples os benefícios não serão muito grandes também.
      </p>
      <FinishClassButton path='/tracks/factory/' />
    </div>
  );
};

export default FactoryFive;
