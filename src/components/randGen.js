export const genRand = size => Math.floor(Math.random() * size) + 1; 

export const genArray = size => {
    var arr = []
    if (size < 0)
        return arr; 
    for (var i = 0; i < size; i++) {
        arr.push(genRand(size * 10));
    }
    console.log(arr)
    return arr; 
} 