const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let islandCount = 0;

  function dfs(r, c) {
      
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited[r][c]) {
          return;
      }
      
      visited[r][c] = true;

      
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
};

module.exports = getTotalIsles;
