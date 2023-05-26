<script setup>
  import Heading from "@/components/Heading.vue"
  import HeadingWithCopy from "@/components/HeadingWithCopy.vue";
  import TileContainer from "@/components/TileContainer.vue";
  import ContactContainer from "../components/ContactContainer.vue";
  import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <main>
    <div class="wrapper">
      <Heading projectName="" heading="Let's see what I can do next." subHeading="Let's work together"/>
      <HeadingWithCopy class="tracking-in-expand" heading="Summary" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <ContactContainer  class="tracking-in-expand"/>
      <ContactForm  class="tracking-in-expand"/>
      <TileContainer heading="More Cool Things." :cardCount="extraCardTemp"  class="tracking-in-expand"/>
    </div>
  </main>
</template>

<script>
export default {
  name: "contact-page",
  components: { Heading, TileContainer, HeadingWithCopy, ContactForm, ContactContainer },
  data() {
      return {
        extraCardTemp:3
      }
    }  
  }
</script>