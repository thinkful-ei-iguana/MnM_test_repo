function getYearOfBirth(age) {
    try{ 
    const yearOfBirth = 2019 - age;
    if (age < 0) {
        throw new Error("Age can not be negative");
    } else {
    return yearOfBirth;
    }
    } catch (e){
        throw new Error(e.message)
    }
}

function createGreeting(name, age) {
    try {
        if ((typeof name === 'undefined') || (typeof age === 'undefined')) 
        {
            throw new Error("Arguments not valid.");
        }
        if ((typeof name !== 'string') || (typeof age !== 'number'))
        {
            throw new TypeError("type error");
        }
        const yob = getYearOfBirth(age);
        return `Hi, my name is ${name} and I am ${age} years old.
        I was born in ${yob}`;
        }  catch (e) {
        return e.message;
  }
}

const greeting1 = createGreeting('mason', 'twenty nine');
console.log(greeting1);
//let birthYear = getYearOfBirth(30);
//console.log(birthYear);