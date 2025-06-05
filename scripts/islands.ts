// Given a 2d array of '1' and '0' where '1' is land
// an island is formed by connected land adjacent to it
// Return the number of islands

// Time: O(M x N) - where M is number of rows and N number of columns
// Space: O(M x N) - recursive calls over full map in case of 1 big island
const dfs = function (grid: string[][], i: number, j: number) {
    if (i > grid.length - 1 || i < 0 || j > grid[i].length - 1 || j < 0) return

    if (grid[i][j] === '0') return

    grid[i][j] = '0'

    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
}

const numIslands = function (grid: string[][]) {
    let islandCount = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islandCount++
                dfs(grid, i, j)
            }
        }
    }

    return islandCount
}

export { numIslands }
