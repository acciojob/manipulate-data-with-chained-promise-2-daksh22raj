//your JS code here. If required.
const outputDiv = document.getElementById("output");

    // Step 1: Initial promise (resolve [1, 2, 3, 4] after 3s)
    function getArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000); // 3-second delay
      });
    }

    // Step 2: Filter out odd numbers (after 1s delay)
    function filterEvens(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = arr.filter(num => num % 2 === 0);
          outputDiv.textContent = evens.toString(); // Update DOM
          resolve(evens);
        }, 1000);
      });
    }

    // Step 3: Multiply evens by 2 (after 2s delay)
    function multiplyByTwo(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubled = arr.map(num => num * 2);
          outputDiv.textContent = doubled.toString(); // Update DOM
          resolve(doubled);
        }, 2000);
      });
    }

    // Chaining the promises
    getArray()
      .then(filterEvens)   // First transformation
      .then(multiplyByTwo) // Second transformation
      .catch(err => {
        outputDiv.textContent = "Error: " + err;
      });