const { error } = require('console');
let cmd = require('./C-4-cmd.js');
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

    let formattedData = JSON.stringify(dbWrite)

    fs.writeFile('myDatabase.txt', formattedData, {encoding:'utf8'}, function(error){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            console.log('File Saved.');
        }
    })
});

cmd.use("openFile", function(contInputs){
    fs.readFile(contInputs[1], function(error, data){
        if (error.code === "EISDIR"){
            console.log(error);
            fs.readdir(contInputs[1], (error, files) => {
                if (error)
                  console.log(error);
        
                else {
                  console.log("\nCurrent directory filenames:");
        
                  files.forEach(file => {
                    console.log(file);
                  })
                }
            })
        }

        else {
            console.log("Success : ", data.toString());
        }
    })
})

cmd.start();
