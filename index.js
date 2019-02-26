var fs = require('fs');

fs.readFile('alumnos.csv', 'utf8', (err,data) => {
    if(err) throw err;

    var lineBk = data.split("\n");
    var string = "";
    for(var i=0; i < lineBk.length; i++){
        var line = lineBk[i].split(",");
        string += 'No. : '+ (i+1) + '\n' +
                  'No. Control: '+ line[0] + '\n' +
                  'Nombre: ' + line[1] + '\n' +
                  'Calificación: ' + line[2] + '\n\n'
    }
    
    fs.writeFile('alumnos.txt', string, (err) => {
        if(err) throw err;
        console.log('Guardado con exito!');
    });
});