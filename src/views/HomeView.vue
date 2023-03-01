<script setup>
  import Heading from "@/components/Heading.vue"
  import ProjectPreviewCard from "@/components/ProjectPreviewCard.vue"
  import TileContainer from "@/components/TileContainer.vue";
</script>

<template>
  <main>
    <div class="wrapper">
      <!-- <ul>
        <li class="blue"><p style="margin-bottom: 0">animation treatment</p></li>
        <li class="blue"><p style="margin-bottom: 0">menu clipping when using touch screen</p></li>
        <li class="blue"><p style="margin-bottom: 0">setup active states on all links</p></li>
        <li class="blue"><p style="margin-bottom: 0">make sure all links are setup</p></li>
        <li class="blue"><p style="margin-bottom: 0">build preview page</p></li>
        <li class="blue"><p style="margin-bottom: 0">build resume page</p></li>
        <li class="blue"><p style="margin-bottom: 0">build resume components</p></li>
        <li class="blue"><p style="margin-bottom: 0">build contact page</p></li>
        <li class="blue"><p style="margin-bottom: 0">more .......</p></li>
      </ul> -->
      <Heading projectName="" heading="Yo, my name is Benjamin Hislop." subHeading="I code cool things."/>
      <ProjectPreviewCard :totalProjectCount="totalProjectCount" :cardData="tempObject" />
      <ProjectPreviewCard :totalProjectCount="totalProjectCount" :cardData="tempObject2" />
      <ProjectPreviewCard :totalProjectCount="totalProjectCount" :cardData="tempObject3" />
      <TileContainer heading="More Cool Things." :cardCount="extraCardTemp" />
    </div>
  </main>
</template>

<script>
export default {
  components: { Heading, ProjectPreviewCard, TileContainer },
  data() {
    return {
      extraCardTemp: 6,
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
      tempObject2: {
        projectIndex: 2,
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
      tempObject3: {
        projectIndex: 3,
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
    this.tempObject2.projectIndex = this.numberFormatter(this.tempObject2.projectIndex);
    this.tempObject3.projectIndex = this.numberFormatter(this.tempObject3.projectIndex);
  },
};
</script>
