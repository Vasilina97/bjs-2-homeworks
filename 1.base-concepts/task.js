"use strict"
function solveEquation(a, b, c) {
  let D = (b ** 2) - (4 * a * c);

  if (D < 0) {
    return []; // Нет корней, пустой массив
  } else if (D === 0) {
    let x = -b / (2 * a);
    return [x]; // Один корень, массив с одним элементом
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return [x1, x2]; // Два корня, массив с двумя элементами
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) { 
    
  const monthlyRate = (percent / 100) / 12; // месячная ставка 
  const bodyLoan = amount - contribution; // тело кредита 

  const monthlyPayment = bodyLoan * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1))); // ежемесячный платеж 

  const totalPayment = ((monthlyPayment * countMonths).toFixed(2)); // общая сумма платежей 

  return Number(totalPayment); 
} 

console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Данные
