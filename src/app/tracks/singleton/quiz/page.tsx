import QuizForm from '@/components/internal/quiz/quizForm/quizForm';
import styles from './index.module.css';
import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';

const QuizPageAdapter = () => {
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <QuizForm
        questionTitle='Quais das alternativas retratam uma situação de aplicação do Singleton:'
        options={[
          'Cache para ser acessado pelo sistema todo',
          'Teste de classe',
          'Servir de atalho global',
          'Criação de vários inimigos da mesma classe em um jogo',
          'Uso de injeção de dependência',
        ]}
        correctAnswer='Cache para ser acessado pelo sistema todo'
        path='/tracks/singleton'
      />
    </div>
  );
};

export default QuizPageAdapter;
