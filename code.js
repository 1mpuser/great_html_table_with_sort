'use strict';
// let arrOfNumbers=[];
// let button=document.querySelector('button');
// button.addEventListener('click', ageAscendingSort);
let ths = document.querySelectorAll('th');
let arr_ru = [
	'а',
	'б',
	'в',
	'г',
	'д',
	'е',
	'ё',
	'ж',
	'з',
	'и',
	'й',
	'к',
	'л',
	'м',
	'н',
	'о',
	'п',
	'р',
	'с',
	'т',
	'у',
	'ф',
	'х',
	'ц',
	'ч',
	'ш',
	'щ',
	'э',
	'ю',
	'я',
];
let tBody = document.querySelector('tbody');
let trsFromTBody = tBody.querySelectorAll('tr');
let length = trsFromTBody.length;

for (let elem of ths)
	elem.addEventListener('click', generealAscendingSortOfTables);
let button = document.querySelector('button');
button.addEventListener('click', changingTheColumns);
// function numberAscendingSort() {
// 	addingTheIncreasingArrow(this);
// 	for (let i = length; i > 0; i--) {
// 		for (let tr of trsFromTBody)
// 			if (tr.querySelector('td').innerText == i) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 			}
// 	}
// 	this.removeEventListener('click', numberAscendingSort);

// 	this.addEventListener('click', numberDescendingSort);
// }
// let numberSort = document.querySelector('th');
// numberSort.addEventListener('click', numberAscendingSort);
// function numberDescendingSort() {
// 	addingTheDecreasingArrow(this);
// 	for (let i = 1; i <= length; i++) {
// 		for (let tr of trsFromTBody)
// 			if (tr.querySelector('td').innerText == i) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 			}
// 	}
// 	this.removeEventListener('click', numberDescendingSort);

// 	this.addEventListener('click', numberAscendingSort);
// }
// let ageSort = document.querySelectorAll('th')[3];
// ageSort.addEventListener('click', ageAscendingSort);

// function ageAscendingSort() {
// 	addingTheIncreasingArrow(this);
// 	let arrOfAges = [];
// 	let tmpJ = 0;
// 	for (let tr of trsFromTBody) {
// 		arrOfAges[tmpJ] = tr.querySelectorAll('td')[3].innerText;
// 		tmpJ++;
// 	}
// 	arrOfAges = BubbleSort(arrOfAges);
// 	tmpJ--;
// 	for (let i = 0; i < length; i++) {
// 		for (let tr of trsFromTBody) {
// 			if (tr.querySelectorAll('td')[3].innerText == arrOfAges[tmpJ]) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 				tmpJ--;
// 			}
// 		}
// 	}
// 	this.removeEventListener('click', ageAscendingSort);

// 	this.addEventListener('click', ageDescendingSort);
// }

// function ageDescendingSort() {
// 	addingTheDecreasingArrow(this);
// 	let arrOfAges = [];
// 	let tmpJ = 0;
// 	for (let tr of trsFromTBody) {
// 		arrOfAges[tmpJ] = tr.querySelectorAll('td')[3].innerText;
// 		tmpJ++;
// 	}
// 	arrOfAges = BubbleSort(arrOfAges);
// 	tmpJ = 0;
// 	for (let i = 0; i < length; i++) {
// 		for (let tr of trsFromTBody) {
// 			if (tr.querySelectorAll('td')[3].innerText == arrOfAges[tmpJ]) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 				tmpJ++;
// 			}
// 		}
// 	}
// 	this.removeEventListener('click', ageDescendingSort);

// 	this.addEventListener('click', ageAscendingSort);
// }
// let surnameSort = document.querySelectorAll('th')[1];
// surnameSort.addEventListener('click', surnameAscendingSort);

// all the same logic as with ages
// function surnameAscendingSort() {
// 	addingTheIncreasingArrow(this);
// 	let arrOfAges = [];
// 	let tmpJ = 0;
// 	for (let tr of trsFromTBody) {
// 		arrOfAges[tmpJ] = tr.querySelectorAll('td')[1].innerText;
// 		tmpJ++;
// 	}
// 	arrOfAges.sort();
// 	tmpJ--;
// 	for (let i = 0; i < length; i++) {
// 		for (let tr of trsFromTBody) {
// 			if (tr.querySelectorAll('td')[1].innerText == arrOfAges[tmpJ]) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 				tmpJ--;
// 			}
// 		}
// 	}
// 	this.removeEventListener('click', surnameAscendingSort);

// 	this.addEventListener('click', surnameDescendingSort);
// }

// function surnameDescendingSort() {
// 	addingTheDecreasingArrow(this);
// 	let arrOfAges = [];
// 	let tmpJ = 0;
// 	for (let tr of trsFromTBody) {
// 		arrOfAges[tmpJ] = tr.querySelectorAll('td')[1].innerText;
// 		tmpJ++;
// 	}
// 	arrOfAges.sort();
// 	tmpJ = 0;
// 	for (let i = 0; i < length; i++) {
// 		for (let tr of trsFromTBody) {
// 			if (tr.querySelectorAll('td')[1].innerText == arrOfAges[tmpJ]) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 				tmpJ++;
// 			}
// 		}
// 	}
// 	this.removeEventListener('click', surnameDescendingSort);

