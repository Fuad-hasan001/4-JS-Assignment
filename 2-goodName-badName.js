//Good Name, Bad Name 

function checkName(takeName) {
    if (typeof (takeName) === 'string') {
        let lastValidLetter = ['a', 'e', 'i', 'o', 'u', 'w', 'y',
            'A', 'E', 'I', 'O', 'U', 'W', 'Y'];

        if (lastValidLetter.includes(takeName[takeName.length - 1])) {
            return 'Good Name';
        }
        else {
            return 'Bad Name';
        }
    }
    else {
        const errorMessage = 'Invalid' ;
        return errorMessage;
    }

}
const result2 = checkName("Salman");
console.log(result2);