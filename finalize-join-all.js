/* 
    Created by: 
    Name: Md Fuad Hasan
    Batch: Web-batch_3
    Assignment: Hello JS - Assignment - 4
    Date: 26 / 03 / 2024
*/


// Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSaleQuantity) {

    // validation-check: 
    if (ticketSaleQuantity > 0
        && typeof (ticketSaleQuantity) === 'number') {
        // given values: 
        const perTicketPrice = 120;
        const givenGuard = 500;
        const givenLunchCost = 8 * 50;

        // calculation:
        const RemainingMoney = ticketSaleQuantity * perTicketPrice;
        const haveMoney = RemainingMoney - (givenGuard + givenLunchCost)

        return haveMoney;
    }
    else{
        const errorMessage = "Invalid" ;
        return errorMessage;
    }
}
/* ---------------
-----------------------
---------------------------- */







// Problem-02 : Good Name, Bad Name 

function checkName(takeName) {
    // validation-check: 
    if (typeof (takeName) === 'string') {
        // given-specific-condition: 
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
/* ------------
-------------------
----------------------- */







// Problem-03 : Virus in my Array 

function deleteInvalids(arrElement) {
    // validation-check: 
    if (Array.isArray(arrElement)) {
        let numberArray = []
        for (let element of arrElement) {
            // check: given element correct or not:
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
/* -----------
------------------
------------------------- */







// Problem-04 : Make A Great Password

function password(personInfo){
    // access all properties of object:
    const name = personInfo.name,
        birthYear = personInfo.birthYear.toString();
        siteName = personInfo.siteName;

        // validation-check: 
        if(name !== " " && birthYear !== " " && siteName !== " " 
            && birthYear.length === 4){
            // main: concatenation
            const updateSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
            let info = "#" + name + "@" + birthYear ;
            const generatePassword =  updateSiteName + info;
        
            return generatePassword;
        }
        else{
            const errorMessage = "Invalid"
            return errorMessage;
        }
   
}
/* ----------
------------------
------------------------ */








// Problem-05 : Monthly Savings of a Freelancer

function monthlySavings(getAllPayments, livingCost) {
    // Validation-status:
    if (Array.isArray(getAllPayments) || Number(livingCost)) {

        // main operation:
        let bankTax = 0, sum = 0;
        for (let payment of getAllPayments) {
            if (payment >= 3000) {
                bankTax += (payment * 20) / 100;
                sum = (sum + payment);
            }
            else {
                sum = (sum + payment);
            }
        }
        // savings Money: 
        const savingsMoney = sum - (bankTax + livingCost);


        // savings-status: 
        if (savingsMoney < 0) {
            const totalSavings = "earn more"
            return totalSavings;
        }
        else {
            const totalSavings = savingsMoney;
            return totalSavings;
        }
    }

    else {
        const errorMessage = "invalid input"
        return errorMessage;
    }
}

/* ------------------------Complete Assignment At 1:28--------------- */
