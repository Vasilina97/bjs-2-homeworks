// 1
// 1.1
function parseCount(product) {
	let resultParse = Number.parseFloat(product);
	if (Number.isNaN(resultParse)) {
		throw Error("Невалидное значение");
	}
	return resultParse;
}
// 1.2
function validateCount(product) {
	try {
		return parseCount(product);
	} catch (Error) {
		return Error;
	}
}
  
  // 2
  // 1.1
  class Triangle {
	constructor(One, Two, Three) {
		this.One = One;
		this.Two = Two;
		this.Three = Three;
		if (One > Two + Three || Two > One + Three || Three > One + Two) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	get perimeter() {
		return (this.One + this.Two + this.Three);
	}
	get area() {
		let p = this.perimeter / 2;
		return +(Math.sqrt(p * (p - this.One) * (p - this.Two) * (p - this.Three))).toFixed(3);
	}
}
  
  //1.2
  function getTriangle(One, Two, Three) {
    try {
      return new Triangle(One, Two, Three);
    } catch(Error) {
        return {
          get area() {
            return ("Ошибка! Треугольник не существует");
          },
          get perimeter() {
            return ("Ошибка! Треугольник не существует");
          }
        }
    }
  }