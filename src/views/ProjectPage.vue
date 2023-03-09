<script setup>
  import Heading from "@/components/Heading.vue"
  import ProjectIntroCard from "@/components/ProjectIntroCard.vue"
  import TileContainer from "@/components/TileContainer.vue"
</script>

<template>
  <main>
    <div class="wrapper" v-if="isLoaded">
      <Heading :projectName="cardOutput.projectDetails.client" :heading="cardOutput.title" subHeading="Website Redesign"/>
      <ProjectIntroCard :totalProjectCount="totalProjectCount" :cardData="cardOutput" />   
      <TileContainer heading="More Cool Things." :cardCount="extraCardTemp"/>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "project-page",
  components: { Heading, ProjectIntroCard, TileContainer },

  data() {
    return {
      extraCardTemp: 3,
      totalProjectCount: 9,
      isLoaded: false,
      cardOutput: {},
    };
  },
  methods: {
    numberFormatter(num) {
      num = num.toString();
      return num.length < 2 ? (num = "0" + num) : num;
    },
    urlSlugGet() {
      const url = window.location.pathname
      const parts = url.split("/");
      return parts[parts.length - 1];
    }
  },
  mounted() {
    this.totalProjectCount = this.numberFormatter(this.totalProjectCount);

    axios.get(`/sample-project.json`).then(response => {
      response = response.data
      response.forEach(elem => {
        if (elem.slug === this.urlSlugGet()) {
          elem.projectIndex = this.numberFormatter(elem.projectIndex)
          this.cardOutput = elem  
        }
        this.isLoaded = true
      });
    })
  },
};
</script>
