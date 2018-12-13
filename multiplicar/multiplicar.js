// Requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('==========='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('==========='.green);


    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    console.log('\n' + data);
}

let data = '';

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }


        for (let i = 1; i <= limite; i++) {

            //console.log(resp);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}