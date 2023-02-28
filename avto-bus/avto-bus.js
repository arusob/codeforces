function showMinimum(wheels) {
   if(wheels % 6 === 0) {
       console.log("Minimum number of busses is:" + wheels/6)
   }
}

function showMaximum(wheels) {
    if(wheels % 4 === 0){
        console.log("Maximum number of busses is:" + wheels/4)
    }
}

function noSuitableNumber(wheels) {
    if(wheels % 6 !== 0 && wheels % 4 !== 0){
        console.log("-1")
    }
}

function answerAvtoBus(wheels) {
    showMinimum(wheels)
    showMaximum(wheels)
    noSuitableNumber(wheels)
}

answerAvtoBus(24)


// 

// pierwsza (1 =< t =< 1000)



// dla każdego przypadku testowego wypisz minmalna i maxymalną liczbę autobusów
// znajdujących się we flocie 