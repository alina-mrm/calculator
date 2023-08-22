const customDateElement = document.getElementById("customDate");
const daysToAddElement = document.getElementById("daysToAdd");
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("result");

// Обработчик события для кнопки "Рассчитать"
calculateButton.addEventListener("click", function() {
    const selectedDate = new Date(customDateElement.value);
    const daysToAdd = parseInt(daysToAddElement.value);
  
    if (isNaN(daysToAdd)) {
      resultElement.textContent = "Введите корректное количество дней.";
      return;
    }
  
    const resultDate = new Date(selectedDate);
    resultDate.setDate(resultDate.getDate() + daysToAdd - 1);
  
    const formattedResultDate = formatDate(resultDate);
    resultElement.textContent = formattedResultDate;
  });
  
  // Функция для форматирования даты в виде "дд.мм.гггг"
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }