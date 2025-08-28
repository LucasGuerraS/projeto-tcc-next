import { PistonError, runCode } from '@/_clients/piston';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';
import { toast } from 'sonner';

type CodeConsoleProps = {
  code: string;
  handleSuccess?: (code: string) => void;
};

const CodeConsole: React.FC<CodeConsoleProps> = ({ code, handleSuccess }) => {
  const [output, setOutput] = useState<string[]>([
    'Clique em "Executar" para ver o resultado',
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const handleClick = async () => {
    setIsLoading(true);
    setOutput(['Executando código...']);
    try {
      setError(false);
      const result = await runCode(code);
      console.log(result);
      setIsLoading(false);
      if (result.run.code === 0) {
        setOutput(result.run.stdout.split('\n'));
        handleSuccess?.(result.run.stdout);
      } else {
        setError(true);
        setOutput([result.run.stderr]);
      }
    } catch (error) {
      setError(true);
      setOutput(['Erro ao executar o código']);
      toast.error('Erro ao executar o código', {
        description: (error as PistonError).message || 'Erro desconhecido',
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`w-full h-auto flex flex-col items-left bg-[#1e1e1e] text-white text-left pt-6 pl-6 pb-20 pr-6`}
    >
      <Button
        onClick={handleClick}
        className='w-full bg-black cursor-pointer hover:bg-gray-800 hover:text-white'
        variant='outline'
      >
        {isLoading ? (
          <ThreeDot size='small' color='white' />
        ) : (
          <>
            <PlayCircle />
            <span>Executar</span>
          </>
        )}
      </Button>
      <p className={`mt-4 mb-4 ${error ? 'text-red-500' : 'text-green-500'} text-xl font-mono font-medium`}>
        Output:
      </p>
      {output.map((line, index) => (
        <p className={`mt-2 ${error ? 'text-red-500' : 'text-gray-400'} font-mono`} key={index}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default CodeConsole;
