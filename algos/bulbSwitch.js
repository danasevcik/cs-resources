// n bulbs and all are initially off
// on the first run, you turn on all bulbs
// on the second run, you toggle every second bulb
// for every ith round, you toggle every ith bulb
// for the nth round, you toggle only the last bulb
// how many bulbs are on after n rounds

// create an arr of objects on the first pass
// have a lit key - toggle this boolean
// [{1: bulb, lit: false}, {2: bulb, lit: false}, {3: bulb, lit: false}]
// continue iterating and toggle by x

function bulbSwitch(n) {
    let i = 1;
    let bools = [];

    for (let i = 0; i < n; i++) {
        bools.push(true);
    }

    console.log(bools);

    while (i < n) {
        console.log('i', i)
        console.log('n', n)
        bools[i] = !bools[i]
        console.log(bools);

        i++;
    }

     



}

console.log(bulbSwitch(3)) // 1
// 3 bulbs off
// 1st pass - 3 bulbs [on, on, on]
// 2nd pass - [on, off, on]
// 3rd pass - [on, off, off]
// 1 on
