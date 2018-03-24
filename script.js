"use strict"

//VARIABLES
let ussdCode,
    airtime,
    data,
    balance;

function ussd(ussdKey){
    console.log('Enter');
    switch (ussdKey) {
        case '1':
            document.querySelector('#dom-stdout1').innerText = '1. N100';
            document.querySelector('#dom-stdout2').innerText = '2. N200';
            document.querySelector('#dom-stdout3').innerText = '3. N300';
        break;
        case '2': 
            document.querySelector('#dom-stdout1').innerText = '1. 200MB';
            document.querySelector('#dom-stdout2').innerText = '2. 300MB';
            document.querySelector('#dom-stdout3').innerText = '3. 400MB';
        break;
        case '3':
            document.querySelector('#dom-stdout1').innerText = 'Your balance is N0.00';
        break;


        default:
            document.querySelector('#dom-stdout1').innerText = 'invalid option';

        break;
    }
}


(function (){

    document.querySelector('#btn-click').addEventListener('click', function(){
        ussdCode = document.querySelector('#ussdcode').value;
    if (ussdCode == '*141#'){
        document.querySelector('#dom-stdout1').innerText = 'Please select 1 - 3';
        document.querySelector('#dom-stdout2').innerText = '1. Borrow Airtime';
        document.querySelector('#dom-stdout3').innerText = '2. Borrow Data';
       
        document.querySelector('#btn-ussd').addEventListener('click', function(){
            let ussdKey = document.querySelector('#ussdkey').value;
            ussd(ussdKey);
        });
    
    }else{
        document.querySelector('#dom-stdout1').innerText = 'invalid option, check and try again'
    }
});
    
})();
