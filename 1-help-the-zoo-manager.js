// Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSaleQuantity) {
    if (ticketSaleQuantity > 0 
        && typeof (ticketSaleQuantity) === 'number') {
        const perTicketPrice = 120;
        const givenGuard = 500;
        const givenLunchCost = 8 * 50;

        const RemainingMoney = ticketSaleQuantity * perTicketPrice;
        const haveMoney = RemainingMoney - (givenGuard + givenLunchCost)

        return haveMoney;
    }
    else{
        const errorMessage = "Invalid" ;
        return errorMessage;
    }
}
const result1 = calculateMoney(10);
console.log(result1);