


//chaling number 1
function swapCase(str) {
  let swappedStr = '';
  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === char.toUpperCase()) {
          swappedStr += char.toLowerCase();
      } else {
          swappedStr += char.toUpperCase();
      }
  }
  return swappedStr;
}

// Example usage:
const inputString = 'The Quick Brown Fox';
const swappedString = swapCase(inputString);
console.log(swappedString); // Output: 'tHE qUICK bROWN fOX'

//chaling number 2
function creatarray(start, end){
  var array=[];
  if(start<=end){
    for(var i=start; i<=end; i++){
      array.push(i);
    }
    }
    else{
      for(var i=start; i>=end ; i --){
        array.push(i);
      }

  }
   return array;
}

    var array1 = creatarray(4, 7);
    console.log(array1); // Output: [4, 5, 6, 7]
    var array2 = creatarray(-4, 7);
  console.log(array2); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]


  //chaling 3 prime nmber:
  function isPrime(num) {
    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

function filterPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimeNumbers(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]