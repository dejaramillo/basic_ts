
function addNumbers(a: number, b: number){
    return a + b;
}

const addNumbersArrow = (a: number, b: number) : string => {
    return `${a + b}`;
}


function multiply(firtsNumber: number, secondNumber?: number, base: number = 2){
    console.log(secondNumber)
    return firtsNumber * base;
}



const result: string =  addNumbers(1,2).toString();
const result2: string =  addNumbersArrow(1,2);
const multiplyResult: number =  multiply(1,2);


console.log({ result, result2, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {

    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
    console.log(`Healty points ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 200);

strider.showHp();





export{};