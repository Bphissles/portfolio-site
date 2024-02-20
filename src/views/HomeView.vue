<script setup>
  import Heading from "@/components/Heading.vue"
  import ProjectPreviewCard from "@/components/ProjectPreviewCard.vue"
</script>

<template>
  <main>
    <h1 class="heading-01 red text-center" style="margin-bottom: 0">SITE IN PROGRESS</h1>
    <br>
    <div class="wrapper">
      <Heading projectName="" heading="This is the project site" subHeading="We make things."/>
      <!-- <div class="todo-block">
        <div>
          <ul>
            <li class="blue"><p style="margin-bottom: 0">create home route when invalid URL pops up for project pages</p></li>
            <li class="blue"><p style="margin-bottom: 0">make sure all links are setup</p></li>
          </ul>
        </div>
      </div> -->

      <!-- *we only want to show the first 3 from the list here -->
      <!-- <template v-if="isLoaded">
        <ProjectPreviewCard class="tracking-in-expand" :preview="true" :totalProjectCount="totalProjectCount" :cardData="cardOutput[0]" />
        <ProjectPreviewCard class="tracking-in-expand" :preview="true" :totalProjectCount="totalProjectCount" :cardData="cardOutput[1]" />
        <ProjectPreviewCard class="tracking-in-expand" :preview="true" :totalProjectCount="totalProjectCount" :cardData="cardOutput[2]" />
      </template> -->
      <!-- <TileContainer class="tracking-in-expand" heading="More Cool Things." :cardCount="extraCardTemp" /> -->
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: "home-view",
  components: { Heading, ProjectPreviewCard},
  data() {
    return {
      isLoaded: false,
      extraCardTemp: 3,
      totalProjectCount: 3,
      cardOutput:{}
    };
  },
  methods: {
    numberFormatter(num) {
      num = num.toString();
      return num.length < 2 ? (num = "0" + num) : num;
    },
  },
  mounted() {
    this.totalProjectCount = this.numberFormatter(this.totalProjectCount);
    axios.get(`/sample-project.json`).then(response => {
      response = response.data
      response.forEach(elem => {
        elem.projectIndex = this.numberFormatter(elem.projectIndex)
      });

      this.isLoaded = true
      this.cardOutput = response
    })  
    axios.get(`https://swapi.dev/api/planets/1/`).then(response => {
      console.log(response)
    })  
  },
};
</script>

<style>
  .todo-block {
    display: flex !important;
    /* display: none; */
    justify-content: space-between;
    margin-bottom: 24px;
  }
</style>