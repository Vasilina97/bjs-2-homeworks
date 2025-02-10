function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	arr.forEach(el => {
		if (el > max) {
			max = el;
		}
		if (el < min) {
			min = el;
		}
		sum += el;
	});

	const avg = (sum / arr.length).toFixed(2); // Среднее до 2 знаков 
	return {
		min,
		max,
		avg: +avg
	}; // в число 
}

// 1
function summElementsWorker(...arr) {

	return arr.reduce((sum, num) => sum + num, 0);

}

// 2
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0
	};
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return max - min;
}

// 3 
function differenceEvenOddWorker(...arr) {

	let sumEven = 0;
	let sumOdd = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEven += num;
		} else {
			sumOdd += num;
		}
	}

	return sumEven - sumOdd;
}

// 4
function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0
	};
	let sumEven = 0;
	let countEven = 0;

	for (let num of arr) {
		if (num % 2 === 0) {
			sumEven += num;
			countEven++;
		}
	}

	return countEven === 0 ? 0 : sumEven / countEven;
}


// 3 часть 

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let nozzle;
		nozzle = func(...arrOfArr[i]);
		if (nozzle > maxWorkerResult) maxWorkerResult = nozzle;
	}

	return maxWorkerResult;
}
  
  