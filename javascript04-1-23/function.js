function rollDiew(){
    let roll =Math.floor(Math.random() * 6)+1;
    console.log(`Rolled:${roll}`);

}
function throwDice(numRolls){

    for (let i=0;i<numRolls; i++){
        rollDiew();
        
    }
}    
