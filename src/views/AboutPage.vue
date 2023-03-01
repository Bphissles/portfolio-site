<script setup>
  import Heading from "@/components/Heading.vue"
  import HeadingWithCopy from "@/components/HeadingWithCopy.vue";
  import TileContainer from "@/components/TileContainer.vue";
</script>

<template>
  <main>
    <div class="wrapper">
      <Heading projectName="" heading="Yo, my name is Benjamin Hislop." subHeading="I'm a good human"/>
      <HeadingWithCopy heading="Summary" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />

      <h1 class="blue heading-01">resume body todo</h1>

      <HeadingWithCopy heading="Thing's I'm Good At" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <HeadingWithCopy heading="Fun facts" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <TileContainer heading="More Cool Things." :cardCount="extraCardTemp" />
    </div>
  </main>
</template>

<script>
  export default {
  components: { Heading, TileContainer, HeadingWithCopy },
  data() {
      return {
        extraCardTemp:3
      }
    }  
  }
</script>