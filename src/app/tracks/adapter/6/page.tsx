'use client';

import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import styles from './index.module.css';
import ClassTitle from '@/components/internal/classes/classTitle/page';
import ClassButton from '@/components/internal/classes/backClassButton/page';
import FinishClassButton from '@/components/internal/classes/finishClassButton/page';
import CodeRunner from '@/components/internal/codeRunner/codeRunner';
import { useState } from 'react';

const CONTENT_1 = `public class Main {
    public static void main(String[] args) {
        Bolo meuBolo = new CapybaraCakeAdapter(new CapybaraCakeMaker());

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

// Nova classe com interface diferente
class FlyingCapybaraCakeCreator {
    public void bakeFlyingCake() {
        System.out.println("Assando um bolo de capivara voadora");
    }
}

// Adapter para FlyingCapybaraCakeCreator
class FlyingCapybaraCakeAdapter implements Bolo {}

`;

const EXPECTED =
  'Fazendo um delicioso bolo de capivara\nAssando um bolo de capivara voadora\n';

const AdapterSix = () => {
  const [completed, setCompleted] = useState<boolean>(false);

  const handleComplete = (code: string) => {
    if (code === EXPECTED) {
      setCompleted(true);
    }
  };

  return (
    <div className={styles.content}>
      <DefaultHeader />
      <ClassButton path='/tracks/adapter/' />
      <ClassTitle title='Aula 3 - Desafio final, implementação do Adapter' />
      <p className={styles.text}>
        Agora, temos um desafio final para você! Vamos implementar um novo
        adapter, da classe FlyingCapybaraCakeCreator. Tente fazer por conta
        própria com base no que aprendeu até agora. Lembre-se de que o objetivo
        do Adapter é permitir que classes com interfaces incompatíveis trabalhem
        juntas. Boa sorte! <b>O Output esperado é: </b>{' '}
        <span>Fazendo um delicioso bolo de capivara</span>
        <span>Assando um bolo de capivara voadora</span>
      </p>
      <CodeRunner
        content={CONTENT_1}
        editorHeight={70}
        handleSuccess={handleComplete}
      />
      <p className={styles.text}>
        É importante ressaltar que no nosso caso poderíamos ter apenas
        implementado a interface de bolo nas classes, mas optamos por aplicar o
        Adapter para que você possa praticar a aplicação desse pattern. Mas é
        importante sempre pensar se é necessário adicionar na complexidade da
        sua aplicação e quais são as consequências dessa complexidade extra!{' '}
        <b>Sua curiosidade te levará para as alturas.</b>
      </p>
      <FinishClassButton path='/tracks/adapter' disabled={!completed} />
    </div>
  );
};

export default AdapterSix;
