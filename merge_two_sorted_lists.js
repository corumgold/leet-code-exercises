// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
    debugger
    let longList = []
    for (let i = 0; i < list1.length; i++) {
        let firstArrNum = list1[i];
        for (let j = 0; j < list2.length; j++) {
            let secondArrNum = list2[j];
            if (secondArrNum <= firstArrNum) {
                list1.splice(i, 0, secondArrNum);
                list2.splice(0, 1);
            }
        }
        longList = list1;
    } return longList
}

mergeTwoLists([1, 2, 4],
    [1, 3, 4])