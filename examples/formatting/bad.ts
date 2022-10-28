function helperA() {}
function helperB() {}
function helperD() {}
function formatShortNumber(input: number | string): string {
  let number = getNumber(input);
  if (Number.isNaN(number)) {return "0";}
  if (number >= 1000000000000) {return `${(number / 1000000000000).toFixed(0)}T`;}
  if (number >= 1000000000) {return `${(number / 1000000000).toFixed(0)}B`;}
  if (number >= 1000000) {return `${(number / 1000000).toFixed(0)}M`;}
  if (number >= 1000) {return `${(number / 1000).toFixed(0)}K`;}
  return number.toFixed(0);
}
function helperE() {}
function helperC() {}
function getNumber(input: unknown) {
  // do something ...
  return input as number;
}

export {};
