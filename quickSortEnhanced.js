/**
 * 🚀 Quick Sort Algorithm – Enhanced Version
 * -----------------------------------------
 * Repository: JavaScript Programs - Hacktoberfest 2025
 * Contributor: Komal (Rishihood University)
 * Description:
 *   This program demonstrates the Quick Sort algorithm with:
 *     - Step-by-step visualization
 *     - Time measurement
 *     - Two different pivot strategies
 *     - Colored console output for better readability
 * 
 * Time Complexity: 
 *   - Best / Average: O(n log n)
 *   - Worst Case: O(n²)
 * Space Complexity: O(log n)
 * 
 * Example Usage:
 *   node quickSortEnhanced.js
 */

console.clear();
console.log("\x1b[36m%s\x1b[0m", "⚡ Quick Sort Algorithm – Enhanced Demo\n");

// Utility function to swap elements
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Partition function using different pivot strategies
function partition(arr, low, high, pivotType = "last") {
  let pivotIndex = pivotType === "first" ? low : high;
  let pivot = arr[pivotIndex];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

// Quick Sort main function
function quickSort(arr, low = 0, high = arr.length - 1, pivotType = "last") {
  if (low < high) {
    let pi = partition(arr, low, high, pivotType);

    // Show step-by-step progress
    console.log("\x1b[33m%s\x1b[0m", `Partition at index ${pi}: [${arr.join(", ")}]`);

    quickSort(arr, low, pi - 1, pivotType);
    quickSort(arr, pi + 1, high, pivotType);
  }
  return arr;
}

// Main function to run demo
function runQuickSortDemo() {
  const inputArray = [23, 7, 14, 3, 9, 18, 50, 12];
  console.log("🔢 Original Array:", inputArray);

  console.log("\n⚙️ Running Quick Sort (Pivot: Last Element)...");
  console.time("⏱️ Execution Time");
  const sortedArray = quickSort([...inputArray]);
  console.timeEnd("⏱️ Execution Time");

  console.log("\n✅ Sorted Array:", sortedArray);
}

// Export function for testing or import
module.exports = { quickSort, runQuickSortDemo };

// Run demo if file executed directly
if (require.main === module) {
  runQuickSortDemo();
}
