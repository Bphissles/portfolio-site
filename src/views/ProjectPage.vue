<script setup>
  import Heading from "@/components/Heading.vue"
  import ProjectIntroCard from "@/components/ProjectIntroCard.vue"
  import TileContainer from "@/components/TileContainer.vue"
</script>

<template>
  <main>
    <div class="wrapper">
      <Heading :projectName="tempObject.projectDetails.client" :heading="tempObject.title" subHeading="Website Redesign"/>
      <ProjectIntroCard :totalProjectCount="totalProjectCount" :cardData="tempObject" />
      <TileContainer heading="More Cool Things." :cardCount="extraCardTemp"/>
    </div>
  </main>
</template>

<script>

export default {
  name: "project-page",
  components: { Heading, ProjectIntroCard, TileContainer },
  data() {
    return {
      extraCardTemp: 3,
      totalProjectCount: 9,
      tempObject: {
        projectIndex: 1,
        title: "Mopar Dealer Site",
        summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        comment: "something witty",
        projectDetails: {
          client: "Mopar",
          role: "Front End Developer",
          date: "2019 to present",
          software: "Vue.js, jQuery, dotCMS, Angular",
          image: "https://placekitten.com/555/345",
          altText: "some kind of description",
        },
      },
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
    this.tempObject.projectIndex = this.numberFormatter(this.tempObject.projectIndex);
  },
};
</script>
