export const MergeSort = arr => {
    if (arr.length === 1) {
        return arr; 
    }

    var firstHalf = parseInt(Math.round(arr.length / 2)); 

    var arr1 = arr.slice(0, firstHalf)
    var arr2 = arr.slice(firstHalf, arr.length)
    var newArr1 = MergeSort(arr1)
    var newArr2 = MergeSort(arr2)
    var mergedArr = []; 
    var bigger; 

    if (newArr1[0] > newArr2[0]) {
        bigger = newArr2.shift(); 
    }
    else {
        bigger = newArr1.shift();
    }
    
    var remaining = MergeSort([...newArr1, ...newArr2])
    mergedArr = [bigger, ...remaining];
    return mergedArr; 
}