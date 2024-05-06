<script setup>
import Comment from "@/components/Comment.vue";
import { ref, reactive } from 'vue';

const alert = ref(false)
const selectedGate = ref('AND');
const inputs = reactive([{ value: 'high' }]);
const output = ref('');

const addInput = () => {
  inputs.push({ value: 'high' });
  alert.value = false
};

const removeInput = index => {
  if (inputs.length > 2) {
    inputs.splice(index, 1);
  } else {
    alert.value = true
  }
};

const calculateOutput = () => {
  if (inputs.length < 2) {
    alert.value = true
    return;
  }
  let result;
  switch (selectedGate.value) {
    case 'AND':
      result = inputs.every(input => input.value === 'high');
      break;
    case 'OR':
      result = inputs.some(input => input.value === 'high');
      break;
    case 'NAND':
      result = !inputs.every(input => input.value === 'high');
      break;
    case 'NOR':
      result = !inputs.some(input => input.value === 'high');
      break;
  }
  output.value = `Output is: <span class="green">${result ? 'High' : 'Low'}</span>`;
};

</script>
<template>
  <div id="logic-gate-simulator">
    <h1 class="heading-02">Logic Gate Simulator</h1>

    <p>Select Your Gate</p>
    <div class="buttons">
      <div class="buttons">
        <button :class="{ selected: selectedGate === 'AND' }" class="button" @click="selectedGate = 'AND'">AND</button>
        <button :class="{ selected: selectedGate === 'OR' }" class="button" @click="selectedGate = 'OR'">OR</button>
        <button :class="{ selected: selectedGate === 'NAND' }" class="button" @click="selectedGate = 'NAND'">NAND</button>
        <button :class="{ selected: selectedGate === 'NOR' }" class="button" @click="selectedGate = 'NOR'">NOR</button>
      </div>
    </div>
    <br>
    <hr>
    <div class="inputs" style="display: flex; gap: 16px;">
      <div v-for="(input, index) in inputs" :key="index">
        <select v-model="input.value" class="button" style="padding-top: 0%;">
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
    <br>
    <Comment class="red" comment="A minimum of 2 inputs are required" v-if="alert"/>
    <hr>
    <div>
      <button class="button" @click="addInput">Add Input</button>
      <button class="button remove-button" @click="removeInput(index)">Remove Input</button>
    </div>
    <button class="button" @click="calculateOutput">Calculate</button>
  </div>
  <br>
  <h2 class="heading-03" v-html="output"></h2>
  <div class="code-snippet-container">
    <div class="heading-wrap">
      <span class="heading-03 blue">The Plan</span>
    </div>
    <div class="code-snippet">
      <pre>
        // Initialize state variables
        INITIALIZE alert as false (to handle error states)
        INITIALIZE selectedGate with default value 'AND'
        INITIALIZE inputs as a reactive array with one element having value 'high'
        INITIALIZE output as an empty string

        // Function to add a new input to the inputs array
        FUNCTION addInput
            ADD a new input with value 'high' to inputs
            SET alert to false

        // Function to remove an input from the inputs array at a specified index
        FUNCTION removeInput(index)
            IF length of inputs is greater than 2
                REMOVE input at given index from inputs
            ELSE
                SET alert to true (cannot have less than two inputs)

        // Function to calculate the output based on selected logic gate and current inputs
        FUNCTION calculateOutput
            IF number of inputs is less than 2
                SET alert to true
                RETURN
            ENDIF

            INITIALIZE result variable

            // Switch case to handle different logic gate operations
            SWITCH selectedGate
                CASE 'AND'
                    result = CHECK if all inputs are 'high'
                CASE 'OR'
                    result = CHECK if at least one input is 'high'
                CASE 'NAND'
                    result = NOT(CHECK if all inputs are 'high')
                CASE 'NOR'
                    result = NOT(CHECK if at least one input is 'high')
            ENDSWITCH

            // Set the output message based on the result of the logic gate calculation
            SET output to "Output is: <span class='green'>{result ? 'High' : 'Low'}</span>"
      </pre>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/theme';
.selected {
  background-color: #007bff !important; // Or any other highlight color
  color: white;
}

.remove-button {
  margin-left: 10px;
  // Additional styling for the remove button
}
</style>