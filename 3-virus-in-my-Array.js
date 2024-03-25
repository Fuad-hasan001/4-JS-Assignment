// Virus in my Array 

function deleteInvalids(arrElement) {
    if (Array.isArray(arrElement)) {
        let numberArray = []
        for (let element of arrElement) {
            if (typeof (element) === 'number') {
                numberArray.push(element);
            }
            else{
                return numberArray;
            }
        }
        return numberArray;
    }
    else {
        const errorMessage = 'Invalid Array' ;
        return errorMessage;
    }

}
// const mixOfElements = ['nan', 1, 12, 0, -1, 'undefined'];
// const mixOfElements = ["1", {num:2}, NaN];
// const mixOfElements = [1, 12, -3];
// const mixOfElements = {num: [1, 2, 3]};
const result3 = deleteInvalids(mixOfElements);
console.log(result3);