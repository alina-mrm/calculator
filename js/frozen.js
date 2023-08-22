document.addEventListener("DOMContentLoaded", function() {
    const frozenButton = document.getElementById("frozenButton");
    const inputDateElement = document.getElementById("inputDate");
    const inputDateFromElement = document.getElementById("inputDateFrom");
    const dateDifferenceElement = document.getElementById("dateDifference");
    const addTwoDaysCheckbox = document.getElementById("addTwoDaysCheckbox");
  
    // // Получаем текущую дату
    // const currentDate = new Date();
    // const formattedCurrentDate = formatDate(currentDate);
    // currentDateElement.textContent = formattedCurrentDate;
  
    // // Функция для форматирования даты в виде "дд.мм.гггг"
    // function formatDate(date) {
    //   const day = date.getDate().toString().padStart(2, "0");
    //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
    //   const year = date.getFullYear();
    //   return `${day}.${month}.${year}`;
    // }
  
    frozenButton.addEventListener("click", function() {
      const date1 = new Date(inputDateFromElement.value);
      const date2 = new Date(inputDateElement.value);
      
      date1.setHours(0, 0, 0, 0);
      date2.setHours(0, 0, 0, 0);
  
      const timeDifference = Math.abs(date2 - date1);
      let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      

      if (addTwoDaysCheckbox.checked) {
        dateDifferenceElement.textContent = daysDifference + 1;
      }

      else {
        dateDifferenceElement.textContent = daysDifference;
      }

      
    });
});