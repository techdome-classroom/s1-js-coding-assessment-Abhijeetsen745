const getTotalIsles = function (grid) {


  // write your code herefunction countIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let islandCount = 0;

    function dfs(r, c) {
        // If out of bounds or at water or already visited, return
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
            return;
        }
        // Mark this cell as visited
        visited[r][c] = true;

        // Explore all 4 directions (up, down, left, right)
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited[r][c]) {
                // Found an unvisited land cell, so this is a new island
                islandCount++;
                dfs(r, c); // Perform DFS to mark all connected land
            }
        }
    }

    return islandCount;
}

// Example usage
const dispatch1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
];

const dispatch2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"],
];

console.log(countIslands(dispatch1)); // Output: 1
console.log(countIslands(dispatch2)); // Output: 3


};

module.exports = getTotalIsles;