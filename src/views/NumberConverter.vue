<script setup>
import Comment from "@/components/Comment.vue";
import { ref } from 'vue';

const inputNumber = ref('');
const result = ref('');
const steps = ref([]);
const isComputed = ref(false)
const fromDecimal = (num, base) => {
  let conversionSteps = [];
  if (num === 0) return { result: '0', steps: conversionSteps };

  let result = '';
  let digits = '0123456789ABCDEF';
  let originalNum = num;

  while (num > 0) {
    let remainder = num % base;
    conversionSteps.push(`<td><p>${num} ÷ ${base}</p></td><td style="text-align: center;"><p>${Math.floor(num / base)}</p></td><td style="text-align: center;"><p>${remainder}</p></td>`);
    result = digits[remainder] + result;
    num = Math.floor(num / base);
  }

  // conversionSteps.push(`Decimal ${originalNum} in base ${base} is ${result}`);
  return { result, steps: conversionSteps };
};

const convertNumber = (outputType) => {
  let outputBase;
  switch(outputType) {
    case 'bin': outputBase = 2; break;
    case 'oct': outputBase = 8; break;
    case 'hex': outputBase = 16; break;
    case 'dec': outputBase = 10; break;
    default: outputBase = 0; break;
  }

  let decimalNumber = parseInt(inputNumber.value, 10);
  if(isNaN(decimalNumber) || outputBase === 0) {
    result.value = "Invalid Input or Output Type";
    steps.value = [];
  } else {
    let conversionResult = fromDecimal(decimalNumber, outputBase);
    result.value = conversionResult.result;
    steps.value = conversionResult.steps;
  }
  isComputed.value = true
  result.value = `Result: ${result.value}`;
};
</script>

<template>
  <div>
    <h1 class="heading-02">Decimal Number Converter</h1>
    <div>
      <input type="number" v-model="inputNumber" id="inputNumber" placeholder="Decimal Value">
    </div>
    <div>
      <button class="button" @click="convertNumber('bin')">Binary</button>
      <button class="button" @click="convertNumber('oct')">Octal</button>
      <button class="button" @click="convertNumber('hex')">Hexadecimal</button>
      <button class="button" @click="convertNumber('dec')">Decimal</button>
    </div>

    <table v-if="isComputed">
      <thead>
        <tr>
          <th><p>Value</p></th>
          <th><p>Divisor</p></th>
          <th><p>Remainder</p></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(step, index) in steps" :key="index">
          <tr class="step-description" v-html="step"></tr>
        </template>
      </tbody>
    </table>
    <h2 class="heading-03">{{ result }}</h2>
  </div>
  <Comment class="orange" comment="JS from before Vue.js Integration"/>
  <div class="code-snippet-container">
    <div class="heading-wrap">
      <span class="heading-03 blue">How it works</span>
    </div>
    <div class="code-snippet">
      <pre>
        // get user inputs
        document.getElementById('inputNumber')

        const fromDecimal = (num, base) => {
        let conversionSteps = [];
        if (num === 0) return { result: '0', steps: conversionSteps };

        let result = '';
        let digits = '0123456789ABCDEF';
        let originalNum = num;

        // division pattern to reduce and determine new values
        while (num > 0) {
          let remainder = num % base;
          conversionSteps.push(`row information`); //full output removed for formatting
          result = digits[remainder] + result;
          num = Math.floor(num / base);
        }

        return { result, steps: conversionSteps };
      };

      // statment to determine which operation to complete
      const convertNumber = (outputType) => {
        let outputBase;
        switch(outputType) {
          case 'bin': outputBase = 2; break;
          case 'oct': outputBase = 8; break;
          case 'hex': outputBase = 16; break;
          case 'dec': outputBase = 10; break;
          default: outputBase = 0; break;
        }

        let decimalNumber = parseInt(inputNumber, 10);
        //determine if number is valid
        if(isNaN(decimalNumber) || outputBase === 0) {
          result = "Invalid Input or Output Type";
          steps = [];
        } else {
          let conversionResult = fromDecimal(decimalNumber, outputBase);
          result = conversionResult.result;
          steps = conversionResult.steps;
        }
        isComputed = true;

        // output result
        document.getElementById('result').textContent = `Result: ${result}`;
      };
      </pre>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/theme';
.step-description {
  font-family: monospace;
  color: $accent-green;
  margin: 5px 0;
}
table {
  text-align: left;
  thead {
    th {
      border: 1px solid ;
    }
  }
  tbody {
    td {
      border: 1px solid ;
    }
  }
}

</style>