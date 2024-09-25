const decodeTheRing = function (s, p) {
  const m = s.length; /
  const n = p.length; // Length of the pattern

  // Create a 2D array for dynamic programming
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  // Base case: empty message and empty pattern match
  dp[0][0] = true;

  // Handle patterns that start with '*'
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1]; // '*' can match an empty message
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              // '*' matches either no characters or one more character in the message
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
              // '?' matches any single character or exact character match
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  return dp[m][n]; // The result is whether the whole message matches the whole pattern
};

module.exports = decodeTheRing;
