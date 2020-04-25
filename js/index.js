function max(n1, n2) {

    if(n1 >= n2)
        return n1;
    else
    return n2;
};

function max(n1, n2, n3) {
    let max = n1;

    if(n2 > max)
        max = n2;
    else if(n3 > max){
        max = n3;
    }
    
    return max;
};

function isVowel(c) {    
     let vowels = ['a','A','e','E','o','O', 'u','U'];
     let foundchar = vowels.find(x=> x === c);
     let isVoewlchar = foundchar != null && foundchar != undefined;
     return isVoewlchar;
 };

 function sum(nums) {
    let sum = 0;
    nums.forEach(function(i){
        sum += i;
    });
    return sum;
};

function multiply(nums) {
    let mul = 1;
    nums.forEach(function(i){
        mul *= i;
    });
    return mul;
};

function reverse(str) {
    let chars = Array.from(str);
    //we can use let rev = chars.reverse();
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--)
    {
        rev += chars[i];
    }
    return rev;
};

function findLongestWord(words) {
    let longestWord = "";
    words.forEach(word=> {
        if (word.length > longestWord.length)
            longestWord = word;
    });
    return longestWord;
};

function filterLongWords(words, i) {
    let filteredtWords = [];
    words.forEach(word=> {
        if (word.length > i)
        filteredtWords.push(word);
    });
    return filteredtWords;
};

function computeSumOfSquares(arr) {
    var squares = arr.reduce(num => ((2 * num) ** 2), 0);
    return squares;
}

function printOddNumbersOnly(arr) {
    var odds = arr.filter(num =>  num%2 !== 0);
    return odds;
}

function computeSumOfSquaresOfEvensOnly(arr) {
    var evens = arr.filter(num =>  num%2 === 0);
    var squareOfEvens = evens.reduce(num => ((2 * num) ** 2), 0);

    return squareOfEvens;
}

function sumReduce(arr) {
    return arr.reduce((x, y) => x + y);
}

function multiplyReduce(arr) {
    return arr.reduce((x, y) => x * y);
}

function findSecondBiggest(arr) {
    if (arr === undefined) return null;
    return arr.sort((a, b) => b - a)[1];
}

function printFibo(n, a, b) {
    var fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    fibo[0] = a;
    fibo[1] = b;
    
    for (let i = a; i <= n; i++) {
      fibo[i] = fibo[i - 2] + fibo[i - 1];
      console.log(fibo[i]);
    }

};

function clock()  {

    setInterval(setClock, 1000);
}

function setClock() {
    let clock_elm = document.getElementById("clock");
    let d = new Date();
    clock_elm.innerText = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

}

clock();
console.log(max(5,9));
console.log(max(3,6,8));
console.log(isVowel("u"));
console.log(isVowel("x"));
console.log(isVowel("y"));
console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));
console.log(reverse("jag testar"));
console.log(findLongestWord(["ahmad", "awad", "longest"]));
console.log(filterLongWords(["ahmad", "awad", "longest"] , 4));
console.log(computeSumOfSquares([3,6,8]));
console.log(printOddNumbersOnly([3,6,8,9,1,2,4]));
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));
console.log(sumReduce([1,2,3,4]));
console.log(multiplyReduce([1,2,3,4]));
printFibo(10, 0, 1);
