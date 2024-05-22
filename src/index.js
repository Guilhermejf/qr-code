import chalk from 'chalk';
import prompt from "prompt"
import createQR from './services/createqr.js'
import {initialPrompt, sizePrompt} from "./prompts/mainPrompt.js"


prompt.get(initialPrompt,(err,initialResult)=>{
       
    prompt.get(sizePrompt,(err,result)=>{
        let size = true
        if(result.size == 1){
            size = true
            console.log(size)
        }else{
            size = false
            console.log(size)
        }

        createQR(initialResult.url,size)   
    })
})