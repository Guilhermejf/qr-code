import prompt from "prompt"
import chalk from 'chalk';

export const initialPrompt =[
    {
        name : "url",
        message  : chalk.greenBright("Digite a url para gerar o QRcode")
        
    }
]

export const sizePrompt =[
    {
        name : "size",
        message  : chalk.greenBright("Qual tamano do QRcode 1 para pequeno 2 para grande")
        
    }
]