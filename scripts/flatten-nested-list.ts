// Flatten a nested list

// constructor Time: O(N + L) - N number of lists and L number of integers
// next() Time: O(1)
// hasNext() Time: O(1)
// Space: O(N + D) N number elements, D maximum nested depth due to recursion

const NestedIterator = function (nestedList) {
    this.stack = []
    this.flatten(nestedList)
}

NestedIterator.prototype.flatten = function (nestedList) {
    let n
    while ((n = nestedList.pop())) {
        if (n.isInteger()) this.stack.push(n.getInteger())
        else this.flatten(n.getList())
    }
}

NestedIterator.prototype.hasNext = function () {
    return !!this.stack.length
}

NestedIterator.prototype.next = function () {
    return this.stack.pop()
}

export { NestedIterator }
