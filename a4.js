let input = process.argv.slice(2);

let order =input[0];
 function sum(a,b){
    return parseInt (a) + parseInt(b)
 }
 function multiply(a,b){
    return parseInt (a) * parseInt(b)
 }


 if (order==='sum'){
    console.log(sum(input[1],input[2]))
 }


 if (order==='multiply'){
    console.log(multiply(input[1],input[2]))
 }