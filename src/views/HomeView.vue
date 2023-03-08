<script setup>
  import Heading from "@/components/Heading.vue"
  import ProjectPreviewCard from "@/components/ProjectPreviewCard.vue"
  import TileContainer from "@/components/TileContainer.vue";
</script>

<template>
  <main>
    <div class="wrapper">
      <!-- <h4 class="heading-03">Site Todo</h4>
      <ul>
        <li class="blue"><p style="margin-bottom: 0">animation treatment</p></li>
        <li class="blue"><p style="margin-bottom: 0">menu clipping when using touch screen</p></li>
        <li class="blue"><p style="margin-bottom: 0">setup active states on all links</p></li>
        <li class="blue"><p style="margin-bottom: 0">make sure all links are setup</p></li>
        <li class="blue"><p style="margin-bottom: 0">build preview page</p></li>
        <li class="blue"><p style="margin-bottom: 0">finish social links</p></li>
        <li class="blue"><p style="margin-bottom: 0">form validation</p></li>
        <li class="blue"><p style="margin-bottom: 0">more .......</p></li>
      </ul>

      <h4 class="heading-03">Content Plans</h4>
      <ul>
        <li class="green"><p style="margin-bottom: 0;">Dad Website</p></li>
        <li class="green"><p style="margin-bottom: 0;">Loretta Website</p></li>
        <li class="green"><p style="margin-bottom: 0;">CG migrate</p></li>
        <li class="green"><p style="margin-bottom: 0;">Dealer Site JSP component integration</p></li>
      </ul> -->
      <Heading projectName="" heading="Yo, my name is Benjamin Hislop." subHeading="I code cool things."/>

      <template v-if="isLoaded">
        <ProjectPreviewCard :totalProjectCount="totalProjectCount" :cardData="cardOutput[0]" />
        <ProjectPreviewCard :totalProjectCount="totalProjectCount" :cardData="cardOutput[1]" />
        <ProjectPreviewCard :totalProjectCount="totalProjectCount" :cardData="cardOutput[2]" />
      </template>
      <TileContainer heading="More Cool Things." :cardCount="extraCardTemp" />
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: "home-view",
  components: { Heading, ProjectPreviewCard, TileContainer },
  data() {
    return {
      isLoaded: false,
      extraCardTemp: 6,
      totalProjectCount: 9,
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
    
  },
};
</script>
