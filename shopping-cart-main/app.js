
function setProductValue(product,verify,type){
    var inputField = document.getElementById(product+"Input-field");
    var inputValue = parseInt(inputField.value);
    if(verify ==true){
        inputValue = inputValue +1;
        inputField.value = inputValue;
        
    }
    else if(inputValue>0){
        inputValue = inputValue -1;
        inputField.value = inputValue; 
    }
    inputValue = inputField.value;
// set product price

    var productPrice = document.getElementById(type+"-price");
    
    if(type =="mobile"){
        var mobilePriceTotal =  inputValue*1219
        productPrice.innerText = mobilePriceTotal;
       
    }
    else{
        var casePriceTotal = inputValue*59
        productPrice.innerText = casePriceTotal;
    }

    // update total price
    var subSTotal = document.getElementById("sub-total")
    var mobilePrice =parseInt(document.getElementById("mobileInput-field").value)*1219
    var casePrice =parseInt(document.getElementById("caseInput-field").value)*59
    subSTotal.innerText = mobilePrice+casePrice;

     

    
}


document.getElementById("mobile-btn1").addEventListener("click",function(){
    setProductValue("mobile",true,"mobile");
    
    
})
document.getElementById("mobile-btn2").addEventListener("click",function(){
    setProductValue("mobile",false,"mobile");
   
})
document.getElementById("case-btn1").addEventListener("click",function(){
    setProductValue("case",true,"case");
    
})
document.getElementById("case-btn2").addEventListener("click",function(){
    setProductValue("case",false,"case");
    
})








    







