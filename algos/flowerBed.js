// given flower bed containing "plantable" spots 
// 1 = cant be planted 
// 0 = can not be planted
// return true if n number of flowers can be planted
// return false if not
// flowers can only be planted in 0s with 0s adjacent on both sides

function checkFlowerbed(flowerbed, num) {
    let flowerCounter = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if ((flowerbed[i] === 0) && (i === 0 || flowerbed[i-1] === 0) && (i === flowerbed.length - 1 || flowerbed[i+1] === 0)) {
            flowerCounter++;
            flowerbed[i] = 1;
        }
    }

    if (flowerCounter >= num) {
        return true; 
    } else {
        return false;
    }

}

console.log(checkFlowerbed([1, 0, 0, 0, 1], 1)) // true
console.log(checkFlowerbed([1, 0, 0, 0, 1], 2)) // false
console.log(checkFlowerbed([0, 0, 1, 0, 0, 0, 1], 2)) // true
console.log(checkFlowerbed([0, 0, 1, 0, 0, 0, 1], 3)) // false
