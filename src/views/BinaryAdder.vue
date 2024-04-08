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
        // Collect User Inputs
        document.getElementById('binaryAdderForm').addEventListener('submit', function(event) {
          //prevent page reload from form submission
          event.preventDefault(); 

          // assign user input to variables
          const binary1 = document.getElementById('binary1').value;
          const binary2 = document.getElementById('binary2').value;

          const { result, steps } = addBinary(binary1, binary2);
          
          // output results to page
          document.getElementById('result').textContent = `Result: ${result}`;
          document.getElementById('steps').innerHTML = steps.join('/n');
        });

        // where the magic happens
        function addBinary(a, b) {
          // a is first input
          // b is second input
          let i = a.length - 1;
          let j = b.length - 1;
          let carry = 0;
          let result = '';
          let steps = []; // Array to hold each step

          while (i >= 0 || j >= 0) {
              let sum = carry;
              if (i >= 0) {
                  sum += a[i] === '1' ? 1 : 0;
                  i--;
              }
              if (j >= 0) {
                  sum += b[j] === '1' ? 1 : 0;
                  j--;
              }
              carry = sum > 1 ? 1 : 0;

              // build array for output to page
              steps.push(`Adding ${a[i + 1] || 0} and ${b[j + 1] || 0} with carry ${carry}: Sum = ${sum % 2}, New Carry = ${carry}`);

              result = (sum % 2) + result;
          }

          if (carry) {
              result = '1' + result;
              steps.push(`Final carry: 1`);
          }

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