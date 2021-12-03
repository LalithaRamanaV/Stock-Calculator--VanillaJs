const investmentPriceRef = document.querySelector( "#invesment-price-input" );
const quantityRef = document.querySelector( "#quantity-input" );
const marketPriceRef = document.querySelector( "#market-price-input" );
const submitButton = document.querySelector( "#submit-btn" );
const messageBox = document.querySelector( "#message-box" );


function getProfitOrLoss() {

    var investmentPrice = Number( investmentPriceRef.value );
    var quantity = Number( quantityRef.value );
    var marketPrice = Number( marketPriceRef.value );

    var totalInvestment = investmentPrice * quantity;
    var totalReturns = ( marketPrice - investmentPrice ) * quantity;
    var percentageReturns = ( totalReturns / totalInvestment ) * 100;

    var investmentStatus = "";
    if ( totalReturns > 0 )
        investmentStatus = "profit";
    else if ( totalReturns < 0 )
        investmentStatus = "loss";
    else
        investmentStatus = "neutral";

    return {
        absolute: Math.abs( totalReturns ),
        percentage: Math.abs( percentageReturns ),
        status: investmentStatus
    };

}


function clickEventListener() {

    var returns = getProfitOrLoss();

    if ( investmentPriceRef.value === '' || quantityRef.value === '' || marketPriceRef.value === '' ) {
        messageBox.innerText = "Please enter the investment details!";
    } else {

        if ( returns.status === "profit" ) {
            messageBox.style.color = "#06d6a0";
            messageBox.innerText = `It's Amazing! Your net profit is: RS${returns.absolute} (+${returns.percentage}%)`;
        }
        else if ( returns.status === "loss" ) {
            messageBox.style.color = "#f94144";
            messageBox.innerText = `Sorry! Your net loss is: Rs${returns.absolute} (-${returns.percentage}%)`;
        }
        else {
            messageBox.style.color = "#000000";
            messageBox.innerText = "No profit or loss";
        }

    }

}

submitButton.addEventListener( "click", clickEventListener );