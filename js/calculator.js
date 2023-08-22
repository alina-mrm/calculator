document.addEventListener("DOMContentLoaded", function() {
    const newTariffPriceELement = document.getElementById('newTariffPrice');
    const oldTariffFullPriceElement = document.getElementById("oldTariffFullPrice");
    const dateNewTariffElement = document.getElementById("dateNewTariff");
    const dateEndTariffElement = document.getElementById("dateEndTariff");
    const calculatorButtonElement = document.getElementById("calculatorButton");
    const totalPaymentElement = document.getElementById("totalPayment");
    const totalDaysElement = document.getElementById("totalDays");
    const selectValueElement = document.getElementById("selectValue");

    selectValueElement.addEventListener("change", function() {
        const value3 = parseInt(selectValueElement.value);
        let value4 = 0;
        if (value3 === 1) {
        value4 = 30;
        } else if (value3 === 3) {
        value4 = 90;
        } else if (value3 === 6) {
        value4 = 182; 
        } else if (value3 === 12) {
        value4 = 365;
        }
        totalDaysElement.textContent = value4;
    });

    calculatorButtonElement.addEventListener("click", function() {
        const value1 = parseInt(newTariffPriceELement.value);
        const value2 = parseInt(oldTariffFullPriceElement.value);
        const value3 = parseInt(selectValueElement.value);
        const value4 = parseInt(totalDaysElement.textContent);
        const date5 = new Date(dateNewTariffElement.value);
        const date6 = new Date(dateEndTariffElement.value);

        date5.setHours(0, 0, 0, 0);
        date6.setHours(0, 0, 0, 0);
    
        const timeDifference = Math.abs(date6 - date5);
        let daysDifference = Math.ceil((timeDifference / (1000 * 60 * 60 * 24)) + 1);
    
        const differenceInDays = Math.ceil(((value1 * value3 / value4) - (value2 / value4)) * (daysDifference));
        if (isNaN(differenceInDays)) {
            totalPaymentElement.textContent = "Заполните корректно все поля"
        }
        else {
            totalPaymentElement.textContent = differenceInDays;
        }
    });

    
});


