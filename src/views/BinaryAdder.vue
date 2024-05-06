<script setup>
import Comment from "@/components/Comment.vue";
import { ref } from 'vue';


const binary1 = ref('');
const binary2 = ref('');
const result = ref('');
const steps = ref([]);


const addBinary = (a, b) => {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let partialResult = '';
  let stepArray = [];

  while (i >= 0 || j >= 0) {
      let sum = carry;
      let aBit = i >= 0 ? a[i] : '0';
      let bBit = j >= 0 ? b[j] : '0';
      
      if (i >= 0) sum += a[i--] === '1' ? 1 : 0;
      if (j >= 0) sum += b[j--] === '1' ? 1 : 0;

      let newCarry = sum > 1 ? 1 : 0;
      let digit = sum % 2;

      partialResult = digit + partialResult;
      stepArray.push(`Add ${aBit} and ${bBit} with carry ${carry}: Sum = ${sum}, Digit = ${digit}, New Carry = ${newCarry}<br><p>Partial Result: ${partialResult}</p><br>`);

      carry = newCarry;
  }

  if (carry) {
      partialResult = '1' + partialResult;
      stepArray.push(`Final carry: 1 added at the leftmost position.<br><p>Final Result: ${partialResult}</p><br>`);
  }

  return { result: partialResult, stepArray };
};

const handleSubmit = () => {
  const binarySum = addBinary(binary1.value, binary2.value);
  result.value = `Result: ${binarySum.result}`;
  steps.value = binarySum.stepArray;
};
</script>

<template>
  <h1 class="heading-02">Binary Adder</h1>
  <form @submit.prevent="handleSubmit">
    
    <div class="input-block">
      <input class="inputs" type="text" v-model="binary1" placeholder="Enter first binary number">
      <input class="inputs" type="text" v-model="binary2" placeholder="Enter second binary number">
    </div>

    <button class="button" type="submit">Add</button>
  </form>
  <br>
  <div v-for="step in steps" :key="step">
    <p class="step-description" v-html="step"></p>
  </div>
  <h2 class="heading-03">{{ result }}</h2>
  <Comment class="orange" comment="JS from before Vue.js Integration"/>
  <div class="code-snippet-container">
    <div class="heading-wrap">
      <span class="heading-03 blue">How it works</span>
    </div>
    <div class="code-snippet">
      <pre>
        // Add an event listener to the form with the ID 'binaryAdderForm'. This triggers when the form is submitted.
        document.getElementById('binaryAdderForm').addEventListener('submit', function(event) {
            // Prevent the default form submission behavior, which typically reloads the page.
            event.preventDefault(); 

            // Retrieve the values entered by the user in the input fields with IDs 'binary1' and 'binary2'.
            const binary1 = document.getElementById('binary1').value;
            const binary2 = document.getElementById('binary2').value;

            // Call the addBinary function with the user inputs and destructure the returned object to get 'result' and 'steps'.
            const { result, steps } = addBinary(binary1, binary2);
            
            // Display the resulting binary addition in the DOM element with the ID 'result'.
            document.getElementById('result').textContent = `Result: ${result}`;
            // Display the steps of the binary addition in the DOM element with the ID 'steps', each step separated by a newline.
            document.getElementById('steps').innerHTML = steps.join('/n');
        });

        // Define the function to add two binary numbers.
        function addBinary(a, b) {
            // Initialize indices for the last characters in the input strings.
            let i = a.length - 1;
            let j = b.length - 1;
            // Initialize the carry used in binary addition to 0.
            let carry = 0;
            // Initialize the result string for the binary sum.
            let result = '';
            // Array to store the step-by-step details of the addition process.
            let steps = [];

            // Loop through both binary strings from end to start.
            while (i >= 0 || j >= 0) {
                let sum = carry; // Start with the current carry value.
                if (i >= 0) {
                    sum += a[i] === '1' ? 1 : 0; // Add the value of the current bit from the first binary string.
                    i--; // Move to the next bit.
                }
                if (j >= 0) {
                    sum += b[j] === '1' ? 1 : 0; // Add the value of the current bit from the second binary string.
                    j--; // Move to the next bit.
                }
                carry = sum > 1 ? 1 : 0; // Update the carry for the next iteration.

                // Record the addition process for each step.
                steps.push(`Adding ${a[i + 1] || 0} and ${b[j + 1] || 0} with carry ${carry}: Sum = ${sum % 2}, New Carry = ${carry}`);

                // Append the least significant bit of the current sum to the result string.
                result = (sum % 2) + result;
            }

            // If there's a carry left after the last addition, prepend it to the result.
            if (carry) {
                result = '1' + result;
                steps.push(`Final carry: 1`);
            }

            // Return the final result and the array of steps.
            return { result, steps };
        }


      </pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme';

.step-description {
  font-family: monospace;
  color: $accent-green;
  margin: 5px 0;
}
.code-snippet-container {
  background: black;
  .heading-wrap {
    padding: .125rem 1rem;
    background-color: $neutral-400;
    p {
      color: $accent-green;
      margin-bottom: 0;
    }
  }

  .code-snippet {
    overflow-x: scroll;
  }
}
</style>