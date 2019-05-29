var mutantChecker=require('./mutantChecker');


const dnaM1 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
const dnaM2 = ["TTGCGA","CAGTGC","TTATGT","AGAAGG","CCCCAA","TCACTG"];
const dnaM3 = ["TTGCGA","CGGTGC","TTATGT","AGAAGG","CCCCAA","TCACTG"];
const dnaM4 = ["ACTACT","TATGCC","GGAACA","CTTACC","GGGGTT","ACTGAG"];
const dnaH5 = ["TTGCGA","CTGTGC","TTATGT","AGAAGG","TCCCAA","TCACTG"];
const dnaH6 = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"];

if(process.argv.length>2){
    try{
        var arr=JSON.parse(process.argv[2]);
        console.log("\tProbando secuencia de argumento: ",mutantChecker.isMutant(arr));
    }catch(err){
        console.error("Error parseando argumento");
    }
}else{
    //Test DNA Mutant 1
    console.log("\tProbando secuencia mutante 1: ",mutantChecker.isMutant(dnaM1));
    //Test DNA Mutant 2
    console.log("\tProbando secuencia mutante 2: ",mutantChecker.isMutant(dnaM2));
    //Test DNA Mutant 3
    console.log("\tProbando secuencia mutante 3: ",mutantChecker.isMutant(dnaM3));
    //Test DNA Mutant 4
    console.log("\tProbando secuencia mutante 4: ",mutantChecker.isMutant(dnaM4));
    //Test DNA Human 1
    console.log("\tProbando secuencia Humana 1: ",mutantChecker.isMutant(dnaH5));
    //Test DNA Human 2
    console.log("\tProbando secuencia Humana 2: ",mutantChecker.isMutant(dnaH6));
}
