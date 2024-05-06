<script setup>
import { ref } from 'vue';

const northSouthState = ref('red');
const eastWestState = ref('red');
const isPowerOutage = ref(false);
let interval = null;

function updateLights() {
  if (isPowerOutage.value) {
    northSouthState.value = 'red';
    eastWestState.value = 'red';
  }
}

function changeLights() {
  if (isPowerOutage.value) return;

  // Logic to cycle through lights
  if (northSouthState.value === 'red' && eastWestState.value === 'red') {
    northSouthState.value = 'green';
  } else if (northSouthState.value === 'green') {
    northSouthState.value = 'yellow';
  } else if (northSouthState.value === 'yellow') {
    northSouthState.value = 'red';
    eastWestState.value = 'green';
  } else if (eastWestState.value === 'green') {
    eastWestState.value = 'yellow';
  } else if (eastWestState.value === 'yellow') {
    eastWestState.value = 'red';
    northSouthState.value = 'green';
  }
}

function togglePowerOutage() {
  isPowerOutage.value = !isPowerOutage.value;
  if (isPowerOutage.value) {
    clearInterval(interval);
    interval = setInterval(updateLights, 500);  // Set faster interval for blinking
  } else {
    clearInterval(interval);
    interval = setInterval(changeLights, 3000);  // Continue normal cycling if it was started
    updateLights();  // Update lights to ensure they're on proper state
  }
}

function startTrafficCycle() {
  clearInterval(interval);
  interval = setInterval(changeLights, 3000);
}
</script>

<template>
  <h1 class="heading-02">Traffic Light Simulator</h1>
  <div class="container">
    <div style="display: flex">
      <button class="power-outage button" @click="togglePowerOutage">Simulate Power Outage</button>
    <button class="power-outage button" @click="startTrafficCycle">Start Traffic Flow</button>
    </div>
    <div class="signal">
      <div class="traffic-light">
        <div class="light red" :class="{ active: northSouthState === 'red' && !isPowerOutage }"></div>
        <div class="light yellow" :class="{ active: northSouthState === 'yellow' && !isPowerOutage }"></div>
        <div class="light green" :class="{ active: northSouthState === 'green' && !isPowerOutage }"></div>
      </div>
      <div class="traffic-light">
        <div class="light red" :class="{ active: eastWestState === 'red' && !isPowerOutage }"></div>
        <div class="light yellow" :class="{ active: eastWestState === 'yellow' && !isPowerOutage }"></div>
        <div class="light green" :class="{ active: eastWestState === 'green' && !isPowerOutage }"></div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <div class="code-snippet-container">
    <div class="heading-wrap">
      <span class="heading-03 blue">How it works</span>
    </div>
    <div class="code-snippet">
      <pre>
      // Retrieve DOM elements for north-south and east-west traffic lights and control buttons
      const northSouth = document.getElementById('northSouth');
      const eastWest = document.getElementById('eastWest');
      const powerOutageBtn = document.getElementById('powerOutageBtn');
      const crossTrafficBtn = document.getElementById('crossTrafficBtn');

      // Initialize traffic light states and control flags
      let northSouthState = 'red';
      let eastWestState = 'red';
      let isPowerOutage = false;
      let interval = null;
      let lightsStarted = false;

      // Function to update the display of traffic lights based on current states
      function updateLights() {
        clearLights(); // First, clear all lights
        if (isPowerOutage) {
          // If there's a power outage, blink red lights
          northSouth.querySelector('.red').classList.toggle('active');
          eastWest.querySelector('.red').classList.toggle('active');
        } else {
          // Activate the current state lights for each direction
          northSouth.querySelector('.' + northSouthState).classList.add('active');
          eastWest.querySelector('.' + eastWestState).classList.add('active');
        }
      }

      // Function to clear the lights' active class, turning off all lights
      function clearLights() {
        northSouth.querySelectorAll('.light').forEach(light => light.classList.remove('active'));
        eastWest.querySelectorAll('.light').forEach(light => light.classList.remove('active'));
      }

      // Function to change the traffic lights from one state to another in sequence
      function changeLights() {
        if (isPowerOutage) return; // Skip changes during power outages

        // State transition logic for cycling through light colors
        if (northSouthState === 'red' && eastWestState === 'red') {
          northSouthState = 'green'; // Start the cycle with green for north-south direction
        } else if (northSouthState === 'green') {
          northSouthState = 'yellow';
        } else if (northSouthState === 'yellow') {
          northSouthState = 'red';
          eastWestState = 'green'; // Switch to green for east-west after north-south turns red
        } else if (eastWestState === 'green') {
          eastWestState = 'yellow';
        } else if (eastWestState === 'yellow') {
          eastWestState = 'red';
          northSouthState = 'green'; // Switch back to green for north-south
        }
        updateLights(); // Update the light display based on new states
      }

      // Function to start or continue the traffic light cycle
      function startTrafficCycle() {
        if (!lightsStarted) {
          lightsStarted = true;
          interval = setInterval(changeLights, 3000); // Start the interval to change lights every 3 seconds
        } else {
          changeLights(); // Trigger a change immediately if already started
        }
      }

      // Function to toggle the power outage mode
      function togglePowerOutage() {
        isPowerOutage = !isPowerOutage;
        if (isPowerOutage) {
          clearInterval(interval);
          interval = setInterval(updateLights, 500); // Faster interval for blinking during outage
        } else {
          clearInterval(interval);
          if (lightsStarted) {
            interval = setInterval(changeLights, 3000); // Resume normal cycle if previously started
          }
          updateLights(); // Ensure correct light state after ending the outage
        }
      }

      // Event listeners for button clicks to control the traffic light system
      powerOutageBtn.addEventListener('click', togglePowerOutage);
      crossTrafficBtn.addEventListener('click', startTrafficCycle);

      // Initialization call to set initial light state without starting automatic cycling
      updateLights();
      </pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/theme.scss';
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

.container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .power-outage {
      margin-bottom: 1.67em; /*match system default*/
    }
    .signal {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
    .traffic-light {
      border: 2px solid black;
      border-radius: 10px;
      padding: 15px 30px;
    }
    .light {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    .red {
      background-color: #bd1e24;
    }
    .red.active {
      background-color: #ff0404;
    }
    .yellow {
      background-color: #e7b416;
    }
    .yellow.active {
      background-color: #fff321;
    }
    .green {
      background-color: #007256;
    }
    .green.active {
      background-color: #59f720;
    }
</style>
