// https://codeforces.com/problemset/problem/12/A

let input = ".XX...XX."

function isThePasswordSymmetric (input) {
    let n = 0
    let centralButton = Math.floor(input.length/2)
    let result = 0
    while (n < centralButton) {
        let elementFromStart = input.charAt(n)
        let elementFromEnd = input.charAt((input.length-1)-n)
        if(elementFromStart === elementFromEnd) {
            result += 1
        } 
        n++;
    }
    if (result === 4) {
        return "YES" 
    } else {
        return "NO"
    }
}

var output = isThePasswordSymmetric (input)
