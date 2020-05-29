const calculateBtn = document.querySelector(".calculateBtn");
    const billTotalElement = document.querySelector(".billTotal");
    const billStringTotalElement = document.querySelector(".billString");  
    const billTotalSpanElement = document.querySelector(".total")

    var phoneBillInstance = phoneBillFact();
    
    function calculateBtnClicked () {
        var billString = billStringTotalElement.value;
        
        
          var roundedBillTotal = phoneBillInstance.totalPhoneBill(billString);   
          styleTotalColor(roundedBillTotal);
        billTotalElement.innerHTML = roundedBillTotal.toFixed(2);  
       
        
    //        billTotalElement.innerHTML = roundedBillTotal;
    
        
        };  

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
    calculateBtn.addEventListener("click", calculateBtnClicked)        