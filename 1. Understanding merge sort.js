[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]


[21, 1, 26, 45, 29, 28, 2, 9], [ 16, 49, 39, 27, 43, 34, 46, 40]

[21, 1, 26, 45], [29, 28, 2, 9] //(+2 sort sets of 8)

[21, 1] [26, 45] // (+4 Calls to sort all quads)

[21] [1] // (8 calls sorted all couples)

// After 3 recursive calls to mergeSort() 
// => [1, 21, 26, 45, 28, 29]

// After 16 recursive calls to mergeSort()
// [1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]
// All sorted on 16th recursion

// Fist two lists to get merged
//[21] [1]

// lists merged on 7th merge()
// [43], [34]