// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists
// The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.
// Return the sum of each integer in nestedList multiplied by its depth.

// Time: O(n)
// Space: O(n)

interface INestedInteger {
    isInteger: () => boolean
    getInteger: () => number | undefined
    setInteger: (value: number) => void
    add: (elem: INestedInteger) => void
    getList: () => INestedInteger[] | undefined
}

class NestedInteger implements INestedInteger {
    private val: number | INestedInteger[] | null

    constructor(input) {
        this.val = null

        if (Array.isArray(input)) {
            for (const item of input) {
                this.add(new NestedInteger(item))
            }
        } else if (input !== undefined) {
            this.setInteger(input)
        }
    }

    isInteger(): boolean {
        return typeof this.val === 'number'
    }

    getInteger(): number | undefined {
        return this.isInteger() ? (this.val as number) : undefined
    }

    setInteger(value: number): void {
        this.val = value
    }

    add(elem: INestedInteger): void {
        if (this.val === null) {
            this.val = []
        }
        ;(this.val as INestedInteger[]).push(elem)
    }

    getList(): INestedInteger[] | undefined {
        return this.isInteger() ? undefined : (this.val as INestedInteger[])
    }
}

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

export { depthSum, NestedInteger }
