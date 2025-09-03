'use client';

import type { NextPage } from 'next';
import styles from './index.module.css';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.email(),
  password: z.string().min(8).max(100),
});

const Signup: NextPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className={styles.signup}>
      <div className={styles.navigation}>
        <div className={styles.items}>
          <div
            className={styles.home}
            onClick={() => (window.location.href = '/')}
          >
            Home
          </div>
        </div>
        <div className={styles.designpatternsfactory}>
          DesignPatternsFactory
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={styles.form}
        >
          <div className={styles.heading}>
            <div className={styles.crieSuaConta}>Crie sua conta!</div>
          </div>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className={styles.input2}>
                <FormLabel className={styles.nomeDeUsurio}>
                  Nome de usuário
                </FormLabel>
                <FormControl className={styles.field2}>
                  <Input
                    type='text'
                    {...field}
                    placeholder='Digite seu nome de usuario'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className={styles.input2}>
                <FormLabel className={styles.nomeDeUsurio}>Email</FormLabel>
                <FormControl className={styles.field2}>
                  <Input
                    type='email'
                    {...field}
                    placeholder='Digite seu email'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className={styles.input2}>
                <FormLabel className={styles.nomeDeUsurio}>Senha</FormLabel>
                <FormControl className={styles.field2}>
                  <Input
                    type='password'
                    {...field}
                    placeholder='Digite sua senha'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' className={styles.button}>
            Criar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
