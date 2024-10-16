let cmd = require('./B-6-cmd.js');
let fs = require('fs');

cmd.use("minus", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) - cmd.parseInput(contInputs[2]));
});

cmd.use("sum", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) + cmd.parseInput(contInputs[2]));
});

cmd.use("multiply", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) * cmd.parseInput(contInputs[2]));
});

cmd.use("div", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) / cmd.parseInput(contInputs[2]));
});

cmd.use("printRecord", function(contInputs){
    console.log({
        name: contInputs[1],
        family: contInputs[2],
        age: contInputs[3],
        email: contInputs[4]
    });
});

cmd.use("saveRecord", function(contInputs){
    let dbWrite = {
        name : contInputs[1],
        family : contInputs[2],
        age : contInputs[3],
        email : contInputs[4]
    }

    let formattedData = `{name: ${dbWrite.name}, family: ${dbWrite.family}, age: ${dbWrite.age}, email: ${dbWrite.email}}`;

    fs.writeFile('myDatabase.txt', formattedData, {encoding:'utf8'}, function(error){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            console.log('File Saved.')
        }
    })
});

cmd.start();
