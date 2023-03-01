<script setup>
  import Heading from "@/components/Heading.vue"
  import HeadingWithCopy from "@/components/HeadingWithCopy.vue";
  import TileContainer from "@/components/TileContainer.vue";
</script>

<template>
  <main>
    <div class="wrapper">
      <Heading projectName="" heading="Yo, my name is Benjamin Hislop." subHeading="Let's be friends"/>
      <HeadingWithCopy heading="Summary" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />

      <!-- contact container -->

      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button>Send</button>
        </p>
      </form>

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