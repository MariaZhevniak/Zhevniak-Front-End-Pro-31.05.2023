// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

const pow = (num, degree) => {
	if(degree === 1) {
		return num;
	} else {
		return num * pow(num, degree - 1);
	}
	
};
console.log(pow(2, 3));

//2
const pow2 = (num, degree) => {
	return degree === 1 ? num : num * pow2(num, degree - 1);
};
console.log(pow2(3, 3));