<script setup>
  import Heading from "@/components/Heading.vue"
  import ProjectPreviewCard from "@/components/ProjectPreviewCard.vue"
  import HeadingWithCopy from "@/components/HeadingWithCopy.vue"
  import ContactContainer from "@/components/ContactContainer.vue"
  import ContactForm from "@/components/ContactForm.vue"
</script>

<template>
  <main>
    <div class="wrapper" v-if="isLoaded">
      <Heading :projectName="cardOutput.projectDetails.client" :heading="cardOutput.title" :subHeading="cardOutput.subHead"/>
      <ProjectPreviewCard class="tracking-in-expand" :preview="false" :totalProjectCount="totalProjectCount" :cardData="cardOutput" />
      <HeadingWithCopy class="tracking-in-expand" heading="Summary" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <ContactContainer  class="tracking-in-expand"/>   
      <ContactForm  class="tracking-in-expand"/>
    </div>
    <!-- <div v-else class="tracking-in-expand">
      <h1 class="heading-01">
        <span class="orange">404</span><br>
        <span class="green">404</span><br>
        <span class="blue">404</span><br>
        <span class="red">404</span>
      </h1>
      <span class="heading-02 red bold">YOU SHOULDN'T BE HERE GO <RouterLink to="/">HOME</RouterLink></span>
    </div>  -->
  </main>
</template>

<script>
import axios from "axios"

export default {
  name: "project-page",
  components: { Heading, ProjectPreviewCard, HeadingWithCopy, ContactForm, ContactContainer },

  data() {
    return {
      extraCardTemp: 3,
      totalProjectCount: 3,
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
          this.isLoaded = true
        }
      });
    })
  },
};
</script>
