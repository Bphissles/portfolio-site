<script setup></script>
<template>
  <h1 class="heading-02">Calculator</h1>
  <img src="https://placehold.co/950x500.webp?text=Calculator+TODO" alt="" style="width: 100%;">
  <h2 class="heading-03 light">Planning</h2>
  <h2 class="heading-03 light">Pseudo Code</h2>
  <div class="code-snippet-container">
    <div class="heading-wrap">
      <p>snippet</p>
    </div>
    <div class="code-snippet">
      <pre>
        [
          {
            "projectIndex": 1,
            "title": "Dodge Garage",
            "subHead": "Website Optimizations",
            "slug": "dodge-garage",
            "summary": "Integrating Sanity.io for DGs events involved defining and building structured content, migrating old data, and defining new workflows so that account managers can take ownership of the process",
            "comment": "Taking work off of the development teams' shoulders",
            "projectDetails": {
              "client": "Dodge",
              "url": "https://www.dodgegarage.com/",
              "site": "www.dodgegarage.com",
              "role": "CMS Architect,<br>Front End Developer,<br>Accessibility Specialist",
              "date": "2019 to present",
              "software": "Angular, Sanity, Wordpress, PowerMapper",
              "mainImage": "/images/dodge/dodge-landing.png",
              "altText": "some kind of description"
            }
          }
        ]
      </pre>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/theme';
.code-snippet-container {
  background: black;
  .heading-wrap {
    padding: .125rem 1rem;
    background-color: $neutral-400;
    p {
      color: $accent-green;
      margin-bottom: 0;
    }
  }

  .code-snippet {
    overflow-x: scroll;
  }
}
</style>