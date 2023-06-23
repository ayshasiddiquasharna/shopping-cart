//console.log('phone file');


function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    console.log(previousPhoneNumber);


    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;

    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}


function updatePhoneTotalPrice(newPhoneNumber) {

    const phoneTotalPrice = newPhoneNumber * 59;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}



function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;
}


function calculateSubTotal() {

    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}


document.getElementById('phone-number-plus').addEventListener('click', function () {
    //console.log('case button clicked');
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);


    calculateSubTotal();
})


document.getElementById('phone-number-minus').addEventListener('click', function () {
    //console.log('minus button clicked');
    const newPhoneNumber = updatePhoneNumber(false);
    //console.log(newCaseNumber);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
}) 