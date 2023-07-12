// Задание - 1

const traffic = prompt('Введите название цвета свотофора')

if (traffic === 'красный') {
    alert('Стоп')
} else if (traffic === 'желтый') {
    alert('Подождите')
} else if (traffic === 'зеленый') {
    alert('Идите')
} else {
    alert('Вводите только цвета: красный, желтый, зеленый')
}

// Задание - 2

const temp = Number(prompt('Введите значение температуры: '))

if (temp < -10) {
    alert('Морозно')
} else if (temp <= 0 && temp <= -10) {
    alert('Очень холодно')
} else if (temp > 0 && temp <= 10) {
    alert('Холодно')
} else if (temp >= 11 && temp <= 20) {
    alert('Прохладно')
} else if (temp >= 21 && temp <= 25) {
    alert('Облачно')
} else if (temp > 26 && temp <= 32) {
    alert('Тепло')
} else if (temp > 33) {
    alert('Жарко')
} else {
    alert('ошибка!')
}

// Задание - 3

const firstNumber = Number(prompt('Введите первое число'))
const secondNumber = Number(prompt('Введите второе число'))

if (firstNumber > secondNumber) {
    console.log(`Большое число - ${firstNumber}`)
} else if (secondNumber > firstNumber) {
    console.log(`Большое число - ${secondNumber}`)
} else if (firstNumber === secondNumber) {
    console.log(`${firstNumber} - ${secondNumber} : Числа равны`)
} else {
    console.log('Вводите только числа!')
}