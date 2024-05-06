<script setup>
import Comment from "@/components/Comment.vue";
import { ref } from 'vue';

</script>

<template>
  <div>
    <h1 class="heading-02">CS Flash Cards</h1>
    <div>
      <select v-model="selectedDifficulty" @change="loadCards" class="button">
      <option value="all">All Difficulties</option>
      <option value="1">Difficulty 1</option>
      <option value="2">Difficulty 2</option>
      <option value="3">Difficulty 3</option>
    </select>
    </div>
    <div>
      <button class="button" @click="loadCards">Load Cards</button>
      <button class="button" @click="reset">Reset</button>
    </div>
    <div id="card">
      <h2>{{ currentCard.component || currentCard.concept }}</h2>
      <p v-show="showAnswer">{{ currentCard.function }}</p>
    </div>
    <button class="button" @click="toggleAnswer">Show Answer</button>
    <button class="button" @click="markCorrect">Next Card</button>
    <p>Card Number: {{ correctAnswers }} / {{ totalCards }}</p>
  </div>
  <hr>
  <Comment class="orange" comment="JS from before Vue.js Integration"/>
  <div class="code-snippet-container">
    <div class="heading-wrap">
      <span class="heading-03 blue">How it works</span>
    </div>
    <div class="code-snippet">
      <pre>
        // Initialize variables to store the flashcards, the index of the current card, and the count of correct answers.
        let flashcards = [];
        let currentCard = 0;
        let correctAnswers = 0;

        // Attach an event listener to the difficulty select dropdown to load flashcards based on the selected difficulty when changed.
        document.getElementById('difficulty').addEventListener('change', () => loadCards());

        // Function to return the set of flashcards.

        function loadJSONData() {
            return [{
              // Normally, you would fetch this data from a server or an external file.
            }];
        }
        // Function to load flashcards based on the selected difficulty.
        function loadCards() {
          const difficulty = document.getElementById('difficulty').value;
          flashcards = loadJSONData().filter(card =>
              difficulty === 'all' || card.difficulty === parseInt(difficulty)
          );
          currentCard = 0;
          correctAnswers = 0;
          updateCard();
          document.getElementById('correctCount').textContent = correctAnswers;
          document.getElementById('totalCards').textContent = flashcards.length;
        }

        // Function to update the display with the current card's information.
        function updateCard() {
          const card = flashcards[currentCard];
          document.getElementById('component').textContent = card.component || card.concept;
          document.getElementById('function').textContent = card.function;
          document.getElementById('function').style.display = 'none'; // Hide the answer initially
        }

        // Function to toggle the visibility of the answer on the current card.
        function toggleAnswer() {
          const answer = document.getElementById('function');
          answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        }

        // Function to mark the current card as correctly answered and move to the next card.
        function markCorrect() {
          if (!flashcards[currentCard].isAnswered) {
              flashcards[currentCard].isAnswered = true;
              correctAnswers++;
              document.getElementById('correctCount').textContent = correctAnswers;
              moveToNextCard();
          }
        }

        // Function to move to the next card, or reset if at the end of the deck.
        function moveToNextCard() {
          if (currentCard &lt; flashcards.length - 1) {
              currentCard++;
              updateCard();
          } else {
              alert('End of cards! Resetting.');
              loadCards();
          }
        }

        // Function to reset all flashcards to unanswered and reload the deck.
        function reset() {
          flashcards.forEach(card => card.isAnswered = false);
          loadCards();
        }

        // Initial call to load cards on page load.
        loadCards();
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flashcards: [],
      currentCardIndex: 0,
      correctAnswers: 0,
      showAnswer: false,
      selectedDifficulty: 'all',
    };
  },
  computed: {
    currentCard() {
      return this.flashcards[this.currentCardIndex] || {};
    },
    totalCards() {
      return this.flashcards.length;
    },
  },
  methods: {
    loadJSONData() {
       return [{
      "component": "CPU",
      "function": "Executes instructions, performs calculations, and controls other parts of the computer system.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "component": "ALU (Arithmetic Logic Unit)",
      "function": "Performs arithmetic and logical operations such as addition, subtraction, AND, and OR.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "component": "Control Unit",
      "function": "Coordinates the activities of the CPU, fetching instructions, decoding them, and executing them.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "concept": "Memory Hierarchy",
      "function": "Organizes memory into multiple levels (registers, cache, RAM, disk) based on speed and cost.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "concept": "Registers",
      "function": "Small, high-speed storage locations inside the CPU used to store data temporarily during processing.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "concept": "Cache Memory",
      "function": "Small, high-speed memory located near the CPU used to store frequently accessed data and instructions.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "component": "RAM (Random Access Memory)",
      "function": "Stores data and instructions that are currently being used by the CPU, providing fast access for read and write operations.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "concept": "Clock Speed",
      "function": "Determines how many instructions a CPU can execute per second, measured in Hertz (Hz) or GHz (gigahertz).",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "concept": "Instruction Set Architecture (ISA)",
      "function": "Defines the set of instructions a CPU can execute and how they are encoded.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "component": "Heat Sink",
      "function": "Dissipates heat generated by the CPU to prevent overheating.",
      "isAnswered": false,
      "difficulty": 1
    }, {
      "concept": "Pipelining",
      "function": "Technique that allows the CPU to execute multiple instructions simultaneously by breaking down the instruction execution process into stages.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "component": "MMU (Memory Management Unit)",
      "function": "Translates virtual addresses to physical addresses, facilitating memory access and management.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "concept": "Bus",
      "function": "Communication pathway that allows data and instructions to be transmitted between CPU, memory, and other components.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "component": "GPU (Graphics Processing Unit)",
      "function": "Specialized processor responsible for rendering graphics and images.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "concept": "Cache Coherency",
      "function": "Ensures that multiple cache copies of the same data remain consistent across different levels of the memory hierarchy.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "concept": "Instruction Pipelining",
      "function": "Breaks down the execution of instructions into smaller stages, allowing multiple instructions to be processed simultaneously.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "component": "Front Side Bus (FSB)",
      "function": "Connects the CPU to the main memory and other components on the motherboard.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "component": "L1 Cache (Level 1 Cache)",
      "function": "Small, high-speed cache located inside the CPU core for storing frequently accessed data and instructions.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "component": "L2 Cache (Level 2 Cache)",
      "function": "Larger cache located outside the CPU core but still on the CPU chip, providing additional storage for frequently accessed data and instructions.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "concept": "Memory Access Time",
      "function": "The time it takes for the CPU to retrieve data from memory, including cache, RAM, and disk.",
      "isAnswered": false,
      "difficulty": 2
    }, {
      "concept": "Superscalar Architecture",
      "function": "Allows the CPU to execute multiple instructions simultaneously by using multiple execution units and pipelines.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "concept": "Branch Prediction",
      "function": "Predicts the outcome of conditional branch instructions to minimize pipeline stalls and improve performance.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "component": "TLB (Translation Lookaside Buffer)",
      "function": "Cache-like structure that stores recently accessed virtual-to-physical address translations to speed up memory access.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "concept": "SIMD (Single Instruction, Multiple Data)",
      "function": "Technique that allows a single instruction to operate on multiple data elements simultaneously, improving performance for certain types of computations.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "concept": "Speculative Execution",
      "function": "Allows the CPU to execute instructions before it is certain they will be needed, potentially improving performance by predicting future execution paths.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "component": "NUMA (Non-Uniform Memory Access)",
      "function": "Memory architecture where access times vary depending on the memory location, commonly found in multi-socket systems.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "component": "DMA (Direct Memory Access)",
      "function": "Allows peripheral devices to transfer data directly to and from memory without involving the CPU, reducing overhead and improving performance.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "concept": "Cache Write Policies",
      "function": "Determines how and when data is written back to memory from the cache, affecting cache performance and consistency.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "concept": "Cache Associativity",
      "function": "Determines how cache lines are mapped to cache sets, affecting cache performance and efficiency.",
      "isAnswered": false,
      "difficulty": 3
    }, {
      "component": "SMT (Simultaneous Multithreading)",
      "function": "Allows multiple threads to execute simultaneously on a single CPU core, improving overall CPU utilization and performance.",
      "isAnswered": false,
      "difficulty": 3
    }]
    },
    loadCards() {
      const difficulty = this.selectedDifficulty;
      this.flashcards = this.loadJSONData().filter(card =>
        difficulty === 'all' || card.difficulty === parseInt(difficulty)
      );
      this.currentCardIndex = 0;
      this.correctAnswers = 0;
      this.showAnswer = false;
    },
    updateCard() {
      this.showAnswer = false; // Hide the answer initially
    },
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    markCorrect() {
      if (!this.flashcards[this.currentCardIndex].isAnswered) {
        this.flashcards[this.currentCardIndex].isAnswered = true;
        this.correctAnswers++;
        this.moveToNextCard();
      }
    },
    moveToNextCard() {
      if (this.currentCardIndex < this.flashcards.length - 1) {
        this.currentCardIndex++;
        this.updateCard();
      } else {
        alert('End of cards! Resetting.');
        this.loadCards();
      }
    },
    reset() {
      this.flashcards.forEach(card => card.isAnswered = false);
      this.loadCards();
    },
  },
  mounted() {
    this.loadCards();
  }
}
</script>


<style lang="scss">
@import '../assets/scss/theme';
#card { 
  background: #f0f0f0; 
  padding: 20px; 
  border-radius: 8px; 
  color: #000
}
.button { 
  padding: 10px; 
  margin: 5px; 
}
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