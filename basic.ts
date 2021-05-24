function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  console.log(typeof n1);
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}
let number1 = 2;
let number2 = 5;
let printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
