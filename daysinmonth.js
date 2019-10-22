'use strict'

function totalDays(month, leapYear) {
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            console.log(`${month} has 31 days`);
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':  
            console.log(`${month} has 30 days`);
            break;     
        case 'February':
        if (leapYear === true) {
            console.log(`${month} has 29 days`)
        } else if (leapYear === false) {
            console.log(`${month} has 28 days`)
        }
    }
}

totalDays('February', false);