<script setup>
import Comment from "@/components/Comment.vue";
import { ref } from 'vue';

const num1 = ref(0);
const num2 = ref(0);
const result = ref(0);

const calculate = (operation) => {
  switch (operation) {
    case '+':
      result.value = num1.value + num2.value;
      break;
    case '-':
      result.value = num1.value - num2.value;
      break;
    case '*':
      result.value = num1.value * num2.value;
      break;
    case '/':
      if (num2.value === 0) {
        result.value = 'Cannot divide by zero';
        break;
      }
      result.value = num1.value / num2.value;
      break;
  }
  result.value = `Result: ${result.value}`;
};
</script>

<template>
  <h1 class="heading-02">Calculator</h1>
  <div id="calculator-app">
    <div class="input-block">
      <input type="number" v-model.number="num1">    
      <input type="number" v-model.number="num2">
    </div>
    <!-- Operation Buttons -->
    <button class="button" @click="calculate('+')">Add</button>
    <button class="button" @click="calculate('-')">Subtract</button>
    <button class="button" @click="calculate('*')">Multiply</button>
    <button class="button" @click="calculate('/')">Divide</button>
    <br>
    <br>
    <h2 class="heading-03">{{ result }}</h2>
  </div>
  <Comment class="orange" comment="JS from before Vue.js Integration"/>
  <div class="code-snippet-container">
    <div class="heading-wrap">
      <span class="heading-03 blue">How it works</span>
    </div>
    <div class="code-snippet">
      <pre>
        // Collects user inputs from input fields, converting them to floating point numbers.
        const num1 = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);
        let result; // Variable to store the result of the arithmetic operation.

        // Use the value of the 'operation' variable to determine the arithmetic operation to perform.
        switch(operation) {
            case 'add':
                // If operation is 'add', add the two numbers.
                result = num1 + num2;
                break;
            case 'subtract':
                // If operation is 'subtract', subtract the second number from the first.
                result = num1 - num2;
                break;
            case 'multiply':
                // If operation is 'multiply', multiply the two numbers.
                result = num1 * num2;
                break;
            case 'divide':
                // If operation is 'divide', check if the second number is zero to avoid division by zero.
                if (num2 === 0) {
                    result = 'Cannot divide by zero'; // Display error message if division by zero is attempted.
                    break;
                }
                // Perform division if the second number is not zero.
                result = num1 / num2;
                break;
            default:
                // If the operation does not match any case, set result to an error message.
                result = 'Invalid operation';
        }

        // Output the result to the webpage by setting the text content of the DOM element with the ID 'result'.
        document.getElementById('result').textContent = `Result: ${result}`;
      </pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme';
#calculator-app {
  position: relative;
  z-index: 10000;
}
</style>