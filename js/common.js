function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString, 10); // Parse as base-10 integer

    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // Calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // Calculate tax
    const taxAmount = currentSubTotal * 0.1;
    setTextElementValueById('tax-amount', taxAmount.toFixed(2));

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount.toFixed(2));
}



