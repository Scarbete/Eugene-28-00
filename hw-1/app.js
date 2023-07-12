const name = prompt('Введите ваше имя: ')
const lastName = prompt('Введите вашу фамилию: ')
const age = Number(prompt('Введите ваш возраст: '))

if (age < 18 && name.trim() !== '' && lastName.trim() !== '') {
    alert(`Привет, ${name}`)
} else {
    alert(`Здравствуйте, ${name} ${lastName}!`)
}

const bank = {
    accountNumber: 'номер банковсого счета',
    currency: 'сом',
    balance: 141,
    userName: 'Aesthetic',
    locked: false,
}

console.log(bank)