/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const memory = {};

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const diff = target - num;

      if (memory[diff] !== undefined) {
          return [i, memory[diff]];
      }

      memory[num] = i;
  }

  return [];
};