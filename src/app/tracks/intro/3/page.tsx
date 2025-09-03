import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';

const IntroThree = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/intro/' />
      <ClassTitle title='Aula 3 - Entendendo os objetivos dos padrões de projeto' />
      <p className={styles.text}>
        Cada padrão de projeto possuí uma intenção específica, porém é
        importante entender que todos partem do princípio que a comunidade de
        desenvolvedores se beneficiaria muito de um esqueleto de solução para
        problemas muito comuns, já que todo projeto tem seu contexto é
        importante entender que a palavra esqueleto está presente pois, por mais
        que o padrão possa ser o mesmo o código final sempre será diferente.
        Como consequência dessa carência os padrões de projetos começaram a ser
        propostos e são criados e aperfeiçoados até hoje, pois no mundo da
        tecnologia, problemas não faltam! E dessas soluções podemos destacar
        alguns benefícios:
      </p>
      <ul className={styles.list}>
        <li>
          Proporcionam um vocabulário comum entre os desenvolvedores e código
          mais fácil de ser estruturado e compreendido
        </li>
        <li>
          Permitem que mais informação seja transmitida com menos palavras
        </li>
        <li>
          Ajudam no entendimento mais profundo da base de programação orientada
          à objetos, pois parte deles se apoia nos conceitos de herança,
          polimorfismo, encapsulamento e abstração
        </li>
      </ul>
      <p className={styles.text}>
        É importante ressaltar que parte das vezes a aplicação de projetos pode
        não impactar na performance do código, mas pode impactar no tempo de
        resolução de bugs, facilidade na escalabilidade do código e muitos
        outros benefícios, já que um dos pilares é evitar a repetição de pontos
        fixos, então os benefícios advindos da aplicação desses padrões pode ser
        imenso.
      </p>
      <Image src='/adapter.drawio.png' alt='foo' width={500} height={500} />
      <p className={styles.text}>
        Por fim é importante reconhecer esses benefícios e tentar encontrar
        soluções para outros problemas que tragam benefícios igualmente bons em
        contextos fora de apenas código, desenvolvedores são resolvedores de
        problemas e o objetivo principal desse projeto é ensinar através dos
        padrões de projeto que, boa práticas, comunicação e conhecimento podem
        colaborar muito para formarmos desenvolvedores mais aptos e ambientes de
        desenvolvimento mais leves e sustentáveis.{' '}
        <b>Sua curiosidade te levará para as alturas.</b>
      </p>
      <FinishClassButton path='/tracks' />
    </div>
  );
};

export default IntroThree;
