const arraySum = (numbersArray) =>
   numbersArray.length === 0 ? 0
      : numbersArray[0] + arraySum(numbersArray.slice(1));
