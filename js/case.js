//console.log('case file');

/*document.getElementById('case-btn').addEventListener('click', function () {
    //console.log('case button clicked');

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    console.log(previousCaseNumber);


    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})


document.getElementById('minus-case-btn').addEventListener('click', function () {
    //console.log('minus button clicked');

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const newCaseNumber = parseInt(caseNumberString);
    console.log(newCaseNumber);


    const previousCaseNumber = newCaseNumber - 1;
    caseNumberField.value = previousCaseNumber;
})*/

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    console.log(previousCaseNumber);


    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;

    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}


function updateCaseTotalPrice(newCaseNumber) {

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('case-btn').addEventListener('click', function () {
    //console.log('case button clicked');
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
})


document.getElementById('minus-case-btn').addEventListener('click', function () {
    //console.log('minus button clicked');
    const newCaseNumber = updateCaseNumber(false);
    //console.log(newCaseNumber);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
}) 