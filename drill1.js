function getYearOfBirth(age) {
    const yearOfBirth = 2019 - age;
    if (age < 0) {
        throw new Error("Age can not be negative");
    } else {
    return yearOfBirth;
    }
}

function createGreeting(name, age) {
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old.
    I was born in ${yob}`;
}
try {
const greeting1 = createGreeting("Maggie", -30);
} catch (e){
   console.log(e.message)
}