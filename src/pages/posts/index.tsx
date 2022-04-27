import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
  return(
    <>
      <Head>Posts | Ignews</Head>
      
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>26 de abril de 2022</time>
            <strong>Como aplicar validação em formulários reativos no Angular?</strong>
            <p>Você já deve ter preenchido um formulário que não indicava claramente o porquê de algum campo não estar válido e teve que ficar adivinhando quantos caracteres sua senha precisava ter ou que tipo de caracteres deveria receber.</p>
          </a>
          <a href="#">
            <time>26 de abril de 2022</time>
            <strong>Como aplicar validação em formulários reativos no Angular?</strong>
            <p>Você já deve ter preenchido um formulário que não indicava claramente o porquê de algum campo não estar válido e teve que ficar adivinhando quantos caracteres sua senha precisava ter ou que tipo de caracteres deveria receber.</p>
          </a>
          <a href="#">
            <time>26 de abril de 2022</time>
            <strong>Como aplicar validação em formulários reativos no Angular?</strong>
            <p>Você já deve ter preenchido um formulário que não indicava claramente o porquê de algum campo não estar válido e teve que ficar adivinhando quantos caracteres sua senha precisava ter ou que tipo de caracteres deveria receber.</p>
          </a>
        </div>
      </main>
    </>
  );
}