// Day02 Exercicio 1
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 3))
console.log(challenge.substring(0, 3), challenge.substring(3, 8), challenge.substring(8, 10), challenge.substring(10, 21))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))
console.log('30 Days Of JavaScript'.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charAt(11), challenge.charCodeAt(challenge.indexOf('J')))
console.log('First a', challenge.indexOf('a'))
console.log('Last a', challenge.lastIndexOf('a'))
console.log('You cannot end a sentence with because because because is a conjunction', 'You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction', 'You cannot end a sentence with because because because is a conjunction'.search('because'))
console.log(' 30 Days Of JavaScript ', ' 30 Days Of JavaScript '.trim())
console.log('30 Days Of JavaScript', '30 Days Of JavaScript'.startsWith('30'))
console.log('30 Days Of JavaScript', '30 Days Of JavaScript'.endsWith('Script'))
console.log('30 Days Of JavaScript', '30 Days Of JavaScript'.match(pattern))
console.log('30 Days Of ', '30 Days Of '.concat('JavaScript'))
console.log('30 Days Of JavaScript '.repeat(2))

// Day02 Exercicio 2
// Day02 01
console.log('There is no exercise better for the heart than reaching down and lifting people up.')
// Day02 02
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
// Day02 03
console.log(typeof '10',' <> ', typeof 10) // undefined
console.log(typeof parseInt('10'),' = ', typeof 10) // undefined
console.log(typeof '10',' = ', typeof String(10)) // undefined
// Day02 04
console.log(parseFloat('9.8')+" <> "+ 10) // undefined
console.log(Math.ceil(parseFloat('9.8'))+" = "+ 10) // undefined
// Day02 05
if ( varA > 0) {
    console.log('Python has on = TRUE')
}else{
    console.log('Python hasnt on = FALSE')
}
if ( varB > 0) {
    console.log('Jargon has on = TRUE')
}else{
    console.log('Jargon hasnt on = FALSE')
}
// Day02 06
if ( textASearch > 0 ) {
    console.log('Jargon is inside ('+textA+') = TRUE')
}
// Day02 07
console.log('Random number btw 0 to 100: '+Math.floor(Math.random() * max + 1))
// Day02 08
console.log('Random number btw 50 to 100: '+Math.floor(Math.random() * (max - min2 + 1)+ min2))
// Day02 09
console.log('Random number btw 0 to 255: '+Math.floor(Math.random() * (max2 - min + 1)+ min))
// Day02 10
console.log(textB+'-> Posição:'+pos+' Letra: '+textB[pos])