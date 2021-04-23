const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        
    
        let salida, consola = '';
    
        for ( let i = 1; i <= hasta; i++ ) {
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        
        if ( listar ) {
            console.log('=========================='.green);
            console.log(`      Tabla del: ${colors.blue( base )}    `.green);
            console.log('=========================='.green);
            console.log(consola);
        }

        const nombreArchivo =  `tabla-${base}.txt`;
        fs.writeFileSync( `./salida/${ nombreArchivo }`, salida );

        console.log(`${nombreArchivo} creado`);

        return nombreArchivo;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}