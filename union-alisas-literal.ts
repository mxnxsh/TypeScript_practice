type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function add(
  n1: Combinable,
  n2: Combinable,
  // resultConversion: string #method 1
  resultConversion: ConversionDescriptor //# literal-type
) {
  let result: Combinable;
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}
console.log(`CombinedAges = ${add(30, 40, 'as-number')}`);
console.log(`CombinedStringAges = ${add(30, 40, 'as-number')}`);
console.log(`CombinedNames = ${add('Manish', 'Choudhary', 'as-text')}`);