// 	this.addEventListener('click', surnameAscendingSort);
// }

// let nameSort = document.querySelectorAll('th')[2];
// nameSort.addEventListener('click', nameAscendingSort);

// function nameAscendingSort() {
// 	addingTheIncreasingArrow(this);
// 	let arrOfAges = [];
// 	let tmpJ = 0;
// 	for (let tr of trsFromTBody) {
// 		arrOfAges[tmpJ] = tr.querySelectorAll('td')[2].innerText;
// 		tmpJ++;
// 	}
// 	arrOfAges.sort();
// 	tmpJ--;
// 	for (let i = 0; i < length; i++) {
// 		for (let tr of trsFromTBody) {
// 			if (tr.querySelectorAll('td')[2].innerText == arrOfAges[tmpJ]) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 				tmpJ--;
// 			}
// 		}
// 	}
// 	this.removeEventListener('click', nameAscendingSort);

// 	this.addEventListener('click', nameDescendingSort);
// }

// function nameDescendingSort() {
// 	addingTheDecreasingArrow(this);
// 	let arrOfAges = [];
// 	let tmpJ = 0;
// 	for (let tr of trsFromTBody) {
// 		arrOfAges[tmpJ] = tr.querySelectorAll('td')[2].innerText;
// 		tmpJ++;
// 	}
// 	arrOfAges.sort();
// 	tmpJ = 0;
// 	for (let i = 0; i < length; i++) {
// 		for (let tr of trsFromTBody) {
// 			if (tr.querySelectorAll('td')[2].innerText == arrOfAges[tmpJ]) {
// 				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
// 				tmpJ++;
// 			}
// 		}
// 	}
// 	this.removeEventListener('click', nameDescendingSort);

// 	this.addEventListener('click', nameAscendingSort);
// }

function addingTheDecreasingArrow(elem) {
	let ths = document.querySelectorAll('th');
	for (let th of ths) {
		if (th.classList.contains('decreasingArrow'))
			th.classList.remove('decreasingArrow');
		if (th.classList.contains('increasingArrow'))
			th.classList.remove('increasingArrow');
	}
	//
	elem.classList.add('increasingArrow');
}

function addingTheIncreasingArrow(elem) {
	let ths = document.querySelectorAll('th');
	for (let th of ths) {
		if (th.classList.contains('decreasingArrow'))
			th.classList.remove('decreasingArrow');
		if (th.classList.contains('increasingArrow'))
			th.classList.remove('increasingArrow');
	}
	elem.classList.add('decreasingArrow');
}

function generealAscendingSortOfTables() {
	addingTheDecreasingArrow(this);
	let arrOfAges = [];
	let tmpJ = 0;
	let index;
	for (let i = 0; i < ths.length; i++) if (ths[i] == this) index = i;
	for (let tr of trsFromTBody) {
		arrOfAges[tmpJ] = tr.querySelectorAll('td')[index].innerText;
		tmpJ++;
	}
	if (Number(arrOfAges[0]) == arrOfAges[0]) arrOfAges = BubbleSort(arrOfAges);
	else arrOfAges.sort();
	tmpJ--;
	for (let i = 0; i < length; i++) {
		for (let tr of trsFromTBody) {
			if (tr.querySelectorAll('td')[index].innerText == arrOfAges[tmpJ]) {
				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
				tmpJ--;
			}
		}
	}
	this.removeEventListener('click', generealAscendingSortOfTables);

	this.addEventListener('click', generealDescendingSortOfTables);
}

function generealDescendingSortOfTables() {
	addingTheIncreasingArrow(this);
	let arrOfAges = [];
	let tmpJ = 0;
	let index;
	for (let i = 0; i < ths.length; i++) if (ths[i] == this) index = i;
	for (let tr of trsFromTBody) {
		arrOfAges[tmpJ] = tr.querySelectorAll('td')[index].innerText;
		tmpJ++;
	}
	if (Number(arrOfAges[0]) == arrOfAges[0]) arrOfAges = BubbleSort(arrOfAges);
	else arrOfAges.sort();
	tmpJ = 0;
	for (let i = 0; i < length; i++) {
		for (let tr of trsFromTBody) {
			if (tr.querySelectorAll('td')[index].innerText == arrOfAges[tmpJ]) {
				tr.parentElement.insertBefore(tr, tr.parentElement.firstElementChild);
				tmpJ++;
			}
		}
	}
	this.removeEventListener('click', generealDescendingSortOfTables);

	this.addEventListener('click', generealAscendingSortOfTables);
}

function BubbleSort(A) {
	// A - массив, который нужно
	// отсортировать по возрастанию.
	let n = A.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (A[j + 1] < A[j]) {
				let t = A[j + 1];
				A[j + 1] = A[j];
				A[j] = t;
			}
		}
	}
	return A; // На выходе сортированный по возрастанию массив A.
}

function changingTheColumns() {
	this.innerText = 'Отменить перестановку';
	this.removeEventListener('click', changingTheColumns);
	this.addEventListener('click', cancelAllChanges);
	for (let elem of trsFromTBody) elem.addEventListener('click', pickAClass);
}

function cancelAllChanges() {
	this.innerText = 'Поменять столбцы';
	this.removeEventListener('click', cancelAllChanges);
	this.addEventListener('click', changingTheColumns);
}
