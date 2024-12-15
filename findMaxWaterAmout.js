/* Input: number[] height, 

   Conditions: n == height.length 
               2 <= n <= 100000
               0 <= height[i] <= 10000

   Output: maxWater
   
   Pseudo of solution using 2 pointers approach.
   # Step 1: Validate the input array length
    n = height.length
    if n < 2 or n > 100000:
        throw Error("The length of the height array must be between 2 and 100000.")
    
    # Step 2: Validate each element in the array
    for h in height:
        if h < 0 or h > 10000:
            throw Error("Each height value must be between 0 and 10000.")
    
    # Step 3: Initialize two pointers and the max water variable
    left = 0
    right = n - 1
    maxWater = 0

    # Step 4: Two-pointer approach to calculate max water
    while left < right:
        width = right - left
        containerHeight = min(height[left], height[right])
        area = width * containerHeight
        maxWater = max(maxWater, area)
        
        if height[left] < height[right]:
            left++  # Move the left pointer inward
        else:
            right--  # Move the right pointer inward
    
    # Step 5: Return the maximum water value
    return maxWater
*/

function maxArea(height) {
  // Validate input conditions
  if (height.length < 2 || height.length > 100000) {
    throw new Error("The length of the height array must be between 2 and 100000.");
  }

  for (let h of height) {
    if (h < 0 || h > 10000) {
      throw new Error("Each height value must be a number between 0 and 10000.");
    }
  }

  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = width * currentHeight;

    maxArea = Math.max(maxArea, currentArea);
    if (height[left] < height[right]) {
      left++;
    }
    else {
      right--;
    }
  }

  return maxArea;
}
module.exports = maxArea;