// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists
// The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.
// Return the sum of each integer in nestedList multiplied by its depth.

import { INestedInteger } from './utils'

// Time: O(n)
// Space: O(n)

const depthSum = function (nestedList: INestedInteger[], depth = 1) {
    let sum = 0

    nestedList.forEach((value) => {
        if (value.isInteger()) {
            sum += value.getInteger()! * depth
        } else {
            sum += depthSum(value.getList()!, depth + 1)
        }
    })

    return sum
}

export { depthSum }
