import { fazerPergunta } from './pergunta.js';
import { perguntar } from './perguntaLivre.js';
import { consultar } from './consultaDestino.js';
import { processaImagem } from './processaImagem.js';

async function principal() {
  const escolha = await fazerPergunta(`Escolha uma das opções abaixo: \n
  1. Fazer uma pergunta livre sobre um destino;
  2. Comparação de destinos por categorias;
  3. Ver informações com base na imagem;
  4. Fazer a análise de sentimentos baseado em arquivo texto;
  \nOpção desejada: `);
  

  if (escolha === '1') {
    await perguntar();
  } else if (escolha === '2') {
    await consultar();
  }else if(escolha ==='3'){
    const imagem = fazerPergunta("Me informe o caminho compeleto para a imagem")
    await processaImagem (imagem);
  } else if (escolha === '4') {
    await processaArquivoTexto();
  }else {
    console.log('Escolha inválida.');
  }
}

principal();
