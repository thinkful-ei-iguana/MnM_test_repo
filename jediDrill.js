function jediName(firstName, lastName){
    let first = firstName.slice(0, 2);
    let last = lastName.slice(0, 3);
    return last + first;
    
}let jedi = jediName("Maggie", "McClellan");
console.log(jedi);