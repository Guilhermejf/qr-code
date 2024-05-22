import createQRcode from "qrcode-terminal"

async function createQR(url,size){

    createQRcode.generate(url,{small:size})
}

export default createQR;