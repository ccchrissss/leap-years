// // In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

function leapYears(year) {

  if (year % 400 === 0) return true
  else if (year % 100 === 0) return false
  else if (year % 4 === 0) return true
  else return false

}

console.log(leapYears(1))
console.log(leapYears(4))
console.log(leapYears(100))
console.log(leapYears(400))


// parameters: year    // a number on or between 1600 and 4000
// return: boolean
// e.g. leapYear(2000)
// results in true


// if year is divisible by 400 return true
// else if year is divisible  by 100 return false
// else if year is divisible by 4 return true
// else return false
