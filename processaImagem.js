import { inicializaModelo } from './modelo.js'; //chamar o modelo e a parte principal
import { readFileSync} from "fs";

const model = await inicializaModelo("gemini-pro-vision"); //chamar o tipo de inteligência que você quer consultar.

//colar o código do google
function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }

//exportar a imagem principal
export async function processaImagem(imagem) {
    const prompt = "Me fale tudo que puder sobre o destino mostrado nessa imagem" //prompt principal

    //copiar o código do google
    
    const imageParts = [
        fileToGenerativePart(imagem, "image/jpeg"),
      ];
    
    const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    
    }
