const amount=document.querySelector("#amount");
const percentage=document.querySelector("#percentage");
const btn=document.querySelector("#btn");
const output=document.querySelector("#output");


btn.addEventListener('click',(e)=>{
    if(amount.value==="" || percentage.value===""){
        alert("Please enter the value");
    }
    else if(amount.value<0 || percentage.value<0){
        alert("Please enter possitive value");

    }
    else{
        const billAmount=parseFloat(amount.value);
        const tipPercentage=parseFloat(percentage.value);
        const tipAmount=billAmount*(tipPercentage/100);
        const total=billAmount+tipAmount;
        output.innerText=total;


    }


})