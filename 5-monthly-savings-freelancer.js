/* 
function > input [monthly getAllPayment, ], number(living-cost)
return remaining balance

monthly payment > 3000 bank-tax-cut 20 % 

savings = totalEarn[sum of monthly AllPayment with 20%] 
- (livingCost);

savings > 0 return number / savings < 0 return string "earn more"
*/

// Monthly Savings of a Freelancer

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

const monthlyGetPayments = [1000, 2000, 3000];
const livingCost = 5400;
// const result5 = monthlySavings(monthlyGetPayments, livingCost);
// const result5 = monthlySavings([1000, 2000, 2500], 5000);
// const result5 = monthlySavings([900, 2700, 3400], 10000);
// const result5 = monthlySavings(5000, [1000, 2000, 3000]);
console.log(result5);