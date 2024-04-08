<template>
  <div class="horizontal-display-container">
      <a :href="data.link" target="_blank" class="heading-03 underline"  v-for="data in sampleData"><i :class="data.icon"></i> {{ data.title }}</a>
  </div>
</template>

<script>
export default {
  name: "contact-container",
  data() {
    return {
      sampleData: [
        // {
        //   icon: 'fa-brands fa-linkedin',
        //   title: 'LinkedIn',
        //   link: 'https://www.linkedin.com/in/benjaminhislop/'
        // },
        {
          icon: 'fa-brands fa-github',
          title: 'Github',
          link: 'https://github.com/Bphissles?tab=repositories'
        }
        // {
        //   icon: 'far fa-hand-spock fa-spin',
        //   title: 'bold.pro',
        //   link: 'https://bold.pro/my/benjamin-hislop'
        // }
      ]
    }
  }
}
</script>

<style scoped>
.horizontal-display-container {
  display: flex;
  gap: 15px;
  margin-bottom: 28px;
}
</style>
