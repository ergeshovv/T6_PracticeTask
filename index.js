const fs = require('fs')

let inputArr = fs.readFileSync('input.txt', 'utf-8').split("\r\n")
// [ 'привет', 'как дела?', 'хорошо', 'салам', 'салют' ]
let patternArr = fs.readFileSync('patterns.txt', 'utf-8').split("\r\n")
// [ 'привет', 'хорошо', 'как дела?', 'салем', 'салют' ]

console.log(patternArr)

//                              ПЕРВЫЙ РЕЖИМ                                   //
function getArraysIntersection(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
}

console.log(getArraysIntersection(inputArr, patternArr));


//                               ВТОРОЙ РЕЖИМ                                  //
function getArraysLineIntersection(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) === a1.indexOf(n);});
}

console.log(getArraysLineIntersection(inputArr, patternArr))

//                               ТРЕТИЙ РЕЖИМ                                  //


Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

  
console.log(inputArr.diff(patternArr));
