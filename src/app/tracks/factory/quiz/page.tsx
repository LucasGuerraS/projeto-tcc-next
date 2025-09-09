import QuizForm from '@/components/internal/quiz/quizForm/quizForm';
import styles from './index.module.css';
import DefaultHeader from '@/components/internal/defaultHeader/defaultHeader';
import { validateSession } from '@/_utils/validateSession';

const QuizPageFactory = async () => {
  await validateSession();
  return (
    <div className={styles.content}>
      <DefaultHeader />
      <QuizForm
        questionTitle='Quais das alternativas retratam uma situação que o factory pattern não deve ser usado:'
        options={[
          'Evitar alto acoplamento de código.',
          'Separar a criação de objetos do código principal.',
          'Seguir o princípio Open/Closed.',
          'Quando você espera que os objetos se mantenham iguais.',
          'Isolar ou encapsular lógica de criação.',
        ]}
        correctAnswer='Quando você espera que os objetos se mantenham iguais.'
        path='/tracks/factory'
      />
    </div>
  );
};

export default QuizPageFactory;
