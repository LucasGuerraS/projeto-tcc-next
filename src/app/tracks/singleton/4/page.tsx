import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeEditor from '@/components/internal/codeEditor/codeEditor';
import { validateSession } from '@/_utils/validateSession';

const CONTENT_1 = `public class BoloDeCapivara {

    // Propriedades do bolo
    private String cobertura;
    private boolean temChapeu;
    private boolean temVela;

    // Construtor público (qualquer um pode instanciar)
    public BoloDeCapivara(String cobertura, boolean temChapeu, boolean temVela) {
        this.cobertura = cobertura;
        this.temChapeu = temChapeu;
        this.temVela = temVela;
    }

    // Métodos de exibição
    public void mostrarAdornos() {
        System.out.println("Bolo de Capivara com cobertura de " + cobertura);
        System.out.println(" - Chapeu: " + (temChapeu ? "Sim" : "Nao"));
        System.out.println(" - Vela: " + (temVela ? "Sim" : "Nao"));
    }

    // Métodos de personalização
    public void adicionarVela() {
        if (!temVela) {
            temVela = true;
        }
    }
}
`;

const SingletonFour = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/singleton/' />
      <ClassTitle title='Aula 1 - Aplicando o Singleton em código' />
      <p className={styles.text}>
        Agora aplicando o código do SIngleton de maneira prática, primeiro vamos
        começar com o problema, temos uma festa e todos os convidados precisam
        ver o mesmo bolo na festa toda, esta é uma situação não muito real, mas
        pode substituir o bolo por qualquer outra coisa e a festa por algo que
        se encaixe no contexto de alguma aplicação. O estado inicial da nossa
        classe é o seguinte:
      </p>
      <CodeEditor
        content={CONTENT_1}
        height='50vh'
        width='30%'
        minimap={false}
        readOnly={true}
      />
      <p className={styles.text}>
        Com o estado atual do nosso código, se essa classe fosse acessada de
        diversas partes da aplicação (festa), seria difícil manter essa
        referência da instância atual, sendo assim precisamos aplicar o
        singleton no código.
      </p>
      <FinishClassButton path='/tracks/singleton/' trackId={2} number={4} />
    </div>
  );
};

export default SingletonFour;
