function getYearOfBirth(age) {
    const yearOfBirth = 2019 - age;
    return yearOfBirth;
}

function createGreeting(name, age) {
    const yob = getYearOfBirth(34);
    return `Hi, my name is ${name} and I am ${age} years old.
    I was born in ${yob}`;
}
const greeting1 = createGreeting("Maggie", 34);
console.log(greeting1);