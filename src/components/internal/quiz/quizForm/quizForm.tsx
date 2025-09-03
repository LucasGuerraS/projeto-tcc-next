'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type QuizFormProps = {
  questionTitle: string;
  options: string[];
  correctAnswer: string;
  path: string;
};

const QuizForm = ({
  questionTitle,
  options,
  correctAnswer,
  path,
}: QuizFormProps) => {
  const FormSchema = z.object({
    type: z.enum(options, {
      error: 'Por favor selecione uma opção.',
    }),
  });

  const [errorMsg, setErrorMsg] = useState('');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (data.type === correctAnswer) {
      alert('Resposta correta!');
      window.location.href = path;
    } else {
      setErrorMsg('Resposta incorreta. Tente novamente!');
    }
  };

  return (
    <div className='w-2/6 flex flex-col items-center bg-blue-100 pt-20 pb-20 h-full rounded-lg shadow-xl/30'>
      <h1 className='text-2xl font-bold'>Quiz:</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' w-full space-y-6 flex flex-col items-center pt-10'
        >
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>{questionTitle}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                      field.onChange(value);
                      setErrorMsg(''); // Clear error message on change
                    }}
                    defaultValue={field.value}
                    className='flex flex-col'
                  >
                    {options.map((option, index) => (
                      <FormItem key={index} className='flex items-center gap-3'>
                        <FormControl>
                          <RadioGroupItem
                            value={option}
                            className='border-black'
                          />
                        </FormControl>
                        <FormLabel className='font-normal'>{option}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-1/3'>
            Responder
          </Button>
          {errorMsg && (
            <div className='text-red-600 font-semibold pt-4'>{errorMsg}</div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default QuizForm;
