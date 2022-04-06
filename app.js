const readline = require('readline-sync')
const Division = require('./division')
const Multiplication = require('./multiplication')
const Subtraction = require('./subtraction')
const Sum = require('./sum')

console.log('--------------------------------------Welcome to the nodeJS calculator--------------------------------------')

console.log(`
First choose one calculator: 
`)

console.log(`
  To Multiplication use "*"; 
  To Division use "/"; 
  To Subtraction use "-"; 
  To Subtraction use "+"; 
`)

let chooseOneOperator = readline.question(`Your answer: `).trim()

function makeDivision(dividend, divider, isRestAllowed) {
  const totalDivision = new Division(dividend, divider)

  if(isRestAllowed) {
    return totalDivision.divisionModule()
  }
  
  return totalDivision.quotient()
}

function makeMultiplication(factor1, factor2) {
  const totalMultiplication = new Multiplication(factor1, factor2)
  return totalMultiplication.product()
}

function makeSubtraction(minuendo, subtrahend) {
  const totalSubtraction = new Subtraction(minuendo, subtrahend)
  return totalSubtraction.rest()
}

function makeSum(portion1, portion2) {
  const totalSum = new Sum(portion1, portion2)
  return totalSum.total()
}

switch(chooseOneOperator) {
  case '/':
    console.log('\n----------Division Calculator----------')

    const dividend  = readline.questionFloat('\nType the dividend: ')
    const divider = readline.questionFloat('\nType the divider: ')
    const rest = readline.question('\nWould you like to kown the rest of the division?[Y][N] ').trim().toUpperCase()

    console.log(`
      ${dividend} / ${divider} = ${makeDivision(dividend, divider, false)}
    `)
    
    if(rest === 'Y') {
      console.log(`
        The rest of the division between ${dividend} and ${divider} is ${makeDivision(dividend, divider, true)}
      `)
    }

  break

  case '*':
    console.log('\n----------Multiplication Calculator----------')

    const factor1 = readline.questionFloat(`\nType the first factor: `)
    const factor2 = readline.questionFloat(`\nType the segund factor: `)
    
    console.log(`
      ${factor1} x ${factor2} = ${makeMultiplication(factor1, factor2)}
    `)
  break

  case '-':
    console.log('\n----------Subtraction Calculator----------')

    const minuendo = readline.questionFloat('\nType the minuendo: ')
    const subtrahend = readline.questionFloat('\nType the subtrahend: ')
    
    console.log(`${minuendo} - ${subtrahend} = ${makeSubtraction(minuendo, subtrahend)}`)
  break

  case '+':
    console.log('\n----------Sum Calculator----------')

    const portion1 = readline.questionFloat('\nType the frist porsion: ')
    const portion2 = readline.questionFloat('\nType the segund portion: ')
    
    console.log(`${portion1} + ${portion2} = ${makeSum(portion1, portion2)}`)
    
  break

  default:
    console.log('\nUnknown operation. Please, try again.')
}