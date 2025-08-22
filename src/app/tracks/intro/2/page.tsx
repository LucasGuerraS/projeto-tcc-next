import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';

const IntroTwo = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/intro/' />
      <ClassTitle title='Aula 2 - Conhecendo os princípios' />
      <div className={styles.text}>
        <p>
          Os princípios dos padrões são estabelecidos para que exista uma idéia
          do que pode ser considerado uma solução que se encaixe com as idéias
          de seus criadores e encaixe com o contexto de boa práticas de
          desenvolvimento. Lembrando que alguma regra pode ser sim violada, já
          que algumas delas podem ter uma relação de antagonismo às outras,
          sendo assim elas não podem existir no mesmo contexto.
        </p>
        <Image
          src='https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/zurojqnv/file.png'
          alt='foo'
          width={250}
          height={100}
        />
        <ol className={styles.listOl}>
          <li>
            Primeiro de tudo é sempre importante identificar aspectos da
            aplicação em questão que sejam variáveis e separá-los daquilo que
            não muda
          </li>
          <li>
            Sempre visar programar para uma interface e não para uma
            implementação
          </li>
          <li>Priorizar composição ao invés de herança</li>
          <li>Preferir designs pouco acoplados entre si</li>
          <li>
            Classes devem estar abertas para extensão, porém fechadas para
            modificações
          </li>
          <li>Dependa de abstrações e não classes concretas</li>
          <li>Classes devem ter um escopo de interação limitado</li>
          <li>Uma classe deve ter apenas um motivo para mudar</li>
        </ol>
        <p>
          Agora que conhecemos este pilares e alguns sejam autoexplicativos
          vamos entender alguns termos mais complicados, caso não se sinta
          confortável com a explicação consulte algum recurso externo!
        </p>
        <ul className={styles.list}>
          <li>
            {' '}
            <b>Acoplamento:</b> é um termo que pode ser entendido como
            dependência, mas de uma maneira peculiar, por exemplo um sistema,
            que interage com um banco de dados, pode ser considerado muito
            acoplado quando a mudança desse banco de dados resultaria em um alto
            nível de retrabalho dentro do sistema, acoplamento é um termo usado
            para dependência num contexto de mudanças e falhas.
          </li>
          <li>
            Uma <b>interface</b> é vista como qualquer tipo de classe e uma
            interface é uma interface.
          </li>
          <li>
            <b>Composição:</b> é quando uma implementação é composta por outras
            implementações e <b>herança</b> é quando uma classe herda
            características de uma classe pai
          </li>
        </ul>
      </div>
      <FinishClassButton path='/tracks/intro/' />
    </div>
  );
};

export default IntroTwo;
