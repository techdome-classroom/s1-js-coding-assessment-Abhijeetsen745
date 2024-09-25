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

      
      dfs(r - 1, c); 
      dfs(r + 1, c); 
      dfs(r, c - 1); 
      dfs(r, c + 1); 
  }

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L' && !visited[r][c]) {
              
              islandCount++;
              dfs(r, c); 
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
