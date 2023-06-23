
function isThePasswordSymmetric (input) {
    let n = 0
    const inputLength = input.length
    let centralButton = Math.floor(inputLength/2)
    let result = 0
    while (n < centralButton) {
        let elementFromStart = input.charAt(n)
        let elementFromEnd = input.charAt((inputLength-1)-n)
        if(elementFromStart === elementFromEnd) {
            result ++
        } 
        n++;
    }
    return result === 4 ? "YES" 
    : "NO"; 
}

module.exports =  isThePasswordSymmetric;
