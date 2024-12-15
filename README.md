# Find Max Water Container App

## Problem Statement
Given an integer array `height` of length `n`, there are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`. We need to find two lines that, together with the x-axis, form a container that can store the most water. The goal is to return the maximum amount of water a container can store.

### Constraints
1. `n == height.length`
2. `2 <= n <= 10`
3. `0 <= height[i] <= 104`

## Approach
### **Optimal Solution: Two-Pointer Method**
The two-pointer method is used to solve this problem with a time complexity of \(O(n)\) and space complexity of \(O(1)\). This approach works by keeping two pointers, one at the beginning and one at the end of the array, and moving them toward each other while calculating the maximum possible area.

#### Time Complexity
- **O(n)**: Each pointer moves at most \(n\) steps, leading to linear time complexity.

#### Space Complexity
- **O(1)**: No additional space is used apart from a few scalar variables.

---

## Input Validation
To satisfy the problem's constraints, the solution includes input validation steps:
1. Ensure the length of the array `height` is between 2 and 10.
2. Ensure all elements in the `height` array are between 0 and 104.
3. Throw appropriate errors if the input fails validation.

---

## Technologies Used

### **1. JavaScript**
- The solution is implemented in JavaScript for its simplicity and widespread usage in web development.

### **2. Jest (Testing Framework)**
- Jest is used to write unit tests to validate the correctness of the function and ensure all edge cases are handled.

---

## How to Run Tests with Jest 
### **Using npm - https://jestjs.io/docs/getting-started**
1. Install Jest if not already installed:
   ```bash
   npm install jest --save-dev
2. Run the following command to execute the test script:
   ```bash
   npm test
