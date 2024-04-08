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
       // Retrieve Logic Gate selection from user

       // Record number of inputs and sign for each input

       // Determine output of gate given input list
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