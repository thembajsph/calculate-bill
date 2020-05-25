const calculateBtn = document.querySelector(".calculateBtn");
 const billTotalElement = document.querySelector(".billTotal");
 const billStringTotalElement = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");

function totalPhoneBill(billString) {

//split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;

} 
function styleTotalColor(roundedBillTotal)  {

const currentTotal = Number(roundedBillTotal);


billTotalSpanElement.classList.remove("danger");
billTotalSpanElement.classList.remove("warning");

//color the total based on the criteria
    if (currentTotal  >= 30){
        // adding the danger class will make the text red
       billTotalSpanElement.classList.add("danger");
    }
    else if (currentTotal >= 20 && currentTotal < 30){
       billTotalSpanElement.classList.add("warning");
    










} 



};


function calculateBtnClicked () {
var billString = billStringTotalElement.value;


  const roundedBillTotal = totalPhoneBill(billString);






billTotalElement.innerHTML = roundedBillTotal;  
styleTotalColor(roundedBillTotal);

    billTotalElement.innerHTML = roundedBillTotal;








};

calculateBtn.addEventListener("click", calculateBtnClicked);

