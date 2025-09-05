import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import Image from 'next/image';

const IntroOne = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/intro/' />
      <ClassTitle title='Aula 1 - Hello Design Patterns!' />
      <p className={styles.text}>
        Olá, bem vindo! Para entender boa parte do que está sendo abordado neste
        curso é interessante um pouco de conhecimento prévio sobre alguns
        conceitos de programação orientada à objetos já que boa parte dos
        padrões que serão decorridos aqui são implementados em JAVA, e os
        padrões selecionados seguem esse paradigma, porém a idéia de padrões de
        projeto não se limita à um paradigma em específico ou linguagem de
        programação e deve ser aplicada na maior quantidade de casos possíveis
        sempre que possível! O intuito desse curso é promover conhecimento que
        possa melhorar a experiência de desenvolvimento em um contexto que seja
        agnóstico de paradigma e linguagem de programação, mas para que exista
        uma oportunidade de prática real um limite foi traçado dentro do
        contexto presente.
      </p>
      <Image
        src='/JAVINHA.png'
        alt='javinha estudando'
        width={200}
        height={100}
      />
      <p className={styles.text}>
        Antes de tudo é importante entender o que as aulas presentes nas trilhas
        oferecem, o objetivo da nossa causa é ensinar desenvolvedores o conceito
        por trás de padrões de projetos e estimular seu uso juntamente com
        diversas outras práticas de desenvolvimento, não é tido como objetivo
        ensinar por detalhes todos os padrões de projetos existentes um por um,
        e sim trazer à tona as características de um padrão de projeto, seus
        benefícios, e como entender quando um pode ser necessário.{' '}
        <b> Sua curiosidade te levará para as alturas.</b>
      </p>
      <p className={styles.text}>
        Para começar, a pergunta deve ser feita, o que são padrões de projeto?
        Simples, são padrões de projeto feitos para solucionar problemas comuns
        no mundo da programação, basicamente uma forma de bolo, que facilita
        obter uma determinada forma de bolo quando desejado, mas ao invés de pão
        de ló, usamos código e nosso resultado é muito menos tangível do que um
        simples formato de bolo.
      </p>
      <Image
        src='/CAPI.png'
        alt='bolo de capivara sendo cortado'
        width={150}
        height={75}
      />
      <p className={styles.text}>
        Podemos, continuando na linha do bolo, colocar um bolo em formato de
        capivara usando nossa “forma” e um sem utilizá-la lado a lado, no caso
        de um bolo é mais perceptível a diferença à primeira vista, porém quando
        tratamos de código, o buraco é muito mais fundo. Um código que utiliza
        dessas “formas” também conhecidas como padrões de projeto ou design
        patterns, é geralmente, muito mais enxuto, principalmente no longo
        prazo, fácil de ser expandido, lido e mantido por diferentes pessoas,
        desde que elas também respeitem esses padrões, já que eles são regras de
        convenção e muitas vezes abertas para interpretação, o que demanda uma
        comunicação aberta e clara dentro de equipes de tecnologia. Mas por que
        existem tantos benefícios quando os usamos? Bom, para isso precisamos
        entender alguns princípios auto impostos
      </p>
      <FinishClassButton path='/tracks/intro/' />
    </div>
  );
};

export default IntroOne;
