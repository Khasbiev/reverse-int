module.exports = function reverse (n) {
    if(n < 0){
        return String(n*-1).split('').reverse().join('')/1;
     } else {
        return String(n).split('').reverse().join('')/1;
     }
}
