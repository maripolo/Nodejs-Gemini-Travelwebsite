import { inicializaModelo } from './modelo.js';
import { fazerPergunta } from './pergunta.js';

const model = await inicializaModelo("gemini-1.0-pro");

export async function processaArquivoTexto() {
    const arquivo = await fazerPergunta("\nMe informe o caminho e o nome do arquivo: ");
    const dados = await fs.readFile(arquivo, 'utf8');
  
    //prompt para que seja analisada respostas de usuários
    const prompt = `Analise as opiniões descritas em sequência e resuma os pontos positivos e negativos citados pelos clientes sobre esses destinos. Depois categorize o percentual de respostas em satisfeito, insatisfeitos ou neutros, colocando no seguinte formato, por exemplo:  
     Satisfeitos: 20% - 20 respostas 
     Insatisfeitos: 50% - 50 respostas
     Neutros: 30% - 30 respostas 
     O total de respostas deve coincidir com o total de opiniões lidas. 
     Opiniões: ${dados}`;
  
     const result = await model.generateContent(prompt);
     const response = await result.response;
     const text = response.text();
     console.log(text);
  }