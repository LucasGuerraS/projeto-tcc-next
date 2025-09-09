import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeEditor from '@/components/internal/codeEditor/codeEditor';
import CodeRunner from '@/components/internal/codeRunner/codeRunner';
import { validateSession } from '@/_utils/validateSession';

const CONTENT_1 = `public class BoloDeCapivara {

    // A única instância (padrão Singleton)
    private static BoloDeCapivara instancia;

    // Propriedades do bolo
    private String cobertura;
    private boolean temChapeu;
    private boolean temVela;

    // Construtor privado
    private BoloDeCapivara() {
        this.cobertura = "chocolate";
        this.temChapeu = true;
        this.temVela = false;
    }

    // Método de acesso público e global
    public static BoloDeCapivara getInstancia() {
        if (instancia == null) {
            instancia = new BoloDeCapivara();
        }
        return instancia;
    }

    // Métodos para personalização
    public void adicionarVela() {
        if (!temVela) {
            temVela = true;
        } else {
            System.out.println("O bolo já tem uma vela.");
        }
    }

    public void mostrarAdornos() {
        System.out.println("Bolo de Capivara com cobertura de " + cobertura);
        System.out.println(" - Chapeu: " + (temChapeu ? "Sim" : "Não"));
        System.out.println(" - Vela: " + (temVela ? "Sim" : "Não"));
    }
}
`;

const CONTENT_2 = `public class Festa {
    public static void main(String[] args) {
        // Acessando o mesmo bolo
        BoloDeCapivara bolo1 = BoloDeCapivara.getInstancia();
        bolo1.mostrarAdornos();

        // Outra referência -- mesma instância
        BoloDeCapivara bolo2 = BoloDeCapivara.getInstancia();
        bolo2.adicionarVela();

        // Mostrar novamente
        bolo1.mostrarAdornos();
    }
}

public class BoloDeCapivara {

    // A única instância (padrão Singleton)
    private static BoloDeCapivara instancia;

    // Propriedades do bolo
    private String cobertura;
    private boolean temChapeu;
    private boolean temVela;

    // Construtor privado
    private BoloDeCapivara() {
        this.cobertura = "chocolate";
        this.temChapeu = true;
        this.temVela = false;
    }

    // Método de acesso público e global
    public static BoloDeCapivara getInstancia() {
        if (instancia == null) {
            instancia = new BoloDeCapivara();
        }
        return instancia;
    }

    // Métodos para personalização
    public void adicionarVela() {
        if (!temVela) {
            temVela = true;
        } else {
            System.out.println("O bolo ja tem uma vela.");
        }
    }

    public void mostrarAdornos() {
        System.out.println("Bolo de Capivara com cobertura de " + cobertura);
        System.out.println(" - Chapeu: " + (temChapeu ? "Sim" : "Nao"));
        System.out.println(" - Vela: " + (temVela ? "Sim" : "Nao"));
    }
}
`;

const SingletonFive = async () => {
    await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/singleton/' />
      <ClassTitle title='Aula 2 - Continuando a implementação do Singleton em código' />
      <p className={styles.text}>
        Agora tendo o código da parte anterior apresentado vamos seguir os
        padrões do singleton, fazendo com que o <b>construtor seja privado,</b>
        adicionando uma <b>referência privada</b> para a instância dentro da
        classe e um método público e estático para obter a referência de
        qualquer lugar da aplicação, tendo no fim a seguinte classe:
      </p>
      <CodeEditor
        content={CONTENT_1}
        height='60vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.break}>
        Nesse caso agora se executarmos o código em seguida iremos sempre obter
        a mesma instância independente de onde estejamos dentro da nossa
        aplicação (festa){' '}
        <b>
          PS: Use o código abaixo como referência e o altere conforme desejar
          para explorar sua funcionalidade e satisfazer sua curiosidade
        </b>
      </p>
      <CodeRunner content={CONTENT_2} editorHeight={70} />
      <p className={styles.text}>
        É essencial compreender que o singleton pode ser um padrão de projeto
        deveras simples, porém extremamente útil em diversas situações e
        poderoso.
      </p>
      <FinishClassButton path='/tracks/singleton/' trackId={2} number={5} />
    </div>
  );
};

export default SingletonFive;
