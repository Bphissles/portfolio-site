<script setup>
  import Heading from "@/components/Heading.vue"
  import HeadingWithCopy from "@/components/HeadingWithCopy.vue";
  import TileContainer from "@/components/TileContainer.vue";
  import Comment from "../components/Comment.vue";
  import WorkExperience from "../components/WorkExperience.vue";
</script>

<template>
  <main>
    <div class="wrapper">
      <Heading projectName="" heading="Yo, my name is Benjamin Hislop." subHeading="I'm a good human"/>
      <HeadingWithCopy heading="Summary" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />

      <section class="work">
        <p class="bold">Work Experience</p>
        <template v-for="(jobs, index) in workExperience"  :key="index">
          <WorkExperience :data="jobs" />
        </template>
      </section>
      
      <Comment class="green" comment="I also worked in a gold mine, and bartended for a long time"/>

      <HeadingWithCopy heading="Thing's I'm Good At" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <HeadingWithCopy heading="Fun facts" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <TileContainer heading="More Cool Things." :cardCount="extraCardTemp" />
    </div>
  </main>
</template>

<script>
export default {
  name: "about-page",
  components: { Heading, TileContainer, HeadingWithCopy, WorkExperience, Comment },
  data() {
      return {
        extraCardTemp:3,
        workExperience: [
          {
            company: "Frontend Developer",
            position: "The JRT Agency",
            time: "DEC 2018 - present",
            responsibilities: [
              "Lead international team in development of Vue.js site that generated a 143% increase in sales after launch.",
              "Migrated client and internal sites from Laravel to dotCMS, reducing annual developer hours by 85% per site.",
              "Built 4 cost of ownership/comparison calculators in Ionic, Vue, and vanilla JS.",
              "Updated and maintain 6 client sites to meet WCAG 2.1 web accessibility standards.",
              "Built, and maintained 3 websites using dotCMS.",
              "Work with Project Manager on automating site audit processes with bugherd, reducing client, and user bug reporting.",
              "Evaluated and mentored jr. developers, increasing productivity.",
              "Trained clients, and product owners on custom dotCMS, ModX, CrafterCMS, and Wordpress sites.",
              "Developed workflows to integrate designers, and product owners to confirm requirements, UX goals, and to determine what was in scope for the project.",
              "Upgraded sites to meet efficiency and speed standards. ",
              "Created API endpoints for frontend consumption.",
            ]
          },
          {
            company: "Support Services Specialist",
            position: "Kelly Services",
            time: "OCT 2017 - DEC 2018",
            responsibilities: [
              "Make final determination on candidate eligibility based on client requirements.",
              "Developed work-flows to ensure production team compliance with client deadlines.",
              "Work alongside UiPath and Blue Prism Robotic Process Automation systems, to increase efficiency, and reduce TAT on orders.",
              "Created reports to monitor, and confirm team efficiency.",
              "Supervised, and supported initiation, adjudication, and expediting teams during high volume seasons.",
              "Worked with Kelly legal, and drug teams to modify company hiring policies.",
            ]
          }
        ]
      }
    }  
  }
</script>

<style lang="scss" scoped>
.green {
  margin-bottom: 48px;
}
.work {
  margin-bottom: 48px;
}
</style>